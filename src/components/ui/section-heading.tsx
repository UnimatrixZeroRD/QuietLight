type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
};

export function SectionHeading({ eyebrow, title, children }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="gold-text mb-4 text-xs font-semibold uppercase tracking-[0.32em]">{eyebrow}</p> : null}
      <h2 className="gold-text text-4xl font-semibold tracking-wide md:text-6xl">{title}</h2>
      {children ? <p className="mt-6 text-lg leading-8 text-[var(--muted-silver)]">{children}</p> : null}
    </div>
  );
}
