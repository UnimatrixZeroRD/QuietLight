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
    coverImageUrl: "/images/music/flame-remains-cover.webp",
    coverAltText: "The Flame Remains album cover.",
  },
  {
    title: "The Everlasting Light",
    subtitle: "A Way of Quiet Light Hymn Collection",
    description: "A hymn collection for devotion, quiet worship, and spiritual renewal.",
    status: "available",
    href: "/music/the-everlasting-light",
    coverImageUrl: "/images/music/everlasting-light-cover.webp",
    coverAltText: "The Everlasting Light album cover.",
  },
  {
    title: "Gloria Patri",
    subtitle: "Songs of the Holy Trinity",
    description: "A sacred music collection centered on glory, prayer, and praise.",
    status: "available",
    href: "/music/gloria-patri",
    coverImageUrl: "/images/music/gloria-patri-cover.webp",
    coverAltText: "Gloria Patri album cover.",
  },
  {
    title: "Little Lights Part 1",
    subtitle: "Children's Music Collection",
    description: "A gentle children's music album created for young hearts, simple joy, family listening, and the first small steps of learning to carry light with kindness.",
    status: "available",
    href: "/music/little-lights-part-1",
    coverImageUrl: "/images/music/little-lights-part-1-cover.webp",
    coverAltText: "Little Lights Part 1 album cover.",
  },
  {
    title: "Little Lights Part 2",
    subtitle: "Children's Music Collection",
    description: "A second Little Lights collection of warm children's songs, carrying the same spirit of hope, gentleness, imagination, and quiet goodness for families and children.",
    status: "available",
    href: "/music/little-lights-part-2",
    coverImageUrl: "/images/music/little-lights-part-2-cover.webp",
    coverAltText: "Little Lights Part 2 album cover.",
  },
];