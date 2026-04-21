import { describe, it, expect } from 'vitest';
import { switchLangPath } from './utils';

describe('switchLangPath', () => {
  describe('from zh', () => {
    it('switches to en on root', () => {
      expect(switchLangPath('zh', 'en', '/')).toBe('/en');
    });

    it('switches to ja on root', () => {
      expect(switchLangPath('zh', 'ja', '/')).toBe('/ja');
    });

    it('stays zh (returns /) on root', () => {
      expect(switchLangPath('zh', 'zh', '/')).toBe('/zh');
    });

    it('switches to en on a blog post', () => {
      expect(switchLangPath('zh', 'en', '/blog/my-post')).toBe('/en/blog/my-post');
    });

    it('switches to ja on a blog post', () => {
      expect(switchLangPath('zh', 'ja', '/blog/my-post')).toBe('/ja/blog/my-post');
    });
  });

  describe('from en', () => {
    it('switches to zh on /en', () => {
      expect(switchLangPath('en', 'zh', '/en')).toBe('/');
    });

    it('switches to ja on /en', () => {
      expect(switchLangPath('en', 'ja', '/en')).toBe('/ja');
    });

    it('switches to zh on /en/blog/my-post', () => {
      expect(switchLangPath('en', 'zh', '/en/blog/my-post')).toBe('/blog/my-post');
    });

    it('switches to ja on /en/blog/my-post', () => {
      expect(switchLangPath('en', 'ja', '/en/blog/my-post')).toBe('/ja/blog/my-post');
    });
  });

  describe('from ja', () => {
    it('switches to zh on /ja', () => {
      expect(switchLangPath('ja', 'zh', '/ja')).toBe('/');
    });

    it('switches to en on /ja', () => {
      expect(switchLangPath('ja', 'en', '/ja')).toBe('/en');
    });

    it('switches to zh on /ja/blog/my-post', () => {
      expect(switchLangPath('ja', 'zh', '/ja/blog/my-post')).toBe('/blog/my-post');
    });

    it('switches to en on /ja/blog/my-post', () => {
      expect(switchLangPath('ja', 'en', '/ja/blog/my-post')).toBe('/en/blog/my-post');
    });
  });
});
