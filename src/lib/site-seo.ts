import { createClient } from "@supabase/supabase-js";
import { footerNavigation, primaryNavigation } from "../data/navigation";
import { getSupabasePublicKey, getSupabaseUrl, hasSupabasePublicEnv } from "./supabase/env";

const siteName = "The Way of Quiet Light";
const siteDescription = "A spiritual path of stillness, humility, sacred reflection, Daily Light, music, writings, and digital works.";

export type SeoEntry = {
  url: string;
  lastModified?: string;
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
};

export type FeedItem = {
  title: string;
  url: string;
  description: string;
  publishedAt?: string;
  updatedAt?: string;
  category?: string;
};

type PostRow = {
  slug: string;
  title: string;
  excerpt: string | null;
  body_md?: string | null;
  published_at: string | null;
  updated_at: string | null;
  created_at: string | null;
};

type DailyLightRow = {
  slug: string;
  title: string;
  scripture_reference: string | null;
  reflection: string | null;
  published_on: string | null;
  updated_at: string | null;
  created_at: string | null;
};

type AlbumRow = {
  slug: string;
  title: string;
  description: string | null;
  updated_at?: string | null;
  created_at?: string | null;
};

type SafeSelectResult<T> = {
  data: T[] | null;
  error: { message: string } | null;
};

function normalizeSiteUrl(url: string) {
  return url.replace(/\/$/, "");
}

export function getSiteUrl() {
  return normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL || "https://quietlightministries.org");
}

export function absoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${getSiteUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}

