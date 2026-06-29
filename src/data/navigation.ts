export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

const externalStoreUrl = "https://quietlight.store/";

export const primaryNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "The Way",
    href: "/the-way",
    children: [
      { label: "The Way Overview", href: "/the-way" },
      { label: "Daily Light", href: "/daily-light" },
      { label: "Geneva Bible", href: "/bible" },
    ],
  },
  {
    label: "Works",
    href: "/keepers-lantern",
    children: [
      { label: "The Keeper's Lantern", href: "/keepers-lantern" },
      { label: "Music", href: "/music" },
      { label: "Video", href: "/video" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    label: "Community",
    href: "/membership",
    children: [
      { label: "Order of the Lantern", href: "/membership" },
      { label: "Quiet Works", href: "/quiet-works" },
      { label: "Store", href: externalStoreUrl },
      { label: "Support", href: "/support" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Sign In", href: "/sign-in" },
];

export const footerNavigation = {
  explore: [
    { label: "The Way", href: "/the-way" },
    { label: "The Keeper's Lantern", href: "/keepers-lantern" },
    { label: "Music", href: "/music" },
    { label: "Video", href: "/video" },
    { label: "Daily Light", href: "/daily-light" },
  ],
  platform: [
    { label: "Store", href: externalStoreUrl },
    { label: "Order of the Lantern", href: "/membership" },
    { label: "Quiet Works", href: "/quiet-works" },
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
