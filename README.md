# AURA — Permission-Based Personal AI Agent

**An intelligent, voice-enabled, context-aware personal AI assistant designed to help users manage desktop activities, understand digital workflows, organize tasks, and automate actions with explicit user permission.**

AURA is an AI-powered personal assistant project designed to make everyday computer use more intelligent, efficient, and manageable. It aims to understand what users are working on, help them manage information across supported applications, provide contextual recommendations, and assist with communication and routine tasks.

Unlike conventional chatbots that respond only when users ask questions, AURA is intended to become a context-aware digital assistant that can support users throughout their computer-based activities. It will combine artificial intelligence, natural language processing, voice interaction, desktop automation, task management, and authorized application integrations within a unified interface.

AURA's central principle is **user control and permission-based automation**. The assistant must not independently send messages, place calls, modify important files, or perform other consequential actions without the user's explicit authorization.

The project will be developed incrementally, beginning with a full-stack web dashboard and backend foundation before introducing AI capabilities, voice control, desktop awareness, and external application integrations.

> **Project status:** AURA is under development. The current starter implementation provides a React dashboard, a Django REST API, database models for activity notes and action proposals, and a basic approval workflow. Advanced AI, desktop monitoring, voice interaction, phone connectivity, and third-party application integrations are planned features, not completed capabilities.

---

## Table of Contents

1. Project Vision
2. Problem Statement
3. Project Objectives
4. Core Features
5. Planned AI Capabilities
6. Permission-Based Automation
7. Technology Stack
8. System Architecture
9. Project Workflow
10. Database Design
11. API Design
12. Project Directory Structure
13. Installation and Setup
14. Neon PostgreSQL Configuration
15. Running the Application
16. Testing and Verification
17. Security and Privacy
18. AI/ML Evaluation
19. Limitations and Challenges
20. Development Roadmap
21. Expected Outcomes
22. Future Improvements
23. Contribution Guidelines
24. License and Project Status

---

## 1. Project Vision

The vision of AURA is to build a personal AI assistant that can help users interact with their digital environment more naturally.

Users often switch between browsers, development environments, email clients, messaging applications, documents, and other desktop software. Managing these activities manually can be time-consuming and can cause important information or tasks to be forgotten.

AURA aims to reduce this complexity by providing a unified assistant that can understand user instructions, organize relevant information, generate useful suggestions, and prepare actions for the user to review.

The long-term vision includes:

- Natural-language interaction in English and Bangla.
- Voice-based commands for supported features.
- Optional awareness of selected desktop activities.
- Personal task and reminder management.
- Contextual assistance while working.
- AI-generated summaries and response suggestions.
- Integration with supported email and messaging services.
- Controlled desktop automation.
- Explicit approval before consequential actions.
- A centralized dashboard for monitoring and managing the assistant.

AURA is intended to evolve from a useful personal productivity application into a broader, permission-based AI agent platform.

---

## 2. Problem Statement

Modern computer users frequently work across multiple applications and digital environments. Information is distributed among browser tabs, documents, email conversations, messaging applications, and development tools.

This creates several problems:

### 2.1 Information Fragmentation

Users must manually move between applications to locate information, understand conversations, and complete related tasks.

### 2.2 Forgotten Tasks

Important requests, follow-ups, deadlines, and personal responsibilities can be overlooked when they are distributed across different applications.

### 2.3 Repetitive Work

Routine activities such as preparing responses, organizing notes, summarizing information, and opening frequently used resources consume time.

### 2.4 Lack of Contextual Assistance

Traditional assistants generally require users to explain their situation before receiving useful help. They may not have access to the relevant context of a user's current workflow.

### 2.5 Limited Control in Automation

Automation tools can perform useful operations, but poorly designed automation may execute unintended actions or expose sensitive information.

### 2.6 Communication Overload

Users may receive more messages and emails than they can efficiently process. Understanding incoming communications and preparing appropriate replies can become repetitive.

### Proposed Solution

AURA aims to address these problems through a unified AI assistant that can organize selected information, interpret user instructions, provide context-aware suggestions, and support authorized actions.

The system will be designed around three principles:

1. **Context:** Understand relevant information that the user has explicitly made available.
2. **Assistance:** Recommend, prepare, and organize useful next steps.
3. **Control:** Keep the user in control of permissions and consequential actions.

