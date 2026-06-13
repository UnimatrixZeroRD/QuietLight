import Link from "next/link";
import { primaryNavigation } from "../data/navigation";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(216,168,79,0.28)] bg-[rgba(7,17,31,0.9)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Quiet Light home">
          <span className="gold-text shrink-0 text-3xl" aria-hidden="true">✦</span>
          <span className="gold-text truncate text-base uppercase tracking-[0.2em] sm:text-lg sm:tracking-[0.25em]">Quiet Light</span>
        </Link>
        <nav className="hidden items-center gap-5 text-xs uppercase tracking-[0.16em] text-[var(--muted-silver)] xl:flex" aria-label="Primary navigation">
          {primaryNavigation.map((item) => (
            <Link className="transition hover:text-[var(--lantern-gold)] focus-visible:text-[var(--lantern-gold)]" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="rounded-full border border-[rgba(216,168,79,0.45)] px-4 py-2 text-xs uppercase tracking-[0.16em] text-[var(--soft-gold)] xl:hidden" href="/sign-in">
          Sign In
        </Link>
      </div>
      <nav className="mobile-nav-scroll border-t border-[rgba(216,168,79,0.16)] px-4 py-3 text-xs uppercase tracking-[0.16em] text-[var(--muted-silver)] xl:hidden" aria-label="Mobile navigation">
        <div className="flex min-w-max gap-4">
          {primaryNavigation.filter((item) => item.href !== "/sign-in").map((item) => (
            <Link className="rounded-full border border-[rgba(216,168,79,0.18)] px-3 py-2 transition hover:border-[rgba(216,168,79,0.45)] hover:text-[var(--lantern-gold)]" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
