import Image from "next/image";
import { StatTile } from "@/components/ui/StatTile";
import {
  CONSTRUCTION_REGISTRATIONS,
  CONSTRUCTION_STATS,
} from "@/lib/companies-content";

export function RegistrationsSection() {
  return (
    <section className="w-full bg-surface px-4 py-8 lg:px-[100px] lg:py-24">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-8 lg:gap-12">
        <h2 className="w-full text-display-xs font-medium text-title lg:text-display-md">
          Professional Registrations
        </h2>

        <ul className="flex w-full flex-col gap-4">
          {CONSTRUCTION_REGISTRATIONS.map((item) => (
            <li key={item} className="flex min-h-7 w-full items-center gap-2">
              <Image
                src="/fura/icons/check.svg"
                alt=""
                width={24}
                height={24}
                className="size-6 shrink-0"
              />
              <span className="min-w-0 flex-1 text-base font-medium text-[#484747]">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <div className="flex w-full flex-col gap-3 lg:flex-row lg:items-start">
          {CONSTRUCTION_STATS.map((stat) => (
            <StatTile key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
