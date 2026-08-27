import os
import time
from collections import defaultdict
from google import genai
from google.genai import types
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import List, Optional
from dotenv import load_dotenv
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

# Load local environment variables
load_dotenv()

# Initialize API
app = FastAPI(title="Awaaz AI - Legal Rights Navigator API", version="2.0.0")

# Direction
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
FRONTEND_DIR = os.path.abspath(os.path.join(BASE_DIR, "../frontend"))

app.mount("/static", StaticFiles(directory=os.path.join(FRONTEND_DIR, "static")), name="static")

# Rate Limiting (In-Memory IP Throttling)
RATE_LIMIT_WINDOW = 60  # seconds
MAX_REQUESTS_PER_WINDOW = 20
ip_request_history = defaultdict(list)

def check_rate_limit(client_ip: str):
    now = time.time()
    # Clean timestamps older than window
    timestamps = [t for t in ip_request_history[client_ip] if now - t < RATE_LIMIT_WINDOW]
    if len(timestamps) >= MAX_REQUESTS_PER_WINDOW:
        raise HTTPException(
            status_code=429,
            detail="Rate limit exceeded. Please wait a moment before sending another query."
        )
    timestamps.append(now)
    ip_request_history[client_ip] = timestamps


# Favicon
@app.get("/favicon.ico", include_in_schema=False)
async def favicon():
    file_path = os.path.join(FRONTEND_DIR, "static", "awaaz.png")
    if os.path.exists(file_path):
        return FileResponse(file_path)
    raise HTTPException(status_code=404, detail="Favicon not found")


@app.get("/")
def read_index():
    return FileResponse(os.path.join(FRONTEND_DIR, "index.html"))


# Enable CORS for frontend integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize the new Google GenAI Client
api_key = os.getenv("GEMINI_API_KEY")
client = genai.Client(api_key=api_key) if api_key else None

MODELS_TO_TRY = [
    "models/gemini-2.5-flash",
    "models/gemini-2.0-flash",
    "models/gemini-1.5-flash",
    "models/gemini-3.5-flash"
]


# 1. REQUEST SCHEMAS
class CitizenQuery(BaseModel):
    issue_description: str
    state: str
    district: str
    preferred_language: str = "English"

class FollowUpQuery(BaseModel):
    original_issue: str
    state: str
    district: str
    advice_summary: str
    user_question: str
    preferred_language: str = "English"


# 2. RESPONSE SCHEMAS
class AdviceSection(BaseModel):
    situation_analysis: str = Field(description="Brief explanation of the legal position.")
    applicable_rights: List[str] = Field(description="Specific civic/legal rights that apply.")
    recommended_strategy: str = Field(description="High-level strategy (e.g., File RTI, Submit Grievance).")

class AuthorityContact(BaseModel):
    phone_number: str
    email: Optional[str] = None
    availability_days: str
    availability_time: str

class ActionStep(BaseModel):
    step_number: int
    instruction: str

class ImplementationSection(BaseModel):
    target_authority_or_portal: str
    portal_url: str
    contact_info: AuthorityContact
    step_by_step_execution: List[ActionStep]
    draft_text_to_submit: str

class RightsNavigatorResponse(BaseModel):
    section_1_advice: AdviceSection
    section_2_implementation: ImplementationSection

class FollowUpResponse(BaseModel):
    answer: str = Field(description="Clear, concise, and empathetic legal/civic guidance answering the user's specific follow-up question.")
    actionable_tip: Optional[str] = Field(description="One immediate practical tip or caution.")


# 3. API ENDPOINTS
@app.get("/health")
def health_check():
    return {
        "status": "Awaaz AI Rights Navigator Backend is live!",
        "api_key_configured": bool(api_key)
    }

