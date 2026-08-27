# 🇮🇳 Awaaz AI - National RTI & Civic Rights Navigator

> **Institutional guidance system for Indian citizens.** Translate everyday civic grievances into actionable constitutional rights, grievance redressal filings, and statutory **Section 6(1) RTI Applications & Section 19(1) First Appeals**.

[![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![Google Gemini API](https://img.shields.io/badge/Google%20Gemini-8E75B2?style=flat&logo=google&logoColor=white)](https://ai.google.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🏛️ What It Does

Legal information and administrative processes in India are frequently locked behind dense statutory jargon, scattered government portals, or expensive legal consultations.

**Awaaz AI** acts as an intelligent, accessible civic bridge. Citizens can describe their issue or information request in plain language (via text or voice dictation in 8 Indian languages). Powered by Google Gemini, the platform structures:
1. **Statutory Position Analysis & Constitutional Rights** (*Article 19(1)(a), Article 21, Consumer Protection Act, 2019, CrPC/BNSS*).
2. **Official Public Authority, Portal & Helpline Mapping** across all 28 States & UTs.
3. **Formal Application Drafts:** Ready-to-file **Section 6(1) RTI Applications** and **Section 19(1) First Appeal Memorandums**.
4. **30-Day Statutory Calendar & Appeal Alerts:** Google Calendar sync and `.ics` download to track the mandatory 30-day PIO response clock.

---

## ✨ Key Features

* **🌐 Full Multilingual Voice & Text Engine:**
  * Native support for **English, हिन्दी (Hindi), मराठी (Marathi), বাংলা (Bengali), தமிழ் (Tamil), తెలుగు (Telugu), ગુજરાતી (Gujarati), and ಕನ್ನಡ (Kannada)**.
  * Synchronized Web Speech voice recognition and Text-to-Speech (`SpeechSynthesis`) in regional locales.
* **📜 Formal RTI & First Appeal Drafting Engine:**
  * Generates formatted legal drafts adhering to official government letterheads.
  * **1-Click Appeal Switcher:** Instantly convert queries into a **Section 19(1) First Appeal Memo** citing *Section 7(2) Deemed Refusal* if the PIO fails to reply within 30 days.
* **📅 Statutory 30-Day Calendar & Alert Exporter:**
  * Computes exact dates for **Filing Date (`T+0`)**, **30-Day PIO Deadline (`Sec 7(1)`)**, **First Appeal Window (`Sec 19(1)`)**, and **Second Appeal Window (`Sec 19(3)`)**.
  * 1-click **Add to Google Calendar** and **Download .ics Reminder** files.
* **🛡️ Pre-Filing Compliance Self-Audit:**
  * Pre-submission checklist verifying adherence to Section 8 exemption rules, specific certified record requests, and Section 6(3) 5-day transfer clauses.
* **📬 Postal Dispatch & Speed Post (RPAD) Guide:**
  * Step-by-step instructions for purchasing and filling a ₹10 Indian Postal Order (IPO), addressing envelopes, and tracking delivery on `indiapost.gov.in`.
* **💬 Interactive Follow-Up Q&A:**
  * Context-aware conversational clarification module to ask follow-up questions (*e.g., "What documents should I attach?", "How do I calculate court fee stamps?"*).
* **🖨️ A4 Print & Export Tools:**
  * **1-Click Copy**, **Formatted PDF Generation (`jsPDF`)**, **WhatsApp Sharing**, and **Print (A4)** optimized with print-specific stylesheets.
* **🔒 100% Client-Side Privacy Guarantee:**
  * Consultation history and personal drafts are stored strictly in the user's browser `localStorage` and never logged or persisted on remote databases.

---

## 🛠️ Tech Stack

* **Backend:** Python 3.10+, FastAPI, Uvicorn, Google GenAI SDK (`google-genai`), Pydantic
* **Frontend:** Modular Semantic HTML5, CSS3 (Civic Design System with Dark/Light modes & Accessibility Font Scaling), Vanilla JavaScript ES6+
* **Export & Integrations:** jsPDF, Web Speech Recognition API, SpeechSynthesis API, iCalendar RFC 5545 (`.ics`)
* **Deployment:** Render / Cloud Run / Linux VPS

---

## 📂 Project Structure

```text
OOSC-awaaz-ai/
│
├── backend/
│   ├── main.py              # FastAPI application, IP rate limiter, Gemini API integration & fallback cascade
│   └── requirements.txt     # Python dependencies (fastapi, uvicorn, google-genai, etc.)
│
├── frontend/
│   ├── index.html           # Institutional civic interface, accessibility toolbar, & progress tracker
│   └── static/
│       ├── style.css        # Civic design system, print styles (@media print), dark/light theme tokens
│       ├── script.js        # Multilingual voice sync, RTI statutory calendar, appeal generator & export logic
│       └── awaaz.png        # Official portal emblem and seal
│
├── .gitignore               # Clean git configuration (ignoring .env, __pycache__, venvs, etc.)
└── README.md
```

---

## 🚀 Setup & Local Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Asterisk-1-dev/OOSC-awaaz-ai.git
cd OOSC-awaaz-ai
```

### 2. Configure Environment Variables

Create a `.env` file inside the `backend/` directory or export your Gemini API key:

```bash
export GEMINI_API_KEY="your-gemini-api-key-here"
```

### 3. Run the Backend Server

Navigate to the `backend/` directory, install dependencies, and launch FastAPI:

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

The application will be accessible locally at `http://127.0.0.1:8000`.

---

## 🌐 Deployment (Render / Cloud Services)

This application is pre-configured for seamless deployment on **Render** as a Web Service:

* **Environment:** Python
* **Root Directory:** `backend`
* **Build Command:** `pip install -r requirements.txt`
* **Start Command:** `uvicorn main:app --host 0.0.0.0 --port $PORT`
* **Environment Variables:** `GEMINI_API_KEY`

---

## ⚖️ Legal & Statutory Disclaimer

*Awaaz AI is an automated civic guidance platform intended for educational, transparency, and administrative navigation purposes. It does not constitute formal attorney-client representation. For complex litigation, citizens are encouraged to consult certified advocates or their respective District Legal Services Authority (DLSA / NALSA Helpline: 15100).*

---

## 📄 License

This project is licensed under the **MIT License**.