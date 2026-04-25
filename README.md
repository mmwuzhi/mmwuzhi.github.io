# Lacuna

Personal blog and homepage at [mmwuzhi.dev](https://mmwuzhi.dev) — trilingual (Chinese / English / Japanese).

## Stack

- [Astro](https://astro.build) v6 — static site generation
- TypeScript
- Plain CSS, no framework
- [Pagefind](https://pagefind.app) — full-text search
- GitHub Pages — hosting

## Features

- Trilingual content with automatic language detection
- Blog with category filtering
- Digital garden with maturity stages and tag filtering
- Full-text search across all pages
- Dark/light mode with persistence
- RSS feed
- Table of contents on long posts

## Development

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # static build → dist/ + search index
pnpm test     # unit tests
pnpm preview  # preview dist/ locally
```

## Content

Blog posts and garden notes live in `src/content/`. Each piece of content has a `lang` field (`zh` / `en` / `ja`) to associate it with a locale.

```
src/content/
├── blog/       # *.zh.md / *.en.md / *.ja.md
├── garden/     # digital garden notes
└── now/        # now page (zh.md / en.md / ja.md)
```
