import type { APIRoute } from 'astro';

// Site caché : les robots peuvent lire les pages pour y voir la consigne « noindex » (et retirer celles déjà indexées),
// mais aucun plan du site ne leur est donné.
export const GET: APIRoute = ({ site }) => {
  const indexable = import.meta.env.PUBLIC_INDEXABLE === 'true';
  const base = import.meta.env.BASE_URL;
  const plan = site ? new URL(`${base.replace(/\/$/, '')}/sitemap-index.xml`, site).href : '';
  const corps = indexable
    ? `User-agent: *\nAllow: /\n${plan ? `\nSitemap: ${plan}\n` : ''}`
    : 'User-agent: *\nAllow: /\n';
  return new Response(corps, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
