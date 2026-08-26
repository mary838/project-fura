import { IntroSplit } from "@/components/ui/IntroSplit";

export function ConstructionIntroSection() {
  return (
    <IntroSplit
      // 26px gutter on mobile is what this frame specifies (350px content in 402).
      gutter="wide"
      stackGap="lg"
      title="Built with Precision. Delivered with Confidence"
      paragraphs={[
        "Habitech Construction works alongside Open Build Pty Ltd, an Australian construction firm with 25 years of\n" +
          "experience and a proven track record of AUD550million in delivered projects. This partnership ensures precision, reliability, and compliance with national\n" +
          "certifications.",
      ]}
      image={{
        src: "/fura/companies/construction/intro.png",
        alt: "Habitech Construction project",
      }}
      cta={{ label: "Partner With Us", href: "/invest" }}
    />
  );
}
