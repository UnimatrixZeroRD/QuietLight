import type { BaseContent } from "./content-types";

export type DailyLightEntry = BaseContent & {
  scriptureReference?: string;
  scriptureText?: string;
  reflection: string;
  prayer?: string;
};

export const dailyLightEntries: DailyLightEntry[] = [
  {
    id: "daily-light-flame-remains",
    slug: "the-flame-remains",
    title: "The Flame Remains",
    summary: "A quiet reflection for the beginning of the Daily Light archive.",
    accessLevel: "public",
    status: "published",
    reflection: "I am not the light. I am only its keeper.",
    prayer: "May the quiet flame remain steady in us today.",
  },
];