---

## 3. Project Objectives

The main objectives of AURA are:

- Develop a full-stack personal AI assistant using Django REST Framework and React.
- Use Neon PostgreSQL for cloud-based relational data storage.
- Create a centralized dashboard for managing activity notes and action proposals.
- Establish a backend architecture that can support future AI and automation modules.
- Introduce natural-language processing for interpreting user instructions.
- Add optional voice input and spoken responses.
- Develop context-aware task assistance and response suggestions.
- Explore desktop awareness with clear user consent and visible controls.
- Integrate supported external applications through their authorized interfaces.
- Require explicit permission before performing consequential operations.
- Evaluate system reliability, usability, security, and AI performance using measurable criteria.
- Build a documented portfolio project demonstrating full-stack development and responsible AI engineering.

---

## 4. Core Features

AURA's features are divided into currently implemented foundations and planned capabilities.

### 4.1 Centralized Dashboard

The React dashboard provides the initial interface for interacting with AURA.

Planned dashboard capabilities include:

- Displaying backend connection status.
- Managing activity notes.
- Viewing action proposals.
- Reviewing approval status.
- Accessing assistant settings.
- Managing connected integrations.
- Controlling optional monitoring features.
- Reviewing activity and authorization history.

The current dashboard implements the basic connection status, activity-note forms, action proposals, and proposal approval state.

### 4.2 Personal Activity Memory

AURA is intended to help users organize useful information from their work and personal tasks.

Examples include:

- Remembering a task that needs to be completed later.
- Saving important project notes.
- Recording a follow-up request.
- Organizing information supplied by the user.
- Retrieving previously saved notes.

The current implementation supports manually entered activity notes. Automatic extraction from desktop activity or external conversations remains future work.

### 4.3 Context-Aware Assistance

In future versions, AURA will use relevant, authorized context to provide more useful recommendations.

For example, when a user is working on a programming project, the assistant could help explain an error, summarize selected documentation, or suggest the next debugging step.

Contextual assistance must be limited to information the user has authorized AURA to access.

### 4.4 AI-Generated Suggestions

AURA is planned to generate suggestions based on user instructions and available context.

Possible suggestions include:

- Recommended next steps for a task.
- Summaries of selected information.
- Draft responses to messages.
- Explanations of errors or technical concepts.
- Reminders about user-defined tasks.
- Recommendations for organizing a workflow.

AI-generated content will be presented as a suggestion for the user to review, not as guaranteed-correct information.

### 4.5 Action Proposals

AURA is designed to distinguish between suggesting an action and executing it.

A proposal describes an operation that the assistant recommends or prepares. The user can review the proposal and decide whether to authorize it.

The current implementation supports creating proposals and recording their approval state.

**Important:** Recording approval does not execute the proposed action. Actual desktop automation and external actions have not been implemented in the starter package.

### 4.6 Voice Interaction

Voice interaction is a planned core capability.

Future functionality may include:

- Accepting spoken commands.
- Converting speech into text.
- Interpreting user instructions.
- Reading responses aloud.
- Creating tasks through voice.
- Requesting assistance while working.
- Asking for confirmation before consequential actions.

Bangla and English support will be evaluated separately because speech-recognition performance can vary with language, accent, background noise, and code-switching.

Voice access to sensitive functions must follow the same authorization rules as typed commands.

### 4.7 Desktop Awareness

AURA is intended to support optional awareness of selected desktop activity.

Potential capabilities include:

- Understanding user-selected application context.
- Helping interpret visible error messages.
- Summarizing user-selected content.
- Providing contextual suggestions.
- Supporting selected desktop workflows.

Desktop awareness is not currently implemented.

Any future implementation must include a visible monitoring indicator, clear scope controls, an immediate pause or stop mechanism, and safeguards against collecting unnecessary sensitive information.

### 4.8 Email and Messaging Assistance

Future versions may support authorized integrations with compatible services.

Potential functions include:

- Notifying users about supported incoming communications.
- Summarizing selected messages.
- Preparing reply drafts.
- Suggesting responses based on user-provided context.
- Sending a message after the user explicitly authorizes the exact action.

The available functionality will depend on the official APIs, permissions, account types, and policies of each service.

