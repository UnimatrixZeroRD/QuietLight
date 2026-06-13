import Image from "next/image";
import Link from "next/link";

type Edition = {
  title: string;
  image: string;
  alt: string;
  description: string;
  href: string;
  cta: string;
  label?: string;
  subtitle?: string;
  featured?: boolean;
};

const editions: Edition[] = [
  {
    label: "Featured Edition",
    title: "The Keeper's Lantern: Definitive Edition",
    image: "/images/placeholders/keepers-lantern-definitive.svg",
    alt: "Placeholder cover for The Keeper's Lantern Definitive Edition.",
    description:
      "The expanded definitive edition, offering the fullest version of the work and its reflections on faith, suffering, hope, and the responsibility of carrying the light forward.",
    href: "https://www.amazon.ca/Keepers-Lantern-Definitive-Joshua-Eaton-ebook/dp/B0GX3B74W2/",
    cta: "Buy on Amazon",
    featured: true,
  },
  {
    title: "The Keeper's Lantern: The Book of Joshua",
    image: "/images/placeholders/keepers-lantern-book-of-joshua.svg",
    alt: "Placeholder cover for The Keeper's Lantern: The Book of Joshua.",
    description:
      "The original edition of The Keeper's Lantern, a reflective work of faith, endurance, responsibility, forgiveness, and quiet spiritual philosophy.",
    href: "https://www.amazon.ca/Keepers-Lantern-Book-Joshua-ebook/dp/B0GPMD2KLL/",
    cta: "Buy on Amazon",
  },
  {
    title: "The Keeper's Lantern: The Book of Joshua Audiobook",
    image: "/images/placeholders/keepers-lantern-audiobook.svg",
    alt: "Placeholder cover for The Keeper's Lantern audiobook.",
    description: "Listen to The Keeper's Lantern in audiobook form through Audible.",
    href: "https://www.audible.ca/pd/The-Keeper%E2%80%99s-Lantern-Audiobook/B0GXMPG44C/",
    cta: "Listen on Audible",
  },
  {
    title: "The Rule of the Keeper",
    subtitle: "A Voluntary Rhythm for Those Who Tend the Light",
    image: "/images/placeholders/rule-of-the-keeper.svg",
    alt: "Placeholder cover for The Rule of the Keeper.",
    description:
      "A companion work offering a simple voluntary rhythm for those who wish to live more intentionally according to the spirit of quiet faith, humility, and responsibility.",
    href: "https://www.amazon.ca/Rule-Keeper-Voluntary-Rhythm-Those/dp/B0GXYZ458N/",
    cta: "Buy on Amazon",
  },
];

