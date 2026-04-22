export interface PostWithCategory {
  category: string;
  [key: string]: unknown;
}

export function getCategories<T extends PostWithCategory>(posts: T[]): string[] {
  return [...new Set(posts.map((p) => p.category))].sort();
}

export function filterByCategory<T extends PostWithCategory>(
  posts: T[],
  category: string | null,
): T[] {
  if (!category) return posts;
  return posts.filter((p) => p.category === category);
}
