# Review Guide — Carinski Ekosistem Demo

This is a sanitized public demo of a private AI-powered customs classification assistant.

The best way to help is to choose one review lane and open a focused GitHub Issue.

## Review lanes

### 1. Architecture review
Focus:
- React/TypeScript structure
- component boundaries
- data flow
- maintainability
- what would break when the app grows
- what should be simplified or deleted

Best feedback:
- "This pattern will not scale because..."
- "This state should move here because..."
- "This component has too many responsibilities..."

### 2. Security review
Focus:
- accidental data exposure
- unsafe assumptions
- public demo risks
- future Auth0/Convex/OpenAI risks
- frontend information leakage

Best feedback:
- "This would be dangerous in production because..."
- "Before public release, you need to test..."
- "Never expose this client-side..."

### 3. Testing review
Focus:
- what should be covered by unit tests
- what should be covered by E2E tests
- what smoke tests matter
- failure modes
- regression risks

Best feedback:
- "Add a test that proves..."
- "This edge case will break..."
- "This should be a CI gate..."

### 4. UI/UX review
Focus:
- clarity
- trust
- usability
- accessibility
- mobile layout
- whether the disclaimers are understandable
- whether the result page creates false legal confidence

Best feedback:
- "This wording is misleading..."
- "This layout hides the important warning..."
- "A customs user would expect..."

### 5. Customs-domain review
Focus:
- whether the demo wording overclaims
- whether HS/CN/TARIC/BiH distinction is clear
- whether "illustrative HS family" is safer than "HS code"
- whether the validation flow feels credible for customs professionals

Best feedback:
- "This would be challenged by customs because..."
- "This distinction is missing..."
- "This source wording is too strong..."

### 6. Bug report
Focus:
- broken UI
- broken links
- responsive layout issues
- browser/device issues
- deployment issues

## What I need most

Please prioritize feedback that answers one of these questions:

1. What would make this system unsafe to trust?
2. What would block this from becoming production-grade?
3. What architectural decision should be changed early?
4. What security issue would be expensive to fix later?
5. What wording creates legal or professional overclaim risk?
6. What test would give the most confidence?

## Severity scale

P0 — dangerous: security leak, legal overclaim, misleading classification confidence
P1 — blocker: broken demo, broken core flow, major architecture risk
P2 — important: maintainability, UX confusion, missing tests
P3 — polish: wording, layout, minor improvement

## How to submit

Open a GitHub Issue using the matching template:
- Bug Report
- Architecture Review
- Security Review
- Testing Review
- UI/UX Feedback
- Customs-Domain Review

Please be direct. Critical feedback is useful.
