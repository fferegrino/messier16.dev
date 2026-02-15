import { defineConfig } from 'astro/config';

// For GitHub Pages: use your repo name as base, or '/' if using custom domain
export default defineConfig({
  site: 'https://your-username.github.io',
  base: '/messier16.dev',
  trailingSlash: 'never',
});
