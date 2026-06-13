import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Way of Quiet Light",
    short_name: "Quiet Light",
    description: "A spiritual path of stillness, humility, sacred reflection, Daily Light, music, writings, and digital works.",
    start_url: "/",
    display: "standalone",
    background_color: "#07111f",
    theme_color: "#07111f",
    icons: [
      {
        src: "/images/brand/lantern-mark.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
