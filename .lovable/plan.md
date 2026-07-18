# Cyberpunk Anime Portfolio — Jabirhusain KP

A single-page portfolio with Ghost-in-the-Shell energy, statically built and deployed to GitHub Pages via Actions.

## Design direction

- **Palette:** deep obsidian bg (#05070d), neon magenta (#ff2d92), electric cyan (#00e5ff), phosphor green (#7dff9c) accents, muted foreground grays.
- **Type:** `Orbitron` / `Rajdhani` for headings (angular, sci‑fi), `JetBrains Mono` for code/labels, `Inter` for body. Loaded via `<link>` in root head.
- **Motifs:**
  - Katakana + kanji accents (e.g. データ・エンジニア, 電脳) as decorative side text.
  - Scanlines overlay, subtle CRT flicker, chromatic-aberration hover on titles.
  - Glitch text effect on the name/hero.
  - HUD-style panels with corner brackets `⌐ ¬ ⌐ ¬`, thin cyan borders, hexagonal cell backgrounds.
  - Terminal/console blocks for the achievements ("$ ./deploy observability.sh").
  - Neon grid horizon behind hero, animated slow parallax.
  - Circuit-line SVG dividers between sections.

## Sections

1. **Hero** — glitching name "JABIRHUSAIN.KP", subtitle "DATA × AI ENGINEER // IBM ▸ HEINEKEN", katakana ticker, primary CTAs (View Projects, Contact), floating HUD stats card (4+ yrs · 3 certs · €1K+/mo saved).
2. **About** — narrative paragraph from §2 positioning, dual‑column with kanji sidebar. Location, availability, target roles as chip tags.
3. **Timeline** — vertical neon rail with 4 nodes (Jun 2022 → Jun 2023 → Jan 2025 → Present) styled as mission logs.
4. **Impact / Achievements** — 6 cards in a HUD grid for the achievements in §4.1–4.6, each with a big neon metric (80%, €1K+/mo, 70%, 50–60 hrs, ~91% coverage) + STAR-condensed body.
5. **Projects** — Aria and resume_writer as featured "OPERATIONS", with tech chips, GitHub links, and honest single-operator disclosure per profile §10.10.
6. **Skills & Certifications** — grouped tech stack (Data Platform / Cloud / GenAI / Languages) as terminal listing; 3 active certification badges (Databricks Pro, Azure AI Engineer, Fabric Analytics) with issuer + date.
7. **Contact** — email, phone, LinkedIn, GitHub, personal site as neon terminal prompt links. No form (static site).
8. **Footer** — small katakana signature, build tag.

## Technical approach

- **Stack shift:** replace the TanStack Start SSR shell with a plain **Vite + React 19 + Tailwind v4** SPA — smallest surface for GitHub Pages, no prerender gymnastics.
  - Remove: `src/router.tsx`, `src/routes/*`, `src/routeTree.gen.ts`, `src/server.ts`, `src/start.ts`, TanStack Start/Router deps.
  - Add: `index.html`, `src/main.tsx`, `src/App.tsx`, section components under `src/components/portfolio/`.
  - Update `vite.config.ts` to plain React plugin + `base: '/<repo>/'` (configurable; default `./` for portability).
- **Styling:** keep `src/styles.css` Tailwind v4 setup, extend `@theme` with cyberpunk tokens, add `@utility` classes for `.glitch`, `.scanlines`, `.hud-panel`, `.neon-border`, `.terminal-line`.
- **Motion:** CSS keyframes only (flicker, glitch, marquee, pulse) — no heavy JS libs, keeps bundle small.
- **Content:** hard‑code from the profile doc into a `src/content/profile.ts` module so future edits stay in one file.
- **Images:** procedural SVG (grid, circuits, katakana strips, cert badges) — no generated bitmaps needed; keeps the site fast and free of external assets.
- **SEO:** proper `<title>`, meta description, OG tags in `index.html`; single H1; alt text on all SVGs.
- **Accessibility:** respect `prefers-reduced-motion` (disable glitch/flicker), sufficient contrast on neon-on-dark, semantic landmarks.

## GitHub Pages deployment

- Add `.github/workflows/deploy.yml`: on push to main → `bun install` → `bun run build` → upload `dist/` → `actions/deploy-pages@v4`.
- Add `public/.nojekyll`.
- Document one manual step in README: enable "GitHub Pages → Source: GitHub Actions" and, if not deploying at repo root, set `VITE_BASE` env in the workflow.

## Out of scope

- No CMS, no analytics, no contact form backend, no blog.
- No dark/light toggle — this site is dark by design.

## Deliverable

A finished static site rendering at `/` locally and deployable to `https://jbrhsn.github.io/<repo>/` with the Actions workflow.