AURA will not assume unrestricted access to personal Gmail, WhatsApp, or Messenger accounts. Integration feasibility must be verified separately for each platform.

### 4.9 Phone Connectivity

Connecting AURA to a phone is a future development goal.

Depending on the available operating-system permissions and supported integrations, this may eventually allow selected notifications, reminders, or assistant functions to be accessed across devices.

Phone connectivity is not included in the current starter implementation.

### 4.10 Task and Reminder Management

AURA may eventually support a dedicated task-management module.

Planned functions include:

- Creating tasks through text or voice.
- Setting deadlines and reminders.
- Tracking task status.
- Identifying overdue tasks.
- Suggesting follow-up actions.
- Providing spoken reminders when enabled.

These capabilities will be developed as separate modules so they can be tested independently.

---

## 5. Planned AI Capabilities

AI functionality will be introduced incrementally rather than treating a single model as responsible for every task.

### 5.1 Natural-Language Understanding

A language-processing component will interpret user instructions and identify the intended operation.

For example:

> "Remind me to finish the project report tomorrow morning."

The intended processing flow is:

1. Recognize the reminder request.
2. Extract the task description.
3. Identify the requested date and time.
4. Ask for clarification if the time is ambiguous.
5. Present the proposed reminder.
6. Save it after any required confirmation.

### 5.2 Speech Recognition

A speech-recognition component may convert spoken Bangla or English into text.

Its performance will be measured using Word Error Rate (WER) on a documented test dataset.

The selected model must be evaluated for language coverage, latency, hardware requirements, privacy, and operating cost.

### 5.3 Intent Classification

An intent-classification component may categorize requests such as:

- Create a task.
- Save a note.
- Summarize selected information.
- Draft a response.
- Request an application integration.
- Propose an automation action.

Classification errors must not bypass the permission system.

### 5.4 Summarization and Response Drafting

A language model may summarize selected content and prepare draft responses.

The user must be able to inspect and edit generated content before it is sent externally.

The system must also account for hallucinations, incorrect assumptions, sensitive information, and prompt injection in untrusted content.

### 5.5 AI Model Selection

The final AI models have not yet been selected.

Model selection will consider:

- Quality of results.
- Bangla and English language support.
- Latency.
- Hardware requirements.
- Availability of local inference.
- API costs and free-tier limitations.
- Privacy and data-handling policies.
- Licensing and commercial-use restrictions.

No AI model accuracy or performance score is claimed at this stage.

---

## 6. Permission-Based Automation

Permission-based automation is a fundamental design requirement of AURA.

The system must not treat an AI-generated suggestion, a voice transcription, or text found on a webpage as automatic authorization to perform an action.

### 6.1 Proposed Action Lifecycle

The intended lifecycle is:

1. **Request:** The user provides an instruction.
2. **Interpretation:** AURA determines the intended operation.
3. **Proposal:** The system prepares a structured proposal.
4. **Review:** The user sees the action and its relevant details.
5. **Authorization:** The user explicitly confirms the consequential action.
6. **Execution:** A future, separately implemented integration executes the authorized operation.
7. **Audit:** The system records the authorization decision and execution result.

The current starter implements only the proposal and approval-state portions of this lifecycle.

### 6.2 Actions Requiring Explicit Confirmation

Examples include:

- Sending an email or message.
- Placing a call.
- Deleting or overwriting a file.
- Submitting a form.
- Publishing content.
- Changing account settings.
- Making an external purchase or transaction.

Confirmation should clearly identify the action and its target. For high-impact operations, approval should be fresh and specific to that operation.

### 6.3 Deny-by-Default Design

If an integration, permission, or execution pathway has not been implemented and authorized, the action must remain unavailable.

The AI model must not be able to bypass backend authorization checks.

### 6.4 Monitoring Controls

Before implementing desktop monitoring, AURA must provide:

- A visible monitoring status.
- Clear controls for enabling or disabling monitoring.
- A pause or emergency stop mechanism.
- Defined boundaries for what information may be collected.
- Appropriate retention and deletion controls.

---

## 7. Technology Stack

The initial architecture uses the following technologies.

