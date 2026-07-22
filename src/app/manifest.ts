import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Daily Light",
    short_name: "Daily Light",
    description: "An installable devotional journal for scripture, reflection, prayer, and private notes from Quiet Light Ministries.",
    start_url: "/daily-light/app",
    scope: "/",
    display: "standalone",
    background_color: "#07111f",
    theme_color: "#07111f",
    categories: ["books", "lifestyle", "productivity"],
    icons: [
      {
        src: "/images/brand/lantern-mark.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/images/brand/quiet-light-icon.webp",
        sizes: "512x512",
        type: "image/webp",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
