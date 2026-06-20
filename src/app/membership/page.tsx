import Image from "next/image";
import { getPublicMembershipTiers } from "../../lib/supabase/public-content";

export default async function MembershipPage() {
  const tiers = await getPublicMembershipTiers();

  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <p className="gold-text uppercase tracking-[0.3em]">The Order of the Lantern</p>
        <h1 className="gold-text mt-4 text-5xl md:text-7xl">Keep the Flame</h1>
        <p className="mt-4 text-lg text-[var(--muted-silver)]">An official membership order of the Way of Quiet Light.</p>
      </div>

      <div className="lantern-panel mx-auto mt-10 flex aspect-square max-w-sm items-center justify-center overflow-hidden rounded-3xl border border-[var(--lantern-gold)] p-4 shadow-[0_0_48px_rgba(216,168,79,0.18)]">
        <Image
          src="/images/order-of-the-lantern/order-of-the-lantern-logo.webp"
          alt="The Order of the Lantern logo."
          width={800}
          height={800}
          priority
          className="h-full w-full object-contain"
        />
      </div>

      <p className="mx-auto mt-6 max-w-3xl text-center text-[var(--muted-silver)] italic">
        The Lantern is the symbol of the Keeper. We do not claim to be the Light. We are only its keepers.
      </p>

      <section className="mt-16 lantern-panel rounded-3xl p-8">
        <h2 className="gold-text text-3xl">Welcome to the Fellowship</h2>
        <p className="mt-6 leading-8 text-[var(--muted-silver)]">
          The Order of the Lantern is the fellowship of those who choose to support, preserve, and carry forward the work of the Way of Quiet Light. Membership is open to all people of goodwill regardless of denomination, nationality, or background.
        </p>
        <p className="mt-4 leading-8 text-[var(--muted-silver)]">
          Every member shares a common purpose: to tend the flame, to walk in humility, and to carry light into the darkness.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="gold-text text-4xl text-center">Membership Levels</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-5">
          <article className="lantern-panel rounded-3xl p-6"><h3 className="gold-text">Follower of the Light</h3><p className="mt-3 text-sm text-[var(--muted-silver)]">Free membership and community updates.</p></article>
          <article className="lantern-panel rounded-3xl p-6"><h3 className="gold-text">Friend of the Lantern</h3><p className="mt-3 text-sm text-[var(--muted-silver)]">Supporter level membership.</p></article>
          <article className="lantern-panel rounded-3xl p-6"><h3 className="gold-text">Keeper of the Flame</h3><p className="mt-3 text-sm text-[var(--muted-silver)]">Exclusive reflections and member content.</p></article>
          <article className="lantern-panel rounded-3xl p-6"><h3 className="gold-text">Steward of the Lantern</h3><p className="mt-3 text-sm text-[var(--muted-silver)]">Recognition and project updates.</p></article>
          <article className="lantern-panel rounded-3xl p-6"><h3 className="gold-text">Lantern Bearer</h3><p className="mt-3 text-sm text-[var(--muted-silver)]">Highest public supporter tier.</p></article>
        </div>
      </section>

      <section className="mt-16 lantern-panel rounded-3xl p-8 text-center">
        <h2 className="gold-text text-4xl">Support the Work</h2>
        <p className="mt-4 text-[var(--muted-silver)]">Reserve this section for donation buttons, Stripe, PayPal, GoFundMe, and e-transfer options.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-[var(--lantern-gold)] p-4">Monthly Donation Button</div>
          <div className="rounded-2xl border border-[var(--lantern-gold)] p-4">One-Time Donation Button</div>
          <div className="rounded-2xl border border-[var(--lantern-gold)] p-4">Additional Donation Methods</div>
        </div>
      </section>

      <section className="mt-16 lantern-panel rounded-3xl p-8 text-center">
        <h2 className="gold-text text-3xl">The Keeper's Commitment</h2>
        <p className="mt-8 italic leading-8 text-[var(--muted-silver)]">
          I am not the Light. I am only its keeper. I will strive to walk in humility, to serve quietly, to seek truth honestly, and to carry the flame entrusted to me. Though darkness may surround me, the flame remains.
        </p>
      </section>
    </main>
  );
}
