import { IntroSplit } from "@/components/ui/IntroSplit";

export function ConstructionIntroSection() {
  return (
    <IntroSplit
      // Figma mobile frame (402px, node 24198:24796) specifies a 16px gutter
      // and a 24px gap between the copy stack and the image.
      gutter="default"
      stackGap="md"
      title="Built with Precision. Delivered with Confidence"
      paragraphs={[
        "Habitech Construction works alongside Open Build Pty Ltd, an Australian construction firm with 25 years of " +
          "experience and a proven track record of AUD550million in delivered projects. This partnership ensures precision, reliability, and compliance with national " +
          "certifications.",
      ]}
      image={{
        src: "/fura/companies/construction/intro.png",
        // The mobile frame is a taller, portrait-cropped still — the desktop
        // wide shot would lose the buildings under plain object-cover.
        mobileSrc: "/fura/companies/construction/intro-mobile.jpg",
        alt: "Habitech Construction project",
      }}
      cta={{ label: "Partner With Us", href: "#contact-form" }}
    />
  );
}
