# Sprint 7 SEO Accessibility

## Objective

Implement SEO foundation, metadata placeholders, semantic structure review, and accessibility improvements without adding an SEO plugin.

## What Changed

- Added WordPress `title-tag` support.
- Added `inc/seo.php` for theme-level metadata.
- Added page-aware title and description defaults for TOP, AI導入支援, サービス, 技術, 採用情報, 会社情報, and お問い合わせ.
- Added meta description, canonical, Open Graph, Twitter card, and OGP image placeholder tags through `wp_head`.
- Added `assets/images/ogp-default.svg` with brand colors, logo mark, and slogan.
- Added logo width/height, lazy-loading readiness, and decoding hints to reduce layout shift.
- Reviewed semantic structure for one `h1` per page, navigation landmarks, main landmarks, footer template parts, form labels, and button/link usage.
- Simplified the company profile to native definition-list semantics.

## Metadata Defaults

- TOP: `X-PROSPECT株式会社｜AIを、現場で使える力に。`
- AI導入支援: `AI導入支援｜X-PROSPECT株式会社`
- サービス: `サービス｜X-PROSPECT株式会社`
- 技術: `技術｜X-PROSPECT株式会社`
- 採用情報: `採用情報｜X-PROSPECT株式会社`
- 会社情報: `会社情報｜X-PROSPECT株式会社`
- お問い合わせ: `お問い合わせ｜X-PROSPECT株式会社`

## Accessibility Notes

- Mobile menu keeps `aria-expanded` behavior from earlier sprints.
- Header and footer navigation use named `nav` landmarks.
- Forms use explicit visible labels.
- Focus states remain visible through the shared focus ring.
- Reduced-motion media query remains in place.
- Visual placeholders keep stable minimum dimensions.

## Validation Results

- `theme.json` parse check: passed
- JavaScript syntax check with bundled Node.js: passed
- UTF-8 Japanese content check: passed
- SVG XML parse check: passed
- No inline `style=` attribute check: passed
- Basic heading structure review: passed
- PHP lint: not run because PHP is unavailable on PATH
