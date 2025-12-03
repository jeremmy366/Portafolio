import { getCollection } from 'astro:content';

export async function GET() {
    const baseUrl = 'https://jeremmy.dev'; // Replace with actual domain
    const pages = [
        { url: '/', changefreq: 'weekly', priority: 1.0 },
        { url: '/en/', changefreq: 'weekly', priority: 1.0 },
    ];

    // We can also add dynamic routes if we had them (e.g. project details pages)
    // But currently projects are displayed on the main page.

    const sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
            .map(
                (page) => `
    <url>
      <loc>${baseUrl}${page.url}</loc>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>
  `
            )
            .join('')}
</urlset>`.trim();

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
