import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Way Overview",
  description:
    "An introduction to The Way of Quiet Light: a Christian path of stillness, humility, mercy, quiet works, and faithful keeping of the flame.",
  alternates: { canonical: "/the-way" },
  openGraph: {
    title: "The Way Overview | The Way of Quiet Light",
    description:
      "A gentle introduction to the beliefs, rhythm, writings, and spiritual posture of The Way of Quiet Light.",
    url: "/the-way",
  },
};

const keeperPath = [
  {
    title: "Stillness",
    body: "Learning to pause before speaking, to listen before judging, and to make room for the voice of God in a noisy world.",
  },
  {
    title: "Humility",
    body: "Refusing spiritual pride, spectacle, and self-exaltation while remembering that we are not the source of the light.",
  },
  {
    title: "Mercy",
    body: "Choosing forgiveness, compassion, and patience even when bitterness would be easier to carry.",
  },
  {
    title: "Quiet Works",
    body: "Serving without needing applause, recognition, or public display, trusting that God sees what is done in secret.",
  },
  {
    title: "The Flame",
    body: "Keeping faith alive through suffering, doubt, grief, and hardship, and passing the lantern forward when others are lost.",
  },
];

const coreWritings = [
  {
    title: "The Keeper's Oath",
    body: "The personal vow of the Keeper: to tend the Quiet Light with patience, humility, courage, and care.",
  },
  {
    title: "The Ten Quiet Charges",
    body: "A simple guide for conduct, discipline, service, restraint, and faithful remembrance.",
  },
  {
    title: "The Keeper's Invocation",
    body: "A prayer of beginning, asking that the work be guided by light rather than pride.",
  },
  {
    title: "The Psalms of Light",
    body: "Poetic prayers and reflections for stillness, endurance, repentance, gratitude, and hope.",
  },
  {
    title: "The Keeper's Lantern",
    body: "The central written work introducing the vision, language, and spiritual heart of The Way of Quiet Light.",
  },
  {
    title: "The Geneva Bible Project",
    body: "A scripture project connected to the heritage and devotional life of the Way, with careful attention to reverence and preservation.",
  },
];

const notStatements = [
  "The Way of Quiet Light is not a political movement.",
  "It is not a call to religious arrogance or domination.",
  "It is not a replacement for Scripture.",
  "It is not built around spectacle, judgment, or spiritual performance.",
];

