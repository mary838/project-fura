import Image from "next/image";
import { SplitLines } from "@/components/ui/SplitLines";
import type { TeamMember } from "@/lib/team-content";

type TeamMemberCardProps = TeamMember & {
  /**
   * When the copy should start moving, in ms. The list staggers the cards
   * themselves, so each card hands its own offset down here to keep the text
   * rising just behind the card it sits in rather than during its travel.
   */
  revealDelay?: number;
};

/**
 * Leadership entry. Mobile stacks a full-bleed 320px portrait above the bio
 * inside a bordered card; from `sm` up the portrait moves into an inset
 * column beside the text and the border drops away.
 *
 * No `items-start` on the article: the portrait column relies on the default
 * stretch alignment to fill the card height.
 */
export function TeamMemberCard({
  photo,
  name,
  role,
  bio,
  revealDelay = 0,
}: TeamMemberCardProps) {
  return (
    <article className="flex w-full max-w-[854px] flex-col gap-4 overflow-hidden rounded-2xl border border-border-secondary bg-surface sm:flex-row sm:gap-0 sm:border-0 lg:h-[280px]">
      <div className="w-full shrink-0 sm:w-[308px] sm:p-4">
        <div className="relative h-[320px] w-full overflow-hidden bg-[#c4c4c4] sm:h-full sm:rounded-2xl">
          <Image
            src={photo}
            alt={name}
            fill
            sizes="(min-width: 640px) 276px, 100vw"
            className="object-cover object-top"
          />
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-3 p-4">
        <div className="flex w-full flex-col">
          <SplitLines
            as="h3"
            text={name}
            className="text-lg font-medium text-title"
            startDelay={revealDelay}
          />
          <SplitLines
            text={role}
            className="text-sm text-role"
            startDelay={revealDelay + 80}
          />
        </div>
        <SplitLines
          text={bio}
          className="text-sm text-subtitle"
          startDelay={revealDelay + 160}
          step={50}
        />
      </div>
    </article>
  );
}
