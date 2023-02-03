import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://edusl.github.io/eduslweb',
	base: '/',
	integrations: [mdx(), sitemap()],
});
