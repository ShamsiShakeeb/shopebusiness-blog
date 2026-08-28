# Shop-E-Business Blog

Jekyll blog served at `https://shopebusiness.com/blog/`.

## Writing a post

Add a file to `_posts/` named `YYYY-MM-DD-slug.html`. A post contains **front matter,
plain HTML and (optionally) a script — never CSS**. All styling lives in
`_includes/blog.css` and is applied by `_layouts/default.html`.

```html
---
layout: default
title: "English title"
title_bn: "বাংলা শিরোনাম"          # optional
date: 2026-08-28
author: "Washiq Anwar Shamsi"
description: "Meta description, also used as the excerpt on the blog index."
keywords: "comma, separated, keywords"
---

<div id="content-en" class="lang-en">
  <p>English copy: h2/h3, p, ul, ol, table, blockquote, img, iframe…</p>
</div>

<div id="content-bn" class="lang-bn">
  <p>বাংলা কপি…</p>
</div>
```

The layout renders the page title, author/date line, header, language switcher and
footer, so posts should not repeat them (no `<html>`, `<head>`, `<style>` or `<h1>`
of the title).

## What the shared CSS/JS handles for you

- Mobile-first responsive typography, spacing and a single-column reading measure.
- Language switching (`#content-en` / `#content-bn`, plus any element with
  `data-en` / `data-bn` attributes); the choice is remembered in `localStorage`.
- Tables are wrapped automatically so wide tables scroll horizontally on phones.
- Any `<iframe>` becomes a responsive 16:9 frame; `.video-container` also works.
- Optional class hooks for richer blocks: `.benefit-card`, `.feature-box`,
  `.callout`, `.price-box`, `.cta-button`, `.highlight-col`,
  `.table-header-highlight`.

## Local preview

```bash
gem install jekyll jekyll-sitemap
jekyll serve
```
