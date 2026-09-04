import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { WolloongabbaCollectiveDetailSection } from "@/components/properties/WolloongabbaCollectiveDetailSection";

export const metadata: Metadata = {
  title: "The Wolloongabba Collective — Fura Habitech",
  description:
    "A large-scale inner-city landbank project comprising six adjoining parcels with a combined site area of 10,336 sqm in Woolloongabba, Brisbane.",
};

export default function WolloongabbaCollectivePage() {
  return (
    <PageShell>
      <WolloongabbaCollectiveDetailSection />
    </PageShell>
  );
}
