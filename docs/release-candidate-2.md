# Release Candidate 2

## Overview

Release Candidate 2 upgrades the X-PROSPECT brand platform from a staging-ready theme into a more production-quality website experience. The focus is stronger brand presence, improved content hierarchy, richer technology positioning, and conversion-oriented user journeys across the TOP page and core static pages.

## Main Changes

- Redesigned the TOP hero with a premium AI workflow visual, business-oriented copy hierarchy, floating process cards, and stronger CTA flow.
- Added production-style SVG visual assets for AI consulting, technology, patent, case studies, recruiting, company, meetings, and business workflows.
- Upgraded TOP model case cards to cover AI use cases including email AI, meeting minutes AI, internal document AI, drawing search AI, OCR, quality improvement, AI chatbot, sales support, and knowledge AI.
- Expanded the Technology page with AR/XR, 3D point cloud, Computer Vision, industrial AI, cloud, and system development positioning.
- Added a Patent Technology page for Patent No. 7288568 and point-cloud automatic measurement concepts.
- Added a Case Studies page with clearly labeled model cases, not actual customer examples.
- Added navigation links for Patent Technology and Case Studies in the header and footer.
- Upgraded Recruit, Company, and Contact pages with stronger visual rhythm, clearer copy, and better conversion flow.
- Preserved the existing block theme architecture, SEO foundation, design system, CSS variables, and accessibility-ready structure.

## Reference Concepts Integrated

- AR and XR business support concepts: smart maintenance, after-service support, remote expert assistance, training support, and field enablement.
- 3D point cloud concepts: 3D modeling, layout simulation, automatic measurement, QR recognition, moving object measurement, difficult object recognition, and Patent No. 7288568.

## New Pages

- `page-patent.html`: Patent Technology page.
- `page-cases.html`: Case Studies page with model cases.

## New Visual Assets

- `rc2-top-hero.svg`
- `rc2-ai-consulting.svg`
- `rc2-technology.svg`
- `rc2-patent.svg`
- `rc2-case-study.svg`
- `rc2-recruit.svg`
- `rc2-company.svg`
- `rc2-meeting.svg`
- `rc2-business.svg`

## QA Scope

Validation for RC2 includes:

- `theme.json` parse check
- JavaScript syntax check
- UTF-8 Japanese content check
- SVG XML parse check
- No inline style attribute check
- Basic heading structure review
- Broken link review
- Desktop, tablet, and mobile responsive review
- WordPress staging deployment and screenshot capture

## Known Limitations

- Visual assets are polished temporary SVGs, not final photography.
- Contact form remains a placeholder and does not send email.
- Case studies are model cases and are intentionally not presented as real customer results.
- Map and detailed access information remain placeholders until production content is finalized.
