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
  /**
   * Loads the image eagerly and preloads it from the document head. Only for
   * frames that are already on screen at first paint — everything else keeps
   * the default lazy loading. Replaces the `priority` prop, deprecated in
   * Next 16.
   */
  preload?: boolean;
  /**
   * JPEG/WebP quality. Photographs in large frames keep 95 (allowlisted in
   * `next.config.ts`); pass 75 for anything where the default is enough.
   */
  quality?: number;
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
  preload = false,
  quality = 95,
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
          preload={preload}
          quality={quality}
          sizes={sizes}
          className={cn("object-cover lg:hidden", imageClassName)}
        />
      ) : null}
      <Image
        src={src}
        alt={alt}
        fill
        preload={preload}
        quality={quality}
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
