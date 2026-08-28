import { RevealGroup } from "@/components/ui/RevealGroup";
import { Section } from "@/components/ui/Section";
import { SplitLines } from "@/components/ui/SplitLines";
import { TeamMemberCard } from "@/components/ui/TeamMemberCard";
import { LEADERSHIP } from "@/lib/team-content";

export function LeadershipSection() {
  return (
    <Section reveal className="bg-surface-muted">
      <SplitLines
        as="h2"
        text="Leadership Driving Long Term Value"
        className="w-full text-center text-display-xs font-medium text-title lg:text-display-md"
      />

      <RevealGroup className="flex w-full flex-col items-center gap-3 lg:gap-4">
        {LEADERSHIP.map((member) => (
          <TeamMemberCard key={member.name} {...member} />
        ))}
      </RevealGroup>
    </Section>
  );
}
