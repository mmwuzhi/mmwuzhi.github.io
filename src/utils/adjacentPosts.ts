export interface PostStub {
  postSlug: string;
  date: Date;
  title: string;
}

export function getAdjacentPosts<T extends PostStub>(
  posts: T[],
  currentSlug: string,
): { prev: T | null; next: T | null } {
  const sorted = [...posts].sort((a, b) => b.date.valueOf() - a.date.valueOf());
  const idx = sorted.findIndex((p) => p.postSlug === currentSlug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? sorted[idx - 1] : null,
    next: idx < sorted.length - 1 ? sorted[idx + 1] : null,
  };
}