export default function KeepersLanternPage() {
  const featuredEdition = editions[0];

  return (
    <main>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[0.82fr_1.18fr] md:items-center md:py-24">
        <div className="overflow-hidden rounded-3xl border border-[var(--lantern-gold)] bg-[var(--midnight)] shadow-[0_0_64px_rgba(216,168,79,0.22)]">
          <Image
            src={featuredEdition.image}
            alt={featuredEdition.alt}
            width={1024}
            height={1536}
            priority
            unoptimized
            sizes="(min-width: 768px) 38vw, 100vw"
            className="block h-auto w-full"
          />
        </div>

        <div className="lantern-panel rounded-3xl p-6 md:p-10">
          <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">The Book</p>
          <h1 className="gold-text mt-4 text-5xl md:text-7xl">The Keeper&apos;s Lantern</h1>
          <p className="mt-5 text-2xl leading-snug text-[var(--ivory)] md:text-3xl">
            A book of reflection, faith, endurance, and quiet responsibility.
          </p>
          <p className="mt-7 text-lg leading-9 text-[var(--muted-silver)]">
            <em>The Keeper&apos;s Lantern</em> is a work of reflection, faith, and lived philosophy about suffering,
            responsibility, forgiveness, and the quiet strength required to keep moving forward when life becomes heavy.
          </p>
          <p className="mt-5 leading-8 text-[var(--muted-silver)]">
            Part personal testimony, part spiritual meditation, and part philosophical framework, this book grows from one
            central realization: human beings do not create the light that gives life meaning. We are only entrusted to
            carry it.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              className="rounded-full border border-[var(--lantern-gold)] bg-[var(--lantern-gold)] px-6 py-3 text-center text-sm uppercase tracking-[0.18em] text-[var(--midnight)] shadow-[0_0_36px_rgba(216,168,79,0.24)] transition hover:bg-[var(--soft-gold)]"
              href="https://www.amazon.ca/Keepers-Lantern-Definitive-Joshua-Eaton-ebook/dp/B0GX3B74W2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy the Definitive Edition
            </Link>
            <Link
              className="rounded-full border border-[var(--lantern-gold)] px-6 py-3 text-center text-sm uppercase tracking-[0.18em] text-[var(--soft-gold)] transition hover:bg-[rgba(216,168,79,0.12)]"
              href="https://www.audible.ca/pd/The-Keeper%E2%80%99s-Lantern-Audiobook/B0GXMPG44C/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Listen on Audible
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-16">
        <div className="lantern-panel rounded-3xl p-6 md:p-12">
          <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">A Lantern in the Dark</p>
          <div className="mt-8 space-y-6 text-lg leading-9 text-[var(--muted-silver)]">
            <p>
              Rooted in contemplation of the teachings and work of Jesus, <em>The Keeper&apos;s Lantern</em> explores faith
              not as certainty or perfection, but as endurance. It is about choosing compassion when bitterness feels
              easier, choosing responsibility when surrender feels tempting, and choosing forgiveness when pain would
              justify anger.
            </p>
            <p>
              The example of Christ&apos;s sacrifice is presented not as something distant or unreachable, but as a guiding
              light for ordinary people struggling to live with dignity in difficult circumstances.
            </p>
            <p className="text-2xl leading-relaxed text-[var(--ivory)]">
              This is not a book about having all the answers. It is a book about continuing the journey despite
              unanswered questions.
            </p>
            <p>
              Joshua writes openly about hardship, doubt, failure, and the difficult process of rebuilding meaning when
              life does not unfold as expected. Rather than offering abstract theology or rigid doctrine, he presents a
              simple spiritual philosophy grounded in humility: that each person is given opportunities to protect
              goodness, reduce suffering, and carry hope forward for others.
            </p>
            <p>
              At the center of the book is the image of the lantern, a symbol of faith, responsibility, and continuity
              across generations. The lantern reminds us that light can be fragile, that it requires care, and that its
              purpose is not to be possessed, but to be shared.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 text-center sm:px-6 md:py-16">
        <div className="rounded-3xl border border-[rgba(216,168,79,0.34)] bg-[rgba(7,17,31,0.72)] p-8 shadow-[0_0_56px_rgba(255,179,71,0.13)] md:p-14">
          <p className="text-2xl leading-relaxed md:text-4xl">Every generation is given a lantern in the dark.</p>
          <div className="mt-8 space-y-2 text-lg leading-8 text-[var(--muted-silver)] md:text-xl">
            <p>Some ignore it.</p>
            <p>Some extinguish it.</p>
            <p>A few choose to carry it forward.</p>
          </div>
          <blockquote className="gold-text mx-auto mt-10 max-w-2xl text-3xl italic leading-relaxed md:text-5xl">
            “I am not the light.
            <br />I am only its keeper.”
          </blockquote>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-20">
        <div className="mb-10 max-w-3xl">
          <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">Available Editions</p>
          <h2 className="mt-4 text-4xl md:text-6xl">Books and companion works</h2>
          <p className="mt-5 leading-8 text-[var(--muted-silver)]">
            <em>The Keeper&apos;s Lantern</em> and related works are currently available through Amazon and Audible.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {editions.map((edition) => (
            <article
              className={`lantern-panel grid gap-6 rounded-3xl p-6 md:grid-cols-[0.44fr_1fr] md:p-8 ${edition.featured ? "md:col-span-2" : ""}`}
              key={edition.title}
            >
              <div className="overflow-hidden rounded-2xl border border-[var(--lantern-gold)] bg-[var(--midnight)] shadow-[0_0_42px_rgba(255,179,71,0.15)]">
                <Image
                  src={edition.image}
                  alt={edition.alt}
                  width={768}
                  height={1152}
                  unoptimized
                  sizes={edition.featured ? "(min-width: 768px) 24vw, 100vw" : "(min-width: 768px) 20vw, 100vw"}
                  className="h-auto w-full"
                />
              </div>
              <div className="flex flex-col justify-center">
                {edition.label ? (
                  <p className="gold-text text-sm uppercase tracking-[0.2em]">{edition.label}</p>
                ) : null}
                <h3 className="mt-3 text-2xl md:text-3xl">{edition.title}</h3>
                {edition.subtitle ? <p className="gold-text mt-2 italic">{edition.subtitle}</p> : null}
                <p className="mt-5 leading-8 text-[var(--muted-silver)]">{edition.description}</p>
                <Link
                  className="gold-text mt-6 inline-block uppercase tracking-[0.18em]"
                  href={edition.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {edition.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
