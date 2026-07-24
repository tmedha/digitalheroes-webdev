// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update this to the production URL once deployed to Vercel.
// It powers canonical URLs, Open Graph tags, and sitemap.xml.
export default defineConfig({
  site: 'https://infosof.vercel.app',
  output: 'static',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
