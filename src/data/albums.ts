export type Album = {
  title: string;
  subtitle: string;
  description: string;
  status: "available" | "planned" | "draft";
  href: string;
  coverImageUrl?: string;
  coverAltText?: string;
};

export const albums: Album[] = [
  {
    title: "The Flame Remains",
    subtitle: "The Lantern Psalms, Volume I",
    description: "Sacred music for prayer, stillness, worship, and reflection.",
    status: "available",
    href: "/music/the-flame-remains",
    coverImageUrl: "/images/music/flame-remains-cover.svg",
    coverAltText: "The Flame Remains album cover.",
  },
  {
    title: "The Everlasting Light",
    subtitle: "A Way of Quiet Light Hymn Collection",
    description: "A hymn collection for devotion, quiet worship, and spiritual renewal.",
    status: "available",
    href: "/music/the-everlasting-light",
    coverImageUrl: "/images/music/everlasting-light-cover.svg",
    coverAltText: "The Everlasting Light album cover.",
  },
  {
    title: "Gloria Patri",
    subtitle: "Songs of the Holy Trinity",
    description: "A sacred music collection centered on glory, prayer, and praise.",
    status: "available",
    href: "/music/gloria-patri",
    coverImageUrl: "/images/music/gloria-patri-cover.svg",
    coverAltText: "Gloria Patri album cover.",
  },
];