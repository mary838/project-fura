import Image from "next/image";
import { cn } from "@/lib/cn";

type MediaFrameProps = {
  src: string;
  alt: string;
  sizes: string;
  /** Frame sizing. Every caller sets its own height here. */
  className: string;
  /** Corner radius: 16px by default, 12px for the delivery tiles, 10px once. */
  radius?: "2xl" | "md" | "sm";
  priority?: boolean;
  /** Scrim laid over the image, e.g. `"bg-black/10"`. */
  overlay?: string;
  imageClassName?: string;
  /**
   * Separately-cropped still for below `lg`, where the frame's aspect ratio
   * differs enough from desktop that `object-cover` on the same photo would
   * cut off the wrong part of it.
   */
  mobileSrc?: string;
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
  mobileSrc,
}: MediaFrameProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        radius === "sm" && "rounded-[10px]",
        radius === "md" && "rounded-xl",
        radius === "2xl" && "rounded-2xl",
        className,
      )}
    >
      {mobileSrc ? (
        <Image
          src={mobileSrc}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn("object-cover lg:hidden", imageClassName)}
        />
      ) : null}
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn(
          "object-cover",
          mobileSrc && "hidden lg:block",
          imageClassName,
        )}
      />
      {overlay ? <div className={cn("absolute inset-0", overlay)} /> : null}
    </div>
  );
}
