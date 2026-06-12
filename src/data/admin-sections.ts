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
    title: "Members",
    description: "Review profiles, memberships, tiers, supporter status, and access levels.",
    href: "/admin/members",
    status: "ready",
  },
];
