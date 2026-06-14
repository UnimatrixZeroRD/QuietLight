import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "The Way Overview",
  description:
    "A Scripture-rooted introduction to The Way of Quiet Light: Christ as the Light, humility, mercy, quiet works, endurance, and faithful keeping of the flame.",
  alternates: { canonical: "/the-way" },
  openGraph: {
    title: "The Way Overview | The Way of Quiet Light",
    description:
      "The scriptural foundation, spiritual rhythm, and core language of The Way of Quiet Light.",
    url: "/the-way",
  },
};

type ScriptureBlock = {
  theme: string;
  reference: string;
  passage: string[];
  reflection: string;
};

type PracticeBlock = {
  title: string;
  reference: string;
  body: string;
};

type ArtworkImageProps = {
  src: string;
  alt: string;
  aspectClass?: string;
  priority?: boolean;
};

const scriptureFoundation: ScriptureBlock[] = [
  {
    theme: "Christ is the Light",
    reference: "John 1:4-5; John 8:12",
    passage: [
      "In him was life; and the life was the light of men. And the light shineth in darkness; and the darkness comprehended it not.",
      "I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life.",
    ],
    reflection:
      "The Way of Quiet Light begins with this confession: the light does not originate in us. Christ is the Light. We are not the source, the judge, or the owner of that light. We are only called to receive it, walk in it, and bear witness to it.",
  },
  {
    theme: "The Light is Carried Into the World",
    reference: "Matthew 5:14-16",
    passage: [
      "Ye are the light of the world. A city that is set on an hill cannot be hid.",
      "Neither do men light a candle, and put it under a bushel, but on a candlestick; and it giveth light unto all that are in the house.",
      "Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.",
    ],
    reflection:
      "The Keeper does not hide the light out of fear, but neither does the Keeper use it for pride. The purpose of visible goodness is not self-glory. It is that others may glorify the Father.",
  },
  {
    theme: "Quiet Works and Hidden Faithfulness",
    reference: "Matthew 6:1-4",
    passage: [
      "Take heed that ye do not your alms before men, to be seen of them: otherwise ye have no reward of your Father which is in heaven.",
      "When thou doest alms, let not thy left hand know what thy right hand doeth: that thine alms may be in secret.",
      "And thy Father which seeth in secret himself shall reward thee openly.",
    ],
    reflection:
      "This is one of the clearest foundations of the Way. Quiet Light is not performance. Quiet Works are not done for applause. The Way teaches service without spectacle, generosity without vanity, and faithfulness even when no one is watching.",
  },
  {
    theme: "Humility, Mercy, and Justice",
    reference: "Micah 6:8",
    passage: [
      "He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?",
    ],
    reflection:
      "The Way is not complicated at its root. It calls the Keeper to justice without cruelty, mercy without weakness, and humility without surrendering truth.",
  },
  {
    theme: "Faith Must Become Living Mercy",
    reference: "James 2:15-17",
    passage: [
      "If a brother or sister be naked, and destitute of daily food, and one of you say unto them, Depart in peace, be ye warmed and filled; notwithstanding ye give them not those things which are needful to the body; what doth it profit?",
      "Even so faith, if it hath not works, is dead, being alone.",
    ],
    reflection:
      "The Way of Quiet Light is not merely inward reflection. Prayer, doctrine, and devotion must become mercy in action. The light is kept by being lived.",
  },
  {
    theme: "The Fruit of the Spirit",
    reference: "Galatians 5:22-23",
    passage: [
      "But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, meekness, temperance: against such there is no law.",
    ],
    reflection:
      "The character of the Keeper is not measured by volume, anger, status, or victory over enemies. It is measured by fruit: love, peace, patience, gentleness, goodness, faith, meekness, and self-control.",
  },
  {
    theme: "The Treasure is Carried in Earthen Vessels",
    reference: "2 Corinthians 4:6-9",
    passage: [
      "For God, who commanded the light to shine out of darkness, hath shined in our hearts, to give the light of the knowledge of the glory of God in the face of Jesus Christ.",
      "But we have this treasure in earthen vessels, that the excellency of the power may be of God, and not of us.",
      "We are troubled on every side, yet not distressed; we are perplexed, but not in despair; persecuted, but not forsaken; cast down, but not destroyed.",
    ],
    reflection:
      "The Keeper is fragile, human, wounded, and limited. That is not a contradiction of the Way. It is part of the Way. The light is kept in earthen vessels so that the glory belongs to God and not to the vessel.",
  },
];

