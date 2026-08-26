import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { LeadershipSection } from "@/components/team/LeadershipSection";
import { TeamHeroSection } from "@/components/team/TeamHeroSection";

export const metadata: Metadata = {
  title: "Our Team — Fura Habitech",
  description:
    "A globally connected network combining local expertise, strategic partnerships, and investment capabilities across key international markets.",
};

export default function TeamsPage() {
  // Opens on a white section, so the default solid bar is right here.
  return (
    <PageShell>
      <TeamHeroSection />
      <LeadershipSection />
    </PageShell>
  );
}
