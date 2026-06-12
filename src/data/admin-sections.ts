export type AdminSection = {
  title: string;
  description: string;
  href: string;
  status: "planned" | "ready" | "blocked";
};

export const adminSections: AdminSection[] = [
  {
    title: "Posts",
    description: "Create and manage reflections, updates, announcements, and long-form writing.",
    href: "/admin/content",
    status: "planned",
  },
  {
    title: "Daily Light",
    description: "Manage daily scripture, reflections, prayers, and devotional archive entries.",
    href: "/admin/content",
    status: "planned",
  },
  {
    title: "Products",
    description: "Prepare e-books, music, videos, bundles, product files, purchases, and licenses.",
    href: "/admin/content",
    status: "planned",
  },
  {
    title: "Members",
    description: "Review profiles, memberships, tiers, supporter status, and access levels.",
    href: "/admin/members",
    status: "planned",
  },
];
