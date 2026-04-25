// @vitest-environment happy-dom
import { describe, it, expect } from 'vitest';
import { detectLocale, isSearchUIEmpty, searchTranslations } from './search';

describe('detectLocale', () => {
  it('returns zh for root path', () => {
    expect(detectLocale('/')).toBe('zh');
  });

  it('returns zh for non-prefixed paths', () => {
    expect(detectLocale('/blog/some-post')).toBe('zh');
  });

  it('returns en for /en prefix', () => {
    expect(detectLocale('/en')).toBe('en');
    expect(detectLocale('/en/')).toBe('en');
    expect(detectLocale('/en/blog/post')).toBe('en');
  });

  it('returns ja for /ja prefix', () => {
    expect(detectLocale('/ja')).toBe('ja');
    expect(detectLocale('/ja/')).toBe('ja');
    expect(detectLocale('/ja/garden/note')).toBe('ja');
  });

  it('does not match /enjoy as en', () => {
    expect(detectLocale('/enjoy')).toBe('zh');
  });
});

describe('isSearchUIEmpty', () => {
  it('returns true for null', () => {
    expect(isSearchUIEmpty(null)).toBe(true);
  });

  it('returns true for element with no children', () => {
    const el = document.createElement('div');
    expect(isSearchUIEmpty(el)).toBe(true);
  });

  it('returns false for element with children', () => {
    const el = document.createElement('div');
    el.appendChild(document.createElement('input'));
    expect(isSearchUIEmpty(el)).toBe(false);
  });
});

describe('searchTranslations', () => {
  it('has placeholder for all locales', () => {
    expect(searchTranslations.zh.placeholder).toBeTruthy();
    expect(searchTranslations.en.placeholder).toBeTruthy();
    expect(searchTranslations.ja.placeholder).toBeTruthy();
  });

  it('zero_results contains [SEARCH_TERM] for all locales', () => {
    for (const locale of ['zh', 'en', 'ja'] as const) {
      expect(searchTranslations[locale].zero_results).toContain('[SEARCH_TERM]');
    }
  });

  it('many_results contains both [SEARCH_TERM] and [COUNT]', () => {
    for (const locale of ['zh', 'en', 'ja'] as const) {
      expect(searchTranslations[locale].many_results).toContain('[SEARCH_TERM]');
      expect(searchTranslations[locale].many_results).toContain('[COUNT]');
    }
  });
});
