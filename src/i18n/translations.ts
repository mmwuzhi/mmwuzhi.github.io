export type Locale = 'zh' | 'en' | 'ja';

export const locales: Locale[] = ['zh', 'en', 'ja'];
export const defaultLocale: Locale = 'zh';

export const t = {
  zh: {
    siteTitle: '余白',
    hero: {
      title: ['慢慢试试，', '找找感觉'],
      titleAccent: 1,
      description: '记录技术与生活的碎片，写给自己也写给路过的人。',
    },
    posts: {
      header: 'Recent Posts',
      viewAll: '全部文章',
      back: '← 文章列表',
      empty: '还没有文章。',
    },
    garden: {
      backlinks: '被以下笔记引用',
      updated: '更新于',
      empty: '还没有笔记。',
      stages: { seedling: '萌芽', budding: '生长', evergreen: '常青' },
    },
    pages: { blog: '博客', garden: '花园', now: '近况', about: '关于' },
    footer: { tagline: '余白' },
    lang: { zh: '中文', en: 'English', ja: '日本語' },
  },
  en: {
    siteTitle: '余白',
    hero: {
      title: ['Taking it ', 'slow,'],
      subtitle: 'finding the feel.',
      titleAccent: 1,
      description: 'Notes on technology and everyday life — written for myself, and for anyone who passes by.',
    },
    posts: {
      header: 'Recent Posts',
      viewAll: 'All Posts',
      back: '← All Posts',
      empty: 'No posts yet.',
    },
    garden: {
      backlinks: 'Referenced by',
      updated: 'Updated',
      empty: 'No notes yet.',
      stages: { seedling: 'Seedling', budding: 'Budding', evergreen: 'Evergreen' },
    },
    pages: { blog: 'Blog', garden: 'Garden', now: 'Now', about: 'About' },
    footer: { tagline: '余白' },
    lang: { zh: '中文', en: 'English', ja: '日本語' },
  },
  ja: {
    siteTitle: '余白',
    hero: {
      title: ['ゆっくりと、', '感覚を探して'],
      titleAccent: 1,
      description: '技術と日常の断片を記録する。自分のために、そして通りすがりの誰かのために。',
    },
    posts: {
      header: 'Recent Posts',
      viewAll: '全ての記事',
      back: '← 記事一覧',
      empty: 'まだ記事がありません。',
    },
    garden: {
      backlinks: '参照元',
      updated: '更新',
      empty: 'まだノートがありません。',
      stages: { seedling: '芽生え', budding: '成長中', evergreen: '常緑' },
    },
    pages: { blog: 'ブログ', garden: 'ガーデン', now: '近況', about: 'について' },
    footer: { tagline: '余白' },
    lang: { zh: '中文', en: 'English', ja: '日本語' },
  },
} as const;

export function useTranslations(locale: Locale) {
  return t[locale];
}

export function getLocalePath(locale: Locale, path = '') {
  if (locale === defaultLocale) return `/${path}`;
  return `/${locale}${path ? `/${path}` : ''}`;
}
