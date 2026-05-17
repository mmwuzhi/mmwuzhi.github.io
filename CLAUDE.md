# CLAUDE.md

This file documents the repository structure, conventions, and workflows for AI assistants working on this codebase.

## Repository Overview

This is the source repository for **Lacuna** (余白), a personal blog and homepage accessible at **mmwuzhi.dev**. It is an Astro static site with TypeScript, trilingual support (Chinese / English / Japanese), and GitHub Pages deployment.

- **Live URL**: https://mmwuzhi.dev
- **GitHub Repo**: mmwuzhi/mmwuzhi.github.io
- **Site name**: Lacuna / 余白
- **Default language**: Chinese (zh), with /en/ and /ja/ routes

## Technology Stack

| Layer | Technology |
|---|---|
| Framework | Astro v6 (static output) |
| Language | TypeScript (strict) |
| Styling | Plain CSS (component-scoped) |
| i18n | Astro built-in i18n, 3 locales |
| Content | Astro Content Collections (Markdown) |
| Search | Pagefind (post-build index) |
| PWA | @vite-pwa/astro |
| Hosting | GitHub Pages |
| Custom domain | `mmwuzhi.dev` (via `public/CNAME`) |

## Repository Structure

```
mmwuzhi.github.io/
├── src/
│   ├── components/
│   │   ├── Giscus.astro        # Comment system (GitHub Discussions)
│   │   ├── Hero.astro          # Homepage hero, lang-aware typography
│   │   ├── Nav.astro           # Sticky nav + custom language dropdown
│   │   ├── PostItem.astro      # Single post row with left-border hover
│   │   └── PostList.astro      # Post list section with header
│   ├── content/
│   │   ├── blog/               # *.zh.md / *.en.md / *.ja.md
│   │   ├── garden/             # Digital garden notes (*.zh.md etc.)
│   │   └── now/                # Now page content (zh.md / en.md / ja.md)
│   ├── i18n/
│   │   ├── translations.ts     # All UI strings for zh / en / ja
│   │   └── utils.ts            # switchLangPath() for locale-aware routing
│   ├── layouts/
│   │   ├── BaseLayout.astro    # HTML shell: Nav + slot + Footer + search modal
│   │   ├── BlogPost.astro      # Single blog post layout
│   │   ├── GardenList.astro    # Garden index layout
│   │   └── GardenNote.astro    # Single garden note layout
│   ├── pages/
│   │   ├── 404.astro
│   │   ├── about.astro         # /about (zh)
│   │   ├── index.astro         # / (zh)
│   │   ├── now.astro           # /now (zh)
│   │   ├── rss.xml.ts          # RSS feed
│   │   ├── blog/               # /blog index + [slug].astro
│   │   ├── garden/             # /garden index + [slug].astro
│   │   ├── en/                 # /en/* mirrors
│   │   └── ja/                 # /ja/* mirrors
│   ├── styles/
│   │   └── global.css          # CSS variables, reset, lang-specific type rules
│   ├── utils/
│   │   ├── adjacentPosts.ts    # Prev/next post navigation
│   │   ├── backlinks.ts        # Garden note backlink detection
│   │   ├── filterPosts.ts      # Filter posts by lang/category
│   │   ├── readingTime.ts      # Estimated reading time (lang-aware)
│   │   ├── search.ts           # Pagefind locale detection + translations
│   │   └── toc.ts              # Table of contents extraction
│   ├── content.config.ts       # Content collection schemas
│   └── env.d.ts                # TypeScript ambient declarations (PagefindUI)
├── public/
│   ├── CNAME                   # Custom domain: mmwuzhi.dev
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── og.png                  # Default Open Graph image
│   └── robots.txt
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── DESIGN.md                   # Visual design reference
```

## Typography Rules

Typography varies by language — this is intentional:

| Language | Headings | Body |
|---|---|---|
| 中文 (zh) | Serif (Georgia / Noto Serif SC) | Sans-serif |
| English (en) | Sans-serif, weight 600 | Serif |
| 日本語 (ja) | Sans-serif, weight 600 | Sans-serif |

Accent color `#b85c22` is applied to `<em>` in hero titles across all languages.

## i18n

- Default locale `zh` has no URL prefix (`/`)
- English at `/en/`, Japanese at `/ja/`
- All UI strings live in `src/i18n/translations.ts`
- `switchLangPath(from, to, currentPath)` in `src/i18n/utils.ts` handles URL conversion between locales
- Blog posts are separate Markdown files per language, identified by `lang` frontmatter field

### Adding a blog post

Create `src/content/blog/<postSlug>.<lang>.md` with frontmatter:

```markdown
---
title: 文章标题
date: 2026-04-19
category: 技术
lang: zh
postSlug: your-slug
---
```

Same `postSlug` value across language files links them as translations of each other.

### Adding a garden note

Create `src/content/garden/<postSlug>.<lang>.md` with frontmatter:

```markdown
---
title: 笔记标题
created: 2026-04-19
updated: 2026-04-19
stage: seedling   # seedling | budding | evergreen
tags: [idea, dev]
lang: zh
postSlug: your-slug
---
```

Garden notes support backlinks: if note A links to `/garden/B`, note B's page shows A in its "Referenced by" section.

