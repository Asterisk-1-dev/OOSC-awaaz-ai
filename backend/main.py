import os
from google import genai
from google.genai import types
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import List, Optional
from dotenv import load_dotenv
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

# Load local environment variables
load_dotenv()

# Initialize API
app = FastAPI(title="Rights Navigator API", version="1.0.0")

# Favicon
@app.get("/favicon.ico", include_in_schema=False)
async def favicon():
    return FileResponse("frontend/static/awaaz.png")

# Direction
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
FRONTEND_DIR = os.path.abspath(os.path.join(BASE_DIR, "../frontend"))

app.mount("/static", StaticFiles(directory=os.path.join(FRONTEND_DIR, "static")), name="static")

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
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))


# 1. REQUEST SCHEMA (Frontend Input)
class CitizenQuery(BaseModel):
    issue_description: str
    state: str
    district: str
    preferred_language: str = "English"

# 2. RESPONSE SCHEMAS (AI Output)
class AdviceSection(BaseModel):
    situation_analysis: str = Field(description="Brief explanation of the legal position.")
    applicable_rights: List[str] = Field(description="Specific civic/legal rights that apply.")
    recommended_strategy: str = Field(description="High-level strategy (e.g., File RTI, Submit Grievance).")

class AuthorityContact(BaseModel):
    phone_number: str
    email: Optional[str]
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

# 3. API ENDPOINTS
@app.get("/health")
def health_check():
    return {"status": "Rights Navigator Backend is live!"}

@app.post("/api/navigate", response_model=RightsNavigatorResponse)
async def navigate_rights(query: CitizenQuery):
    try:
        system_instruction = """
        You are an expert civic rights navigator in India. Your goal is to translate complex bureaucratic and legal jargon into clear, plain-language, actionable steps for citizens. 

        Your output must strictly follow a two-part structure:
        SECTION 1: ADVICE. Briefly analyze the citizen's situation, identify their specific civic or legal rights, and recommend a clear strategy.
        SECTION 2: IMPLEMENTATION. Provide the exact execution details. Include the official portal name, the exact URL, the authority's contact details, click-by-click instructions, and a ready-to-use text draft for them to submit.
        """
        
        prompt = f"""
        Citizen's Situation: {query.issue_description}
        State: {query.state}
        District: {query.district}
        
        Analyze this issue and provide the specific local authority relevant to this exact district and state. Do not provide generic national links unless the issue is strictly a Central Government matter.
        
        CRITICAL INSTRUCTIONS:
        1. TRANSLATION: Translate all your advice, instructions, and draft text into {query.preferred_language}. The JSON keys must remain in English, but all string values must be localized.
        2. CONTACT INFO: Provide the official phone number, email, and exact working hours for the target authority. If exact working hours are unknown, default to standard government hours (Mon-Fri, 10:00 AM - 5:00 PM).
        3. DRAFTING RULES: If drafting an RTI application, never ask open-ended questions like "Why was this delayed?" Instead, ask for specific records.
        4. FALLBACK PROTOCOL: If you cannot determine the exact local department, you MUST do the following:
           - For RTIs: Direct the user to the District Magistrate/Collector's office for {query.district}. In the draft text, explicitly add a request to transfer the application to the relevant Public Authority within 5 days under Section 6(3) of the RTI Act, 2005.
           - For Grievances: Direct the user to the Centralised Public Grievance Redress and Monitoring System (CPGRAMS at pgportal.gov.in) or the State's CM Helpline.
        """
        
        # Call the Gemini API using the modern client syntax with structured JSON output configuration
        response = client.models.generate_content(
            model="models/gemini-3.5-flash",
            contents=prompt,
            config=types.GenerateContentConfig(
                system_instruction=system_instruction,
                response_mime_type="application/json",
                response_schema=RightsNavigatorResponse,
            ),
        )
        
        return RightsNavigatorResponse.model_validate_json(response.text)

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"AI Engine Error: {str(e)}")