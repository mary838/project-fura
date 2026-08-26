import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { NavigationBar } from "@/components/layout/NavigationBar";
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
  return (
    <>
      {/* This page opens on a white section, so the bar never goes translucent. */}
      <NavigationBar variant="solid" />
      <main className="flex w-full flex-1 flex-col pt-20">
        <AboutIntroSection />
        <OrganigramSection />
        <VisionSection />
        <KeyStatisticsSection />
        <NewsSection />
        <Footer />
      </main>
    </>
  );
}
