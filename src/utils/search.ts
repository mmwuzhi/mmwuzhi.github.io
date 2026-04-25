export type Locale = 'zh' | 'en' | 'ja';

export const searchTranslations: Record<Locale, Record<string, string>> = {
  zh: {
    placeholder: '搜索文章和笔记…',
    zero_results: '没有找到「[SEARCH_TERM]」的相关内容',
    many_results: '「[SEARCH_TERM]」共 [COUNT] 条结果',
    one_result: '「[SEARCH_TERM]」共 1 条结果',
    searching: '正在搜索「[SEARCH_TERM]」…',
  },
  en: {
    placeholder: 'Search posts and notes…',
    zero_results: 'No results for "[SEARCH_TERM]"',
    many_results: '[COUNT] results for "[SEARCH_TERM]"',
    one_result: '1 result for "[SEARCH_TERM]"',
    searching: 'Searching for "[SEARCH_TERM]"…',
  },
  ja: {
    placeholder: '記事やノートを検索…',
    zero_results: '「[SEARCH_TERM]」の検索結果はありません',
    many_results: '「[SEARCH_TERM]」の検索結果：[COUNT]件',
    one_result: '「[SEARCH_TERM]」の検索結果：1件',
    searching: '「[SEARCH_TERM]」を検索中…',
  },
};

export function detectLocale(pathname: string): Locale {
  if (pathname === '/en' || pathname.startsWith('/en/')) return 'en';
  if (pathname === '/ja' || pathname.startsWith('/ja/')) return 'ja';
  return 'zh';
}

export function isSearchUIEmpty(el: Element | null): boolean {
  return !el || el.childElementCount === 0;
}
