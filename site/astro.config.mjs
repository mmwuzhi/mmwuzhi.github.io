// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://wokai.cc',
  outDir: '../dist',
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en', 'ja'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
