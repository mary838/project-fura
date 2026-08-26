import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { NavigationBar } from "@/components/layout/NavigationBar";
import { PropertyDetailSection } from "@/components/properties/PropertyDetailSection";

export const metadata: Metadata = {
  title: "Winghouse — Fura Habitech",
  description:
    "Affordable housing in Brisbane, Queensland. 120 units, expected completion Q2 2026.",
};

export default function WinghousePage() {
  return (
    <>
      <NavigationBar variant="solid" />
      <main className="flex w-full flex-1 flex-col pt-20">
        <PropertyDetailSection />
        <Footer />
      </main>
    </>
  );
}
