import Image from "next/image";
import Link from "next/link";

const scriptureLinks = [
  {
    title: "Complete Geneva Bible",
    href: "#geneva-bible-books",
    description: "The full 1599 Geneva Bible collection as the Quiet Light scripture library is built out.",
  },
  {
    title: "Old Testament",
    href: "#old-testament-books",
    description: "The law, histories, wisdom writings, and prophets in the traditional Old Testament order.",
  },
  {
    title: "New Testament",
    href: "#new-testament-books",
    description: "The Gospels, apostolic writings, epistles, and Revelation in the traditional New Testament order.",
  },
];

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

const genevaBibleProjectFeatures = [
  {
    title: "Original 1599 Text",
    description:
      "A preserved foundation of the historic Geneva Bible text, retained as the source layer for study, comparison, and continuity.",
  },
  {
    title: "Modern Language Rendering",
    description:
      "A complete updated-language version intended to make the meaning clearer for modern readers while remaining rooted in the original work.",
  },
  {
    title: "Integrated Study Guide",
    description:
      "Notes, explanations, reflections, and study material built into the Bible itself so readers can move from text to understanding.",
  },
  {
    title: "400th Anniversary Edition",
    description:
      "A special Way of Quiet Light edition honoring the Eaton family's 1635 arrival in the Americas and the 400-year legacy that follows.",
  },
];

const oldTestamentBooks = [
  "Genesis",
  "Exodus",
  "Leviticus",
  "Numbers",
  "Deuteronomy",
  "Joshua",
  "Judges",
  "Ruth",
  "1 Samuel",
  "2 Samuel",
  "1 Kings",
  "2 Kings",
  "1 Chronicles",
  "2 Chronicles",
  "Ezra",
  "Nehemiah",
  "Esther",
  "Job",
  "Psalms",
  "Proverbs",
  "Ecclesiastes",
  "Song of Solomon",
  "Isaiah",
  "Jeremiah",
  "Lamentations",
  "Ezekiel",
  "Daniel",
  "Hosea",
  "Joel",
  "Amos",
  "Obadiah",
  "Jonah",
  "Micah",
  "Nahum",
  "Habakkuk",
  "Zephaniah",
  "Haggai",
  "Zechariah",
  "Malachi",
];

const newTestamentBooks = [
  "Matthew",
  "Mark",
  "Luke",
  "John",
  "Acts",
  "Romans",
  "1 Corinthians",
  "2 Corinthians",
  "Galatians",
  "Ephesians",
  "Philippians",
  "Colossians",
  "1 Thessalonians",
  "2 Thessalonians",
  "1 Timothy",
  "2 Timothy",
  "Titus",
  "Philemon",
  "Hebrews",
  "James",
  "1 Peter",
  "2 Peter",
  "1 John",
  "2 John",
  "3 John",
  "Jude",
  "Revelation",
];

function BookList({ books }: { books: string[] }) {
  return (
    <ol className="mt-6 grid gap-3 sm:grid-cols-2">
      {books.map((book, index) => (
        <li
          className="flex items-center gap-3 rounded-2xl border border-[rgba(216,168,79,0.18)] bg-[rgba(10,20,36,0.45)] px-4 py-3 text-[var(--muted-silver)]"
          key={book}
        >
          <span className="gold-text min-w-8 text-sm tracking-[0.16em]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span>{book}</span>
        </li>
      ))}
    </ol>
  );
}

function SectionGraphic({
  src,
  alt,
  width,
  height,
  label,
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  label: string;
  priority?: boolean;
}) {
  return (
    <figure className="mt-10 overflow-hidden rounded-3xl border border-[rgba(216,168,79,0.24)] bg-[rgba(5,13,28,0.55)] shadow-[0_0_48px_rgba(216,168,79,0.12)]">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="(min-width: 1024px) 1024px, 100vw"
        className="block h-auto w-full"
      />
      <figcaption className="border-t border-[rgba(216,168,79,0.18)] px-5 py-3 text-sm uppercase tracking-[0.18em] text-[var(--muted-silver)]">
        {label}
      </figcaption>
    </figure>
  );
}

