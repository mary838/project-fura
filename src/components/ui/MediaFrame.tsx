import Image from "next/image";
import { cn } from "@/lib/cn";

type MediaFrameProps = {
  src: string;
  alt: string;
  sizes: string;
  /** Frame sizing. Every caller sets its own height here. */
  className: string;
  /** Corner radius — the delivery diagram is the one frame at 10px. */
  radius?: "2xl" | "sm";
  priority?: boolean;
  /** Scrim laid over the image, e.g. `"bg-black/10"`. */
  overlay?: string;
  imageClassName?: string;
};

/** Rounded, clipped image panel used beside intro copy and in image grids. */
export function MediaFrame({
  src,
  alt,
  sizes,
  className,
  radius = "2xl",
  priority = false,
  overlay,
  imageClassName,
}: MediaFrameProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        radius === "sm" ? "rounded-[10px]" : "rounded-2xl",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-cover", imageClassName)}
      />
      {overlay ? <div className={cn("absolute inset-0", overlay)} /> : null}
    </div>
  );
}
