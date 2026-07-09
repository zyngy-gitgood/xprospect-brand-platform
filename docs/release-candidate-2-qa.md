# Release Candidate 2 QA Report

## Deployment Result

- Staging deployment completed for `xprospect-brand`.
- Corrected the theme ZIP packaging to use POSIX-style paths so WordPress can read `xprospect-brand/style.css`.
- Bumped the theme version to `0.2.0` so WordPress refreshes the RC2 CSS and JS asset cache keys.
- Uploaded and replaced the active staging theme.
- Created/updated required pages: TOP, AI導入支援, サービス, 技術, 特許技術, 導入事例, 採用情報, 会社情報, お問い合わせ.
- Set TOP as the static homepage.

## Template Assignment

WordPress REST rejected block-theme template slugs through the classic page `template` field. The theme uses native block theme template hierarchy instead:

- `front-page.html` is applied to the static homepage.
- `page-ai.html`, `page-services.html`, `page-technology.html`, `page-patent.html`, `page-cases.html`, `page-recruit.html`, `page-company.html`, and `page-contact.html` are applied by page slug.

## Validation Results

- `theme.json` parse check: passed.
- JavaScript syntax check: passed for `assets/js/main.js`.
- UTF-8 Japanese content check: passed.
- SVG XML wrapper check: passed.
- No inline `style=` attribute check: passed for templates, parts, and patterns.
- ZIP structure check: passed. Package contains only `xprospect-brand/` theme files with forward-slash paths.
- PHP lint: PHP CLI unavailable in the local shell.

## Staging QA Results

- Desktop QA: passed across all pages.
- Tablet QA: passed across all pages.
- Mobile QA: passed across all pages.
- No horizontal overflow found on desktop, tablet, or mobile.
- Header sticky state confirmed.
- Mobile menu opens and sets `aria-expanded="true"`.
- Header and footer navigation include `特許技術` and `導入事例`.
- Each page has exactly one `h1`.
- Each page has one `main` landmark.
- Metadata confirmed for title, meta description, OGP title, and canonical output.
- Japanese content displayed without mojibake.
- RC2 SVG visual assets load with alt text.

## Screenshots

Screenshots are stored in `docs/screenshots/rc2/`.

- `top-desktop.png`
- `ai-desktop.png`
- `services-desktop.png`
- `technology-desktop.png`
- `patent-desktop.png`
- `cases-desktop.png`
- `recruit-desktop.png`
- `company-desktop.png`
- `contact-desktop.png`
- `top-mobile-menu.png`

## Remaining Improvements

- Replace temporary SVG visuals with final photography or finalized brand illustration assets.
- Connect the contact form to a secure production form handler.
- Add final privacy policy content.
- Add final map/access details for the company page.
- Add real customer case studies only after approval and evidence are available.
- Continue bumping `style.css` version for future release candidate and production deployments.
