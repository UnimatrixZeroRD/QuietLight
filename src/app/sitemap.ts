import type { MetadataRoute } from "next";
import { getPublicDailyLightEntries } from "../lib/supabase/daily-light";
import { getPublicMusicAlbums } from "../lib/supabase/music-content";
import { getPublicPosts } from "../lib/supabase/public-content";
import { getStoreProducts } from "../lib/supabase/store-products";
import { getSiteUrl } from "../lib/site-seo";

const siteUrl = getSiteUrl();

const staticRoutes = [
  "",
  "/about",
  "/the-way",
  "/keepers-lantern",
  "/music",
  "/video",
  "/daily-light",
  "/bible",
  "/store",
  "/membership",
  "/blog",
  "/support",
  "/lantern-psalms",
  "/privacy",
  "/terms",
  "/refund-policy",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const [posts, dailyLightEntries, products, albums] = await Promise.all([
    getPublicPosts(),
    getPublicDailyLightEntries(),
    getStoreProducts(),
    getPublicMusicAlbums(),
  ]);

  const staticItems: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const postItems: MetadataRoute.Sitemap = posts
    .filter((post) => post.href.startsWith("/blog/"))
    .map((post) => ({
      url: `${siteUrl}${post.href}`,
      lastModified: "publishedAt" in post && post.publishedAt ? new Date(post.publishedAt) : now,
      changeFrequency: "monthly",
      priority: 0.65,
    }));

  const dailyLightItems: MetadataRoute.Sitemap = dailyLightEntries.map((entry) => ({
    url: `${siteUrl}/daily-light/${entry.slug}`,
    lastModified: entry.publishedOn ? new Date(entry.publishedOn) : now,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  const productItems: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${siteUrl}${product.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const albumItems: MetadataRoute.Sitemap = albums.map((album) => ({
    url: `${siteUrl}${album.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticItems, ...postItems, ...dailyLightItems, ...productItems, ...albumItems];
}
