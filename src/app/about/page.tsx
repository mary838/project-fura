import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { AboutIntroSection } from "@/components/about/AboutIntroSection";
import { KeyStatisticsSection } from "@/components/about/KeyStatisticsSection";
import { NewsSection } from "@/components/about/NewsSection";
import { OrganigramSection } from "@/components/about/OrganigramSection";
import { VisionSection } from "@/components/about/VisionSection";

export const metadata: Metadata = {
  title: "About Fura Group — Fura Habitech",
  description:
    "FURA is a Singapore-headquartered investment group focused on real estate, infrastructure, agriculture, hospitality, and industry.",
};

export default function AboutPage() {
  // Opens on a white section, so the default solid bar is right here.
  return (
    <PageShell>
      <AboutIntroSection />
      <OrganigramSection />
      <VisionSection />
      <KeyStatisticsSection />
      <NewsSection />
    </PageShell>
  );
}
