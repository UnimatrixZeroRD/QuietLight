export type ProductType = "ebook" | "music" | "video" | "bundle";

export type Product = {
  title: string;
  type: ProductType;
  description: string;
  href: string;
};

export const featuredProducts: Product[] = [
  {
    title: "The Keeper's Lantern Digital Edition",
    type: "ebook",
    description: "A future digital edition with personal access through the Quiet Light library.",
    href: "/store",
  },
  {
    title: "The Flame Remains Album Access",
    type: "music",
    description: "A future music access product for the Lantern Psalms collection.",
    href: "/store",
  },
  {
    title: "Quiet Light Devotional Bundle",
    type: "bundle",
    description: "A future bundle for books, music, and special devotional material.",
    href: "/store",
  },
];
