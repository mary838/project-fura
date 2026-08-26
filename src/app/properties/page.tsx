import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { NavigationBar } from "@/components/layout/NavigationBar";
import { ContactValuesSection } from "@/components/properties/ContactValuesSection";
import { PropertiesListSection } from "@/components/properties/PropertiesListSection";

export const metadata: Metadata = {
  title: "Real Estate Properties — Fura Habitech",
  description:
    "Completed and ongoing residential, commercial and affordable housing projects across Australia.",
};

export default function PropertiesPage() {
  return (
    <>
      <NavigationBar variant="solid" />
      <main className="flex w-full flex-1 flex-col pt-20">
        <PropertiesListSection />
        <ContactValuesSection />
        <Footer />
      </main>
    </>
  );
}
