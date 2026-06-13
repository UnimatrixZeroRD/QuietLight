import Link from "next/link";
import { footerNavigation } from "../data/navigation";

export function SiteFooter() {
  return (
    <footer className="border-t border-[rgba(216,168,79,0.28)] px-6 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <p className="gold-text text-2xl uppercase tracking-[0.2em]">The Way of Quiet Light</p>
          <p className="mt-4 text-[var(--muted-silver)]">The flame remains.</p>
        </div>
        <FooterColumn title="Explore" items={footerNavigation.explore} />
        <FooterColumn title="Platform" items={footerNavigation.platform} />
        <FooterColumn title="Legal" items={footerNavigation.legal} />
      </div>
      <p className="mx-auto mt-10 max-w-7xl text-xs leading-6 text-[var(--muted-silver)]">
        For God. For Light. For One Another. Legal and policy pages are starter public-launch pages and should be reviewed before full production release.
      </p>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="gold-text uppercase tracking-[0.2em]">{title}</p>
      <div className="mt-4 grid gap-2 text-sm text-[var(--muted-silver)]">
        {items.map((item) => (
          <Link className="transition hover:text-[var(--lantern-gold)] focus-visible:text-[var(--lantern-gold)]" href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