| Component | Technology | Purpose |
|---|---|---|
| Programming language | Python 3.11+ | Backend logic and future AI/ML modules |
| Backend framework | Django | Application structure, ORM, administration, and backend services |
| REST API | Django REST Framework | HTTP endpoints and JSON communication |
| Frontend | React | Interactive user interface |
| Frontend tooling | Vite | Development server and frontend build process |
| Frontend language | JavaScript | React application logic |
| Styling | CSS | Dashboard layout and visual design |
| Database | Neon PostgreSQL | Cloud relational database |
| Local database fallback | SQLite | Initial local development without Neon configuration |
| API communication | REST/JSON | Frontend-to-backend communication |
| Version control | Git | Source-code history |
| Repository hosting | GitHub | Project hosting and portfolio presentation |
| Development environment | Visual Studio Code | Code editing and debugging |

### Why Django?

Django is selected because AURA is expected to grow into a multi-module application with authentication, database models, administrative tools, permissions, and several backend services.

Django REST Framework provides a structured way to build APIs for the React frontend.

### Why React?

React supports reusable interface components and a dynamic dashboard. It allows activity notes, action proposals, assistant status, settings, and future controls to be developed as separate UI components.

### Why Neon PostgreSQL?

Neon provides managed PostgreSQL hosting, allowing AURA to use a relational database without maintaining a database server on the development computer.

The project uses the `DATABASE_URL` environment variable to configure the database connection.

For initial local development, SQLite is used when no database URL is configured.

---

## 8. System Architecture

AURA follows a client-server architecture.

### 8.1 High-Level Architecture

```text
                         USER
                          |
                          v
                +--------------------+
                |   React Frontend   |
                |    Vite + CSS      |
                +--------------------+
                          |
                     REST / JSON
                          |
                          v
                +--------------------+
                | Django REST API    |
                | Request Validation |
                +--------------------+
                          |
                          v
                +--------------------+
                | Application Logic  |
                | Notes and Proposals|
                +--------------------+
                          |
                          v
                +--------------------+
                |     Django ORM     |
                +--------------------+
                          |
                          v
                +--------------------+
                | Neon PostgreSQL    |
                | Cloud Database     |
                +--------------------+

       Future modules, not yet implemented:
       AI/ML | Voice | Desktop Awareness | Integrations
                          |
                          v
                +--------------------+
                | Permission Gate    |
                | Explicit Approval  |
                +--------------------+
```

The diagram describes the intended architecture. AI, voice, desktop-awareness, and integration modules are future components rather than active functionality in the current scaffold.

### 8.2 Frontend Layer

The React application is responsible for:

- Displaying the dashboard.
- Collecting user input.
- Showing activity notes.
- Displaying action proposals.
- Presenting proposal status.
- Communicating with the backend API.
- Providing future controls for assistant settings and permissions.

The frontend must not be considered the security boundary. Authorization for consequential actions must be enforced by the backend and the relevant integration.

### 8.3 Backend Layer

Django and Django REST Framework provide:

- API routing.
- Request validation.
- Database access.
- Activity-note management.
- Action-proposal management.
- Proposal status updates.
- Future authentication and authorization.
- Future integration and AI service coordination.

### 8.4 Database Layer

Django ORM manages the application data.

The database configuration supports:

- Neon PostgreSQL when `DATABASE_URL` is configured.
- SQLite for initial local development when `DATABASE_URL` is empty.

### 8.5 Future AI and Automation Layer

Future AI and automation components will be separated from the core API.

This separation will allow individual models and integrations to be tested, replaced, or disabled without redesigning the entire application.

---

## 9. Project Workflow

The intended user workflow is:

1. The user opens the AURA dashboard.
2. The frontend connects to the Django backend.
3. The user enters a note or creates an action proposal.
4. Django validates the request.
5. The application stores the record in the configured database.
6. The frontend displays the result.
7. For an action proposal, the user can record approval.
8. The backend updates the proposal status.
9. No external or desktop action is executed by the current starter.

In future versions, authorized AI modules may help generate proposals. Actual execution will require a separate implementation with backend-enforced permissions and appropriate audit records.

---

## 10. Database Design

The current starter contains two primary models.

### 10.1 ActivityNote

The `ActivityNote` model stores manually entered notes.

| Field | Type | Description |
|---|---|---|
| `id` | Auto-generated primary key | Unique record identifier |
| `title` | Character field | Note title |
| `note` | Text field | Optional note content |
| `created_at` | Date and time | Record creation timestamp |

