export type NavItem = {
  label: string;
  href: string;
};

export const primaryNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "The Way", href: "/the-way" },
  { label: "Book", href: "/keepers-lantern" },
  { label: "Music", href: "/music" },
  { label: "Daily Light", href: "/daily-light" },
  { label: "Bible", href: "/bible" },
  { label: "Store", href: "/store" },
  { label: "Membership", href: "/membership" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Support", href: "/support" },
  { label: "Sign In", href: "/sign-in" },
];

export const footerNavigation = {
  explore: [
    { label: "The Way", href: "/the-way" },
    { label: "The Keeper's Lantern", href: "/keepers-lantern" },
    { label: "Music", href: "/music" },
    { label: "Daily Light", href: "/daily-light" },
  ],
  platform: [
    { label: "Store", href: "/store" },
    { label: "Membership", href: "/membership" },
    { label: "Bible", href: "/bible" },
    { label: "Blog", href: "/blog" },
    { label: "Account", href: "/account" },
    { label: "Admin", href: "/admin" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Support", href: "/support" },
  ],
};
