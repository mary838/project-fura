import { IntroSplit } from "@/components/ui/IntroSplit";

export function FuraIntroSection() {
  return (
    <IntroSplit
      title="Disciplined Capital, Long term value"
      paragraphs={[
        "We combine investment expertise, structured capital solutions, and real asset opportunities to support sustainable growth and capital preservation.",
      ]}
      paragraphSize="xl"
      image={{
        src: "/fura/companies/fura-habitech/intro.jpg",
        alt: "FURA Habitech development",
      }}
      cta={{ label: "Partner With Us", href: "/invest" }}
    />
  );
}
