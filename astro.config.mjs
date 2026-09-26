// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // The dev toolbar would overlap the visual comparisons with the mockup.
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});
