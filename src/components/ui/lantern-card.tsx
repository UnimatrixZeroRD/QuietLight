import type { ReactNode } from "react";

type LanternCardProps = {
  children: ReactNode;
};

export function LanternCard({ children }: LanternCardProps) {
  return <div className="lantern-panel rounded-3xl p-6 md:p-8">{children}</div>;
}
