# Implementation Notes

## Current endpoints
- `GET /api/health/` — API health check.
- `GET /api/activity-notes/` — list notes.
- `POST /api/activity-notes/` — create a note with `title` and optional `note`.
- `GET /api/proposals/` — list proposals.
- `POST /api/proposals/` — create a proposal with `title` and optional `description`.
- `POST /api/proposals/<id>/approve/` — record approval, setting `approved_not_executed`.

## Database configuration
The backend loads `backend/.env`. If `DATABASE_URL` is empty, it uses local SQLite. If populated, it uses PostgreSQL and requires SSL. For Neon, use the connection string shown in the Neon dashboard and do not commit credentials.

## Important security caveat
The starter's REST endpoints are open for local development and have no authentication. Keep it local. Before deploying, implement authentication, per-user object filtering, permissions, rate limits, secure production settings, and tests.

## Recommended next implementation milestones
1. Add automated Django API tests.
2. Add authentication and user-specific data ownership.
3. Add proposal audit history and a proper permission service.
4. Add opt-in voice input/output.
5. Add one official, permitted integration at a time.
6. Add a desktop capture module only with a visible indicator, scope controls, and pause/stop switch.
7. Evaluate any AI model with a documented test dataset; do not invent scores.
