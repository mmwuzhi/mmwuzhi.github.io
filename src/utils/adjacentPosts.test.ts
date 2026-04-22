import { describe, it, expect } from 'vitest';
import { getAdjacentPosts } from './adjacentPosts';

const posts = [
  { postSlug: 'oldest', date: new Date('2024-01-01'), title: 'Oldest' },
  { postSlug: 'middle', date: new Date('2024-06-01'), title: 'Middle' },
  { postSlug: 'newest', date: new Date('2024-12-01'), title: 'Newest' },
];

describe('getAdjacentPosts', () => {
  it('returns null prev for the newest post', () => {
    const { prev } = getAdjacentPosts(posts, 'newest');
    expect(prev).toBeNull();
  });

  it('returns next for the newest post', () => {
    const { next } = getAdjacentPosts(posts, 'newest');
    expect(next?.postSlug).toBe('middle');
  });

  it('returns prev and next for a middle post', () => {
    const { prev, next } = getAdjacentPosts(posts, 'middle');
    expect(prev?.postSlug).toBe('newest');
    expect(next?.postSlug).toBe('oldest');
  });

  it('returns null next for the oldest post', () => {
    const { next } = getAdjacentPosts(posts, 'oldest');
    expect(next).toBeNull();
  });

  it('returns prev for the oldest post', () => {
    const { prev } = getAdjacentPosts(posts, 'oldest');
    expect(prev?.postSlug).toBe('middle');
  });

  it('returns null for both when slug not found', () => {
    const { prev, next } = getAdjacentPosts(posts, 'nonexistent');
    expect(prev).toBeNull();
    expect(next).toBeNull();
  });

  it('returns null for both when only one post', () => {
    const single = [{ postSlug: 'only', date: new Date('2024-01-01'), title: 'Only' }];
    const { prev, next } = getAdjacentPosts(single, 'only');
    expect(prev).toBeNull();
    expect(next).toBeNull();
  });
});
