# Sprint 13 Premium Brand Identity

## TOP Redesign Summary

Sprint 13 moves the TOP page from a strong corporate site toward a more memorable premium brand experience while keeping the existing X-PROSPECT design system.

- Updated TOP hero subcopy to clarify AI企画, 業務設計, システム開発, 社員教育, and 運用改善.
- Updated the secondary hero CTA to `導入事例を見る`.
- Refined the hero visual around an AI core with メール, 議事録, 社内文書, 業務システム, 技術継承, and 改善提案.
- Added a new brand signature section directly after the hero.
- Expanded TOP AI use cases from 9 to 18 cards with featured, wide, compact, dark, and gradient treatments.

## New Brand Sections

- TOP: `AIを入れることより、使われ続ける仕組みをつくる。`
- Company: `私たちの考え方`
- Company: `X-PROSPECTが大切にする3つのこと`
- Recruit: `X-PROSPECTで身につく力`
- Recruit: `こんな人と働きたい`
- Case Studies: `自社業務に置き換えて考えるポイント`

## Visual Changes

- Added human/business SVG illustration blocks:
  - `business-meeting.svg`
  - `engineer-working.svg`
  - `ai-workshop.svg`
  - `manufacturing-discussion.svg`
  - `office-consultation.svg`
- Upgraded TOP trust cards into six stronger identity cards.
- Added CTA A/B/C visual variants for final conversion, inline consultation, and service-section CTAs.
- Refined footer with company URL and clearer Japanese labels.
- Tightened desktop hero height and section rhythm.

## Bug Fixes

- Fixed scroll reveal progressive enhancement.
- Content is visible by default.
- Reveal opacity is only applied after JavaScript successfully initializes the motion system with `.xprospect-motion-ready`.
- If JavaScript fails, content remains visible.
- Case Study workflow blocks were adjusted to avoid cropped or hidden content.

## Remaining Recommendations

- Replace temporary SVG illustrations with final approved brand artwork if available.
- Add final privacy policy content and URL.
- Connect the contact form to a production form backend.
- Run Lighthouse after hosting/cache configuration is finalized.

## Validation Results

- `theme.json` parse check: passed.
- JavaScript syntax check: passed.
- UTF-8 Japanese check: passed.
- SVG XML parse check: passed.
- No inline style scan: passed.
- Broken asset reference scan: passed.
- Heading hierarchy review: passed.
- No hidden content review: passed.
- ZIP structure check: passed.
- PHP lint: not run locally because `php` is unavailable.

## Staging QA

- Deployment result: `dist/xprospect-brand.zip` uploaded/replaced and theme activation checked on staging.
- Desktop page checks: passed for TOP, AI導入支援, サービス, 技術, 特許技術, 導入事例, 採用, 会社情報, お問い合わせ.
- Missing image check: passed on all checked pages.
- Horizontal overflow check: passed on all checked pages.
- Footer placeholder check: passed on all checked pages.
- Important visible content check: passed on all checked pages.
- Mobile quick check: passed with no horizontal overflow and hamburger visible. Hidden mobile navigation links are expected while the menu is closed.
- Tablet quick check: passed with no horizontal overflow and hamburger visible.

## Screenshots

- `docs/screenshots/sprint-13/top.png`
- `docs/screenshots/sprint-13/ai.png`
- `docs/screenshots/sprint-13/services.png`
- `docs/screenshots/sprint-13/technology.png`
- `docs/screenshots/sprint-13/patent.png`
- `docs/screenshots/sprint-13/cases.png`
- `docs/screenshots/sprint-13/recruit.png`
- `docs/screenshots/sprint-13/company.png`
- `docs/screenshots/sprint-13/contact.png`
