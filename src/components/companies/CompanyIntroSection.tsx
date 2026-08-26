import { IntroSplit } from "@/components/ui/IntroSplit";

export function CompanyIntroSection() {
  return (
    <IntroSplit
      title="Advanced Manufacturing, Smarter Construction."
      paragraphs={[
        "Habitech Manufacturing partners with Jane Box, a leading modular systems and construction materials company, to deliver high-quality, cost-efficient and innovative building solutions for Australia.",
        "By combining advanced design, precision manufacturing and global sourcing, we help accelerate housing delivery while maintaining international quality standards.",
      ]}
      image={{
        src: "/fura/companies/manufacturing/intro.png",
        alt: "Habitech modular home",
      }}
      cta={{ label: "Partner With Us", href: "/invest" }}
    />
  );
}
