import Link from "next/link";
import { clsx } from "clsx";

export type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-[var(--lantern-gold)] bg-[var(--lantern-gold)] text-[var(--midnight)] lantern-glow hover:bg-[var(--soft-gold)]",
  secondary:
    "border-[var(--lantern-gold)] bg-transparent text-[var(--ivory)] hover:bg-[rgba(216,168,79,0.12)]",
  ghost:
    "border-transparent bg-transparent text-[var(--lantern-gold)] hover:text-[var(--soft-gold)]",
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
