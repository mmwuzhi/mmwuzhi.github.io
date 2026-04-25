---
title: Vibe-coding a personal site from scratch
date: 2026-04-25
category: Tech
lang: en
postSlug: rebuilding-with-ai
---

I spent the past few days trying out vibe coding — building this site from scratch with Claude Code.

It started earlier than "let AI write the code." The concept, the feature set, even the name — all of it came out of back-and-forth with the AI. We landed on Astro with plain CSS, trilingual support (Chinese, English, Japanese), and a few sections: Blog, Garden, Now. The name *Lacuna* — a Latin word for a gap or absence — was one of a few candidates the AI suggested. It was my favorite.

Once most of the features were in place, I found a bunch of things were broken. Category filters did nothing when clicked. The theme toggle didn't respond. Dark mode would reset after navigating between pages. Garden tag filters were equally dead. The root cause turned out to be a conceptual mismatch: this is a fully static site, but some of the logic had been written with SSR assumptions — data locked in at build time, useless at runtime.

Fixing the bugs was more interesting than I expected. A few things I hadn't paid attention to before.

## Astro's View Transitions and how scripts behave

The site uses Astro's View Transitions. Instead of doing a full page reload on navigation, it swaps parts of the DOM. This created a subtle problem: I was setting a `data-theme` attribute on `<html>` via JavaScript to control dark mode — but every navigation wiped it out, because Astro was replacing the entire `<html>` element.

The fix is to listen for `astro:before-swap` and copy the attribute from the old document to the new one before the swap happens:

```js
document.addEventListener('astro:before-swap', (e) => {
  const theme = document.documentElement.getAttribute('data-theme');
  if (theme) e.newDocument.documentElement.setAttribute('data-theme', theme);
});
```

A related issue: Astro's `<script>` tags are ES modules by default, and they only run once per session. If you attach event listeners inside one, those listeners are gone after the next navigation replaces the DOM. The right pattern is to listen for `astro:page-load` and re-attach on every navigation. It's by design, not a bug — but easy to miss.

There's an even subtler version of this: `<script is:inline>` placed *outside* the top-level layout component gets rendered after the closing `</html>` tag. Browsers execute it fine, but View Transitions doesn't re-run it after page swaps. The search feature took a few rounds of debugging before I traced it back to this.

## Scoped CSS and its limits

Astro's component CSS is locally scoped — it adds a `data-astro-cid-*` attribute to every selector automatically. The problem is when you write something like:

```css
[data-theme='dark'] .icon-light { display: none; }
```

Astro transforms this into:

```css
[data-theme='dark'][data-astro-cid-xxx] .icon-light[data-astro-cid-xxx] { ... }
```

But `data-theme` lives on `<html>`, which doesn't carry the scope attribute — so the rule never matches. The fix is `:global([data-theme='dark'])`. Not obvious the first time you hit it.

## On writing code with AI

Some people worry that using AI makes you a worse programmer because you stop thinking. That wasn't my experience here. Debugging still required understanding what was wrong. Reading the output still required being able to tell whether it made sense. The AI was more like a collaborator who's always available: I set the direction, it does the legwork.

That said, it does get things wrong with confidence. The `/* @vite-ignore */` incident: the comment was supposed to suppress Vite's warning about an unresolvable dynamic import, but Rollup was throwing an outright *error* — not a warning — because the file didn't exist at build time. The AI missed the distinction. Moments like that still need a second pair of eyes.

Overall: mobile nav, full-text search (Pagefind), and a table of contents for longer posts are all in now, on top of the bug fixes. The site feels usable.

The point was never the site itself.
