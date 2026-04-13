// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';  // No /serverless for v10
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.saasential.tech',
  output: 'server',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [icon(), sitemap()],
});