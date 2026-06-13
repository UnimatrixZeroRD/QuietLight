import Link from "next/link";
import { DashboardSummary } from "../../components/admin/dashboard-summary";
import { LivePageValidation } from "../../components/admin/live-page-validation";
import { adminSections } from "../../data/admin-sections";

export default function AdminPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <p className="gold-text uppercase tracking-[0.3em]">Admin</p>
      <h1 className="gold-text mt-4 text-5xl md:text-7xl">Quiet Light Admin</h1>
      <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--muted-silver)]">
        Manage publishing, Daily Light, products, orders, messages, members, media, and access control.
      </p>

      <DashboardSummary />
      <LivePageValidation />

      <section className="mt-12">
        <p className="gold-text uppercase tracking-[0.3em]">Sections</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {adminSections.map((section) => (
            <article className="lantern-panel rounded-3xl p-6" key={section.title}>
              <p className="gold-text text-xs uppercase tracking-[0.25em]">{section.status}</p>
              <h2 className="mt-4 text-2xl">{section.title}</h2>
              <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">{section.description}</p>
              <Link className="gold-text mt-6 inline-block uppercase tracking-[0.18em]" href={section.href}>
                Open Section
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
