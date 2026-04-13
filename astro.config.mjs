// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';  // Use /serverless for SSR
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.saasential.tech',
  output: 'server',  // Required for SSR
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [icon(), sitemap()],
});