const wayPractices: PracticeBlock[] = [
  {
    title: "Stillness before God",
    reference: "Psalm 46:10; James 1:19",
    body: "The Way teaches the discipline of becoming slow to speak, slow to wrath, and willing to be still before God before reacting to the world.",
  },
  {
    title: "The Word as the Lantern",
    reference: "Psalm 119:105",
    body: "Scripture is the lamp unto the feet and the light unto the path. The Way is not meant to replace Scripture, but to walk under it.",
  },
  {
    title: "Mercy over condemnation",
    reference: "Matthew 7:1-5; Matthew 9:13",
    body: "The Keeper must resist the temptation to use faith as a weapon of contempt. The Way calls for repentance, discernment, and mercy.",
  },
  {
    title: "Hidden generosity",
    reference: "Matthew 6:1-4",
    body: "The Way gives special honour to good works done without display, because the Father sees what is done in secret.",
  },
  {
    title: "Care for the least of these",
    reference: "Matthew 25:35-40",
    body: "Service to the hungry, the stranger, the sick, the poor, and the imprisoned is not optional decoration. It is part of how Christ teaches us to recognize him.",
  },
  {
    title: "Endurance through darkness",
    reference: "John 1:5; 2 Corinthians 4:8-9",
    body: "The flame remains not because life is easy, but because darkness does not overcome the light that comes from Christ.",
  },
];

const keeperLanguage = [
  {
    term: "The Light",
    meaning: "Christ, the life and light of men, not an inner divinity of our own making.",
    reference: "John 1:4-5; John 8:12",
  },
  {
    term: "The Lantern",
    meaning: "The vessel, witness, and way of carrying light into ordinary life through Scripture, prayer, and mercy.",
    reference: "Psalm 119:105; Matthew 5:15-16",
  },
  {
    term: "The Keeper",
    meaning: "One entrusted to tend what is holy with humility, knowing the treasure is of God and not of the vessel.",
    reference: "2 Corinthians 4:7",
  },
  {
    term: "Quiet Works",
    meaning: "Acts of mercy and faithfulness offered without vanity, spectacle, or hunger for applause.",
    reference: "Matthew 6:1-4; James 2:15-17",
  },
];

const notStatements = [
  "The Way of Quiet Light is not a political movement.",
  "It is not a replacement for Scripture, the Gospel, or the Lordship of Christ.",
  "It is not a claim that we are the source of the light.",
  "It is not a call to religious arrogance, domination, spectacle, or judgment without mercy.",
];

