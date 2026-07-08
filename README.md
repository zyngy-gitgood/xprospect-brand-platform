# X-PROSPECT Brand Platform

Sprint 1 builds the reusable foundation for the X-PROSPECT WordPress brand platform.

## Stack

- WordPress native block theme
- Gutenberg
- PHP 8+
- CSS variables
- Vanilla JavaScript
- Mobile-first responsive CSS

## Repository Structure

```text
/
├── docs/
├── assets/
│   ├── icons/
│   ├── images/
│   ├── videos/
│   └── logo/
├── wordpress/
│   ├── theme/
│   │   └── xprospect-brand/
│   └── plugins/
├── prototype/
└── implementation/
```

## Theme

Theme name: `xprospect-brand`

Theme path: `wordpress/theme/xprospect-brand`

The theme contains only reusable architecture for Sprint 1:

- Global design tokens in `theme.json`
- Base responsive CSS variables and component skeletons
- Native block templates and template parts
- Gutenberg pattern skeletons for reusable components
- Vanilla JS foundation for progressive enhancements

## Sprint 1 Components

- Button
- Card
- Section
- Container
- Hero
- Feature
- Timeline
- CTA
- Header
- Footer
- Accordion
- FAQ
- News Card
- Recruit Card

## Sprint 2 Visible Brand Layer

- Sticky premium header with logo placeholder, center navigation, CTA, and accessible mobile menu
- Front-page hero with Japanese brand copy, CTA buttons, and abstract AI/business visual placeholder
- Footer with company name, slogan, navigation, contact/privacy links, and copyright
- `templates/front-page.html` with section-title placeholders only

## Sprint 3 TOP Page Core Sections

- Problems
- Services
- Before / After
- Why X-PROSPECT
- Technology
- Process
- Case Studies
- Contact CTA

The TOP page still uses polished placeholders instead of final images.

## Sprint 4 Design Polish And Logo

- Temporary SVG logo suite in `assets/logo/`
- Header and footer logo integration
- Favicon SVG reference
- Polished hero visual placeholder with floating business/AI cards
- Refined section hierarchy, hover states, and scroll reveal support

## Sprint 5 Static Pages Foundation

- Native block-theme static page templates for AI導入支援, サービス, 技術, 採用, 会社情報, and お問い合わせ
- Header and footer navigation updated to static page URLs
- Shared page hero, placeholder content, CTA, and contact form placeholder styles
- Templates registered as selectable page templates in `theme.json`

## Development Notes

- Do not use Elementor.
- Keep page contents out of Sprint 1.
- Prefer Gutenberg blocks, patterns, template parts, and theme tokens.
- Keep CSS reusable and avoid inline styles.
- Use responsive, mobile-first component classes.
- Use optimized image assets and WebP where possible.
- Keep layout stable to reduce CLS.
