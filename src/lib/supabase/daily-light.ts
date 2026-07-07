import { dailyLightEntries as fallbackEntries, type DailyLightEntry } from "../../data/daily-light-entries";
import { dailyLightFutureEntries } from "../../data/daily-light-future-entries";
import { dailyLightFutureEntriesBatchTwo } from "../../data/daily-light-future-entries-2";
import { dailyLightFutureEntriesBatchThree } from "../../data/daily-light-future-entries-3";
import { dailyLightFutureEntriesBatchFour } from "../../data/daily-light-future-entries-4";
import { dailyLightVolumeTwoEntries } from "../../data/daily-light-volume-two-entries";
import { dailyLightVolumeTwoEntriesBatchTwo } from "../../data/daily-light-volume-two-entries-2";
import { dailyLightVolumeTwoEntriesBatchThree } from "../../data/daily-light-volume-two-entries-3";
import { dailyLightVolumeTwoEntriesBatchFour } from "../../data/daily-light-volume-two-entries-4";
import { dailyLightVolumeTwoEntriesBatchFive } from "../../data/daily-light-volume-two-entries-5";
import { dailyLightVolumeThreeEntries } from "../../data/daily-light-volume-three-entries";
import { dailyLightVolumeThreeEntriesBatchTwo } from "../../data/daily-light-volume-three-entries-2";
import { dailyLightVolumeThreeEntriesBatchThree } from "../../data/daily-light-volume-three-entries-3";
import { dailyLightVolumeThreeEntriesBatchFour } from "../../data/daily-light-volume-three-entries-4";
import { dailyLightVolumeThreeEntriesBatchFive } from "../../data/daily-light-volume-three-entries-5";
import { dailyLightVolumeThreeEntriesBatchSix } from "../../data/daily-light-volume-three-entries-6";
import { dailyLightVolumeFourEntries } from "../../data/daily-light-volume-four-entries";
import { dailyLightVolumeFourEntriesBatchTwo } from "../../data/daily-light-volume-four-entries-2";
import { createSupabaseBrowserClient } from "./client";

const DAILY_LIGHT_TIME_ZONE = "America/Halifax";
const allFallbackEntries = [
  ...fallbackEntries,
  ...dailyLightFutureEntries,
  ...dailyLightFutureEntriesBatchTwo,
  ...dailyLightFutureEntriesBatchThree,
  ...dailyLightFutureEntriesBatchFour,
  ...dailyLightVolumeTwoEntries,
  ...dailyLightVolumeTwoEntriesBatchTwo,
  ...dailyLightVolumeTwoEntriesBatchThree,
  ...dailyLightVolumeTwoEntriesBatchFour,
  ...dailyLightVolumeTwoEntriesBatchFive,
  ...dailyLightVolumeThreeEntries,
  ...dailyLightVolumeThreeEntriesBatchTwo,
  ...dailyLightVolumeThreeEntriesBatchThree,
  ...dailyLightVolumeThreeEntriesBatchFour,
  ...dailyLightVolumeThreeEntriesBatchFive,
  ...dailyLightVolumeThreeEntriesBatchSix,
  ...dailyLightVolumeFourEntries,
  ...dailyLightVolumeFourEntriesBatchTwo,
];

const dailyLightSelectFields = `
  slug,
  title,
  summary,
  volume,
  volume_title,
  day,
  theme,
  old_testament_reading,
  new_testament_reading,
  key_verse_reference,
  key_verse_text,
  scripture_reference,
  scripture_text,
  reflection,
  prayer,
  reflection_question,
  today_practice,
  closing_thought,
  published_on,
  status
`;

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

function normalizeFallbackEntry(entry: DailyLightEntry): PublicDailyLightEntry {
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
  const entry = allFallbackEntries.find((item) => item.slug === slug);
  if (!entry) return null;

  const normalizedEntry = normalizeFallbackEntry(entry);
  return isVisibleDailyLightEntry(normalizedEntry) ? normalizedEntry : null;
}

function fallbackEntryList() {
  return sortDailyLightEntries(allFallbackEntries.map(normalizeFallbackEntry).filter(isVisibleDailyLightEntry));
}

function normalizeEntry(entry: {
  slug: string;
  title: string;
  summary: string | null;
  volume: string | null;
  volume_title: string | null;
  day: number | null;
  theme: string | null;
  old_testament_reading: string | null;
  new_testament_reading: string | null;
  key_verse_reference: string | null;
  key_verse_text: string | null;
  scripture_reference: string | null;
  scripture_text: string | null;
  reflection: string;
  prayer: string | null;
  reflection_question: string | null;
  today_practice: string | null;
  closing_thought: string | null;
  published_on: string | null;
}): PublicDailyLightEntry {
  return {
    id: entry.slug,
    slug: entry.slug,
    title: entry.title,
    summary: entry.summary ?? entry.scripture_reference ?? "Daily scripture and reflection.",
    accessLevel: "public",
    status: "published",
    volume: entry.volume ?? undefined,
    volumeTitle: entry.volume_title ?? undefined,
    day: entry.day ?? undefined,
    theme: entry.theme ?? undefined,
    oldTestamentReading: entry.old_testament_reading ?? undefined,
    newTestamentReading: entry.new_testament_reading ?? undefined,
    keyVerseReference: entry.key_verse_reference ?? undefined,
    keyVerseText: entry.key_verse_text ?? undefined,
    scriptureReference: entry.scripture_reference ?? undefined,
    scriptureText: entry.scripture_text ?? undefined,
    reflection: entry.reflection,
    prayer: entry.prayer ?? undefined,
    reflectionQuestion: entry.reflection_question ?? undefined,
    todayPractice: entry.today_practice ?? undefined,
    closingThought: entry.closing_thought ?? undefined,
    publishedOn: entry.published_on ?? undefined,
  };
}

export async function getPublicDailyLightEntries(): Promise<PublicDailyLightEntry[]> {
  const supabase = createSupabaseBrowserClient();
  const today = getDailyLightToday();

  if (!supabase) return fallbackEntryList();

  const { data, error } = await supabase
    .from("daily_light_entries")
    .select(dailyLightSelectFields)
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
    .select(dailyLightSelectFields)
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
