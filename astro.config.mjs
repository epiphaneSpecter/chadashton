// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
/**
 * Public address of the site (canonical URLs, sitemap, social cards).
 * PLACEHOLDER: the final domain is not known yet; set SITE_URL when deploying (see README).
 */
const site = process.env.SITE_URL ?? 'https://chadashton.pages.dev';

export default defineConfig({
  site,
  // Internal links are written without a trailing slash (/about); canonical URLs and sitemap follow.
  trailingSlash: 'never',
  integrations: [
    sitemap({
      // The hidden page and the 404 stay out of search engines.
      filter: (page) => !/\/(song-generator|404)\/?$/.test(new URL(page).pathname),
    }),
  ],
  // The dev toolbar would overlap the visual comparisons with the mockup.
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});
