# Full-Stack SDLC Exercise for Beginners

**A curated guide to building your first real software project—from idea to production.**

---

## Why This Repo Exists

Starting your first full-stack or backend project can feel overwhelming. You’ve learned languages and frameworks, but turning that into a **complete, well-structured application**—with clear requirements, a sensible design, tests, and something you can actually run and maintain—is a different skill. This repository is here to bridge that gap.

These blueprints are **project ideas and end-to-end guides** based on real experience: what works in practice, what order to do things in, and how to keep a project from becoming a tangled mess. They are not just feature lists—they walk you through the **full Software Development Life Cycle (SDLC)** so you learn how software is built in a structured, professional way.

Whether you’re a student, a career switcher, or a developer building your first side project, use these documents as your **single source of truth**: follow them step by step, adapt them to your pace, and finish with a project you can demo, deploy, and talk about in interviews.

---

## What You’ll Find Here

Each document in this repo is a **complete project blueprint**. It includes:

- **Project idea & scope** — A concrete application (e.g. task management, personal finance) with an MVP and clear “out of scope.”
- **Tech stack** — Frontend, backend, databases, cache, cloud, and tooling, with brief rationale.
- **Requirements** — Functional and non-functional requirements you can turn into a backlog.
- **Architecture** — High-level design and, where relevant, cloud (e.g. AWS) layout.
- **Low-level design** — API contracts, database schemas, and key frontend flows.
- **Step-by-step SDLC guide** — Phases from planning to deployment and monitoring.
- **Timeline & checklist** — A suggested schedule and a master to-do list so you can track progress.

Different blueprints use different stacks (e.g. **Node.js/Express** vs **Java/Spring Boot**) and domains (e.g. **task management** vs **personal finance**), so you can pick what fits your goals and background.

---

## How to Use This Repo

### 1. Fork the repository

1. Click **Fork** at the top of this GitHub page.
2. Clone **your fork** to your machine:
  ```bash
   git clone https://github.com/YOUR_USERNAME/SDLC-FullStack-Exercise-for-Beginners.git
   cd SDLC-FullStack-Exercise-for-Beginners
  ```
