import { cn } from "@/lib/cn";

type MarqueeProps = {
  children: React.ReactNode;
  /** Seconds for one full pass. Longer = calmer. */
  durationSeconds?: number;
  className?: string;
};

/**
 * Infinite right-to-left ribbon.
 *
 * `children` are rendered twice inside a `w-max` track; the animation shifts
 * the track by 50% so the second copy lands exactly where the first started.
 * Each group carries its own trailing gap (`pr-4`) so the seam spacing matches
 * the gap between cells — otherwise the loop stutters by half a gap.
 */
export function Marquee({
  children,
  durationSeconds = 40,
  className,
}: MarqueeProps) {
  const group = "flex shrink-0 items-stretch gap-4 pr-4";

  return (
    <div
      className={cn(
        "w-full overflow-hidden motion-reduce:overflow-x-auto",
        className,
      )}
    >
      <div
        style={{ animationDuration: `${durationSeconds}s` }}
        className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none"
      >
        <div className={group}>{children}</div>
        <div className={group} aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
