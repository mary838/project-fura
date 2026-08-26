import Image from "next/image";
import { cn } from "@/lib/cn";
import type { ServiceStep } from "@/lib/companies-content";

/**
 * Numbered step: text beside a tall image. Rows alternate sides from `lg`;
 * on mobile the text always comes first.
 */
export function ServiceStepRow({
  number,
  title,
  description,
  image,
  reversed = false,
}: ServiceStep & { reversed?: boolean }) {
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-8 lg:h-[423px] lg:items-center lg:gap-16",
        reversed ? "lg:flex-row-reverse" : "lg:flex-row",
      )}
    >
      <div className="flex flex-col items-start gap-6 lg:min-w-0 lg:flex-1">
        <p className="text-display-sm font-medium text-title lg:text-display-lg">
          {number}
        </p>
        <h3 className="w-full text-xl font-medium text-title lg:text-display-sm">
          {title}
        </h3>
        <p className="w-full text-base text-subtitle lg:text-xl">
          {description}
        </p>
      </div>

      <div className="lg:flex lg:min-w-0 lg:flex-1 lg:flex-col lg:justify-center">
        <div className="relative h-[423px] w-full overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 568px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
