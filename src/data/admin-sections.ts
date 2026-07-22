export type AdminSection = {
  title: string;
  description: string;
  href: string;
  status: "planned" | "ready" | "blocked";
};

export const adminSections: AdminSection[] = [
  {
    title: "Blog Studio",
    description: "Write visually formatted articles, add media embeds, save drafts, preview pages, and manage published posts.",
    href: "/admin/blog",
    status: "ready",
  },
  {
    title: "Daily Light",
    description: "Manage daily scripture, reflections, prayers, and devotional archive entries.",
    href: "/admin/content",
    status: "ready",
  },
  {
    title: "Products",
    description: "Prepare digital products for the Quiet Light store.",
    href: "/admin/products",
    status: "ready",
  },
  {
    title: "Orders",
    description: "Review store requests, manual payment records, and early access order intents.",
    href: "/admin/orders",
    status: "ready",
  },
  {
    title: "Messages",
    description: "Review account, order, download, membership, and technical messages.",
    href: "/admin/support",
    status: "ready",
  },
  {
    title: "Ledger",
    description: "Review completed transaction records and fulfillment totals.",
    href: "/admin/ledger",
    status: "ready",
  },
  {
    title: "Music",
    description: "Create and manage albums for the Quiet Light music archive.",
    href: "/admin/music",
    status: "ready",
  },
  {
    title: "Media",
    description: "Register site media records and embed links.",
    href: "/admin/media",
    status: "ready",
  },
  {
    title: "Members",
    description: "Review profiles, memberships, tiers, supporter status, and access levels.",
    href: "/admin/members",
    status: "ready",
  },
];
