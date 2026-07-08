# Sprint 10 Staging QA

## Deployment Result

Status: Complete

Staging URL:

- http://x-prospect.com.testrs.jp/xpro-next/

Theme package deployed:

- `dist/xprospect-brand.zip`

Active theme:

- `X-PROSPECT Brand`
- Theme directory: `xprospect-brand`

## Deployment Fixes Applied

- Rebuilt the theme ZIP with `tar` so WordPress could read the package reliably.
- Changed `Requires PHP` from `8.0` to `7.4` because the staging server reports PHP `7.4.33`.
- Replaced hardcoded root-relative internal links with site-relative query links so navigation works under `/xpro-next` with plain permalinks.
- Replaced hardcoded logo image paths in header/footer with inline SVG logo markup to avoid subdirectory path issues.

## Page Creation Status

All required pages were created and published.

- TOP / slug: `home`
- AI導入支援 / slug: `ai`
- サービス / slug: `services`
- 技術 / slug: `technology`
- 採用情報 / slug: `recruit`
- 会社情報 / slug: `company`
- お問い合わせ / slug: `contact`

## Template Assignment Status

- TOP: static homepage using `templates/front-page.html`
- AI導入支援: `page-ai`
- サービス: `page-services`
- 技術: `page-technology`
- 採用情報: `page-recruit`
- 会社情報: `page-company`
- お問い合わせ: `page-contact`

## Homepage Status

Status: Complete

- `show_on_front`: `page`
- `page_on_front`: TOP page

## QA Results

Passed:

- Theme activation
- TOP page display
- Static page display
- Header navigation
- Footer navigation
- CTA links
- Mobile hamburger menu opens and updates `aria-expanded`
- Desktop layout
- Tablet layout
- Mobile layout
- Japanese text rendering
- No horizontal scroll on desktop, tablet, or mobile
- Header/footer rendered without broken asset paths
- Contact form placeholder labels present
- One `h1` per page
- `main` landmark present once per page
- Favicon present
- OGP image present
- Page title and meta description present
- Canonical tag present

## Screenshots

Desktop viewport screenshots:

- `docs/screenshots/sprint-10/home-desktop-viewport.png`
- `docs/screenshots/sprint-10/ai-desktop-viewport.png`
- `docs/screenshots/sprint-10/services-desktop-viewport.png`
- `docs/screenshots/sprint-10/technology-desktop-viewport.png`
- `docs/screenshots/sprint-10/recruit-desktop-viewport.png`
- `docs/screenshots/sprint-10/company-desktop-viewport.png`
- `docs/screenshots/sprint-10/contact-desktop-viewport.png`

Responsive screenshots:

- `docs/screenshots/sprint-10/services-tablet-viewport.png`
- `docs/screenshots/sprint-10/home-mobile-menu-viewport.png`

## Validation Completed

- `theme.json` parse check: passed
- JavaScript syntax check: passed
- UTF-8 Japanese content check: passed
- SVG XML wrapper check: passed
- No inline `style=` attribute check in parts/templates: passed
- ZIP file structure check: passed
- PHP lint: not run because PHP is unavailable on local PATH

## Remaining Improvements

- Upgrade staging/production PHP to PHP 8+ to match the original project stack target.
- Enable pretty permalinks after server rewrite configuration is confirmed.
- Replace placeholder visuals with final production imagery.
- Connect the contact form to a real submission workflow when approved.
- Add a production screenshot asset for WordPress theme listing if needed.
