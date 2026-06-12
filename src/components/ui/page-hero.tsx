type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="px-6 py-24 text-center md:py-32">
      <p className="gold-text mb-5 text-xs font-semibold uppercase tracking-[0.35em]">{eyebrow}</p>
      <h1 className="gold-text mx-auto max-w-5xl text-6xl font-semibold tracking-wide md:text-8xl">{title}</h1>
      <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-[var(--ivory)] md:text-2xl">{subtitle}</p>
    </section>
  );
}
