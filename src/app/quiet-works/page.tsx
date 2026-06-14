import Link from "next/link";

const quietWorks = [
  {
    title: "The Keeper's Table",
    description:
      "A local food support initiative that gathers contributions, stretches them through surplus and food-waste reduction sources, and helps provide fresh produce and practical nourishment to local food banks and members in need.",
    status: "First Quiet Works initiative",
  },
  {
    title: "Future Works",
    description:
      "Additional works of mercy, service, and community care can be added here as the Order of the Lanterns grows.",
    status: "Coming later",
  },
];

export default function QuietWorksPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <section className="lantern-panel rounded-3xl p-6 md:p-12">
        <p className="gold-text uppercase tracking-[0.3em]">Quiet Works</p>
        <h1 className="mt-4 text-5xl md:text-7xl">Faith made visible through service.</h1>
        <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--muted-silver)]">
          Quiet Works is the service arm of the Way of Quiet Light: humble, practical acts of mercy carried out without spectacle, rooted in stillness, compassion, and care for the local community.
        </p>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2" aria-label="Quiet Works initiatives">
        {quietWorks.map((work) => (
          <article className="lantern-panel rounded-3xl p-6 md:p-8" key={work.title}>
            <p className="gold-text text-xs uppercase tracking-[0.24em]">{work.status}</p>
            <h2 className="mt-4 text-3xl md:text-4xl">{work.title}</h2>
            <p className="mt-5 leading-8 text-[var(--muted-silver)]">{work.description}</p>
          </article>
        ))}
      </section>

      <section className="mt-12 lantern-panel rounded-3xl p-6 md:p-10">
        <p className="gold-text uppercase tracking-[0.24em]">The Keeper&apos;s Table</p>
        <h2 className="mt-4 text-3xl md:text-5xl">Fresh food, less waste, direct local help.</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="gold-text text-xl">Gather</h3>
            <p className="mt-3 leading-7 text-[var(--muted-silver)]">Collect support from those who want to help feed neighbours with dignity and care.</p>
          </div>
          <div>
            <h3 className="gold-text text-xl">Stretch</h3>
            <p className="mt-3 leading-7 text-[var(--muted-silver)]">Use donations wisely by prioritizing surplus food, food-waste reduction apps, and discounted fresh produce.</p>
          </div>
          <div>
            <h3 className="gold-text text-xl">Share</h3>
            <p className="mt-3 leading-7 text-[var(--muted-silver)]">Help provide food to local food banks and members who need practical support.</p>
          </div>
        </div>
        <Link className="gold-text mt-8 inline-block uppercase tracking-[0.18em]" href="/support">Support Quiet Works</Link>
      </section>
    </main>
  );
}
