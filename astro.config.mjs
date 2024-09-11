import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// For some reason, removing this breaks the page's images object-fit
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  site: 'https://alexfprowe.com',
});
