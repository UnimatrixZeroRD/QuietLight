export type MembershipTier = {
  name: string;
  description: string;
  access: string[];
  href: string;
};

export const membershipTiers: MembershipTier[] = [
  {
    name: "Free Reader",
    description: "Free access to public reflections, updates, and Daily Light entries.",
    access: ["Public posts", "Daily Light", "Basic updates"],
    href: "/membership",
  },
  {
    name: "Supporter",
    description: "A simple way to support the work and receive deeper reflections.",
    access: ["Supporter posts", "Early updates", "Selected music notes"],
    href: "/membership",
  },
  {
    name: "Keeper",
    description: "Deeper devotional access, member-only writing, and special releases.",
    access: ["Member archive", "Book excerpts", "Music previews"],
    href: "/membership",
  },
];