Example use case: saving a note about a project task or a follow-up.

### 10.2 ActionProposal

The `ActionProposal` model stores proposed actions.

| Field | Type | Description |
|---|---|---|
| `id` | Auto-generated primary key | Unique proposal identifier |
| `title` | Character field | Proposal title |
| `description` | Text field | Optional proposal details |
| `status` | Character field | Current proposal status |
| `created_at` | Date and time | Record creation timestamp |

The starter supports these statuses:

- `pending`
- `approved_not_executed`
- `rejected`

The current approval endpoint changes a pending proposal to `approved_not_executed`. It does not perform the proposed operation.

### 10.3 Future Database Improvements

As the project grows, additional models may be required for:

- User accounts and preferences.
- Tasks and reminders.
- Integration connections.
- Permission records.
- Action execution history.
- AI-generated suggestions.
- Audit events.
- Notification settings.

Before multi-user deployment, records must be associated with appropriate user ownership and protected by authentication and object-level authorization.

---

## 11. API Design

The current backend exposes the following REST endpoints.

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/health/` | Check backend status |
| GET | `/api/activity-notes/` | Retrieve activity notes |
| POST | `/api/activity-notes/` | Create an activity note |
| GET | `/api/proposals/` | Retrieve action proposals |
| POST | `/api/proposals/` | Create an action proposal |
| POST | `/api/proposals/<id>/approve/` | Record approval without executing the action |

### Example: Create an Activity Note

Request:

```json
{
  "title": "Review project documentation",
  "note": "Check the architecture and testing plan."
}
```

Endpoint:

```text
POST /api/activity-notes/
```

### Example: Create an Action Proposal

Request:

```json
{
  "title": "Prepare an email reply",
  "description": "Draft a response for the user to review."
}
```

Endpoint:

```text
POST /api/proposals/
```

Creating a proposal does not send an email or interact with an external account.

### API Security Status

The initial API is intended for local development. Authentication and user-specific access controls are not yet implemented.

Do not expose this starter publicly until authentication, authorization, validation, production settings, and security testing have been added.

---

## 12. Project Directory Structure

The project is organized into separate backend, frontend, documentation, and architecture-diagram directories.

```text
AURA_Project_Package/
│
├── README.md
│
├── backend/
│   ├── manage.py
│   ├── requirements.txt
│   ├── .env.example
│   │
│   ├── config/
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── asgi.py
│   │   └── wsgi.py
│   │
│   └── core/
│       ├── __init__.py
│       ├── admin.py
│       ├── apps.py
│       ├── models.py
│       ├── serializers.py
│       ├── views.py
│       └── urls.py
│
├── frontend/
│   ├── package.json
│   ├── index.html
│   ├── .env.example
│   │
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       └── styles.css
│
├── docs/
│   ├── AURA_Project_Details.docx
│   ├── IMPLEMENTATION_AND_EVALUATION.md
│   └── IMPLEMENTATION_NOTES.md
│
└── diagrams/
    ├── AURA_System_Architecture.png
    └── AURA_System_Architecture.mmd
```

### Directory Responsibilities

- `backend/config/`: Django project settings and URL configuration.
- `backend/core/`: API views, serializers, models, and application routes.
- `frontend/src/`: React components, application entry point, and styling.
- `docs/`: Project specification, implementation notes, and evaluation plan.
- `diagrams/`: Architecture diagram and its Mermaid source.

---

## 13. Installation and Setup

### 13.1 Prerequisites

Install the following software:

- Python 3.11 or newer.
- Node.js LTS and npm.
- Visual Studio Code.
- Git, recommended for version control.
- A Neon account if cloud PostgreSQL is required.

Confirm Python and Node.js are available from Windows Command Prompt:

```bat
py --version
node --version
npm --version
```

The commands below assume that the Command Prompt is opened in the project root directory.

### 13.2 Install Backend Dependencies

```bat
cd backend
py -3.11 -m venv .venv
.venv\Scripts\activate
python -m pip install --upgrade pip
pip install -r requirements.txt
copy .env.example .env
```

If Python 3.11 is not installed, use an installed supported Python version and create the environment with that version.

### 13.3 Run Database Migrations

```bat
python manage.py makemigrations
python manage.py migrate
```

The project includes models for activity notes and action proposals. The initial `makemigrations` command generates the migration files for these models.

### 13.4 Start the Django Backend

```bat
python manage.py runserver
```

The local backend should be available at:

- API base: `http://127.0.0.1:8000/api/`
- Health check: `http://127.0.0.1:8000/api/health/`
- Django administration: `http://127.0.0.1:8000/admin/`

