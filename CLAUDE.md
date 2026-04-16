# CLAUDE.md

This file documents the repository structure, conventions, and workflows for AI assistants working on this codebase.

## Repository Overview

This is the GitHub Pages hosting repository for a personal website accessible at **wokai.cc**. It contains the **production build output** of a React-based comment application — there are no source files here. The repository is deployed automatically by GitHub Pages from the `master` branch.

- **Live URL**: https://wokai.cc
- **GitHub Repo**: mmwuzhi/mmwuzhi.github.io
- **Site title**: 神秘网站 (Mysterious Website)
- **Site tagline**: 慢慢试试找感觉 (Slowly try to get the feel)

## Technology Stack

| Layer | Technology |
|---|---|
| Framework | React v16.13.1 (production build) |
| State management | Redux |
| Build tool | Create React App (Webpack v4) |
| PWA | Service Worker (Workbox v4.3.1), Web App Manifest |
| Hosting | GitHub Pages |
| Custom domain | `wokai.cc` (configured via `CNAME`) |
| Jekyll theme | `jekyll-theme-hacker` (declared in `_config.yml`, overridden by React build) |

## Repository Structure

```
mmwuzhi.github.io/
├── static/                     # Compiled, versioned build assets
│   ├── css/
│   │   └── main.<hash>.chunk.css         # Minified application styles
│   └── js/
│       ├── 2.<hash>.chunk.js             # Vendor bundle (React, Redux, etc.)
│       ├── main.<hash>.chunk.js          # Application code bundle
│       └── runtime-main.<hash>.js        # Webpack bootstrap runtime
├── index.html                  # SPA entry point; mounts React at <div id="root">
├── manifest.json               # PWA web app manifest
├── asset-manifest.json         # Maps logical names to hashed filenames
├── precache-manifest.*.js      # Service worker precache list
├── service-worker.js           # Workbox-based PWA service worker
├── favicon.ico                 # Site favicon
├── logo192.png                 # PWA icon (192×192)
├── logo512.png                 # PWA icon (512×512)
├── robots.txt                  # Allows all crawlers (no restrictions)
├── CNAME                       # Custom domain: wokai.cc
├── _config.yml                 # Jekyll theme declaration (jekyll-theme-hacker)
└── README.md                   # Minimal readme ("慢慢试试找感觉")
```

## Application Features (inferred from build artifacts)

The React application (`webpackJsonpcomment-app`) implements:

- **Comment input form** — allows users to submit comments
- **Comment list display** — renders submitted comments with timestamps
- **Comment items** — individual comment components
- **Clock display** — live clock component
- **Local persistence** — comments stored via `localStorage`
- **Redux state management** — manages comment state

### Styling

The CSS (500 px centered wrapper) uses:
- White background
- Cyan accent color: `#00a3cf`
- Light gray borders for comment items
- Code snippet display with background + border styling

## Important Constraints

### This repository holds build artifacts only

- **No `src/` directory** — source code lives in a separate (private) repository
- **No `package.json`** — do not attempt to run `npm install` or any build commands here
- **No CI/CD configuration** — no `.github/workflows/` or similar files
- All `.js` and `.css` files under `static/` are minified and content-hashed; do not edit them directly

### Deployment model

GitHub Pages serves the `master` branch root directly. Pushing new build artifacts to `master` constitutes a deployment. No build step runs in this repository.

## Development Branch Convention

Active development uses the branch naming pattern:

```
claude/<description>-<id>
```

Example: `claude/add-claude-documentation-0L8S4`

Changes are developed on these branches and merged into `master` via pull request.

## Git Commit Conventions

Commit messages in this repository are informal and often written in Chinese. There is no enforced commit message format. Use plain English or Chinese for commit messages. Keep them concise and descriptive.

Examples from history:
- `新版！！！` (New version!!!)
- `改下title不然太傻` (Change title, otherwise it's stupid)
- `Update CNAME`

## Updating the Site

To update the site, replace the production build artifacts with a newly generated build from the source repository. The typical workflow is:

1. Build the React app in the source repository (`npm run build`)
2. Copy the `build/` output into this repository, replacing existing files
3. Commit and push to `master`

Key files that change between builds:
- `static/css/main.<new-hash>.chunk.css`
- `static/js/*.chunk.js` and `runtime-main.*.js`
- `index.html` (references updated hashed asset paths)
- `asset-manifest.json`
- `precache-manifest.*.js`

## PWA Notes

- The service worker (`service-worker.js`) uses Workbox v4.3.1 and precaches all main assets for offline support.
- When deploying a new build, the old `precache-manifest.*.js` file should be replaced with the new one (filename includes a content hash).
- The `manifest.json` currently uses placeholder values (`"Create React App Sample"`) — these can be updated to match the actual site branding.

## Sensitive Files

- `CNAME` — controls the live domain; do not modify without intending a domain change.
- `service-worker.js` — controls offline caching; incorrect changes can break site access for returning users.
