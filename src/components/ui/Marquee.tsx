"use client";

import { useEffect, useRef, useState } from "react";
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
 *
 * One copy of the children can be narrower than the viewport on a wide screen,
 * which would leave dead space at the right edge as the track slides. So each
 * half repeats the children until it is at least as wide as the container,
 * measured from the rendered group rather than assumed from cell counts.
 *
 * The ribbon holds still while the pointer rests on it, for a mouse hover and
 * a touch hold alike. This is driven entirely by pointer events rather than
 * CSS `:hover` — iOS Safari applies `:hover` on tap but never reliably clears
 * it afterward, so a `hover:` rule leaves the ribbon frozen for good until the
 * page is tapped elsewhere. `pointerenter`/`pointerdown` start the hold and
 * `pointerleave`/`pointerup`/`pointercancel` end it, which for touch fire in
 * that order right after the finger lifts, so nothing gets stuck.
 */
export function Marquee({
  children,
  durationSeconds = 40,
  className,
}: MarqueeProps) {
  const [held, setHeld] = useState(false);
  const [copies, setCopies] = useState(1);
  const viewportRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const group = "flex shrink-0 items-stretch gap-3 pr-3 lg:gap-4 lg:pr-4";
  const hold = () => setHeld(true);
  const release = () => setHeld(false);

  useEffect(() => {
    const viewport = viewportRef.current;
    const groupEl = groupRef.current;
    if (!viewport || !groupEl) return;

    const measure = () => {
      // Width of a single copy, derived from the current group so the maths
      // survive responsive cell widths and font/image loading.
      const unit = groupEl.getBoundingClientRect().width / copies;
      if (unit <= 0) return;
      const needed = Math.max(1, Math.ceil(viewport.clientWidth / unit));
      setCopies((current) => (current === needed ? current : needed));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    observer.observe(groupEl);
    return () => observer.disconnect();
  }, [copies, children]);

  const half = Array.from({ length: copies }, (_, index) => (
    <div key={index} className="contents">
      {children}
    </div>
  ));

  return (
    <div
      ref={viewportRef}
      // `py-4`/`-my-4` cancel out on layout but give a hovered cell's lifted
      // box-shadow room to render before `overflow-hidden` (needed for the
      // horizontal loop) clips it off.
      className={cn(
        "-my-4 w-full overflow-hidden py-4 motion-reduce:overflow-x-auto",
        className,
      )}
      onPointerEnter={hold}
      onPointerDown={hold}
      onPointerUp={release}
      onPointerCancel={release}
      onPointerLeave={release}
    >
      <div
        style={{ animationDuration: `${durationSeconds}s` }}
        className={cn(
          "flex w-max animate-marquee motion-reduce:animate-none",
          held && "[animation-play-state:paused]",
        )}
      >
        <div ref={groupRef} className={group}>
          {half}
        </div>
        <div className={group} aria-hidden>
          {half}
        </div>
      </div>
    </div>
  );
}
