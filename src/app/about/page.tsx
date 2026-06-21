import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Quiet Light Ministries",
  description:
    "Learn how Quiet Light Ministries began, how it is presently stewarded by the Keeper, and how its legal foundation is being developed with humility, order, and accountability.",
};

const originThreads = ["Prayer", "Writing", "Scripture", "Quiet Works"];

const foundationStones = ["Purpose", "Stewardship", "Accountability", "Service", "Continuity"];

const structurePoints = [
  "define the ministry's purpose and responsibilities",
  "clarify leadership, governance, and decision-making",
  "protect the writings, teachings, music, and ministry materials",
  "handle support, donations, and resources with care",
  "prepare the ministry to endure beyond a single season of work",
];

function SectionVisual({
  eyebrow,
  title,
  variant,
}: {
  eyebrow: string;
  title: string;
  variant: "origin" | "keeper" | "foundation" | "order";
}) {
  return (
    <div className="lantern-panel relative min-h-[22rem] overflow-hidden rounded-3xl p-6 md:p-8" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,rgba(255,179,71,0.28),transparent_13rem),linear-gradient(180deg,rgba(18,60,105,0.42),rgba(7,17,31,0.94))]" />
      <div className="absolute inset-x-8 bottom-8 h-px bg-gradient-to-r from-transparent via-[rgba(216,168,79,0.7)] to-transparent" />
      <div className="relative z-10 flex h-full min-h-[19rem] flex-col justify-between">
        <div>
          <p className="gold-text text-xs uppercase tracking-[0.24em]">{eyebrow}</p>
          <p className="mt-3 max-w-xs text-2xl leading-tight text-[var(--ivory)]">{title}</p>
        </div>

        {variant === "origin" && (
          <div className="mx-auto grid w-full max-w-sm grid-cols-2 gap-3">
            {originThreads.map((thread) => (
              <div className="rounded-2xl border border-[rgba(216,168,79,0.28)] bg-[rgba(7,17,31,0.58)] px-4 py-5 text-center text-sm uppercase tracking-[0.16em] text-[var(--muted-silver)]" key={thread}>
                {thread}
              </div>
            ))}
          </div>
        )}

        {variant === "keeper" && (
          <div className="mx-auto flex w-full max-w-xs flex-col items-center">
            <div className="relative h-44 w-44 rounded-full border border-[rgba(216,168,79,0.45)] bg-[radial-gradient(circle,rgba(255,179,71,0.22),rgba(7,17,31,0.92)_68%)] shadow-[0_0_70px_rgba(255,179,71,0.18)]">
              <div className="absolute left-1/2 top-8 h-20 w-14 -translate-x-1/2 rounded-full border border-[rgba(216,168,79,0.72)] bg-[rgba(216,168,79,0.12)]" />
              <div className="absolute left-1/2 top-14 h-12 w-8 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,179,71,0.95),rgba(216,168,79,0.32)_62%,transparent_72%)]" />
              <div className="absolute bottom-8 left-1/2 h-16 w-24 -translate-x-1/2 rounded-t-full border border-[rgba(216,168,79,0.32)] bg-[rgba(7,17,31,0.68)]" />
            </div>
            <p className="mt-6 text-center text-sm uppercase tracking-[0.22em] text-[var(--soft-gold)]">Tending, not owning</p>
          </div>
        )}

        {variant === "foundation" && (
          <div className="mx-auto w-full max-w-sm">
            <div className="mx-auto mb-5 h-28 w-24 rounded-t-full border border-[rgba(216,168,79,0.55)] bg-[radial-gradient(circle,rgba(255,179,71,0.34),rgba(7,17,31,0.72)_70%)] shadow-[0_0_64px_rgba(255,179,71,0.2)]" />
            <div className="grid gap-2">
              {foundationStones.map((stone) => (
                <div className="rounded-xl border border-[rgba(216,168,79,0.28)] bg-[rgba(7,17,31,0.62)] px-4 py-3 text-center text-xs uppercase tracking-[0.18em] text-[var(--muted-silver)]" key={stone}>
                  {stone}
                </div>
              ))}
            </div>
          </div>
        )}

        {variant === "order" && (
          <div className="mx-auto grid w-full max-w-sm gap-3">
            <div className="rounded-2xl border border-[rgba(216,168,79,0.36)] bg-[rgba(7,17,31,0.58)] p-5">
              <div className="flex items-center gap-4">
                <span className="h-12 w-12 rounded-full bg-[radial-gradient(circle,rgba(255,179,71,0.82),rgba(216,168,79,0.2)_58%,transparent_70%)] shadow-[0_0_36px_rgba(255,179,71,0.26)]" />
                <div className="h-px flex-1 bg-[rgba(216,168,79,0.35)]" />
                <span className="h-12 w-12 rounded-full bg-[radial-gradient(circle,rgba(42,166,161,0.62),rgba(216,168,79,0.18)_58%,transparent_70%)] shadow-[0_0_36px_rgba(42,166,161,0.2)]" />
              </div>
              <p className="mt-5 text-center text-sm uppercase tracking-[0.2em] text-[var(--soft-gold)]">Faith and order together</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[var(--midnight)]" aria-label="About Quiet Light Ministries">
        <Image
          src="/images/backgrounds/quiet-light-header.webp"
          alt="Lantern-lit Quiet Light artwork with mountains, water, and a path beneath a blue and gold sky."
          width={1672}
          height={941}
          priority
          sizes="100vw"
          className="h-[34rem] w-full object-cover opacity-[0.45] md:h-[42rem]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(7,17,31,0.38)] via-[rgba(7,17,31,0.78)] to-[var(--midnight)]" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 md:pb-20">
            <div className="max-w-4xl">
              <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">About Quiet Light Ministries</p>
              <h1 className="mt-5 text-4xl leading-tight md:text-7xl">A spiritual work becoming an organized ministry.</h1>
              <p className="mt-7 max-w-3xl text-lg leading-9 text-[var(--muted-silver)] md:text-xl">
                Quiet Light Ministries began with faith, reflection, writing, and the image of a lantern carried through darkness. It is now being carefully shaped into a formal ministry with leadership, structure, and stewardship worthy of the work entrusted to it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-20">
        <div>
          <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">How it began</p>
          <h2 className="mt-4 text-3xl md:text-5xl">Quiet Light began before there was an organization.</h2>
          <div className="mt-7 space-y-5 text-base leading-8 text-[var(--muted-silver)] md:text-lg">
            <p>
              Quiet Light Ministries grew from prayer, scripture, reflection, hardship, music, and spiritual writing. It began as a personal work of faith, but gradually became a larger body of teaching centered on stillness, humility, mercy, repentance, and faithful service.
            </p>
            <p>
              The lantern became the central image of the work: a small flame carried through darkness, not to glorify the one who carries it, but to help others see the path before them.
            </p>
            <p className="text-[var(--ivory)]">
              The lantern does not create the light. It carries it, protects it, and keeps the flame visible when the world grows dark.
            </p>
          </div>
        </div>
        <SectionVisual eyebrow="Origin" title="Prayer, writing, scripture, and quiet works gathered into one ministry." variant="origin" />
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-[0.92fr_1.08fr] md:items-center md:py-20">
        <SectionVisual eyebrow="Leadership" title="The Keeper is a steward of the work, not the source of the light." variant="keeper" />
        <div>
          <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">The Keeper</p>
          <h2 className="mt-4 text-3xl md:text-5xl">Leadership shaped by stewardship.</h2>
          <div className="mt-7 space-y-5 text-base leading-8 text-[var(--muted-silver)] md:text-lg">
            <p>
              Quiet Light Ministries is presently led and developed by Joshua Eaton, the founder and primary steward of the ministry&apos;s writings, teachings, and organizational development.
            </p>
            <p>
              Within the language of Quiet Light, Joshua serves as the Keeper. This is not a claim of spiritual superiority, priesthood, or authority over the faith of others. It is a title of responsibility.
            </p>
            <p>
              The Keeper is entrusted with tending the work, preserving its founding spirit, and helping the ministry grow with humility, clarity, and care.
            </p>
          </div>
          <blockquote className="lantern-panel mt-8 rounded-3xl p-6 text-2xl italic leading-relaxed text-[var(--ivory)] md:p-8 md:text-3xl">
            I am not the light. I am only its keeper.
          </blockquote>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-[1.04fr_0.96fr] md:items-center md:py-20">
        <div>
          <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">Legal foundation</p>
          <h2 className="mt-4 text-3xl md:text-5xl">The ministry is being built with order, not noise.</h2>
          <div className="mt-7 space-y-5 text-base leading-8 text-[var(--muted-silver)] md:text-lg">
            <p>
              Quiet Light Ministries is being developed with the intention of establishing a proper legal structure for its work. This is the necessary step from a personal spiritual project into an organized ministry.
            </p>
            <p>
              The structure is not being created to make Quiet Light feel corporate. It is being created so the ministry can be protected, governed responsibly, and preserved for the future.
            </p>
          </div>
          <div className="mt-8 grid gap-3">
            {structurePoints.map((point) => (
              <div className="flex gap-4 rounded-2xl border border-[rgba(216,168,79,0.22)] bg-[rgba(7,17,31,0.45)] p-4 text-[var(--muted-silver)]" key={point}>
                <span className="gold-text mt-1 text-sm" aria-hidden="true">✦</span>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
        <SectionVisual eyebrow="Foundation" title="Purpose, stewardship, accountability, service, and continuity." variant="foundation" />
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-[0.96fr_1.04fr] md:items-center md:py-20">
        <SectionVisual eyebrow="Structure" title="Faith may begin in the heart, but ministry must also be built with wisdom." variant="order" />
        <div>
          <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">Why structure matters</p>
          <h2 className="mt-4 text-3xl md:text-5xl">The goal is stewardship.</h2>
          <div className="mt-7 space-y-5 text-base leading-8 text-[var(--muted-silver)] md:text-lg">
            <p>
              Without structure, even sincere spiritual work can become unclear, disorganized, or vulnerable to confusion. A legal and organizational foundation helps protect the ministry, its leadership, its materials, and its future.
            </p>
            <p>
              The purpose is not bureaucracy. The purpose is faithful care: clear governance, responsible handling of resources, careful preservation of the work, and accountability to the ministry&apos;s stated mission.
            </p>
            <p className="text-[var(--ivory)]">
              Quiet Light Ministries is being organized so that the flame may be tended with humility and preserved with integrity.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <div className="lantern-panel overflow-hidden rounded-3xl p-6 text-center md:p-12">
          <div className="mx-auto mb-8 h-24 w-24 rounded-full border border-[rgba(216,168,79,0.42)] bg-[radial-gradient(circle,rgba(255,179,71,0.8),rgba(216,168,79,0.18)_58%,transparent_72%)] shadow-[0_0_64px_rgba(255,179,71,0.24)]" aria-hidden="true" />
          <p className="gold-text uppercase tracking-[0.24em] sm:tracking-[0.3em]">The flame remains</p>
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl leading-tight md:text-5xl">A ministry formed carefully, so the work can endure faithfully.</h2>
          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[var(--muted-silver)] md:text-lg">
            Quiet Light Ministries exists because the light of God has not gone out. The work began in faith, is being shaped through stewardship, and is being organized with care so that it may continue with humility, order, and purpose.
          </p>
          <p className="gold-text mt-8 text-2xl italic md:text-3xl">The flame remains.</p>
        </div>
      </section>
    </main>
  );
}
