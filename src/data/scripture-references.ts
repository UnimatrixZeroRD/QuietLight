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
    id: "matthew-6-quiet-works",
    slug: "matthew-6-quiet-works",
    title: "Quiet Works",
    summary: "A core scripture theme for hidden service, humility, and quiet devotion.",
    accessLevel: "public",
    status: "published",
    book: "Matthew",
    chapter: 6,
    verseStart: 1,
  },
];