3. (Optional) Add this repo as `upstream` to pull future updates:
  ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/SDLC-FullStack-Exercise-for-Beginners.git
  ```

### 2. Choose a project blueprint


| Document | Project | Backend | Domain |
| -------- | ------- | ------- | ------ |
| [Student-SDLC-FullStack-Exercise-Financial-Java.md](./Student-SDLC-FullStack-Exercise-Financial-Java.md) | **FinanceTrack** | Java (Spring Boot) | Personal finance & budgeting |
| [Student-SDLC-FullStack-Exercise.md](./Student-SDLC-FullStack-Exercise.md) | **TaskFlow** | Node.js (Express) | Task & project management |

Open the document you want and read it **end to end** before writing code. Treat it as your project specification and plan.

### 3. Create your own project from the blueprint

- Create a **new repository** for your implementation (e.g. `my-taskflow-app` or `my-financetrack`).  
- Use the blueprint’s suggested structure (e.g. `frontend/`, `api/`, `python-worker/`, `docs/`).  
- Work through the document phase by phase: planning → design → development → testing → deployment → monitoring.  
- Copy or adapt the **checklists** and **timeline** into your repo (e.g. in `docs/` or as GitHub Issues/Projects) so you always know what’s next.

### 4. Keep your work structured and documented

- Maintain a **high-level plan** (e.g. a short `docs/plan.md` or project board) that reflects the SDLC phases.  
- Keep a **README** that explains how to run the project locally and how to deploy it.  
- Update architecture and API docs as you go. Good structure and clear documentation will make your project easier to finish and to present.

---

## The Software Development Life Cycle (SDLC)—Why It Matters

Building software in a **structured way**—instead of jumping straight into code—saves time, reduces rework, and teaches you how teams actually ship products. This repo is built around a clear SDLC. Here’s how each phase fits in and why we emphasize it.

### 1. Requirement gathering

**What it is:** Capturing what the system must do (features) and how it should behave (performance, security, etc.).

**Why it matters:** Without clear requirements, you’ll build the wrong thing or keep changing direction. Each blueprint gives you a **requirements specification** (functional and non-functional). Use it as your contract: turn requirements into backlog items and accept that the blueprint is your “customer” for the exercise.

**In this repo:** See the “Requirements Specification” section in each project document. Copy those into your own requirements doc or issue tracker and refer back to them when prioritizing work.

---

### 2. Analysis

**What it is:** Understanding the problem, the users, and the constraints; deciding scope (MVP vs later).

**Why it matters:** Analysis helps you say “we’re building *this* first and *not* that.” The blueprints do this for you (e.g. “Core Features” vs “Out of Scope”). As you work, if you want to add something new, ask: “Is this in scope for the current phase?” That keeps the project manageable.

**In this repo:** Use the “Project Overview,” “Core Features,” and “Out of Scope” in each document as your analysis baseline. Optionally add 2–3 user stories per feature to make the “who, what, why” even clearer.

---

### 3. Architecture design

**What it is:** Defining the high-level structure: main components, how they talk to each other, and how they sit in the cloud (e.g. VPC, load balancer, API, databases, cache, storage).

**Why it matters:** A simple diagram and a short architecture doc prevent “big ball of mud” systems. You’ll know where the API lives, where data is stored, and how traffic and jobs flow—which makes implementation and debugging much easier.

**In this repo:** Each blueprint has an “Architecture Design & AWS Diagram” section (including Mermaid diagrams). Recreate or adapt this in your own `docs/architecture.md` and keep it updated as you add services.

---

### 4. Low-level API design and database design

**What it is:**  

- **API:** Exact endpoints, methods, request/response shapes, status codes, and auth.  
- **Database:** Tables/collections, indexes, and how the app uses them for reads/writes and reporting.

**Why it matters:** Agreeing on APIs and schemas before coding avoids costly changes later. Frontend and backend can align on contracts; you can stub APIs and test against a spec.

**In this repo:** Each document has “Low-Level Design: API” and “Low-Level Design: Database” (and often “Low-Level Design: Frontend”). Use them to create an **API spec** (e.g. OpenAPI/Postman) and a **database design doc** in your repo. Implement to that spec.

---

### 5. Development

**What it is:** Implementing the system in small, ordered steps (e.g. auth → core CRUD → file upload → dashboard → background jobs).

**Why it matters:** Following a clear order (as in the step-by-step guide) keeps dependencies right and lets you integrate and test continuously instead of wiring everything at the end.

**In this repo:** The “Step-by-Step SDLC Guide” in each blueprint breaks development into phases (e.g. “Backend API,” “Python Service,” “Frontend,” “AWS Setup”). Follow that sequence and use the checklist to mark progress.

---

### 6. Testing

**What it is:** Unit tests (e.g. auth, validation), integration tests (e.g. API flows with a test DB), and manual checks against the requirements.

**Why it matters:** Tests protect you from regressions and give you confidence when refactoring or adding features. Even a small set of tests (register, login, create resource, list resource) is valuable.

**In this repo:** The development phases mention testing (e.g. unit tests for auth, integration tests for main API flows). Add a “Testing” section in your README and run tests in CI (e.g. GitHub Actions) so they’re part of your workflow.

---

### 7. Performance testing

**What it is:** Checking that the system meets latency and throughput expectations (e.g. p95 response time, handling a target number of requests).

**Why it matters:** Non-functional requirements (e.g. “API response time < 500 ms”) only become real when you measure them. Simple load or smoke tests help you find bottlenecks (DB, cache, missing indexes) before they become production issues.

**In this repo:** NFRs are listed in “Non-Functional Requirements.” Use basic tooling (e.g. Apache Bench, k6, or Postman) to hit critical endpoints and verify they meet the targets. Optionally add a short “Performance” subsection to your README or `docs/`.

---

### 8. Monitoring and logging

**What it is:** Centralized logs, metrics (e.g. request count, latency, errors), dashboards, and alerts (e.g. on 5xx or high latency).

**Why it matters:** You can’t fix what you can’t see. Logs and metrics let you debug issues and understand usage; alarms help you react when something goes wrong.

**In this repo:** Each blueprint has a “Logging, Monitoring & CloudWatch” section (and often “CloudWatch” in the architecture). Implement request logging, send logs to CloudWatch (or similar), and add at least one dashboard and one alarm so you complete the full “run and observe” loop.

---

## Documentation and Planning—Your Safety Net

Two habits will make a huge difference: **a high-level plan** and **clear, up-to-date documentation. ( I got this habit, whole emphasis and importance of documentation from my Scrum Master Arvind :) Kudos to him... )**

### High-level plan

- Keep a **project plan** (e.g. `docs/plan.md` or a project board) that shows:
  - Current phase (e.g. “Phase 3: Backend API”).
  - What’s done, in progress, and next.
  - Any deviations from the blueprint and why.
- This gives you a single place to answer “where am I?” and “what do I do next?” and makes it easy to pause and resume the project.

### Documentation to maintain

- **README:** How to clone, install dependencies, configure env vars, and run the project locally (and optionally in Docker). Add a short “What this project is” and link to the blueprint.
- **Runbook / deploy doc:** How to deploy to the cloud (e.g. AWS), which resources are used, and how to run migrations or jobs. Future-you (and others) will thank you.
- **Architecture:** A diagram and short description of components and data flow. Update it when you add or change services.
- **API:** An OpenAPI file or Postman collection that matches your implementation. Keep it in the repo and update it when endpoints change.

Treat the blueprint as the **initial specification**; your repo’s docs are the **living description** of what you actually built and how to work with it. That structure is what turns a one-off project into something you can extend, showcase, and maintain.

---

## Quick Start Summary

1. **Fork** this repo and **clone** your fork.
2. **Pick a blueprint** (TaskFlow or FinanceTrack) and **read it fully**.
3. **Create a new repo** for your implementation and use the blueprint’s suggested folder structure.
4. **Follow the SDLC** in order: requirements → analysis → architecture → low-level API/DB design → development → testing → performance checks → monitoring and logging.
5. **Keep a plan and docs** (README, architecture, API, runbook) so your project stays structured and runnable.
6. **Use the blueprint’s checklist and timeline** to track progress and finish a complete, deployable project.

---

## Contributing and Feedback

If you have ideas for new project blueprints (e.g. another domain or tech stack), improvements to the SDLC description, or clearer “how to use” steps, consider opening an issue or pull request. The goal is to make these guides as useful as possible for everyone starting their first serious software project.

---

**Good luck—and enjoy building. There is always a Long way to go..... Keep pushing.**