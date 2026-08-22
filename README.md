# Awaaz AI - Legal Rights Navigator

Awaaz AI is a practical web application designed to help everyday citizens understand their legal rights, navigate complex legal situations, and access guidance without hitting an immediate paywall or getting bogged down in dense legal jargon.

---

## What It Does

Legal information is often buried in complex statutes or locked behind expensive consultations. Awaaz AI acts as an interactive bridge. Users can describe their situation or query in plain language, and the application leverages generative AI to analyze the query, break down applicable legal context, and outline practical steps or rights in a clear, digestible format.

## Why We Built It

Navigating the legal system is intimidating. Most people don't know their fundamental rights during police interactions, consumer disputes, tenant disagreements, or workplace issues until it's too late. We wanted to build a straightforward tool that gives people immediate, reliable initial clarity and points them in the right direction before they invest time and money into formal legal counsel.

## Key Features

* **Plain Language Legal Querying:** Ask questions in everyday language rather than legal terminology.
* **Structured Responses:** Breaks down complex answers into digestible rights, responsibilities, and actionable next steps.
* **Fast and Minimal Interface:** Clean frontend built for quick interaction without unnecessary distractions.
* **Gemini-Powered Intelligence:** Uses Google's Gemini API to synthesize and structure contextually accurate responses.

## Tech Stack

* **Backend:** Python, FastAPI, Uvicorn, Google GenAI SDK (`google-genai`)
* **Frontend:** HTML5, CSS3, JavaScript
* **Hosting / Deployment:** Render

## Project Structure

```text
OOSC-awaaz-ai/
│
├── backend/
│   ├── main.py              # FastAPI server and Gemini integration
│   ├── requirements.txt     # Python dependencies
│   └── ...
│
├── frontend/
│   ├── index.html           # Main user interface
│   └── static/              # Styles, scripts, and assets (including awaaz.png)
│
├── .gitignore
└── README.md

```

## Setup and Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Asterisk-1-dev/OOSC-awaaz-ai.git
cd OOSC-awaaz-ai

```

### 2. Configure Environment Variables

Create an environment variable for your Gemini API key:

```bash
export GEMINI_API_KEY="your-actual-api-key-here"

```

### 3. Run the Backend Locally

Navigate to the backend directory, install dependencies, and start the FastAPI server:

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

```

The application will be running locally at `[http://127.0.0.1:8000](http://127.0.0.1:8000)`.

---

## Deployment

This app is configured for easy deployment on Render as a Web Service using the following specifications:

* **Root Directory:** `backend`
* **Build Command:** `pip install -r requirements.txt`
* **Start Command:** `uvicorn main:app --host 0.0.0.0 --port $PORT`
* **Environment Variables:** `GEMINI_API_KEY`