function ArtworkImage({ src, alt, aspectClass = "aspect-[16/9]", priority = false }: ArtworkImageProps) {
  return (
    <div className={`lantern-panel relative overflow-hidden rounded-3xl ${aspectClass}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1280px) 72rem, (min-width: 768px) 92vw, 100vw"
        className="object-cover"
      />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[rgba(216,168,79,0.28)]" />
    </div>
  );
}

export default function TheWayPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="lantern-panel relative overflow-hidden rounded-3xl p-6 md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(216,168,79,0.2),transparent_36rem)]" />
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">The Way Overview</p>
            <h1 className="gold-text mt-5 text-5xl leading-tight md:text-7xl">The Way of Quiet Light</h1>
            <p className="mx-auto mt-7 max-w-3xl text-xl leading-9 text-[var(--ivory)] md:text-2xl md:leading-10">
              A Scripture-rooted Christian path of stillness, humility, mercy, quiet works, and faithful keeping of the flame.
            </p>
            <p className="mx-auto mt-6 max-w-3xl leading-8 text-[var(--muted-silver)] md:text-lg">
              The Way of Quiet Light is not built first on private language, symbols, or poetry. It begins with Christ, who is
              the Light of the world, and with the call of Scripture to walk humbly, serve quietly, love mercy, endure suffering,
              and let good works point back to the Father rather than to ourselves.
            </p>
            <div className="mt-10">
              <ArtworkImage
                src="/images/the-way/the-way-hero.webp"
                alt="Christ as the Light with a lantern and Scripture for The Way of Quiet Light"
                priority
              />
            </div>
            <div className="mx-auto mt-9 max-w-3xl rounded-2xl border border-[rgba(216,168,79,0.32)] bg-[rgba(7,17,31,0.52)] p-6">
              <p className="text-2xl italic leading-relaxed text-[var(--ivory)] md:text-3xl">
                I am not the light. I am only its keeper.
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.18em] text-[var(--muted-silver)]">
                A confession of humility before Christ, the true Light
              </p>
            </div>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                className="rounded-full border border-[var(--lantern-gold)] bg-[var(--lantern-gold)] px-6 py-3 text-center text-sm uppercase tracking-[0.18em] text-[var(--midnight)] shadow-[0_0_36px_rgba(216,168,79,0.24)] transition hover:bg-[var(--soft-gold)]"
                href="/keepers-lantern"
              >
                Read The Keeper&apos;s Lantern
              </Link>
              <Link
                className="rounded-full border border-[var(--lantern-gold)] px-6 py-3 text-center text-sm uppercase tracking-[0.18em] text-[var(--soft-gold)] transition hover:bg-[rgba(216,168,79,0.12)]"
                href="/bible"
              >
                Geneva Bible Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:px-6 md:grid-cols-[0.82fr_1.18fr] md:py-16">
        <div className="lantern-panel rounded-3xl p-6 md:p-8">
          <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">What The Way Is</p>
          <h2 className="mt-4 text-3xl md:text-5xl">A path under Scripture, not above it.</h2>
        </div>
        <div className="lantern-panel rounded-3xl p-6 md:p-8">
          <div className="space-y-5 leading-8 text-[var(--muted-silver)]">
            <p>
              The Way of Quiet Light is a devotional and communal expression of Christian faith. It gathers a particular language
              of lantern, flame, Keeper, stillness, and quiet works, but every part of that language must remain accountable to
              Scripture and centred on Jesus Christ.
            </p>
            <p>
              The Way exists to call people away from spiritual vanity and toward faithful endurance: to pray, to serve, to forgive,
              to keep mercy alive, to let Scripture guide the feet, and to carry the light of Christ into ordinary life without pride.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-12">
        <ArtworkImage
          src="/images/the-way/path-under-scripture.webp"
          alt="A path under Scripture with an open Bible and lantern light"
          aspectClass="aspect-[2/1]"
        />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <div className="mb-10 max-w-3xl">
          <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">Scriptural Foundation</p>
          <h2 className="mt-4 text-4xl md:text-6xl">The passages beneath the lantern.</h2>
          <p className="mt-5 leading-8 text-[var(--muted-silver)]">
            The Way is best understood through the Scriptures that shape its language: light, hidden service, mercy, humility,
            living faith, spiritual fruit, and endurance in suffering.
          </p>
        </div>
        <div className="grid gap-6">
          {scriptureFoundation.map((item) => (
            <Fragment key={item.theme}>
              <article className="lantern-panel rounded-3xl p-6 md:p-9">
                <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
                  <div>
                    <p className="gold-text text-sm uppercase tracking-[0.22em]">{item.theme}</p>
                    <h3 className="mt-4 text-3xl text-[var(--ivory)]">{item.reference}</h3>
                  </div>
                  <div>
                    <div className="space-y-4">
                      {item.passage.map((line) => (
                        <blockquote
                          className="rounded-2xl border border-[rgba(216,168,79,0.24)] bg-[rgba(7,17,31,0.46)] p-5 text-xl italic leading-9 text-[var(--ivory)]"
                          key={line}
                        >
                          {line}
                        </blockquote>
                      ))}
                    </div>
                    <p className="mt-6 leading-8 text-[var(--muted-silver)]">{item.reflection}</p>
                  </div>
                </div>
              </article>
              {item.theme === "Quiet Works and Hidden Faithfulness" ? (
                <ArtworkImage
                  src="/images/the-way/quiet-works-in-secret.webp"
                  alt="Quiet works in secret with Scripture, a lantern, and humble service"
                  aspectClass="aspect-[8/5]"
                />
              ) : null}
            </Fragment>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-16">
        <div className="lantern-panel rounded-3xl p-6 text-center md:p-12">
          <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">The Meaning of Quiet Light</p>
          <blockquote className="mx-auto mt-8 max-w-3xl text-3xl italic leading-relaxed text-[var(--ivory)] md:text-4xl md:leading-relaxed">
            Quiet Light is the light of Christ carried without arrogance.
          </blockquote>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-[var(--muted-silver)]">
            It is faith without performance, service without applause, strength without cruelty, truth without hatred, and mercy
            without surrendering the call to righteousness. It is the lantern lifted for the lost, not a flame used to burn the wounded.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <div className="mb-10 max-w-3xl">
          <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">The Keeper&apos;s Path</p>
          <h2 className="mt-4 text-4xl md:text-6xl">The rhythm Scripture calls us to live.</h2>
          <p className="mt-5 leading-8 text-[var(--muted-silver)]">
            The Way is not merely an identity. It is a pattern of life formed by Scripture and practiced in ordinary days.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {wayPractices.map((item) => (
            <article className="lantern-panel rounded-3xl p-6 md:p-8" key={item.title}>
              <h3 className="gold-text text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm uppercase tracking-[0.16em] text-[var(--muted-silver)]">{item.reference}</p>
              <p className="mt-5 leading-8 text-[var(--muted-silver)]">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <ArtworkImage
            src="/images/the-way/keepers-path.webp"
            alt="The Keeper's Path with a lantern-lit road of stillness, mercy, service, and endurance"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <div className="lantern-panel rounded-3xl p-6 md:p-10">
          <div className="max-w-3xl">
            <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">The Language of the Way</p>
            <h2 className="mt-4 text-4xl md:text-6xl">What the symbols mean.</h2>
            <p className="mt-5 leading-8 text-[var(--muted-silver)]">
              The language of the Way is poetic, but it must never become vague. The central symbols are meant to point back to
              Scripture and to Christ.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {keeperLanguage.map((item) => (
              <article className="rounded-2xl border border-[rgba(185,199,214,0.16)] bg-[rgba(11,31,58,0.48)] p-5" key={item.term}>
                <h3 className="text-2xl text-[var(--ivory)]">{item.term}</h3>
                <p className="gold-text mt-3 text-sm uppercase tracking-[0.16em]">{item.reference}</p>
                <p className="mt-4 leading-7 text-[var(--muted-silver)]">{item.meaning}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <ArtworkImage
              src="/images/the-way/symbols-of-the-way.webp"
              alt="Symbols of the Way: The Light, The Lantern, The Keeper, and Quiet Works"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-16">
        <div className="lantern-panel rounded-3xl p-6 md:p-8">
          <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">Who This Is For</p>
          <h2 className="mt-4 text-3xl md:text-5xl">For the weary, the wounded, and the quietly faithful.</h2>
          <p className="mt-6 leading-8 text-[var(--muted-silver)]">
            The Way of Quiet Light is for those who still believe in Christ, still believe in mercy, and still believe that a
            small flame kept faithfully can survive the darkest night. It is for those who want faith to become prayer, prayer
            to become character, and character to become quiet mercy in the world.
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
          <div className="mt-8">
            <ArtworkImage
              src="/images/the-way/flame-remains-banner.webp"
              alt="The Flame Remains closing banner with a lantern, Scripture, and golden light"
              aspectClass="aspect-[3/1]"
            />
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-[var(--muted-silver)]">
            It only needs to be kept. Begin with Scripture. Return through prayer. Let the light of Christ become mercy, patience,
            courage, and quiet works in the life you already live.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link className="gold-text inline-block uppercase tracking-[0.18em]" href="/daily-light">
              Read Daily Light
            </Link>
            <Link className="gold-text inline-block uppercase tracking-[0.18em]" href="/keepers-lantern">
              Explore the Book
            </Link>
            <Link className="gold-text inline-block uppercase tracking-[0.18em]" href="/membership">
              Order of the Lanterns
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
