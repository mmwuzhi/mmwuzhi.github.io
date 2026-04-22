import type { Locale } from '../i18n/translations';

export function estimateReadingTime(text: string, locale: Locale): string {
  if (locale === 'zh' || locale === 'ja') {
    const chars = text.replace(/\s/g, '').length;
    const minutes = Math.max(1, Math.ceil(chars / 300));
    return locale === 'zh' ? `约 ${minutes} 分钟` : `約 ${minutes} 分`;
  }
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}
