export async function GET() {
  const site = 'https://saasential.tech';
  const blogSite = 'https://blog.saasential.tech';
  
  // You no longer need the token - using public SSR endpoint
  // First, get the client ID for saasential.tech
  const domainLookup = await fetch('https://api.meetingmaker.tech/blog/public/client/by-domain/blog.saasential.tech');
  const domainData = await domainLookup.json();
  const clientId = domainData.clientId;
  
  // Fetch articles from SSR endpoint (no token needed)
  const response = await fetch(`https://api.meetingmaker.tech/blog/ssr/articles?clientId=${clientId}&limit=100`);
  const data = await response.json();
  const articles = data.articles || [];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Static pages on main site -->
  <url>
    <loc>${site}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${site}/services</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${site}/our-work</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${site}/contact</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <!-- Blog homepage on SSR domain -->
  <url>
    <loc>${blogSite}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Blog articles on SSR domain -->
  ${articles.map(article => `
  <url>
    <loc>${blogSite}/${article.slug}</loc>
    <lastmod>${new Date(article.publishedAt || article.updatedAt).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  `).join('')}
</urlset>`;
  
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}