Keep this Command Prompt open while using the frontend.

### 13.5 Start the React Frontend

Open a second Command Prompt in the project root:

```bat
cd frontend
npm install
npm run dev
```

Open the local URL printed by Vite. It is normally:

```text
http://localhost:5173/
```

The frontend communicates with the Django backend at `http://127.0.0.1:8000/api/` by default.

If the backend uses a different address, configure `VITE_API_BASE_URL` in the frontend environment.

---

## 14. Neon PostgreSQL Configuration

Neon provides a managed PostgreSQL database for cloud-based persistence.

### 14.1 Create a Database

1. Create a project in Neon.
2. Create or select the required database.
3. Open the connection details.
4. Copy the PostgreSQL connection string.
5. Keep the connection credentials private.

### 14.2 Configure the Backend

Open:

```text
backend/.env
```

Set the `DATABASE_URL` variable to the connection string provided by Neon.

Example format:

```env
DATABASE_URL=postgresql://USER:PASSWORD@HOST/DBNAME?sslmode=require
```

This is an example format only. Replace it with the actual connection string supplied by Neon.

Do not commit `.env` or share its contents publicly.

### 14.3 Apply Migrations to Neon

After configuring the connection string, run:

```bat
cd backend
.venv\Scripts\activate
python manage.py migrate
```

Django will create the required tables in the configured database.

If `DATABASE_URL` is empty, the starter uses SQLite for local development.

---

## 15. Running and Verifying the Application

After starting both the backend and frontend, perform the following checks.

### Test 1: Backend Health

Open:

```text
http://127.0.0.1:8000/api/health/
```

The endpoint should return a JSON response indicating that the API is running.

### Test 2: Dashboard Connection

Open the React application and confirm that the dashboard displays the backend connection status.

### Test 3: Activity Note Creation

1. Open the Activity Memory section.
2. Enter a title.
3. Optionally enter note content.
4. Submit the form.
5. Verify that the note appears in the activity list.

### Test 4: Action Proposal Creation

1. Open the Action Proposals section.
2. Enter a proposal title.
3. Optionally enter a description.
4. Create the proposal.
5. Verify that its status is `pending`.

### Test 5: Approval State

1. Select Record Approval for a pending proposal.
2. Verify that the status changes to `approved_not_executed`.
3. Confirm that no external message, desktop action, or operating-system operation occurs.

These are verification steps, not a claim that automated tests or performance benchmarks have already been completed.

---

## 16. Security and Privacy

Security and privacy must be considered throughout AURA's development.

### 16.1 Authentication and Authorization

The current starter does not implement authentication or per-user data access control.

Before production deployment, implement:

- User authentication.
- Object-level authorization.
- User-specific database queries.
- Secure session or token management.
- Rate limiting.
- Input validation.
- Appropriate production security settings.

### 16.2 Secret Management

- Store database credentials and API keys in environment variables.
- Never commit `.env` files.
- Never place private API keys in React source code.
- Rotate credentials if they are exposed.
- Use separate credentials and settings for development and production.

### 16.3 Data Minimization

AURA should collect only the information required for a clearly defined function.

Future desktop and messaging features should provide clear information about:

- What data is collected.
- Why the data is required.
- Whether it is sent to an external service.
- How long it is retained.
- How the user can disable collection or delete stored data.

### 16.4 Prompt Injection

External webpages, emails, and messages may contain instructions designed to manipulate an AI system.

AURA must treat such content as untrusted data. It must not allow instructions found in external content to override the user's permissions or backend security rules.

### 16.5 Action Safety

Consequential actions must be authorized by the user through a clearly defined approval process.

The backend must enforce authorization independently of the AI model and frontend interface.

### 16.6 Production Deployment

The current development settings are not production-ready.

Before deployment:

- Disable debug mode.
- Configure allowed hosts.
- Configure HTTPS and secure cookies where applicable.
- Restrict CORS to trusted frontend origins.
- Implement authentication and authorization.
- Review database access and secrets.
- Add logging, monitoring, and security tests.
- Verify data retention and deletion procedures.