export default function TheWayPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="lantern-panel relative overflow-hidden rounded-3xl p-6 md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(216,168,79,0.18),transparent_34rem)]" />
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">The Way Overview</p>
            <h1 className="gold-text mt-5 text-5xl leading-tight md:text-7xl">The Way of Quiet Light</h1>
            <p className="mx-auto mt-7 max-w-3xl text-xl leading-9 text-[var(--ivory)] md:text-2xl md:leading-10">
              A Christian path of stillness, humility, mercy, quiet works, and faithful keeping of the flame.
            </p>
            <p className="mx-auto mt-6 max-w-3xl leading-8 text-[var(--muted-silver)] md:text-lg">
              The Way of Quiet Light is for those who are tired of noise, pride, anger, and spectacle, yet still believe that
              Christ calls us to mercy, patience, prayer, and love. We are not called to become the light. We are called to
              keep it, carry it, and let it shine quietly through the lives we live.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                className="rounded-full border border-[var(--lantern-gold)] bg-[var(--lantern-gold)] px-6 py-3 text-center text-sm uppercase tracking-[0.18em] text-[var(--midnight)] shadow-[0_0_36px_rgba(216,168,79,0.24)] transition hover:bg-[var(--soft-gold)]"
                href="/keepers-lantern"
              >
                Read The Keeper&apos;s Lantern
              </Link>
              <Link
                className="rounded-full border border-[var(--lantern-gold)] px-6 py-3 text-center text-sm uppercase tracking-[0.18em] text-[var(--soft-gold)] transition hover:bg-[rgba(216,168,79,0.12)]"
                href="/daily-light"
              >
                Visit Daily Light
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:px-6 md:grid-cols-[0.9fr_1.1fr] md:py-16">
        <div className="lantern-panel rounded-3xl p-6 md:p-8">
          <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">What We Believe</p>
          <h2 className="mt-4 text-3xl md:text-5xl">Faith carried without arrogance.</h2>
        </div>
        <div className="lantern-panel rounded-3xl p-6 md:p-8">
          <div className="space-y-5 leading-8 text-[var(--muted-silver)]">
            <p>
              The Way of Quiet Light is rooted in faith in Jesus Christ, reverence for Scripture, humility before God, and
              the belief that the strongest light is often carried quietly.
            </p>
            <p>
              It emphasizes prayer, service, forgiveness, discipline, sacred reflection, and the refusal to turn faith into
              performance. The Way is not about declaring ourselves righteous. It is about walking more faithfully, more
              gently, and more honestly before God and neighbour.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-16">
        <div className="lantern-panel rounded-3xl p-6 text-center md:p-12">
          <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">The Meaning of Quiet Light</p>
          <blockquote className="mx-auto mt-8 max-w-3xl text-3xl italic leading-relaxed text-[var(--ivory)] md:text-4xl md:leading-relaxed">
            Quiet Light is the light of Christ carried without arrogance.
          </blockquote>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-[var(--muted-silver)]">
            It is faith without performance, service without applause, strength without cruelty, and truth without hatred.
            It is the lantern lifted for the lost, not a flame used to burn the wounded.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <div className="mb-10 max-w-3xl">
          <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">The Keeper&apos;s Path</p>
          <h2 className="mt-4 text-4xl md:text-6xl">A quiet rhythm for those who tend the light.</h2>
          <p className="mt-5 leading-8 text-[var(--muted-silver)]">
            The Way is lived through simple practices and spiritual postures that can be carried into ordinary life.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {keeperPath.map((item) => (
            <article className="lantern-panel rounded-3xl p-6 md:p-8" key={item.title}>
              <h3 className="gold-text text-2xl">{item.title}</h3>
              <p className="mt-4 leading-8 text-[var(--muted-silver)]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <div className="lantern-panel rounded-3xl p-6 md:p-10">
          <div className="max-w-3xl">
            <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">Core Writings and Practices</p>
            <h2 className="mt-4 text-4xl md:text-6xl">The words that shape the Way.</h2>
            <p className="mt-5 leading-8 text-[var(--muted-silver)]">
              These writings and practices form the growing spiritual language of The Way of Quiet Light.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {coreWritings.map((item) => (
              <article className="rounded-2xl border border-[rgba(185,199,214,0.16)] bg-[rgba(11,31,58,0.48)] p-5" key={item.title}>
                <h3 className="text-2xl text-[var(--ivory)]">{item.title}</h3>
                <p className="mt-3 leading-7 text-[var(--muted-silver)]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-16">
        <div className="lantern-panel rounded-3xl p-6 md:p-8">
          <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">Who This Is For</p>
          <h2 className="mt-4 text-3xl md:text-5xl">For the weary, the wounded, and the quietly faithful.</h2>
          <p className="mt-6 leading-8 text-[var(--muted-silver)]">
            The Way of Quiet Light is for those who still believe in Christ, still believe in mercy, and still believe that a
            small flame kept faithfully can survive the darkest night.
          </p>
        </div>
        <div className="lantern-panel rounded-3xl p-6 md:p-8">
          <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">What The Way Is Not</p>
          <div className="mt-6 grid gap-4">
            {notStatements.map((statement) => (
              <p className="rounded-2xl border border-[rgba(216,168,79,0.22)] bg-[rgba(7,17,31,0.42)] p-4 leading-7 text-[var(--muted-silver)]" key={statement}>
                {statement}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-20">
        <div className="lantern-panel rounded-3xl p-6 text-center md:p-12">
          <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">Begin the Way</p>
          <h2 className="mt-4 text-4xl md:text-6xl">The flame does not need to roar to remain alive.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-[var(--muted-silver)]">
            It only needs to be kept. Begin with the writings, return through Daily Light, and carry the lantern forward in
            ordinary acts of prayer, patience, and quiet mercy.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link className="gold-text inline-block uppercase tracking-[0.18em]" href="/keepers-lantern">
              Explore the Book
            </Link>
            <Link className="gold-text inline-block uppercase tracking-[0.18em]" href="/membership">
              Order of the Lanterns
            </Link>
            <Link className="gold-text inline-block uppercase tracking-[0.18em]" href="/bible">
              Geneva Bible Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