export default function BiblePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <section className="lantern-panel rounded-3xl p-6 md:p-12" aria-labelledby="geneva-bible-title">
        <p className="gold-text uppercase tracking-[0.3em]">Bible</p>
        <h1 className="gold-text mt-4 text-5xl md:text-7xl" id="geneva-bible-title">
          The 1599 Geneva Bible
        </h1>
        <p className="mt-8 max-w-4xl text-xl leading-9 text-[var(--muted-silver)]">
          This section is dedicated to the 1599 Geneva Bible: a public-domain scripture text chosen for its
          historic depth, its freedom from modern licensing restrictions, and its closeness in time to the Bible
          that the Eaton family may have known when they first came to the Americas in the early 1600s.
        </p>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-[var(--muted-silver)]">
          It also carries a personal resonance for Quiet Light. Geneva is not only the name of the Bible being
          preserved here; it is also the name of Joshua&apos;s daughter. For that reason, this page will serve as both
          a scripture archive and a family-rooted act of remembrance.
        </p>

        <SectionGraphic
          src="/images/bible/geneva-bible-archive.webp"
          alt="Artwork for the 1599 Geneva Bible archive section."
          width={1600}
          height={1000}
          label="Geneva Bible archive artwork"
          priority
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border border-[rgba(216,168,79,0.22)] bg-[rgba(5,13,28,0.55)] p-6">
            <p className="gold-text uppercase tracking-[0.22em]">Public Domain</p>
            <h2 className="mt-3 text-2xl text-white">Free to preserve and share</h2>
            <p className="mt-4 leading-7 text-[var(--muted-silver)]">
              The Geneva Bible is being used because it can be hosted, restored, quoted, and studied without the
              licensing burdens attached to many modern Bible translations.
            </p>
          </article>
          <article className="rounded-3xl border border-[rgba(216,168,79,0.22)] bg-[rgba(5,13,28,0.55)] p-6">
            <p className="gold-text uppercase tracking-[0.22em]">Heritage</p>
            <h2 className="mt-3 text-2xl text-white">A Bible near the family era</h2>
            <p className="mt-4 leading-7 text-[var(--muted-silver)]">
              The 1599 edition belongs to the same broad historical world as the early English settlers who crossed
              into the Americas during the first decades of the 1600s.
            </p>
          </article>
          <article className="rounded-3xl border border-[rgba(216,168,79,0.22)] bg-[rgba(5,13,28,0.55)] p-6">
            <p className="gold-text uppercase tracking-[0.22em]">Geneva</p>
            <h2 className="mt-3 text-2xl text-white">A name with meaning</h2>
            <p className="mt-4 leading-7 text-[var(--muted-silver)]">
              The title also carries a living family connection through Geneva, making this archive part scripture
              work, part legacy project, and part act of quiet devotion.
            </p>
          </article>
        </div>

        <nav className="mt-10 grid gap-4 md:grid-cols-3" aria-label="Geneva Bible navigation links">
          {scriptureLinks.map((link) => (
            <Link
              className="group rounded-3xl border border-[var(--lantern-gold)] bg-[rgba(216,168,79,0.08)] p-6 transition hover:bg-[rgba(216,168,79,0.16)]"
              href={link.href}
              key={link.title}
            >
              <span className="gold-text text-xl">{link.title}</span>
              <span className="mt-3 block leading-7 text-[var(--muted-silver)]">{link.description}</span>
              <span className="gold-text mt-5 inline-block uppercase tracking-[0.18em] transition group-hover:translate-x-1">
                View Section →
              </span>
            </Link>
          ))}
        </nav>
      </section>

      <section className="mt-14" id="geneva-bible-books" aria-labelledby="geneva-bible-books-title">
        <div className="lantern-panel rounded-3xl p-6 md:p-12">
          <p className="gold-text uppercase tracking-[0.3em]">Book Index</p>
          <h2 className="gold-text mt-4 text-4xl md:text-6xl" id="geneva-bible-books-title">
            Traditional Books of the Bible
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-[var(--muted-silver)]">
            As the Quiet Light scripture library is built out, these books will become the organizing structure for
            the complete 1599 Geneva Bible, separated into Old Testament and New Testament collections.
          </p>

          <SectionGraphic
            src="/images/bible/book-index.webp"
            alt="Artwork for the traditional books of the Bible index."
            width={1400}
            height={900}
            label="Bible book index artwork"
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <article id="old-testament-books">
              <div className="rounded-3xl border border-[rgba(216,168,79,0.22)] bg-[rgba(5,13,28,0.55)] p-6">
                <p className="gold-text uppercase tracking-[0.22em]">Old Testament</p>
                <h3 className="mt-3 text-3xl text-white">The Hebrew Scriptures</h3>
                <BookList books={oldTestamentBooks} />
              </div>
            </article>

            <article id="new-testament-books">
              <div className="rounded-3xl border border-[rgba(216,168,79,0.22)] bg-[rgba(5,13,28,0.55)] p-6">
                <p className="gold-text uppercase tracking-[0.22em]">New Testament</p>
                <h3 className="mt-3 text-3xl text-white">The Gospel and Apostolic Witness</h3>
                <BookList books={newTestamentBooks} />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="mt-14" id="official-positions" aria-labelledby="official-positions-title">
        <div className="lantern-panel rounded-3xl p-6 md:p-12">
          <p className="gold-text uppercase tracking-[0.3em]">Official Positions</p>
          <h2 className="gold-text mt-4 text-4xl md:text-6xl" id="official-positions-title">
            Quiet Light Positions &amp; Directives
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-[var(--muted-silver)]">
            This section will gather formal Quiet Light positions on different subjects: official statements,
            scripture-based opinions, pastoral guidance, and directives issued when a topic requires a clear and
            thoughtful response.
          </p>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-[var(--muted-silver)]">
            In older church language, documents like these might be called encyclicals, decrees, pastoral letters,
            or official declarations. Quiet Light will use its own voice here: calm, scriptural, direct, and rooted
            in conscience rather than noise.
          </p>

          <SectionGraphic
            src="/images/bible/official-positions.webp"
            alt="Artwork for Quiet Light official positions and directives."
            width={1400}
            height={900}
            label="Official positions artwork"
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {directiveCategories.map((category) => (
              <article
                className="rounded-3xl border border-[rgba(216,168,79,0.22)] bg-[rgba(5,13,28,0.55)] p-6"
                key={category.title}
              >
                <p className="gold-text uppercase tracking-[0.22em]">Directive Type</p>
                <h3 className="mt-3 text-2xl text-white">{category.title}</h3>
                <p className="mt-4 leading-7 text-[var(--muted-silver)]">{category.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-[rgba(216,168,79,0.22)] bg-[rgba(216,168,79,0.08)] p-6 md:p-8">
            <p className="gold-text uppercase tracking-[0.22em]">Coming Archive</p>
            <h3 className="mt-3 text-3xl text-white">A place for future official documents</h3>
            <p className="mt-4 max-w-3xl leading-8 text-[var(--muted-silver)]">
              Future entries can be organized by title, subject, date, scripture foundation, summary, and full text,
              giving Quiet Light a structured home for formal teachings and public positions.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14" id="geneva-bible-project" aria-labelledby="geneva-bible-project-title">
        <div className="lantern-panel rounded-3xl p-6 md:p-12">
          <p className="gold-text uppercase tracking-[0.3em]">Geneva Bible Project</p>
          <h2 className="gold-text mt-4 text-4xl md:text-6xl" id="geneva-bible-project-title">
            The Geneva Bible Project
          </h2>
          <p className="mt-6 max-w-4xl text-xl leading-9 text-[var(--muted-silver)]">
            The Geneva Bible Project will be one of the most momentous works undertaken by Quiet Light: a special
            Way of Quiet Light edition and the official Quiet Light copy of the Bible, based on the 1599 Geneva
            Bible and prepared for modern readers while preserving its historical foundation.
          </p>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-[var(--muted-silver)]">
            It is also being created to honor the Eaton family&apos;s 400 years in the Americas, marking the family&apos;s
            1635 arrival and the long legacy that followed. This will stand as a special 400th anniversary edition:
            a work of scripture, heritage, study, and devotion.
          </p>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-[var(--muted-silver)]">
            Unlike the free Geneva Bible archive above, this project will become a complete edited work with the
            original Geneva text, a fully updated modern-language rendering, and a study guide built directly into
            the Bible itself.
          </p>

          <SectionGraphic
            src="/images/bible/geneva-bible-project.webp"
            alt="Artwork for the Geneva Bible Project 400th anniversary edition."
            width={1600}
            height={1000}
            label="Geneva Bible Project artwork"
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {genevaBibleProjectFeatures.map((feature) => (
              <article
                className="rounded-3xl border border-[rgba(216,168,79,0.22)] bg-[rgba(5,13,28,0.55)] p-6"
                key={feature.title}
              >
                <p className="gold-text uppercase tracking-[0.22em]">Project Layer</p>
                <h3 className="mt-3 text-2xl text-white">{feature.title}</h3>
                <p className="mt-4 leading-7 text-[var(--muted-silver)]">{feature.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-[var(--lantern-gold)] bg-[rgba(216,168,79,0.1)] p-6 md:p-8">
            <p className="gold-text uppercase tracking-[0.22em]">Special Edition</p>
            <h3 className="mt-3 text-3xl text-white">A 400th anniversary Bible for study, devotion, and legacy</h3>
            <p className="mt-4 max-w-4xl leading-8 text-[var(--muted-silver)]">
              This future edition will serve as the official Quiet Light Bible: a work of preservation,
              modernization, explanation, devotion, and family remembrance designed to help readers encounter
              scripture with clarity, reverence, and depth.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