---

## 17. AI/ML Evaluation

AURA's AI capabilities must be evaluated using measurable results rather than unsupported claims.

**The current starter does not include an AI/ML model. Therefore, it has no measured AI accuracy, precision, recall, F1 score, or speech-recognition benchmark to report.**

### 17.1 Intent Classification

If an intent classifier is introduced, evaluate it using:

- Accuracy.
- Precision.
- Recall.
- F1 score.
- Confusion matrix.

The evaluation dataset should include representative Bangla and English instructions, ambiguous requests, and requests that should be rejected or clarified.

### 17.2 Speech Recognition

For Bangla and English speech recognition, measure Word Error Rate (WER).

Tests should document:

- Language.
- Accent and speaking style.
- Background noise.
- Recording conditions.
- Sample size.
- Recognition latency.

### 17.3 Suggestion Quality

Evaluate generated suggestions through:

- Human ratings for relevance and usefulness.
- Task completion rate.
- Frequency of irrelevant recommendations.
- Frequency of incorrect or unsafe suggestions.
- User correction rate.

### 17.4 API Reliability

Test:

- Successful and invalid API requests.
- Database persistence.
- Error handling.
- Response latency.
- Concurrent requests.
- Recovery from database connectivity failures.

### 17.5 Permission Safety

Create test cases covering approved, rejected, expired, and missing authorizations.

A key safety objective is **zero unapproved external actions during testing**.

The test suite should also verify that the backend refuses actions when the required permission is absent.

### 17.6 Reporting Results

Only publish measured results after running the relevant experiments. Document the test environment, dataset, methodology, and limitations so that reported results are reproducible.

---

## 18. Limitations and Challenges

AURA is a long-term project involving several distinct engineering challenges.

### 18.1 AI Reliability

Language models may generate inaccurate information, misunderstand instructions, or provide unsuitable recommendations.

### 18.2 Speech Recognition

Bangla and mixed Bangla-English speech may be difficult to recognize under noisy conditions or with unfamiliar accents.

### 18.3 Privacy

Desktop screens, messages, emails, and documents can contain sensitive personal or professional information.

### 18.4 External API Restrictions

Third-party services may restrict personal-account access, automated actions, message retrieval, or notification handling.

Each integration must be evaluated against the service's official APIs, account requirements, permissions, and policies.

### 18.5 Latency and Resource Usage

Continuous monitoring, speech recognition, and AI inference can consume CPU, memory, network bandwidth, and battery power.

The architecture should avoid unnecessary background processing.

### 18.6 Database and Network Availability

Cloud database access depends on correct configuration and network connectivity. The application must handle connection failures safely.

### 18.7 Security Complexity

A personal AI agent that can interact with applications has a larger attack surface than a conventional chatbot. Permission enforcement, secret management, auditing, and prompt-injection resistance require dedicated engineering and testing.

---

## 19. Development Roadmap

AURA will be developed in stages so that each major component can be implemented and tested before additional complexity is introduced.

### Phase 1 — Full-Stack Foundation

- Configure Django and Django REST Framework.
- Configure React and Vite.
- Connect the frontend to the backend API.
- Implement activity notes.
- Implement action proposals.
- Verify SQLite development mode.
- Configure Neon PostgreSQL.
- Document setup and API behavior.

**Current status:** A starter implementation is included in the project package. The developer still needs to run and verify it locally.

### Phase 2 — Backend Reliability and Authentication

- Add automated backend tests.
- Implement user authentication.
- Add user ownership to notes and proposals.
- Implement object-level permissions.
- Add structured error handling.
- Introduce audit history.
- Improve production configuration.

### Phase 3 — Task and Reminder Management

- Add task and reminder models.
- Implement task creation and updates.
- Add scheduling and notification preferences.
- Introduce overdue-task handling.
- Add dashboard components for tasks and reminders.

### Phase 4 — AI Integration

- Define initial AI use cases.
- Select suitable models or APIs.
- Implement a dedicated AI service layer.
- Add intent interpretation and summarization.
- Generate action proposals from user instructions.
- Evaluate model quality and latency.
- Keep AI-generated recommendations separate from authorization logic.

### Phase 5 — Voice Interaction

