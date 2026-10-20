# AURA — Problem, Methodology, Evaluation, and Limitations

## 1. Problem statement
People manage work across desktop apps, browsers, email, messaging, and personal reminders. Context switching and forgotten follow-ups can cause missed tasks. AURA is intended to become a user-controlled personal AI agent that can capture context, suggest next steps, and prepare actions while requiring explicit permission before consequential operations.

## 2. Proposed methodology
1. **Capture:** accept user-entered notes first. Desktop and voice capture are later milestones and must be visibly enabled.
2. **Represent:** store activity notes and action proposals through Django models.
3. **Interpret:** future AI services may classify intent, summarize context, and draft suggested replies. These services are not included in this starter.
4. **Recommend:** show the user a proposed action with its reason and scope.
5. **Authorize:** require fresh explicit approval for each consequential action.
6. **Execute:** only a later, separately tested integration layer may execute approved actions; the current package never executes them.
7. **Audit:** record proposal state changes and errors without retaining unnecessary sensitive content.

## 3. System implementation in this package
- React dashboard provides forms and status display.
- Django REST Framework provides health, activity-note, and action-proposal endpoints.
- Django ORM stores records.
- SQLite is used by default for local setup; `DATABASE_URL` configures Neon PostgreSQL.
- CORS is configured for the local Vite development server.
- Proposal approval only changes the state to `approved_not_executed`.

## 4. Evaluation plan
Do not claim performance scores until experiments are run. Use these measures:
- **API correctness:** pass rate for health, note creation/listing, proposal creation, and approval tests.
- **Latency:** median and 95th percentile response time under a documented test load.
- **Intent classification (future):** precision, recall, F1 score, and confusion matrix on a labeled test set.
- **Speech recognition (future):** Word Error Rate (WER), separately measured for Bangla and English, with accents/noise conditions documented.
- **Suggestion usefulness (future):** blinded user ratings, task completion rate, and rate of unsafe or irrelevant suggestions.
- **Permission safety:** zero unapproved external actions in test cases; every action attempt has a traceable authorization decision.
- **Privacy:** data-retention and deletion tests, plus checks that secrets are not written to logs.

## 5. Expected results (not measured results)
The starter should allow a developer to add notes and action proposals, persist them in the configured database, and see approval status in the React UI. This is an implementation target, not a claim of completed empirical testing.

## 6. AI/ML effectiveness and limitations
**No AI/ML model is bundled in this scaffold.** Consequently, there are no measured accuracy, precision, recall, latency, or benchmark results to report.

Potential future components:
- Speech-to-text for Bangla and English.
- Intent classification and task extraction.
- Context-aware response drafting.
- Local or cloud language models for summarization and recommendations.
- Optional visual understanding, only after clear opt-in and visible monitoring controls.

Limitations and risks:
- Speech recognition may fail with noise, accents, code-switching, or domain-specific terms.
- Language models may hallucinate, misunderstand intent, or produce unsafe recommendations.
- Screen content and messages can include highly sensitive information.
- Third-party APIs have permissions, quotas, costs, and platform restrictions.
- Gmail, WhatsApp, and Messenger do not necessarily permit arbitrary personal-account monitoring or automation; use official APIs and their policies.
- Neon availability depends on network connectivity and provider configuration.
- This scaffold does not yet include authentication or per-user access control and must not be exposed publicly as-is.

## 7. Safety and threat model
Threats include prompt injection from webpages/messages, accidental sends, unauthorized access, leaked credentials, and over-collection of personal data. Mitigations for future implementation: deny-by-default tool access, allowlists, fresh per-action confirmations, visible monitoring status, emergency pause, minimal permissions, secret management, audit records, and explicit retention/deletion controls.

## 8. Conclusion
AURA is a staged portfolio project. The present deliverable establishes a React + Django REST Framework + PostgreSQL-ready foundation and documentation. It is not yet a fully capable desktop agent. Report only tests actually run and measurements actually collected.
