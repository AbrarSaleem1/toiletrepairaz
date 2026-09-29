import type { APIRoute } from 'astro';
import { arizonaCities, servicesList } from '../data/cities';

export const GET: APIRoute = async () => {
  const baseUrl = 'https://toiletrepairaz.us';

  const staticPages = [
    '',
    'services/',
    'locations/',
    'about-us/',
    'contact-us/',
    'privacy-policy/',
    'terms/',
  ];

  const servicePages = servicesList.map(s => `services/${s.slug}/`);
  
  // We can include live locations
  const cityPages = arizonaCities.map(c => `locations/${c.slug}/`);

  const allPages = [...staticPages, ...servicePages, ...cityPages];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    page => `  <url>
    <loc>${baseUrl}/${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : page.startsWith('services/') ? '0.9' : page.startsWith('locations/') ? '0.8' : '0.7'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
