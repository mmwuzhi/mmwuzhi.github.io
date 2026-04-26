import { describe, it, expect } from 'vitest';
import { getLocalePath, useTranslations, locales, defaultLocale } from './translations';

describe('getLocalePath', () => {
  it('returns / for zh with no path', () => {
    expect(getLocalePath('zh')).toBe('/');
  });

  it('returns /path for zh with path', () => {
    expect(getLocalePath('zh', 'blog')).toBe('/blog');
  });

  it('returns /en for en with no path', () => {
    expect(getLocalePath('en')).toBe('/en');
  });

  it('returns /en/blog for en with path', () => {
    expect(getLocalePath('en', 'blog')).toBe('/en/blog');
  });

  it('returns /ja for ja with no path', () => {
    expect(getLocalePath('ja')).toBe('/ja');
  });

  it('returns /ja/blog/my-post for ja with nested path', () => {
    expect(getLocalePath('ja', 'blog/my-post')).toBe('/ja/blog/my-post');
  });
});

describe('useTranslations', () => {
  it('returns zh hero description', () => {
    const tr = useTranslations('zh');
    expect(tr.hero.description).toContain('随手记录');
  });

  it('returns en hero description', () => {
    const tr = useTranslations('en');
    expect(tr.hero.description).toContain('Notes to self');
  });

  it('returns ja hero description', () => {
    const tr = useTranslations('ja');
    expect(tr.hero.description).toContain('書き留めておく');
  });
});

describe('locales / defaultLocale', () => {
  it('has exactly 3 locales', () => {
    expect(locales).toHaveLength(3);
    expect(locales).toContain('zh');
    expect(locales).toContain('en');
    expect(locales).toContain('ja');
  });

  it('default locale is zh', () => {
    expect(defaultLocale).toBe('zh');
  });
});
