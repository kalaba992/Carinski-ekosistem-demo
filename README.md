# Carinski Ekosistem — Public Demo

## What This Is

**Carinski Ekosistem** is an AI-powered customs classification assistant that helps customs professionals, importers, and exporters determine Harmonized System (HS) codes for products.

The **main project repository is private** — it contains real customs data, production infrastructure configuration, audit systems, and operational documentation.

**This repository is a sanitized public demo** — a minimal technical showcase for external reviewers.

## What This Demo Is

- ✅ Guest-only browsing — no login required
- ✅ Synthetic product examples (stainless steel screw, plastic cable tie, etc.)
- ✅ Mock classification responses with illustrative HS codes
- ✅ Confidence display, decision rationale, and validation steps
- ✅ Mantine v8 UI components

## What This Demo Is NOT

- ❌ Not a production application
- ❌ Not connected to any real backend (no Convex, no OpenAI, no Auth0)
- ❌ Not providing legally binding customs classification
- ❌ Not a replacement for official customs advice
- ❌ Not containing real customs data, audit logs, or operational documents

## Live Demo

<!-- Live URL placeholder — update after Cloudflare Pages deployment -->
[https://carinski-ekosistem-demo.pages.dev](https://carinski-ekosistem-demo.pages.dev)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 |
| Build | Vite 5 |
| Language | TypeScript |
| UI | Mantine v8 |
| Icons | Tabler Icons |
| Deployment | Cloudflare Pages |

## Architecture Overview

```
User → ProductSelector → ChatArea → demoClassifier (mock)
                                        ↓
                              ClassificationResult
                              + ConfidenceBar
                              + AuditExplanation
```

- All classification logic is client-side only
- The mock classifier returns pre-defined illustrative responses
- No network requests, no backend, no database
- Every result is marked "Demo only — illustrative classification"

## Security & Anti-Hallucination Concept

The full production system implements:

1. **Confidence scoring** — multi-factor confidence calculation based on source reliability, GIR path completeness, and attribute match quality
2. **Decision rationale** — structured audit output showing which GIR rules were applied, which chapter notes were consulted, and what evidence supports the classification
3. **Source validation** — cross-referencing against official tariff databases
4. **Human-in-the-loop** — all automated classifications require professional review before legal reliance

This demo visualizes the output format without the backend logic.

## How to Help

Please do not only write "nice project." The most useful feedback is specific, critical, and actionable.

Choose one review lane and open a matching structured issue template:

- [Architecture Review](https://github.com/kalaba992/Carinski-ekosistem-demo/issues/new?template=architecture_review.yml)
- [Security Review](https://github.com/kalaba992/Carinski-ekosistem-demo/issues/new?template=security_review.yml)
- [Testing Review](https://github.com/kalaba992/Carinski-ekosistem-demo/issues/new?template=testing_review.yml)
- [UI/UX Feedback](https://github.com/kalaba992/Carinski-ekosistem-demo/issues/new?template=ux_feedback.yml)
- [Customs-Domain Review](https://github.com/kalaba992/Carinski-ekosistem-demo/issues/new?template=customs_domain_review.yml)
- [Bug Report](https://github.com/kalaba992/Carinski-ekosistem-demo/issues/new?template=bug_report.yml)

Read the [Review Guide](docs/REVIEW_GUIDE.md) before submitting.

## License

Source-available sanitized demo. All rights reserved unless a LICENSE file is added.
