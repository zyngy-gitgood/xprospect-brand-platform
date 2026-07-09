# Sprint 12 Premium Visual Upgrade

## Visual System Summary

Sprint 12 upgrades the site from polished beta to a more premium, brand-owned presentation. The design direction remains the same: Japanese business, AI implementation, consulting, manufacturing, office, and engineering themes in a minimal navy / blue / cyan visual system.

The upgrade focuses on local SVG assets, consistent iconography, richer workflow diagrams, CTA texture, trust/KPI refinement, and footer polish. No external JavaScript libraries, jQuery, animation frameworks, or heavy media assets were added.

## New / Updated Assets

- `assets/images/illustrations/top-hero.svg`
- `assets/images/illustrations/ai-consulting.svg`
- `assets/images/illustrations/services.svg`
- `assets/images/illustrations/technology.svg`
- `assets/images/illustrations/patent.svg`
- `assets/images/illustrations/cases.svg`
- `assets/images/illustrations/recruit.svg`
- `assets/images/illustrations/company.svg`
- `assets/images/illustrations/contact.svg`
- `assets/images/icons/*.svg` for AI導入, 業務改革, システム開発, クラウド, セキュリティ, 教育, 技術継承, メール, 議事録, 文書検索, OCR, 特許, 3D点群, XR, 採用, お問い合わせ.
- `assets/images/ogp/ogp-default.svg`
- `assets/images/logo/xprospect-logo-mark.svg`
- `assets/images/logo/xprospect-logo-horizontal.svg`

## Pages Upgraded

- TOP: premium workflow hero with AI core, Japanese process labels, data lines, layered depth, and refined CTA hierarchy.
- AI導入支援: upgraded consulting illustration.
- サービス: upgraded service-system illustration.
- 技術: upgraded research illustration, technology icon cards, and patent visual reference.
- 特許技術: upgraded 3D measurement / point-cloud / QR recognition patent visual.
- 導入事例: upgraded workflow diagrams for メール業務AI化, 議事録・ToDo自動化, and 社内文書検索AI.
- 採用: upgraded engineering growth illustration.
- 会社情報: upgraded company visual and removed placeholder wording.
- お問い合わせ: upgraded consultation illustration and removed visible placeholder wording.
- Footer: replaced placeholder English content with real Japanese footer columns and company address.

## Motion Preparation

Added CSS classes for future animation-ready elements:

- `.motion-float`
- `.motion-glow`
- `.motion-line`
- `.motion-card`
- `.motion-reveal`

Motion remains subtle and respects `prefers-reduced-motion`.

## Known Limitations

- Illustrations are premium temporary SVG assets created in-theme. They are ready for production review but can be replaced by final brand artwork later.
- Contact form still does not send email; this remains intentionally deferred until form/backend integration.
- Existing legacy `rc2-*` and `s11-*` SVG files remain in the theme for compatibility/history, although the upgraded pages now use the organized Sprint 12 assets.

## Next Recommendations

- Replace temporary SVGs with final approved brand artwork if/when available.
- Add final privacy policy page content and link target.
- Connect the contact form to the selected WordPress form/backend implementation.
- Run Lighthouse in staging after deployment and cache configuration.

## Validation Results

- `theme.json` parse check: passed.
- JavaScript syntax check: passed.
- UTF-8 Japanese check: passed.
- SVG XML parse check: passed.
- No inline style scan: passed.
- Broken asset reference scan: passed.
- ZIP structure check: passed.
- Responsive quick review: passed via mobile-first CSS review and staging screenshots.
- PHP lint: not run locally because `php` is unavailable.

## Staging QA

- Deployment result: `dist/xprospect-brand.zip` uploaded/replaced and theme activation checked on staging.
- Desktop page checks: passed for TOP, AI導入支援, サービス, 技術, 特許技術, 導入事例, 採用, 会社情報, お問い合わせ.
- Missing image check: passed on all checked pages.
- Horizontal overflow check: passed on all checked pages.
- Footer placeholder check: passed on all checked pages.
- Mobile quick check: passed at mobile viewport with no horizontal overflow and hamburger visible.
- Tablet quick check: passed at tablet viewport with no horizontal overflow.

## Screenshots

- `docs/screenshots/sprint-12/top.png`
- `docs/screenshots/sprint-12/ai.png`
- `docs/screenshots/sprint-12/services.png`
- `docs/screenshots/sprint-12/technology.png`
- `docs/screenshots/sprint-12/patent.png`
- `docs/screenshots/sprint-12/cases.png`
- `docs/screenshots/sprint-12/recruit.png`
- `docs/screenshots/sprint-12/company.png`
- `docs/screenshots/sprint-12/contact.png`
