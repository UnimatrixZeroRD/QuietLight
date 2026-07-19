import type { ReactNode } from "react";

// Daily Light publication visibility is date-sensitive in America/Halifax.
// Force every page in this route segment to evaluate the current publication
// boundary on each request rather than serving an entry list cached before midnight.
export const dynamic = "force-dynamic";

export default function DailyLightLayout({ children }: { children: ReactNode }) {
  return children;
}
