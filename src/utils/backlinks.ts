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
  return notes
    .filter((n) => n.postSlug !== currentSlug && n.body.includes(`/garden/${currentSlug}`))
    .map(({ postSlug, title }) => ({ postSlug, title }));
}
