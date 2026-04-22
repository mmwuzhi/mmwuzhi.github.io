import { describe, it, expect } from 'vitest';
import { getCategories, filterByCategory } from './filterPosts';

const posts = [
  { category: 'Tech', title: 'A' },
  { category: 'Essay', title: 'B' },
  { category: 'Tech', title: 'C' },
  { category: 'Life', title: 'D' },
];

describe('getCategories', () => {
  it('returns unique categories sorted alphabetically', () => {
    expect(getCategories(posts)).toEqual(['Essay', 'Life', 'Tech']);
  });

  it('returns empty array for empty posts', () => {
    expect(getCategories([])).toEqual([]);
  });
});

describe('filterByCategory', () => {
  it('returns all posts when category is null', () => {
    expect(filterByCategory(posts, null)).toHaveLength(4);
  });

  it('filters to matching category', () => {
    const result = filterByCategory(posts, 'Tech');
    expect(result).toHaveLength(2);
    expect(result.every((p) => p.category === 'Tech')).toBe(true);
  });

  it('returns empty array when no posts match', () => {
    expect(filterByCategory(posts, 'Nonexistent')).toHaveLength(0);
  });
});
