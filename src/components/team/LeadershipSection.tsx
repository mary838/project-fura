import { Section } from "@/components/ui/Section";
import { TeamMemberCard } from "@/components/ui/TeamMemberCard";
import { LEADERSHIP } from "@/lib/team-content";

export function LeadershipSection() {
  return (
    <Section className="bg-surface-muted">
      <h2 className="w-full text-center text-display-xs font-medium text-title lg:text-display-md">
        Leadership Driving Long Term Value
      </h2>

      <div className="flex w-full flex-col items-center gap-3 lg:gap-4">
        {LEADERSHIP.map((member) => (
          <TeamMemberCard key={member.name} {...member} />
        ))}
      </div>
    </Section>
  );
}
