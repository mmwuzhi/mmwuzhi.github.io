import { describe, it, expect } from 'vitest';
import { findBacklinks } from './backlinks';

const notes = [
  { postSlug: 'alpha', title: 'Alpha', body: 'see [Beta](/garden/beta) for more' },
  { postSlug: 'beta',  title: 'Beta',  body: 'links to [Alpha](/garden/alpha)' },
  { postSlug: 'gamma', title: 'Gamma', body: 'references [Alpha](/garden/alpha) and [Beta](/garden/beta)' },
  { postSlug: 'delta', title: 'Delta', body: 'standalone note' },
];

describe('findBacklinks', () => {
  it('finds notes that link to the current slug', () => {
    const result = findBacklinks(notes, 'alpha');
    expect(result.map((r) => r.postSlug)).toEqual(['beta', 'gamma']);
  });

  it('excludes the current note itself', () => {
    const result = findBacklinks(notes, 'beta');
    expect(result.every((r) => r.postSlug !== 'beta')).toBe(true);
  });

  it('returns empty array when no backlinks exist', () => {
    expect(findBacklinks(notes, 'delta')).toHaveLength(0);
  });

  it('returns title alongside slug', () => {
    const result = findBacklinks(notes, 'beta');
    expect(result.find((r) => r.postSlug === 'alpha')?.title).toBe('Alpha');
  });

  it('returns empty array for unknown slug', () => {
    expect(findBacklinks(notes, 'nonexistent')).toHaveLength(0);
  });
});
