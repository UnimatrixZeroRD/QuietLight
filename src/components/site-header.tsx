import Link from "next/link";
import { primaryNavigation } from "../data/navigation";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(216,168,79,0.28)] bg-[rgba(7,17,31,0.88)] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="gold-text text-3xl" aria-hidden="true">✦</span>
          <span className="gold-text text-lg uppercase tracking-[0.25em]">Quiet Light</span>
        </Link>
        <nav className="hidden items-center gap-5 text-xs uppercase tracking-[0.16em] text-[var(--muted-silver)] lg:flex">
          {primaryNavigation.map((item) => (
            <Link className="transition hover:text-[var(--lantern-gold)]" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
