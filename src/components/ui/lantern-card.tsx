type LanternCardProps = {
  children: React.ReactNode;
};

export function LanternCard({ children }: LanternCardProps) {
  return <div className="lantern-panel rounded-3xl p-6 md:p-8">{children}</div>;
}
