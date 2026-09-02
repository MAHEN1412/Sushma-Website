# Sushma Reddy Parani — Portfolio

Static 5-page portfolio site, wrapped in a minimal Vite project so it runs with npm — no framework, no rewrite, same hand-authored HTML/CSS/JS as before.

## Getting started

```bash
npm install
npm run dev
```

Opens a local dev server (with hot reload) — Vite prints the URL, usually `http://localhost:5173`.

## Scripts

- `npm run dev` — local dev server with hot reload
- `npm run build` — production build into `dist/` (minified, hashed asset filenames)
- `npm run preview` — serves the `dist/` build locally, to sanity-check before deploying

## Structure

```
index.html               Homepage (hero, selected work, about, footer)
canopy.html               Case study
meridian-freight.html     Case study
folio.html                Case study
contact.html              Contact page
css/style.css             All styles for every page (design tokens, layout, components)
js/main.js                Copy-to-clipboard behavior for the email buttons
vite.config.js            Multi-page build config (all 5 HTML files as entry points)
package.json              npm scripts + Vite as the only dependency
```

Every page links to the same `css/style.css` and `js/main.js`, so a style change in one place updates the whole site.

## Deploying

`npm run build` produces a static `dist/` folder — drop it on Netlify, Vercel, GitHub Pages, S3, or any static host. No server-side code involved.

## Before this goes live

- **Case study content** (Canopy, Meridian Freight, Folio) is placeholder — titles, roles, metrics, and process steps are illustrative. Replace with real project details.
- **Cover images**: each case study's large banner and the homepage thumbnails are CSS-generated placeholder patterns, tagged "Cover placeholder." Swap the `.cover-banner` / `.thumb` elements for real `<img>` tags.
- **Links still pointing to `#`**: LinkedIn, Dribbble, Behance, Résumé (PDF), and the "Schedule a 20-min call" button on the contact page. Search each HTML file for `href="#"` to find them.
- **Email address**: `hello@sushmareddyparani.design` is used throughout (in `mailto:` links and the `data-email` attributes that power the copy buttons). Update it everywhere if it changes.

## Design system

Colors, type, and spacing are defined as CSS custom properties at the top of `css/style.css` (`:root`). The site supports light/dark automatically based on the visitor's OS setting — override by setting `data-theme="dark"` or `data-theme="light"` on the `<html>` element if you want to force one.

Fonts: Archivo (display/body) and JetBrains Mono (labels, data, code-style text), loaded from Google Fonts in each page's `<head>`.
