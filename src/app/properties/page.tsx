import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PropertiesListSection } from "@/components/properties/PropertiesListSection";

export const metadata: Metadata = {
  title: "Real Estate Properties — Fura Habitech",
  description:
    "Completed and ongoing residential, commercial and affordable housing projects across Australia.",
};

export default function PropertiesPage() {
  return (
    <PageShell>
      <PropertiesListSection />
    </PageShell>
  );
}