function createPublicSupabaseClient() {
  if (!hasSupabasePublicEnv()) return null;
  return createClient(getSupabaseUrl(), getSupabasePublicKey(), {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

function uniquePublicPaths() {
  const blockedPrefixes = ["/admin", "/account", "/sign-in"];
  const paths = new Set<string>(["/", "/privacy", "/terms", "/refund-policy"]);

  for (const item of primaryNavigation) {
    paths.add(item.href);
    for (const child of item.children ?? []) paths.add(child.href);
  }

  for (const group of Object.values(footerNavigation)) {
    for (const item of group) paths.add(item.href);
  }

  return [...paths].filter((path) => !blockedPrefixes.some((prefix) => path === prefix || path.startsWith(`${prefix}/`)));
}

function stripMarkdown(value: string) {
  return value
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_~\-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function summarize(value: string | null | undefined, fallback: string) {
  const clean = stripMarkdown(value ?? "");
  if (!clean) return fallback;
  return clean.length > 280 ? `${clean.slice(0, 277).trim()}...` : clean;
}

function toIsoDate(value: string | null | undefined) {
  if (!value) return new Date().toISOString();
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
}

function xmlEscape(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function rfc822Date(value: string | null | undefined) {
  return new Date(toIsoDate(value)).toUTCString();
}

async function safeSelect<T>(callback: () => PromiseLike<SafeSelectResult<T>>) {
  try {
    const result = await callback();
    if (result.error) return [] as T[];
    return result.data ?? [];
  } catch {
    return [] as T[];
  }
}

export function getStaticSeoEntries(): SeoEntry[] {
  const today = new Date().toISOString();

  return uniquePublicPaths().map((path) => ({
    url: absoluteUrl(path),
    lastModified: today,
    changeFrequency: path === "/" ? "daily" : "weekly",
    priority: path === "/" ? 1 : path.includes("privacy") || path.includes("terms") || path.includes("refund") ? 0.35 : 0.75,
  }));
}

export async function getDynamicFeedItems(): Promise<FeedItem[]> {
  const supabase = createPublicSupabaseClient();
  if (!supabase) return [];

  const [posts, dailyLightEntries, albums] = await Promise.all([
    safeSelect<PostRow>(() =>
      supabase
        .from("posts")
        .select("slug,title,excerpt,body_md,published_at,updated_at,created_at")
        .eq("status", "published")
        .eq("access_level", "public")
        .order("published_at", { ascending: false, nullsFirst: false })
        .limit(50),
    ),
    safeSelect<DailyLightRow>(() =>
      supabase
        .from("daily_light_entries")
        .select("slug,title,scripture_reference,reflection,published_on,updated_at,created_at")
        .eq("status", "published")
        .eq("access_level", "public")
        .order("published_on", { ascending: false, nullsFirst: false })
        .limit(50),
    ),
    safeSelect<AlbumRow>(() =>
      supabase
        .from("albums")
        .select("slug,title,description,updated_at,created_at")
        .eq("status", "published")
        .eq("access_level", "public")
        .order("created_at", { ascending: false, nullsFirst: false })
        .limit(25),
    ),
  ]);

  return [
    ...posts.map((post) => ({
      title: post.title,
      url: absoluteUrl(`/blog/${post.slug}`),
      description: summarize(post.excerpt ?? post.body_md, `Read ${post.title} from ${siteName}.`),
      publishedAt: post.published_at ?? post.created_at ?? undefined,
      updatedAt: post.updated_at ?? post.published_at ?? post.created_at ?? undefined,
      category: "Quiet Light Writing",
    })),
    ...dailyLightEntries.map((entry) => ({
      title: entry.title,
      url: absoluteUrl(`/daily-light/${entry.slug}`),
      description: summarize(entry.reflection, entry.scripture_reference ? `${entry.scripture_reference} — Daily Light reflection.` : "Daily Light reflection."),
      publishedAt: entry.published_on ?? entry.created_at ?? undefined,
      updatedAt: entry.updated_at ?? entry.published_on ?? entry.created_at ?? undefined,
      category: "Daily Light",
    })),
    ...albums.map((album) => ({
      title: album.title,
      url: absoluteUrl(`/music/${album.slug}`),
      description: summarize(album.description, `Music from ${siteName}.`),
      publishedAt: album.created_at ?? undefined,
      updatedAt: album.updated_at ?? album.created_at ?? undefined,
      category: "Music",
    })),
  ].sort((a, b) => toIsoDate(b.updatedAt ?? b.publishedAt).localeCompare(toIsoDate(a.updatedAt ?? a.publishedAt)));
}

export async function getDynamicSeoEntries(): Promise<SeoEntry[]> {
  const items = await getDynamicFeedItems();

  return items.map((item) => ({
    url: item.url,
    lastModified: toIsoDate(item.updatedAt ?? item.publishedAt),
    changeFrequency: item.category === "Daily Light" ? "daily" : "weekly",
    priority: item.category === "Music" ? 0.7 : 0.85,
  }));
}

export async function getAllSeoEntries() {
  const entries = [...getStaticSeoEntries(), ...(await getDynamicSeoEntries())];
  const byUrl = new Map<string, SeoEntry>();

  for (const entry of entries) {
    byUrl.set(entry.url, entry);
  }

  return [...byUrl.values()].sort((a, b) => a.url.localeCompare(b.url));
}

export async function buildSitemapXml() {
  const entries = await getAllSeoEntries();

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
    .map(
      (entry) => `  <url>
    <loc>${xmlEscape(entry.url)}</loc>
    <lastmod>${xmlEscape(toIsoDate(entry.lastModified))}</lastmod>
    <changefreq>${entry.changeFrequency ?? "weekly"}</changefreq>
    <priority>${entry.priority ?? 0.7}</priority>
  </url>`,
    )
    .join("\n")}
</urlset>`;
}

export async function buildRssXml() {
  const dynamicItems = await getDynamicFeedItems();
  const items = dynamicItems.length
    ? dynamicItems.slice(0, 50)
    : [
        {
          title: siteName,
          url: absoluteUrl("/"),
          description: siteDescription,
          publishedAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          category: "Quiet Light",
        },
      ];

  const latestDate = items[0]?.updatedAt ?? items[0]?.publishedAt ?? new Date().toISOString();

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${xmlEscape(siteName)}</title>
    <link>${xmlEscape(absoluteUrl("/"))}</link>
    <description>${xmlEscape(siteDescription)}</description>
    <language>en-ca</language>
    <lastBuildDate>${rfc822Date(latestDate)}</lastBuildDate>
    <ttl>60</ttl>
    <atom:link href="${xmlEscape(absoluteUrl("/rss.xml"))}" rel="self" type="application/rss+xml" />
${items
    .map(
      (item) => `    <item>
      <title>${xmlEscape(item.title)}</title>
      <link>${xmlEscape(item.url)}</link>
      <description>${xmlEscape(item.description)}</description>
      <guid isPermaLink="true">${xmlEscape(item.url)}</guid>
      <pubDate>${rfc822Date(item.publishedAt ?? item.updatedAt)}</pubDate>${item.category ? `
      <category>${xmlEscape(item.category)}</category>` : ""}
    </item>`,
    )
    .join("\n")}
  </channel>
</rss>`;
}

export function buildRobotsTxt() {
  return `User-agent: *
Allow: /
Disallow: /admin
Disallow: /account
Disallow: /sign-in

Sitemap: ${absoluteUrl("/sitemap.xml")}
`;
}
