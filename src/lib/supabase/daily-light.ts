import { dailyLightEntries as fallbackEntries } from "../../data/daily-light-entries";
import { createSupabaseBrowserClient } from "./client";

const DAILY_LIGHT_TIME_ZONE = "America/Halifax";

export type PublicDailyLightEntry = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  accessLevel: "public";
  status: "published";
  volume?: string;
  volumeTitle?: string;
  day?: number;
  theme?: string;
  oldTestamentReading?: string;
  newTestamentReading?: string;
  keyVerseReference?: string;
  keyVerseText?: string;
  scriptureReference?: string;
  scriptureText?: string;
  reflection: string;
  prayer?: string;
  reflectionQuestion?: string;
  todayPractice?: string;
  closingThought?: string;
  publishedOn?: string;
};

function getDailyLightToday() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: DAILY_LIGHT_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  const year = parts.find((part) => part.type === "year")?.value;
  const month = parts.find((part) => part.type === "month")?.value;
  const day = parts.find((part) => part.type === "day")?.value;

  return `${year}-${month}-${day}`;
}

function isVisibleDailyLightEntry(entry: PublicDailyLightEntry) {
  if (!entry.publishedOn) return true;
  return entry.publishedOn <= getDailyLightToday();
}

function sortDailyLightEntries(entries: PublicDailyLightEntry[]) {
  return entries.sort((first, second) => {
    const firstDate = first.publishedOn ?? "0000-00-00";
    const secondDate = second.publishedOn ?? "0000-00-00";
    return secondDate.localeCompare(firstDate);
  });
}

function normalizeFallbackEntry(entry: (typeof fallbackEntries)[number]): PublicDailyLightEntry {
  return {
    id: entry.id,
    slug: entry.slug,
    title: entry.title,
    summary: entry.summary,
    accessLevel: "public",
    status: "published",
    volume: entry.volume,
    volumeTitle: entry.volumeTitle,
    day: entry.day,
    theme: entry.theme,
    oldTestamentReading: entry.oldTestamentReading,
    newTestamentReading: entry.newTestamentReading,
    keyVerseReference: entry.keyVerseReference,
    keyVerseText: entry.keyVerseText,
    scriptureReference: entry.scriptureReference,
    scriptureText: entry.scriptureText,
    reflection: entry.reflection,
    prayer: entry.prayer,
    reflectionQuestion: entry.reflectionQuestion,
    todayPractice: entry.todayPractice,
    closingThought: entry.closingThought,
    publishedOn: entry.publishedOn,
  };
}

function fallbackEntryBySlug(slug: string) {
  const entry = fallbackEntries.find((item) => item.slug === slug);
  if (!entry) return null;

  const normalizedEntry = normalizeFallbackEntry(entry);
  return isVisibleDailyLightEntry(normalizedEntry) ? normalizedEntry : null;
}

function fallbackEntryList() {
  return sortDailyLightEntries(fallbackEntries.map(normalizeFallbackEntry).filter(isVisibleDailyLightEntry));
}

function normalizeEntry(entry: {
  slug: string;
  title: string;
  scripture_reference: string | null;
  scripture_text: string | null;
  reflection: string;
  prayer: string | null;
  published_on: string | null;
}): PublicDailyLightEntry {
  return {
    id: entry.slug,
    slug: entry.slug,
    title: entry.title,
    summary: entry.scripture_reference ?? "Daily scripture and reflection.",
    accessLevel: "public",
    status: "published",
    scriptureReference: entry.scripture_reference ?? undefined,
    scriptureText: entry.scripture_text ?? undefined,
    reflection: entry.reflection,
    prayer: entry.prayer ?? undefined,
    publishedOn: entry.published_on ?? undefined,
  };
}

export async function getPublicDailyLightEntries(): Promise<PublicDailyLightEntry[]> {
  const supabase = createSupabaseBrowserClient();
  const today = getDailyLightToday();

  if (!supabase) return fallbackEntryList();

  const { data, error } = await supabase
    .from("daily_light_entries")
    .select("slug,title,scripture_reference,scripture_text,reflection,prayer,published_on,status")
    .eq("status", "published")
    .eq("access_level", "public")
    .lte("published_on", today)
    .order("published_on", { ascending: false, nullsFirst: false });

  if (error || !data?.length) return fallbackEntryList();

  return data.map(normalizeEntry);
}

export async function getPublicDailyLightEntryBySlug(slug: string): Promise<PublicDailyLightEntry | null> {
  const supabase = createSupabaseBrowserClient();
  const today = getDailyLightToday();

  if (!supabase) return fallbackEntryBySlug(slug);

  const { data, error } = await supabase
    .from("daily_light_entries")
    .select("slug,title,scripture_reference,scripture_text,reflection,prayer,published_on,status")
    .eq("slug", slug)
    .eq("status", "published")
    .eq("access_level", "public")
    .lte("published_on", today)
    .maybeSingle();

  if (error || !data) return fallbackEntryBySlug(slug);

  return normalizeEntry(data);
}

export async function getLatestDailyLightEntry(): Promise<PublicDailyLightEntry | null> {
  const entries = await getPublicDailyLightEntries();
  return entries[0] ?? null;
}
