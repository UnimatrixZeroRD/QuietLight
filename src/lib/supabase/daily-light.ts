import { dailyLightEntries as fallbackEntries } from "../../data/daily-light-entries";
import { createSupabaseBrowserClient } from "./client";

export type PublicDailyLightEntry = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  accessLevel: "public";
  status: "published";
  scriptureReference?: string;
  scriptureText?: string;
  reflection: string;
  prayer?: string;
  publishedOn?: string;
};

function fallbackEntryBySlug(slug: string) {
  return fallbackEntries.find((entry) => entry.slug === slug) ?? null;
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

export async function getPublicDailyLightEntries() {
  const supabase = createSupabaseBrowserClient();

  if (!supabase) return fallbackEntries;

  const { data, error } = await supabase
    .from("daily_light_entries")
    .select("slug,title,scripture_reference,scripture_text,reflection,prayer,published_on,status")
    .eq("status", "published")
    .eq("access_level", "public")
    .order("published_on", { ascending: false, nullsFirst: false });

  if (error || !data?.length) return fallbackEntries;

  return data.map(normalizeEntry);
}

export async function getPublicDailyLightEntryBySlug(slug: string) {
  const supabase = createSupabaseBrowserClient();

  if (!supabase) return fallbackEntryBySlug(slug);

  const { data, error } = await supabase
    .from("daily_light_entries")
    .select("slug,title,scripture_reference,scripture_text,reflection,prayer,published_on,status")
    .eq("slug", slug)
    .eq("status", "published")
    .eq("access_level", "public")
    .maybeSingle();

  if (error || !data) return fallbackEntryBySlug(slug);

  return normalizeEntry(data);
}

export async function getLatestDailyLightEntry() {
  const entries = await getPublicDailyLightEntries();
  return entries[0] ?? fallbackEntries[0];
}
