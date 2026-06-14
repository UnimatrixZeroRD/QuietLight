import type { BaseContent } from "./content-types";

export type ScriptureReference = BaseContent & {
  book: string;
  chapter: number;
  verseStart?: number;
  verseEnd?: number;
  translation?: string;
};

export const featuredScriptureReferences: ScriptureReference[] = [
  {
    id: "geneva-bible-1599",
    slug: "geneva-bible-1599",
    title: "The 1599 Geneva Bible",
    summary:
      "The official Quiet Light scripture section, preserving the public-domain Geneva Bible as a family-rooted archive of faith, history, and quiet devotion.",
    accessLevel: "public",
    status: "published",
    book: "Genesis",
    chapter: 1,
    translation: "1599 Geneva Bible",
  },
];
