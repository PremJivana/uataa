import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL : adresse publique du site (ex. https://uataa.com). BASE_PATH : sous-dossier éventuel (ex. /uataa).
const site = process.env.SITE_URL;
const base = process.env.BASE_PATH || '/';
const indexable = process.env.PUBLIC_INDEXABLE === 'true';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: site && indexable ? [sitemap()] : [],
});
