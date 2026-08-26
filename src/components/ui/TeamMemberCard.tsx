import Image from "next/image";
import type { TeamMember } from "@/lib/team-content";

/**
 * Leadership entry. Mobile stacks a full-bleed 320px portrait above the bio
 * inside a bordered card; from `sm` up the portrait moves into an inset
 * column beside the text and the border drops away.
 *
 * No `items-start` on the article: the portrait column relies on the default
 * stretch alignment to fill the card height.
 */
export function TeamMemberCard({ photo, name, role, bio }: TeamMember) {
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
          <h3 className="text-lg font-medium text-title">{name}</h3>
          <p className="text-sm text-role">{role}</p>
        </div>
        <p className="text-sm text-subtitle">{bio}</p>
      </div>
    </article>
  );
}
