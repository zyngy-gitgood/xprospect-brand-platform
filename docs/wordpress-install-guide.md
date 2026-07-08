# WordPress Install Guide

## Theme Package

Package file:

`dist/xprospect-brand.zip`

The ZIP contains only the installable WordPress theme directory:

`xprospect-brand/`

## Upload The Theme ZIP

1. Log in to the staging WordPress admin.
2. Go to `Appearance > Themes`.
3. Click `Add New`.
4. Click `Upload Theme`.
5. Choose `dist/xprospect-brand.zip`.
6. Click `Install Now`.

## Activate The Theme

1. After installation, click `Activate`.
2. Confirm the active theme is `X-PROSPECT Brand`.
3. Open the public site in a new tab and confirm the header and footer render.

## Set The Homepage

1. Go to `Pages > Add New`.
2. Create a page for the TOP page.
3. Go to `Settings > Reading`.
4. Set `Your homepage displays` to `A static page`.
5. Select the TOP page as `Homepage`.
6. Save changes.

The theme includes `templates/front-page.html`, so WordPress will use the front page template for the configured homepage.

## Create Static Pages

Create pages with these slugs:

- `ai`
- `services`
- `technology`
- `recruit`
- `company`
- `contact`

WordPress block themes can load `page-{slug}.html` automatically when page slugs match. The templates are also registered in `theme.json` as selectable custom templates.

## Assign Page Templates

If slug-based loading does not apply in the staging environment:

1. Open the page editor.
2. Open the page settings sidebar.
3. Find `Template`.
4. Select the matching template:
   - `AI導入支援`
   - `サービス`
   - `技術`
   - `採用情報`
   - `会社情報`
   - `お問い合わせ`
5. Update the page.

## Check Header And Footer

- Confirm the header logo appears.
- Confirm desktop navigation links point to `/ai/`, `/services/`, `/technology/`, `/recruit/`, `/company/`.
- Confirm the `無料相談` button links to `/contact/`.
- Confirm footer navigation and footer logo appear.

## Verify SEO Metadata

1. Open the browser page source.
2. Confirm the page has a `<title>`.
3. Confirm `meta name="description"` exists.
4. Confirm canonical URL exists.
5. Confirm Open Graph tags exist:
   - `og:title`
   - `og:description`
   - `og:image`
6. Confirm Twitter card tags exist.
7. Confirm `og:image` points to the theme asset `assets/images/ogp-default.svg`.

## Known Limitations

- Contact form is a visual placeholder and does not send email.
- Logo and OGP assets are temporary SVG placeholders.
- Final photography and case-study imagery are not implemented yet.
- SEO metadata is implemented at theme level; no SEO plugin is installed.
- The theme assumes the installed theme directory is `xprospect-brand`.
