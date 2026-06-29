import Image from "next/image";
import Link from "next/link";
import { primaryNavigation, type NavItem } from "../data/navigation";

function DesktopNavigationItem({ item }: { item: NavItem }) {
  if (!item.children?.length) {
    return (
      <Link className="transition hover:text-[var(--lantern-gold)] focus-visible:text-[var(--lantern-gold)]" href={item.href}>
        {item.label}
      </Link>
    );
  }

  return (
    <div className="group relative">
      <Link className="inline-flex items-center gap-1 transition hover:text-[var(--lantern-gold)] focus-visible:text-[var(--lantern-gold)]" href={item.href}>
        {item.label}
        <span className="text-[0.7rem] text-[var(--soft-gold)] transition group-hover:translate-y-0.5" aria-hidden="true">⌄</span>
      </Link>
      <div className="invisible absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="rounded-2xl border border-[rgba(216,168,79,0.28)] bg-[rgba(7,17,31,0.96)] p-2 shadow-2xl shadow-black/30 backdrop-blur-xl">
          {item.children.map((child) => (
            <Link
              className="block rounded-xl px-4 py-3 text-[0.7rem] uppercase tracking-[0.16em] text-[var(--muted-silver)] transition hover:bg-[rgba(216,168,79,0.1)] hover:text-[var(--lantern-gold)] focus-visible:bg-[rgba(216,168,79,0.1)] focus-visible:text-[var(--lantern-gold)]"
              href={child.href}
              key={child.href}
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileNavigationItem({ item }: { item: NavItem }) {
  if (!item.children?.length) {
    return (
      <Link className="rounded-full border border-[rgba(216,168,79,0.18)] px-3 py-2 transition hover:border-[rgba(216,168,79,0.45)] hover:text-[var(--lantern-gold)]" href={item.href}>
        {item.label}
      </Link>
    );
  }

  return (
    <details className="group rounded-2xl border border-[rgba(216,168,79,0.18)]">
      <summary className="flex cursor-pointer list-none items-center gap-2 px-3 py-2 transition hover:text-[var(--lantern-gold)] [&::-webkit-details-marker]:hidden">
        {item.label}
        <span className="text-[0.7rem] text-[var(--soft-gold)] transition group-open:rotate-180" aria-hidden="true">⌄</span>
      </summary>
      <div className="grid gap-1 border-t border-[rgba(216,168,79,0.12)] p-2">
        {item.children.map((child) => (
          <Link
            className="rounded-xl px-3 py-2 text-[0.68rem] text-[var(--muted-silver)] transition hover:bg-[rgba(216,168,79,0.1)] hover:text-[var(--lantern-gold)]"
            href={child.href}
            key={child.href}
          >
            {child.label}
          </Link>
        ))}
      </div>
    </details>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(216,168,79,0.28)] bg-[rgba(7,17,31,0.9)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Quiet Light Ministries home">
          <Image
            src="/images/brand/quiet-light-mark.webp"
            alt=""
            width={40}
            height={40}
            priority
            aria-hidden="true"
            className="h-8 w-8 shrink-0 object-contain sm:h-10 sm:w-10"
          />
          <span className="gold-text truncate text-base uppercase tracking-[0.16em] sm:text-lg sm:tracking-[0.22em]">Quiet Light Ministries</span>
        </Link>
        <nav className="hidden items-center gap-5 text-xs uppercase tracking-[0.16em] text-[var(--muted-silver)] xl:flex" aria-label="Primary navigation">
          {primaryNavigation.map((item) => (
            <DesktopNavigationItem item={item} key={item.href} />
          ))}
        </nav>
        <Link className="rounded-full border border-[rgba(216,168,79,0.45)] px-4 py-2 text-xs uppercase tracking-[0.16em] text-[var(--soft-gold)] xl:hidden" href="/sign-in">
          Sign In
        </Link>
      </div>
      <nav className="border-t border-[rgba(216,168,79,0.16)] px-4 py-3 text-xs uppercase tracking-[0.16em] text-[var(--muted-silver)] xl:hidden" aria-label="Mobile navigation">
        <div className="flex flex-wrap gap-3">
          {primaryNavigation.filter((item) => item.href !== "/sign-in").map((item) => (
            <MobileNavigationItem item={item} key={item.href} />
          ))}
        </div>
      </nav>
    </header>
  );
}
