export type PostPreview = {
  title: string;
  category: string;
  summary: string;
  href: string;
};

export const featuredPosts: PostPreview[] = [
  {
    title: "The Way of the Lantern",
    category: "Reflection",
    summary: "An introduction to the language of the lantern, the keeper, and the quiet path.",
    href: "/blog",
  },
  {
    title: "The Flame Remains",
    category: "Devotional",
    summary: "A quiet reflection for those walking through darkness with a guarded flame.",
    href: "/daily-light",
  },
  {
    title: "Building Quiet Light",
    category: "Update",
    summary: "A project update on the public site, platform, books, music, and devotional archive.",
    href: "/blog",
  },
];
