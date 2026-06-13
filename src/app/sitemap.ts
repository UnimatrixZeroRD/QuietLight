import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const routes = [
  "",
  "/about",
  "/the-way",
  "/keepers-lantern",
  "/music",
  "/daily-light",
  "/bible",
  "/store",
  "/membership",
  "/blog",
  "/support",
  "/lantern-psalms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
