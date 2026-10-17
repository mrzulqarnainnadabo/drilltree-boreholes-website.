import type { APIRoute } from 'astro';

const routes = ['/', '/about/', '/services/', '/process/', '/projects/', '/faqs/', '/contact/'];

export const GET: APIRoute = () => {
  const site = import.meta.env.PUBLIC_SITE_URL;
  if (!site) {
    return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>', {
      headers: { 'Content-Type': 'application/xml' },
    });
  }
  const base = site.replace(/\/$/, '');
  const urls = routes.map((r) => `  <url><loc>${base}${r}</loc></url>`).join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
