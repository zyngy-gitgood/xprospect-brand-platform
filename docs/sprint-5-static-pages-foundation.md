# Sprint 5 Static Pages Foundation

## Objective

Create the foundational static pages and navigation structure for the X-PROSPECT Brand Platform.

## Templates Created

- `wordpress/theme/xprospect-brand/templates/page-ai.html`
- `wordpress/theme/xprospect-brand/templates/page-services.html`
- `wordpress/theme/xprospect-brand/templates/page-technology.html`
- `wordpress/theme/xprospect-brand/templates/page-recruit.html`
- `wordpress/theme/xprospect-brand/templates/page-company.html`
- `wordpress/theme/xprospect-brand/templates/page-contact.html`

## Native WordPress Approach

The theme uses native block-theme templates named `page-{slug}.html`.
These map to WordPress pages with matching slugs:

- `/ai/`
- `/services/`
- `/technology/`
- `/recruit/`
- `/company/`
- `/contact/`

The templates are also registered in `theme.json` under `customTemplates` so they can be selected manually for page posts in the Site Editor.

## Common Structure

Each page includes:

- Header
- Page hero
- Main content placeholder
- CTA section
- Footer

## Contact Form Placeholder

The contact page includes a non-sending placeholder form with:

- お名前
- 会社名
- メールアドレス
- 電話番号
- ご相談内容
- 送信する

The submit button is `type="button"` so no email sending or form submission is implemented yet.

## Navigation

Header and footer navigation now link to the static page URLs.

## Validation Results

- `theme.json` parse check: passed
- JavaScript syntax check with bundled Node.js: passed
- UTF-8 Japanese content check: passed
- SVG XML parse check: passed
- No inline `style=` attribute check: passed
- PHP lint: not run because PHP is unavailable on PATH
