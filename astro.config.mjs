// @ts-check
import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mmwuzhi.dev',
  outDir: 'dist',
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en', 'ja'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({ i18n: { defaultLocale: 'zh', locales: { zh: 'zh-CN', en: 'en', ja: 'ja' } } }),
    AstroPWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Lacuna',
        short_name: 'Lacuna',
        description: 'Notes to self.',
        theme_color: '#faf7f2',
        background_color: '#faf7f2',
        display: 'standalone',
        start_url: '/',
        icons: [
          { src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{html,css,js,svg,ico}'],
        navigateFallback: null,
      },
    }),
  ],
});
