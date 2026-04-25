import { describe, it, expect } from 'vitest';
import { buildToc } from './toc';

const h = (depth: number, slug: string, text: string) => ({ depth, slug, text });

describe('buildToc', () => {
  it('returns empty array for no headings', () => {
    expect(buildToc([])).toEqual([]);
  });

  it('includes h2 headings', () => {
    expect(buildToc([h(2, 'intro', 'Intro')])).toEqual([h(2, 'intro', 'Intro')]);
  });

  it('includes h3 headings', () => {
    expect(buildToc([h(3, 'sub', 'Sub')])).toEqual([h(3, 'sub', 'Sub')]);
  });

  it('excludes h1 headings', () => {
    expect(buildToc([h(1, 'title', 'Title')])).toEqual([]);
  });

  it('excludes h4 and deeper', () => {
    expect(buildToc([h(4, 'deep', 'Deep'), h(5, 'deeper', 'Deeper')])).toEqual([]);
  });

  it('preserves original order', () => {
    const input = [h(2, 'a', 'A'), h(3, 'a1', 'A1'), h(2, 'b', 'B'), h(3, 'b1', 'B1')];
    expect(buildToc(input)).toEqual(input);
  });

  it('filters mixed depths correctly', () => {
    const input = [
      h(1, 'title', 'Title'),
      h(2, 'section', 'Section'),
      h(3, 'sub', 'Sub'),
      h(4, 'deep', 'Deep'),
    ];
    const result = buildToc(input);
    expect(result).toHaveLength(2);
    expect(result[0].depth).toBe(2);
    expect(result[1].depth).toBe(3);
  });
});
