import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { NavigationBar } from "@/components/layout/NavigationBar";
import { LeadershipSection } from "@/components/team/LeadershipSection";
import { TeamHeroSection } from "@/components/team/TeamHeroSection";

export const metadata: Metadata = {
  title: "Our Team — Fura Habitech",
  description:
    "A globally connected network combining local expertise, strategic partnerships, and investment capabilities across key international markets.",
};

export default function TeamsPage() {
  return (
    <>
      {/* Opens on a white section, so the bar never goes translucent. */}
      <NavigationBar variant="solid" />
      <main className="flex w-full flex-1 flex-col pt-20">
        <TeamHeroSection />
        <LeadershipSection />
        <Footer />
      </main>
    </>
  );
}