@app.post("/api/navigate", response_model=RightsNavigatorResponse)
async def navigate_rights(query: CitizenQuery, request: Request):
    client_ip = request.client.host if request.client else "127.0.0.1"
    check_rate_limit(client_ip)

    if not client:
        raise HTTPException(
            status_code=500,
            detail="GEMINI_API_KEY is not configured on the server. Please set the environment variable."
        )

    system_instruction = """
    You are an expert civic rights navigator in India. Your goal is to translate complex bureaucratic and legal jargon into clear, plain-language, actionable steps for everyday citizens. 

    Your output must strictly follow a two-part structure:
    SECTION 1: ADVICE. Briefly analyze the citizen's situation, identify their specific civic or constitutional rights (e.g., Article 21, Consumer Protection Act 2019, RTI Act 2005, BNSS/CrPC), and recommend a clear strategy. Include statutory timelines (e.g., 30 days standard response, 48 hours for life & liberty under RTI) and fee structures where applicable.
    SECTION 2: IMPLEMENTATION. Provide the exact execution details. Include the official portal name, the exact official gov.in URL or helpline, the authority's contact details, step-by-step instructions, and a complete ready-to-use formal letter/application draft for them to submit.
    """
    
    prompt = f"""
    Citizen's Situation: {query.issue_description}
    State: {query.state}
    District: {query.district}
    
    Analyze this issue and provide the specific local authority relevant to this exact district and state. Do not provide generic national links unless the issue is strictly a Central Government matter.
    
    CRITICAL INSTRUCTIONS:
    1. TRANSLATION: Translate all your advice, instructions, and draft text into {query.preferred_language}. The JSON keys must remain in English, but all string values must be localized naturally in {query.preferred_language}.
    2. CONTACT INFO: Provide the official phone number, email, and working hours for the target authority. If exact working hours are unknown, default to standard government hours (Mon-Fri, 10:00 AM - 5:00 PM).
    3. DRAFTING RULES: If drafting an RTI application or Grievance, format it cleanly with proper To, Subject, Body, and Contact placeholders. Never ask open-ended questions like "Why was this delayed?" Instead, ask for specific government records, inspection of works, or certified copies.
    4. FALLBACK PROTOCOL: If you cannot determine the exact local department:
       - For RTIs: Direct the user to the District Magistrate / Collector's office for {query.district}. In the draft text, explicitly add a request to transfer the application to the relevant Public Authority within 5 days under Section 6(3) of the RTI Act, 2005.
       - For Grievances: Direct the user to the Centralised Public Grievance Redress and Monitoring System (CPGRAMS at pgportal.gov.in) or the State's CM Helpline.
    """

    last_error = None
    for model_name in MODELS_TO_TRY:
        try:
            response = client.models.generate_content(
                model=model_name,
                contents=prompt,
                config=types.GenerateContentConfig(
                    system_instruction=system_instruction,
                    response_mime_type="application/json",
                    response_schema=RightsNavigatorResponse,
                ),
            )
            return RightsNavigatorResponse.model_validate_json(response.text)
        except Exception as e:
            last_error = e
            continue

    raise HTTPException(status_code=500, detail=f"AI Engine Error: {str(last_error)}")


@app.post("/api/followup", response_model=FollowUpResponse)
async def follow_up(query: FollowUpQuery, request: Request):
    client_ip = request.client.host if request.client else "127.0.0.1"
    check_rate_limit(client_ip)

    if not client:
        raise HTTPException(status_code=500, detail="GEMINI_API_KEY is not configured.")

    system_instruction = f"""
    You are an expert civic rights guide in India. The citizen is asking a follow-up clarification question regarding their ongoing issue.
    Answer directly, concisely, and practically in {query.preferred_language}. Ensure your answer is empathetic, legally grounded under Indian law, and easily actionable.
    """

    prompt = f"""
    Location: {query.district}, {query.state}
    Original Issue: {query.original_issue}
    Previous Advice Given: {query.advice_summary}
    User's Follow-up Question: {query.user_question}

    Provide a helpful, precise answer to the citizen's question in {query.preferred_language}.
    """

    last_error = None
    for model_name in MODELS_TO_TRY:
        try:
            response = client.models.generate_content(
                model=model_name,
                contents=prompt,
                config=types.GenerateContentConfig(
                    system_instruction=system_instruction,
                    response_mime_type="application/json",
                    response_schema=FollowUpResponse,
                ),
            )
            return FollowUpResponse.model_validate_json(response.text)
        except Exception as e:
            last_error = e
            continue

    raise HTTPException(status_code=500, detail=f"AI Clarification Error: {str(last_error)}")