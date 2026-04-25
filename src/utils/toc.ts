export interface TocEntry {
  depth: number;
  slug: string;
  text: string;
}

export function buildToc(headings: TocEntry[]): TocEntry[] {
  return headings.filter((h) => h.depth === 2 || h.depth === 3);
}
