import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Official Positions",
  description:
    "Quiet Light Positions and Directives: official statements, doctrinal positions, pastoral guidance, and public reflections from Quiet Light Ministries.",
};

const directiveCategories = [
  {
    title: "Doctrinal Positions",
    description:
      "Formal Quiet Light positions on questions of faith, scripture, morality, worship, humility, service, and the keeping of the inner flame.",
  },
  {
    title: "Pastoral Directives",
    description:
      "Practical guidance for members and readers when a topic calls for a clear response rooted in scripture, conscience, and quiet wisdom.",
  },
  {
    title: "Public Statements",
    description:
      "Official reflections on public matters, cultural questions, and spiritual concerns where Quiet Light needs to speak plainly and carefully.",
  },
];

export default function PositionsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <section className="lantern-panel rounded-3xl p-6 md:p-12" aria-labelledby="official-positions-title">
        <p className="gold-text uppercase tracking-[0.3em]">Official Positions</p>
        <h1 className="gold-text mt-4 text-5xl md:text-7xl" id="official-positions-title">
          Quiet Light Positions &amp; Directives
        </h1>
        <p className="mt-8 max-w-4xl text-xl leading-9 text-[var(--muted-silver)]">
          This page gathers formal Quiet Light positions on different subjects: official statements,
          scripture-based opinions, pastoral guidance, and directives issued when a topic requires a clear and
          thoughtful response.
        </p>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-[var(--muted-silver)]">
          In older church language, documents like these might be called encyclicals, decrees, pastoral letters,
          or official declarations. Quiet Light uses its own voice here: calm, scriptural, direct, and rooted in
          conscience rather than noise.
        </p>

        <figure className="mt-10 overflow-hidden rounded-3xl border border-[rgba(216,168,79,0.24)] bg-[rgba(5,13,28,0.55)] shadow-[0_0_48px_rgba(216,168,79,0.12)]">
          <Image
            src="/images/bible/official-positions.webp"
            alt="Artwork for Quiet Light official positions and directives."
            width={1400}
            height={900}
            priority
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="block h-auto w-full"
          />
        </figure>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {directiveCategories.map((category) => (
            <article
              className="rounded-3xl border border-[rgba(216,168,79,0.22)] bg-[rgba(5,13,28,0.55)] p-6"
              key={category.title}
            >
              <p className="gold-text uppercase tracking-[0.22em]">Directive Type</p>
              <h2 className="mt-3 text-2xl text-white">{category.title}</h2>
              <p className="mt-4 leading-7 text-[var(--muted-silver)]">{category.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lantern-panel mt-14 rounded-3xl p-6 md:p-12" aria-labelledby="positions-archive-title">
        <p className="gold-text uppercase tracking-[0.3em]">Document Archive</p>
        <h2 className="gold-text mt-4 text-4xl md:text-6xl" id="positions-archive-title">
          A home for official documents
        </h2>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-[var(--muted-silver)]">
          Future entries can be organized by title, subject, date, scripture foundation, summary, and full text,
          giving Quiet Light a structured and permanent home for formal teachings, pastoral direction, and public
          positions.
        </p>

        <div className="mt-10 rounded-3xl border border-[var(--lantern-gold)] bg-[rgba(216,168,79,0.1)] p-6 md:p-8">
          <p className="gold-text uppercase tracking-[0.22em]">Coming Archive</p>
          <h3 className="mt-3 text-3xl text-white">Official documents will appear here as they are issued.</h3>
          <p className="mt-4 max-w-3xl leading-8 text-[var(--muted-silver)]">
            Each document will be presented with enough context to explain its purpose, scriptural foundation,
            authority, and intended application.
          </p>
        </div>
      </section>
    </main>
  );
}
