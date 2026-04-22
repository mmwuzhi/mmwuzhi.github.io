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
        name: '余白',
        short_name: '余白',
        description: '记录技术与生活的碎片',
        theme_color: '#faf7f4',
        background_color: '#faf7f4',
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
