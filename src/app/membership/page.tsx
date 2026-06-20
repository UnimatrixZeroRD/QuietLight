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

      <div className="lantern-panel mx-auto mt-10 flex aspect-square max-w-[30rem] items-center justify-center overflow-hidden rounded-3xl border border-[var(--lantern-gold)] p-4 shadow-[0_0_48px_rgba(216,168,79,0.18)]">
        <Image
          src="/images/order-of-the-lantern/order-of-the-lantern-logo.webp"
          alt="The Order of the Lantern logo."
          width={1000}
          height={1000}
          priority
          className="h-full w-full object-contain"
        />
      </div>

      <p className="mx-auto mt-6 max-w-3xl text-center text-[var(--muted-silver)] italic">
        The Lantern is the symbol of the Keeper. We do not claim to be the Light. We are only its keepers.
      </p>

      <section className="mt-16 lantern-panel rounded-3xl p-8 md:p-10">
        <h2 className="gold-text text-3xl md:text-4xl">Welcome to the Order of the Lantern</h2>
        <blockquote className="mt-6 border-l-2 border-[var(--lantern-gold)] pl-5 text-lg italic leading-8 text-[var(--soft-gold)]">
          “Neither do men light a candle, and put it under a bushel, but on a candlestick; and it giveth light unto all that are in the house.” — Matthew 5:15
        </blockquote>
        <div className="mt-8 space-y-5 leading-8 text-[var(--muted-silver)]">
          <p>Beloved Keeper,</p>
          <p>Welcome to the Order of the Lantern.</p>
          <p>Today, you do not enter into a position of power, prestige, or authority. You enter into a calling of service. You join a fellowship of those who seek not to be exalted, but to quietly carry the light entrusted to them by God.</p>
          <p>The Way of Quiet Light teaches that we are not the source of the Light. We are not its masters, nor its owners. We are only its keepers.</p>
          <p className="gold-text italic">“He must increase, but I must decrease.” — John 3:30</p>
          <p>The lantern exists not to draw attention to itself, but to illuminate the path for others. In the same way, your life as a Keeper is not measured by recognition, wealth, titles, or praise, but by the quiet good you bring into the world through humility, compassion, wisdom, and faithful service.</p>
          <p>The Lord Himself teaches us:</p>
          <p className="gold-text italic">“Take heed that ye do not your alms before men, to be seen of them.” — Matthew 6:1</p>
          <p className="gold-text italic">“But when thou doest alms, let not thy left hand know what thy right hand doeth.” — Matthew 6:3</p>
          <p>These words stand at the heart of our path.</p>
          <div className="rounded-2xl border border-[rgba(216,168,79,0.24)] bg-[rgba(7,17,31,0.35)] p-6">
            <p>A Keeper serves without seeking reward.</p>
            <p>A Keeper gives without seeking recognition.</p>
            <p>A Keeper loves without demanding praise.</p>
            <p>A Keeper carries the lantern through darkness so that others may find their way.</p>
          </div>
          <p>You are called to be steadfast in faith, gentle in speech, patient in adversity, and merciful in judgment.</p>
          <p className="gold-text italic">“Be kindly affectioned one to another with brotherly love; in honour preferring one another.” — Romans 12:10</p>
          <p className="gold-text italic">“What doth the Lord require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?” — Micah 6:8</p>
          <p>These virtues are not merely ideals. They are the daily work of a Keeper.</p>
          <p>As a member of the Order of the Lantern, you become a guardian of the flame—not by force, but by example. Your words, actions, and character become the testimony of the Way. Others may never know your sacrifices. They may never see the burdens you carry. Yet God sees them.</p>
          <p className="gold-text italic">“And thy Father which seeth in secret himself shall reward thee openly.” — Matthew 6:4</p>
          <div className="rounded-2xl border border-[rgba(216,168,79,0.3)] p-6 text-center">
            <p className="gold-text text-xl">Remember always the central truth of our Order:</p>
            <p className="mt-4 text-2xl italic text-[var(--soft-gold)]">You are not the Light.</p>
            <p className="text-2xl italic text-[var(--soft-gold)]">You are only its Keeper.</p>
          </div>
          <p>Carry the lantern faithfully.</p>
          <p>Let its flame guide your steps.</p>
          <p>Let its warmth comfort the weary.</p>
          <p>Let its light reveal the path of peace.</p>
          <p>And when the world grows dark, may you stand firm, holding high the lantern entrusted to your care, so that others may find hope, faith, and rest.</p>
          <p>May the Quiet Light guide your path, strengthen your spirit, and keep your heart steadfast in the service of God.</p>
          <p>Welcome, Keeper.</p>
          <p className="gold-text text-2xl">The flame remains.</p>
        </div>
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
