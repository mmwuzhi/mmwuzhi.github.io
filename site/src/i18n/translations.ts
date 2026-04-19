export type Locale = 'zh' | 'en' | 'ja';

export const locales: Locale[] = ['zh', 'en', 'ja'];
export const defaultLocale: Locale = 'zh';

export const t = {
  zh: {
    siteTitle: '神秘网站',
    nav: {
      blog: '文章',
      about: '关于',
    },
    hero: {
      title: ['慢慢试试，', '找找感觉'],
      titleAccent: 1,
      description: '记录技术与生活的碎片，写给自己也写给路过的人。',
    },
    posts: {
      header: 'Recent Posts',
      viewAll: '全部文章',
    },
    footer: {
      tagline: '慢慢试试找感觉',
    },
    lang: {
      zh: '中文',
      en: 'English',
      ja: '日本語',
    },
  },
  en: {
    siteTitle: 'wokai.cc',
    nav: {
      blog: 'Blog',
      about: 'About',
    },
    hero: {
      title: ['Taking it ', 'slow,'],
      subtitle: 'finding the feel.',
      titleAccent: 1,
      description:
        'Notes on technology and everyday life — written for myself, and for anyone who passes by.',
    },
    posts: {
      header: 'Recent Posts',
      viewAll: 'All Posts',
    },
    footer: {
      tagline: 'wokai.cc',
    },
    lang: {
      zh: '中文',
      en: 'English',
      ja: '日本語',
    },
  },
  ja: {
    siteTitle: 'wokai.cc',
    nav: {
      blog: '記事',
      about: '自己紹介',
    },
    hero: {
      title: ['ゆっくりと、', '感覚を探して'],
      titleAccent: 1,
      description: '技術と日常の断片を記録する。自分のために、そして通りすがりの誰かのために。',
    },
    posts: {
      header: 'Recent Posts',
      viewAll: '全ての記事',
    },
    footer: {
      tagline: 'wokai.cc',
    },
    lang: {
      zh: '中文',
      en: 'English',
      ja: '日本語',
    },
  },
} as const;

export function useTranslations(locale: Locale) {
  return t[locale];
}

export function getLocalePath(locale: Locale, path = '') {
  if (locale === defaultLocale) return `/${path}`;
  return `/${locale}${path ? `/${path}` : ''}`;
}
