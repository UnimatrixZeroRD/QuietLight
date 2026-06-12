import { albums as fallbackAlbums } from "../../data/albums";
import { dailyLightEntries as fallbackDailyLightEntries } from "../../data/daily-light-entries";
import { membershipTiers as fallbackMembershipTiers } from "../../data/membership-tiers";
import { featuredPosts as fallbackPosts } from "../../data/posts";
import { featuredProducts as fallbackProducts } from "../../data/products";
import { featuredScriptureReferences as fallbackScriptureReferences } from "../../data/scripture-references";
import { createSupabaseBrowserClient } from "./client";

export async function getPublicAlbums() {
  const supabase = createSupabaseBrowserClient();

  if (!supabase) {
    return fallbackAlbums;
  }

  const { data, error } = await supabase
    .from("albums")
    .select("slug,title,subtitle,description,cover_image_url,status")
    .eq("status", "published")
    .eq("access_level", "public")
    .order("created_at", { ascending: true });

  if (error || !data?.length) {
    return fallbackAlbums;
  }

  return data.map((album) => ({
    title: album.title,
    subtitle: album.subtitle ?? "",
    description: album.description,
    status: "available" as const,
    href: "/music",
    coverImageUrl: album.cover_image_url,
  }));
}

export async function getPublicProducts() {
  const supabase = createSupabaseBrowserClient();

  if (!supabase) {
    return fallbackProducts;
  }

  const { data, error } = await supabase
    .from("products")
    .select("slug,title,description,product_type,cover_image_url,status")
    .in("status", ["active", "draft"])
    .order("created_at", { ascending: true });

  if (error || !data?.length) {
    return fallbackProducts;
  }

  return data.map((product) => ({
    title: product.title,
    type: product.product_type,
    description: product.description,
    href: "/store",
    coverImageUrl: product.cover_image_url,
  }));
}

export async function getPublicMembershipTiers() {
  const supabase = createSupabaseBrowserClient();

  if (!supabase) {
    return fallbackMembershipTiers;
  }

  const { data, error } = await supabase
    .from("membership_tiers")
    .select("slug,name,description,price_cents,currency,billing_interval,sort_order")
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  if (error || !data?.length) {
    return fallbackMembershipTiers;
  }

  return data.map((tier) => ({
    name: tier.name,
    description: tier.description,
    access: [tier.billing_interval, `${tier.price_cents} ${tier.currency}`],
    href: "/membership",
  }));
}

export async function getPublicPosts() {
  const supabase = createSupabaseBrowserClient();

  if (!supabase) {
    return fallbackPosts;
  }

  const { data, error } = await supabase
    .from("posts")
    .select("slug,title,excerpt,status,access_level,published_at")
    .eq("status", "published")
    .eq("access_level", "public")
    .order("published_at", { ascending: false, nullsFirst: false });

  if (error || !data?.length) {
    return fallbackPosts;
  }

  return data.map((post) => ({
    title: post.title,
    category: "Reflection",
    summary: post.excerpt,
    href: `/blog/${post.slug}`,
  }));
}

export async function getFeaturedDailyLightEntry() {
  const supabase = createSupabaseBrowserClient();

  if (!supabase) {
    return fallbackDailyLightEntries[0];
  }

  const { data, error } = await supabase
    .from("daily_light_entries")
    .select("slug,title,scripture_reference,scripture_text,reflection,prayer,published_on,status")
    .eq("status", "published")
    .eq("access_level", "public")
    .order("published_on", { ascending: false, nullsFirst: false })
    .limit(1)
    .maybeSingle();

  if (error || !data) {
    return fallbackDailyLightEntries[0];
  }

  return {
    id: data.slug,
    slug: data.slug,
    title: data.title,
    summary: data.scripture_reference ?? "Daily scripture and reflection.",
    accessLevel: "public" as const,
    status: "published" as const,
    scriptureReference: data.scripture_reference ?? undefined,
    scriptureText: data.scripture_text ?? undefined,
    reflection: data.reflection,
    prayer: data.prayer ?? undefined,
  };
}

export async function getPublicScriptureReferences() {
  const supabase = createSupabaseBrowserClient();

  if (!supabase) {
    return fallbackScriptureReferences;
  }

  const { data, error } = await supabase
    .from("scripture_references")
    .select("slug,title,summary,book,chapter,verse_start,verse_end,translation,status")
    .eq("status", "published")
    .eq("access_level", "public")
    .order("created_at", { ascending: true });

  if (error || !data?.length) {
    return fallbackScriptureReferences;
  }

  return data.map((reference) => ({
    id: reference.slug,
    slug: reference.slug,
    title: reference.title,
    summary: reference.summary,
    accessLevel: "public" as const,
    status: "published" as const,
    book: reference.book,
    chapter: reference.chapter,
    verseStart: reference.verse_start ?? undefined,
    verseEnd: reference.verse_end ?? undefined,
    translation: reference.translation ?? undefined,
  }));
}
