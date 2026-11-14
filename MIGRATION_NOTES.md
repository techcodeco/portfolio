# Migration notes

## Framework migration

- Replaced the Vite entry point with the Next.js 16 App Router (`src/app/layout.jsx` and `src/app/page.jsx`).
- Added Next metadata and the original theme color.
- Added a JavaScript import alias (`@/*`) for the `src` directory.
- Moved the original site stylesheet and both visual-component stylesheets into `src/app/globals.css` in their original order.

## Modular structure

- `src/components/portfolio`: page composition and state orchestration.
- `src/components/layout`: header, footer, lazy sections and marquee layout.
- `src/components/sections`: Hero, About, Skills, Architecture, Projects, Certificates, Contact and reusable section cards.
- `src/components/ui`: reusable UI primitives and scroll progress.
- `src/components/effects`: cursor, canvas, loader and motion effects.
- `src/components/terminal`: terminal modal and launcher.
- `src/components/ParticleText` and `src/components/DepthText`: standalone interactive visual components.
- `src/data`: portfolio data, localized copy and code-editor samples.

## Corrections made without redesign

- Fixed literal `\\n` sequences in the original CSS that prevented PostCSS from parsing the stylesheet.
- Removed a render-time `document` read from the technology-card render path to make server prerendering safe.
- Restored the terminal's `cat` command by removing an empty duplicate branch that shadowed its implementation.
- Fixed Code Editor newline accounting so line numbers and typing progress follow the displayed lines.
- Added fallbacks where `IntersectionObserver` or `ResizeObserver` are unavailable.
- Changed the particle canvas touch action to allow normal vertical page scrolling on touch devices.
- Added an off-screen semantic H1 and keyboard semantics for the primary CTA and terminal dialog.

## Validation

- JavaScript / JSX parsing and transpilation checks passed for all source modules.
- Local and `@/` import targets were checked.
- The combined global stylesheet passed PostCSS parsing.
- A full `next build` could not be executed in the migration environment because the npm registry DNS lookup failed (`EAI_AGAIN registry.npmjs.org`). Run `npm install` in a network-enabled environment, then `npm run build`.


## SEO update (2026-11-08)

- Configured the canonical production origin as `https://mohammadafrouzeh.ir`.
- Split the English and Persian home pages into `/` and `/fa`, each with its own root layout, server-rendered language/direction, localized metadata, canonical URL, and reciprocal language alternates.
- Added sitemap and robots route handlers, Open Graph image, SVG icon, and JSON-LD for `WebSite`, `ProfilePage`, and `Person`.
- Added the user's provided name in Persian and Latin scripts and natural full-stack/programmer/web-development terms to the existing About copy without changing its component styling.
- Changed `LazySection` so its content is present in server-rendered HTML while `content-visibility: auto` retains browser rendering optimization. Previously it conditionally omitted below-the-fold content until an IntersectionObserver fired.
- Added `turbopack.root` to prevent Next.js from selecting a parent directory as the project root on machines with an ancestor lockfile.
- No Google ranking, indexing, or rich-result outcome can be guaranteed. Search Console ownership verification and sitemap submission remain deployment steps.

- Localized project summaries, architecture diagram labels, certificate headings/status labels, and the technology showcase supporting copy for the Persian route.
- Certificate cards no longer present a fake `#` destination as a verification link; they state that a verification URL has not been provided. The displayed certificate claims themselves still need the owner's verification.

## Custom 404 update

- Added a branded, responsive 404 experience using the existing TechCodeCo palette and glass/grid visual system.
- Added separate English and Persian RTL not-found screens.
- Added localized catch-all routes that invoke `notFound()` for real HTTP 404 handling.
- Added an accessible home link and a history-back action with a homepage fallback.
