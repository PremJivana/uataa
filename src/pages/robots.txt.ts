import type { APIRoute } from 'astro';

// Tant que le site n'est pas ouvert aux moteurs de recherche, on leur demande de ne rien parcourir.
export const GET: APIRoute = ({ site }) => {
  const indexable = import.meta.env.PUBLIC_INDEXABLE === 'true';
  const base = import.meta.env.BASE_URL;
  const plan = site ? new URL(`${base.replace(/\/$/, '')}/sitemap-index.xml`, site).href : '';
  const corps = indexable
    ? `User-agent: *\nAllow: /\n${plan ? `\nSitemap: ${plan}\n` : ''}`
    : 'User-agent: *\nDisallow: /\n';
  return new Response(corps, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
