# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

A minimal single-page React app scaffolded with Vite (currently the default Vite + React starter page). React 19, plain JavaScript with JSX — no TypeScript, no router, no test framework. The README is written in Chinese.

## Commands

```bash
npm install        # install dependencies
npm run dev        # start Vite dev server with HMR
npm run build      # production build to dist/
npm run preview    # serve the production build locally
npm run lint       # ESLint over the whole repo
```

There is no test command.

## Structure and conventions

- Entry chain: `index.html` → `src/main.jsx` (mounts `<App />` in `StrictMode`) → `src/App.jsx` (the entire UI, one component).
- Styles are plain CSS: `src/index.css` (global) and `src/App.css` (component), imported directly from the JSX.
- Static assets: `public/` files are served at the site root (e.g. `/icons.svg`, referenced via SVG `<use href="/icons.svg#...">`); images that go through the bundler live in `src/assets/` and are imported in JSX.
- ESLint uses flat config (`eslint.config.js`) with `@eslint/js` recommended, `react-hooks`, and `react-refresh` rules; `dist/` is ignored. Note the custom rule: unused variables are errors unless the name matches `^[A-Z_]`.
- `vite.config.js` is stock (`@vitejs/plugin-react` only). The default branch is `main`.
