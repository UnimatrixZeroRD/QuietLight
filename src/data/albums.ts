export type Album = {
  title: string;
  subtitle: string;
  description: string;
  status: "available" | "planned" | "draft";
  href: string;
};

export const albums: Album[] = [
  {
    title: "The Flame Remains",
    subtitle: "The Lantern Psalms, Volume I",
    description: "Sacred music for prayer, stillness, worship, and reflection.",
    status: "available",
    href: "/music",
  },
  {
    title: "The Everlasting Light",
    subtitle: "A Way of Quiet Light Hymn Collection",
    description: "A hymn collection for devotion, quiet worship, and spiritual renewal.",
    status: "planned",
    href: "/music",
  },
  {
    title: "Gloria Patri",
    subtitle: "Songs of the Holy Trinity",
    description: "A sacred music collection centered on glory, prayer, and praise.",
    status: "planned",
    href: "/music",
  },
];
