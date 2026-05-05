# DESIGN.md

Visual design reference for Lacuna (余白).

## Color Palette

All colors are defined as CSS custom properties in `src/styles/global.css`.

| Token | Light | Dark |
|---|---|---|
| `--bg` | `#faf7f2` | `#18160f` |
| `--text` | `#1e1a16` | `#e8ddd0` |
| `--text2` | `#9a8470` | `#8a7a6a` |
| `--accent` | `#b85c22` | `#b85c22` |
| `--border` | `#e8ddd0` | `#2c2820` |

The palette is warm and paper-like — no harsh whites or pure blacks. Accent `#b85c22` is a terracotta/rust tone used for links, hover states, left-border on post items, and `<em>` in hero titles.

Dark mode is applied via:
1. `@media (prefers-color-scheme: dark)` — respects OS preference by default
2. `[data-theme='dark'|'light']` attribute on `<html>` — toggled by JS, persisted in `localStorage`

## Typography

Font stacks are defined in `src/styles/global.css`:

```css
--serif: 'Georgia', 'Noto Serif SC', 'Noto Serif JP', serif;
--sans:  system-ui, -apple-system, 'PingFang SC', 'Hiragino Sans', sans-serif;
```

Typography varies intentionally by language so each feels native:

| Language | Headings | Body prose |
|---|---|---|
| 中文 (zh) | `--serif`, normal weight | `--sans` |
| English (en) | `--sans`, weight 600, `letter-spacing: -0.02em` | `--serif` (`.prose`) |
| 日本語 (ja) | `--sans`, weight 600 | `--sans` |

Rules are applied via `:lang()` selectors so they activate automatically based on the `lang` attribute on `<html>`.

Accent color `#b85c22` is applied to `<em>` inside hero titles across all three languages.

## Layout

- **Max content width**: `680px` (`--max-width`)
- **Horizontal padding**: `4rem` desktop → `1.25rem` on screens ≤ 640px (`--page-x`)
- **Line height**: `1.7` base, `1.85` in `.prose`
- **Sticky nav** at top; `scroll-padding-top: 5rem` so anchor links clear it
- **Back-to-top button** appears on long pages

## Favicon

32×32 SVG in `public/favicon.svg`. Shape: rounded rectangle with a **cut corner** at the bottom-right — a simple geometric mark that reads clearly at small sizes.

```
M5,0 H27 Q32,0 32,5 V21 L21,32 H5 Q0,32 0,27 V5 Q0,0 5,0 Z
```

Fill: `#b85c22` (accent color). The cut corner is a visual nod to the site name 余白 (margin / blank space).

## Component Patterns

### Post list item (`PostItem.astro`)
- Left border in `--accent` on hover
- Date shown as `YYYY/MM`, font size `1rem`, color `--text2`
- Title and date on the same row, date right-aligned

### Navigation (`Nav.astro`)
- Logo left, links + controls right
- Custom language dropdown (not native `<select>`) for consistent cross-browser styling
- SVG chevron arrow indicates dropdown state; rotates 180° when open
- Search icon button opens a `<dialog>` modal

### Garden stages
Displayed as grouped sections on the garden index, ordered seedling → budding → evergreen.

| Stage | zh | en | ja |
|---|---|---|---|
| seedling | 萌芽 | Seedling | 芽生え |
| budding | 生长 | Budding | 成長中 |
| evergreen | 成熟 | Evergreen | 常緑 |

### Search modal
Full-screen `<dialog>` with Pagefind UI. CSS uses `:global()` wrappers because Pagefind injects elements at runtime and they don't carry Astro's scoping attribute.

## Design Principles

- **Warm, calm palette** — paper-like, no harsh contrast
- **Language-native typography** — each language uses the conventions readers expect
- **No UI framework** — plain CSS, component-scoped `<style>` blocks
- **Minimal decoration** — borders and spacing carry the visual structure; no decorative icons or shadows
- **Content first** — narrow max-width keeps reading comfortable; nav is minimal and unobtrusive
