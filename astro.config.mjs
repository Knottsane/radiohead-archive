// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://knottsane.github.io',
  base: '/radiohead-archive/',
  vite: {
    plugins: [tailwindcss()],
    build: { cssMinify: true }
  },

  integrations: [mdx(), sitemap()]
});
