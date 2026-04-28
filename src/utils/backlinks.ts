export interface NoteStub {
  postSlug: string;
  title: string;
  body: string;
}

export interface Backlink {
  postSlug: string;
  title: string;
}

export function findBacklinks(notes: NoteStub[], currentSlug: string): Backlink[] {
  const pattern = new RegExp(`/garden/${currentSlug}(?![\\w-])`);
  return notes
    .filter((n) => n.postSlug !== currentSlug && pattern.test(n.body))
    .map(({ postSlug, title }) => ({ postSlug, title }));
}
