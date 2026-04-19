# CLAUDE.md

This file documents the repository structure, conventions, and workflows for AI assistants working on this codebase.

## Repository Overview

This is the source repository for **余白** (Margins), a personal blog and homepage accessible at **wokai.cc**. It is an Astro static site with TypeScript, trilingual support (Chinese / English / Japanese), and GitHub Pages deployment.

- **Live URL**: https://wokai.cc
- **GitHub Repo**: mmwuzhi/mmwuzhi.github.io
- **Site name**: 余白
- **Default language**: Chinese (zh), with /en/ and /ja/ routes

## Technology Stack

| Layer | Technology |
|---|---|
| Framework | Astro v6 (static output) |
| Language | TypeScript (strict) |
| Styling | Plain CSS (component-scoped) |
| i18n | Astro built-in i18n, 3 locales |
| Content | Astro Content Collections (Markdown) |
| Hosting | GitHub Pages |
| Custom domain | `wokai.cc` (via `public/CNAME`) |

## Repository Structure

```
mmwuzhi.github.io/
├── src/
│   ├── components/
│   │   ├── Hero.astro          # Homepage hero, lang-aware typography
│   │   ├── Nav.astro           # Sticky nav + language dropdown
│   │   ├── PostItem.astro      # Single post row with left-border hover
│   │   └── PostList.astro      # Post list section with header
│   ├── content/
│   │   └── blog/               # Markdown posts (*.zh.md / *.en.md / *.ja.md)
│   ├── i18n/
│   │   └── translations.ts     # All UI strings for zh / en / ja
│   ├── layouts/
│   │   └── BaseLayout.astro    # HTML shell: Nav + slot + Footer
│   ├── pages/
│   │   ├── index.astro         # / (Chinese, default)
│   │   ├── en/index.astro      # /en/
│   │   └── ja/index.astro      # /ja/
│   ├── styles/
│   │   └── global.css          # CSS variables, reset, lang-specific type rules
│   └── content.config.ts       # Content collection schema
├── public/
│   ├── CNAME                   # Custom domain: wokai.cc
│   ├── robots.txt
│   ├── favicon.ico
│   └── favicon.svg
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Typography Rules

Typography varies by language — this is intentional:

| Language | Title font | Body font |
|---|---|---|
| 中文 (zh) | Serif (Georgia / Noto Serif SC) | Sans-serif |
| English (en) | Sans-serif, weight 600 | Serif |
| 日本語 (ja) | Sans-serif, weight 600 | Sans-serif |

Accent color `#b85c22` is applied to `<em>` in hero titles across all languages.

## i18n

- Default locale `zh` has no URL prefix (`/`)
- English at `/en/`, Japanese at `/ja/`
- All UI strings live in `src/i18n/translations.ts`
- Blog posts are separate Markdown files per language, identified by `lang` frontmatter field

### Adding a blog post

Create `src/content/blog/<slug>.<lang>.md` with frontmatter:

```markdown
---
title: 文章标题
date: 2026-04-19
category: 技术
lang: zh
slug: your-slug
---
```

Same `slug` value across language files links them as translations of each other.

## Development

```bash
npm install
npm run dev      # dev server at localhost:4321
npm run build    # static build → dist/
npm run preview  # preview dist/ locally
```

## Deployment

Build output goes to `dist/`. GitHub Pages serves from the `master` branch root — deployment requires copying `dist/*` to the repo root and pushing, or via GitHub Actions (not yet configured).

## Development Branch Convention

```
claude/<description>-<id>
```

Example: `claude/add-claude-documentation-0L8S4`

## Git Commit Conventions

Informal, often Chinese. No enforced format — keep messages concise.

## Sensitive Files

- `public/CNAME` — controls the live domain; do not modify without intending a domain change.
