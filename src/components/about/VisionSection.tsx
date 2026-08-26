import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { CAPABILITIES } from "@/lib/about-content";

export function VisionSection() {
  return (
    <Section gap="xl" className="bg-surface">
      <div className="flex w-full flex-col items-start gap-6">
        <h2 className="w-full text-display-xs font-medium text-title lg:text-display-md">
          Our Vision
        </h2>
        <p className="w-full text-base text-subtitle lg:text-xl">
          Building scalable housing solutions for Australia&rsquo;s future, Our
          mission is to become Australia&rsquo;s leading affordable housing and
          residential investment platform. Our vision is to redefine housing
          delivery through innovation, investment, and integrated execution
          &mdash; ensuring affordability, sustainability, and scalability at
          every stage.
        </p>
      </div>

      <div className="flex w-full flex-col items-start gap-6">
        <h2 className="w-full text-display-xs font-medium text-title lg:text-display-md">
          About fura habitech - Queenland Australia
        </h2>
        <p className="w-full text-base text-subtitle lg:text-xl">
          FURA Australia has established a fully integrated ecosystem designed
          to address Australia&rsquo;s growing housing shortage through
          development, manufacturing, construction, property
          <br aria-hidden />
          management, and capital solutions.
        </p>
        <p className="w-full text-base text-subtitle lg:text-xl">
          This integrated approach positions FURA Habitech to participate across
          the entire housing value chain while maintaining a strong focus on
          capital preservation and scalable growth.
        </p>

        <div className="flex w-full flex-col items-start gap-4">
          <p className="w-full text-xl font-medium text-subtitle">
            Through this structure, FURA is able to:
          </p>
          <ul className="flex w-full flex-col gap-4">
            {CAPABILITIES.map((capability) => (
              <li key={capability} className="flex w-full items-start gap-2.5">
                <Image
                  src="/fura/icons/check.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="size-6 shrink-0"
                />
                <span className="min-w-0 flex-1 text-base font-medium text-subtitle">
                  {capability}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <Button href="/invest">Partner With Us</Button>
      </div>
    </Section>
  );
}
