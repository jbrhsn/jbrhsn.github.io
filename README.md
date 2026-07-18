# Jabirhusain KP - Portfolio

Cyberpunk-anime themed portfolio. Static SPA build ships to GitHub Pages.

## Dev

Runs via TanStack Start:

```
bun run dev
```

Route: `src/routes/index.tsx` renders `<Portfolio />` from `src/portfolio/`.

## Static build for GitHub Pages

A separate Vite config (`vite.static.config.ts`) builds a plain React SPA into `dist-static/` using the same portfolio components; no TanStack Start server needed.

```
bunx vite build --config vite.static.config.ts
```

Output: `dist-static/index.html` + assets. Base path defaults to `./` (portable). For a project page, set `VITE_BASE=/<repo>/`.

## Deploy

1. Push this repo to GitHub.
2. In repo **Settings → Pages**, set **Source: GitHub Actions**.
3. Push to `main`. The `.github/workflows/deploy.yml` workflow builds and publishes.
   - It auto-detects the base path from the repo name (`/repo/`), or uses `/` for a `<user>.github.io` repo.
   - Adds `.nojekyll` and a `404.html` SPA fallback.

Site will be live at `https://<user>.github.io/<repo>/`.

## Content

All copy lives in `src/portfolio/data.ts`; edit there to update the site.
