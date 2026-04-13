export { renderers } from '../renderers.mjs';

// src/pages/sitemap.xml.js
async function GET() {
  const site = 'https://saasential.tech';
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OWQ3OWJjODE1NjdhM2RjODcyYzI0YzIiLCJjbGllbnRJZCI6IjY5ZDc5YmM4MTU2N2EzZGM4NzJjMjRjMCIsInJvbGUiOiJvd25lciIsImlhdCI6MTc3NTczNzgwMCwiZXhwIjoxOTAxOTY4MjAwfQ.N49bDXdG4rF-3ryJRx9rMdTh2Mhhab8llfFzIvjr4z4';
  
  // Fetch articles from your API
  const response = await fetch('https://api.meetingmaker.tech/blog/articles', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  
  const data = await response.json();
  const articles = data.articles || [];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Static pages -->
  <url>
    <loc>${site}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${site}/blog</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>0.8</priority>
  </url>
  
  <!-- Blog articles from your widget -->
  ${articles.map(article => `
  <url>
    <loc>${site}/blog/${article.slug}</loc>
    <lastmod>${new Date(article.publishedAt).toISOString()}</lastmod>
    <priority>0.7</priority>
  </url>
  `).join('')}
</urlset>`;
  
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