### Updating the now page

Edit one of the three files in `src/content/now/` (`zh.md`, `en.md`, `ja.md`). Frontmatter:

```markdown
---
updated: 2026-04-19
lang: zh
---
```

No slug — one file per locale, rendered at `/now`, `/en/now`, `/ja/now`.

## Content Schemas

Source of truth: `src/content.config.ts`.

**Blog**

| Field | Type | Notes |
|---|---|---|
| `title` | string | |
| `date` | date | |
| `category` | string | |
| `lang` | `zh\|en\|ja` | |
| `postSlug` | string | same value across locales links translations |

**Garden**

| Field | Type | Notes |
|---|---|---|
| `title` | string | |
| `created` | date | |
| `updated` | date | |
| `stage` | `seedling\|budding\|evergreen` | |
| `tags` | string[] | optional, defaults to `[]` |
| `lang` | `zh\|en\|ja` | |
| `postSlug` | string | |

**Now**

| Field | Type |
|---|---|
| `updated` | date |
| `lang` | `zh\|en\|ja` |

## Development

```bash
pnpm install
pnpm dev      # dev server at localhost:4321
pnpm build    # static build → dist/ + Pagefind search index
pnpm test     # run unit tests (Vitest)
pnpm preview  # preview dist/ locally
```

Always run `pnpm test` before merging to the main branch.

**Pagefind doesn't work in `pnpm dev`.** The search index is only generated during `pnpm build`, so the search modal will appear empty (or fail to load) when running `pnpm dev`. To test search end-to-end locally, run `pnpm build && pnpm preview`.

## Deployment

Push to `main` — GitHub Actions builds the site and deploys to GitHub Pages automatically via `.github/workflows/deploy.yml`.

## Key Architecture Decisions

### Astro CSS Scoping

Astro's `<style>` blocks scope rules by appending `[data-astro-cid-xxx]` to the **last selector segment**. Elements injected at runtime (e.g. Pagefind UI) don't carry this attribute, so scoped rules silently fail.

Use `:global()` for any CSS targeting dynamically injected elements:

```css
/* works */
#search-ui :global(.pagefind-ui__search-clear) { font-size: 0; }

/* broken — Pagefind elements have no astro-cid attribute */
#search-ui .pagefind-ui__search-clear { font-size: 0; }
```

### Astro View Transitions

`ClientRouter` (View Transitions) does a head swap on navigation, which removes dynamically injected `<link>` elements — including the Pagefind CSS. Additionally, `pagefindScriptPromise` stays non-null, so the promise guard short-circuits before CSS can be re-injected.

Fix: check for the CSS `<link>` on every `loadPagefindScript()` call and re-inject if absent, regardless of promise state.

`astro:page-load` fires after each navigation and is the correct event to hook for re-initialising client-side state.

### i18n Routing

- zh: no prefix → `/`, `/blog/slug`
- en: `/en`, `/en/blog/slug`
- ja: `/ja`, `/ja/blog/slug`

All path conversions go through `switchLangPath(from, to, currentPath)` in `src/i18n/utils.ts`. When `from === to`, it returns `currentPath` unchanged (prevents 404 on same-locale switch).

### Backlinks

`findBacklinks` in `src/utils/backlinks.ts` uses a regex with a negative lookahead `(?![\w-])` instead of `String.includes()` to avoid false positives where one slug is a prefix of another (e.g. `alpha` matching `alpha-extended`).

### BaseLayout inline scripts

`src/layouts/BaseLayout.astro` contains two `<script is:inline>` blocks in `<head>` that run **synchronously before paint**. Both are intentional — do not move them out of head or wrap in deferred loading.

- **Theme FOUC prevention** — reads `localStorage('theme')` (values `'dark'` / `'light'`), falls back to `prefers-color-scheme`, then sets `data-theme` on `<html>`. Must run before body renders to avoid a flash of the wrong theme.
- **Home-page language redirect** — only fires on `/`, `/en/`, `/ja/`. Reads `localStorage('preferred-lang')` (set by the lang dropdown in `Nav.astro`), falls back to `navigator.language`. If the stored/preferred locale doesn't match the current URL, it calls `location.replace()` to redirect. A first-time visit from a Japanese browser will land on `/ja/` automatically — this is by design.

## Testing & Workflow

### Testing scope

- Tests live in `src/utils/*.test.ts` and `src/i18n/*.test.ts` (Vitest)
- They cover **pure utility functions only** — routing, translations, reading time, backlinks, TOC, filtering, etc.
- Astro components, layouts, and pages are **not** tested. There is no E2E or visual regression coverage.
- Passing tests means utility correctness, **not** feature correctness. For UI changes, build and preview manually before merging.

### Workflow rules

- **Always run `pnpm test` before merging to main.** Tests catch regressions in routing, translation parity, and utility functions.
- **Do not delete or overwrite content without explicit user confirmation.**
- **Separate commits by feature** — one logical change per commit.

## Development Branch Convention

```
claude/<description>-<id>
```

Example: `claude/add-claude-documentation-0L8S4`

## Git Commit Conventions

English only. Informal, no enforced format — keep messages concise.

## Sensitive Files

- `public/CNAME` — controls the live domain; do not modify without intending a domain change.
