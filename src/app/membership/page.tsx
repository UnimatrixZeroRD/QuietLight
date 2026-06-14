import { getPublicMembershipTiers } from "../../lib/supabase/public-content";

export default async function MembershipPage() {
  const tiers = await getPublicMembershipTiers();

  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <p className="gold-text uppercase tracking-[0.3em]">The Order of the Lanterns</p>
      <h1 className="gold-text mt-4 text-5xl md:text-7xl">Keep the Flame</h1>
      <p className="mt-8 max-w-3xl text-xl leading-9 text-[var(--muted-silver)]">
        The Order of the Lanterns is the fellowship of keepers, supporters, and stewards who help carry the Way of Quiet Light forward.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <article className="lantern-panel rounded-3xl p-6" key={tier.name}>
            <h2 className="gold-text text-2xl">{tier.name}</h2>
            <p className="mt-4 text-sm leading-6 text-[var(--muted-silver)]">{tier.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
