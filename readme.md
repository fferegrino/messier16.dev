# Messier 16

Landing page for **Messier 16** — a small software and game development studio. Built with [Astro](https://astro.build), content-driven and still static so it deploys to GitHub Pages.

## CMS-style content (no backend)

- **Site copy** — Edit `src/config/site.ts` for tagline, about text, and contact links.
- **Projects (apps & games)** — Add or edit JSON files in `src/content/projects/`. Each file is one project. Schema:
  - `title`, `description`, `href` (URL), `type`: `"app"` or `"game"`
  - Optional: `image` (path under `public/`)

Example: create `src/content/projects/my-game.json`:

```json
{
  "title": "My Game",
  "description": "A short hook for the game.",
  "href": "https://store.steampowered.com/...",
  "type": "game"
}
```

Build runs at deploy time (or when you run `npm run build`), so the site stays static. No SSR on GitHub Pages — content is “baked in” when you build.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. In the repo: **Settings → Pages**. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. In `astro.config.mjs`, set `site` to your Pages URL and `base` to your repo name (e.g. `base: '/messier16.dev'`). Use `base: '/'` if you use a custom domain.
4. Push to the `main` branch; the workflow builds and deploys the site.

The site will be at `https://<username>.github.io/messier16.dev/` (or your repo name).