- Add voice input.
- Implement speech-to-text.
- Add text-to-speech responses.
- Evaluate Bangla and English performance.
- Introduce clarification prompts for ambiguous commands.
- Apply existing permission rules to voice-initiated actions.

### Phase 6 — Desktop Awareness

- Define the scope of permitted desktop observation.
- Add visible monitoring controls.
- Implement opt-in capture.
- Provide pause and stop functionality.
- Test data minimization and retention.
- Add contextual assistance for selected desktop workflows.

### Phase 7 — External Integrations

- Evaluate official APIs for supported services.
- Implement one integration at a time.
- Request only necessary permissions.
- Add secure credential storage.
- Support message drafting and review.
- Add explicit authorization for sending or other consequential actions.
- Test failure handling and audit records.

### Phase 8 — Controlled Desktop Automation

- Design a server-side permission gate.
- Create an allowlist of supported operations.
- Require action-specific confirmation.
- Add timeouts and failure recovery.
- Record execution results.
- Test against accidental and unauthorized operations.

### Phase 9 — Evaluation and Portfolio Release

- Run automated tests.
- Measure API performance.
- Evaluate AI components.
- Perform security and permission tests.
- Document limitations and actual results.
- Improve the user interface.
- Publish the repository with setup instructions and architecture documentation.

---

## 20. Expected Outcomes

The current starter is intended to establish the following foundation:

- A working Django REST API.
- A React dashboard connected to the API.
- Database-backed activity notes.
- Database-backed action proposals.
- A basic proposal approval-state workflow.
- Support for SQLite local development.
- Configuration for Neon PostgreSQL.
- Project documentation and architecture diagrams.

The longer-term project aims to demonstrate:

- Full-stack engineering.
- REST API design.
- Relational database integration.
- AI service integration.
- Natural-language processing.
- Voice interaction.
- Responsible desktop automation.
- Permission-based agent design.
- Security and privacy engineering.
- System evaluation using reproducible tests.

These longer-term outcomes depend on implementing and testing the relevant features. They should not be presented as completed capabilities until verified.

---

## 21. Future Improvements

Potential improvements include:

- A more advanced dashboard with configurable widgets.
- Personalized assistant preferences.
- Bangla-first voice interaction.
- Improved task extraction and reminder scheduling.
- Retrieval of user-authorized personal notes.
- Local AI inference for supported tasks.
- Better accessibility and keyboard navigation.
- More detailed audit logs.
- Integration health monitoring.
- Configurable data-retention policies.
- Offline functionality for selected features.
- Automated testing and continuous integration.
- Cross-device access through a secure, authenticated service.

These improvements will be prioritized according to practical value, implementation feasibility, privacy, and reliability.

---

## 22. Contribution Guidelines

AURA is organized to support incremental development.

Before contributing:

1. Review the project structure and documentation.
2. Create a dedicated branch for the feature or fix.
3. Keep unrelated changes separate.
4. Add or update tests where appropriate.
5. Never commit credentials or private user data.
6. Document API or database changes.
7. Verify that authorization checks cannot be bypassed.
8. Report limitations honestly.

New integrations should remain disabled by default until their permissions, security behavior, and failure modes have been reviewed.

---

## 23. License and Project Status

**Project name:** AURA — Permission-Based Personal AI Agent

**Project type:** Full-stack AI assistant and desktop automation research project.

**Primary technologies:** Python, Django REST Framework, React, Vite, and Neon PostgreSQL.

**Development approach:** Incremental implementation with explicit permission controls and measurable evaluation.

**Current status:** Starter scaffold.

A license has not been specified in this starter package. Select and add an appropriate license before distributing the source code or accepting external contributions.

---

## Conclusion

AURA is designed to explore how a personal AI assistant can become more useful by combining contextual assistance, task organization, natural-language interaction, and carefully controlled automation.

The project uses Django REST Framework for backend services, React for the frontend, and Neon PostgreSQL for cloud-based data storage. Its initial implementation establishes the foundation for managing activity notes and action proposals.

The long-term goal is to extend this foundation with AI reasoning, voice interaction, desktop awareness, reminders, and authorized external integrations.

The defining requirement remains unchanged throughout development:

**AURA may recommend and prepare actions, but consequential actions must remain under the user's explicit control.**