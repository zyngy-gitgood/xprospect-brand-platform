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

## Development Notes

- Do not use Elementor.
- Keep page contents out of Sprint 1.
- Prefer Gutenberg blocks, patterns, template parts, and theme tokens.
- Keep CSS reusable and avoid inline styles.
- Use responsive, mobile-first component classes.
- Use optimized image assets and WebP where possible.
- Keep layout stable to reduce CLS.
