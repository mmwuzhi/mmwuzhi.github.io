import { describe, it, expect } from 'vitest';
import { estimateReadingTime } from './readingTime';

describe('estimateReadingTime', () => {
  describe('Chinese (zh)', () => {
    it('returns at least 1 minute for short text', () => {
      expect(estimateReadingTime('短', 'zh')).toBe('约 1 分钟');
    });

    it('calculates based on ~300 chars/min', () => {
      const text = '字'.repeat(600);
      expect(estimateReadingTime(text, 'zh')).toBe('约 2 分钟');
    });

    it('ignores whitespace in char count', () => {
      const text = '字'.repeat(300) + '   \n\n   ';
      expect(estimateReadingTime(text, 'zh')).toBe('约 1 分钟');
    });
  });

  describe('Japanese (ja)', () => {
    it('returns Japanese unit', () => {
      expect(estimateReadingTime('字', 'ja')).toBe('約 1 分');
    });

    it('calculates based on ~300 chars/min', () => {
      const text = '字'.repeat(900);
      expect(estimateReadingTime(text, 'ja')).toBe('約 3 分');
    });
  });

  describe('edge cases', () => {
    it('returns zh minimum for empty string', () => {
      expect(estimateReadingTime('', 'zh')).toBe('约 1 分钟');
    });

    it('returns ja minimum for empty string', () => {
      expect(estimateReadingTime('', 'ja')).toBe('約 1 分');
    });
  });

  describe('English (en)', () => {
    it('returns at least 1 minute for short text', () => {
      expect(estimateReadingTime('hello', 'en')).toBe('1 min read');
    });

    it('calculates based on ~200 words/min', () => {
      const text = Array(400).fill('word').join(' ');
      expect(estimateReadingTime(text, 'en')).toBe('2 min read');
    });

    it('handles empty string as 1 min', () => {
      expect(estimateReadingTime('', 'en')).toBe('1 min read');
    });
  });
});
