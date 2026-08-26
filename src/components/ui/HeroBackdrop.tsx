import Image from "next/image";

type HeroBackdropProps = {
  src: string;
  /** Scrim over the photo: a Tailwind class, or a raw `background-image`. */
  overlay?: string;
  overlayImage?: string;
};

/** Full-bleed hero photograph with its darkening scrim. */
export function HeroBackdrop({ src, overlay, overlayImage }: HeroBackdropProps) {
  return (
    <div aria-hidden className="absolute inset-0">
      <Image
        src={src}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {overlay ? <div className={`absolute inset-0 ${overlay}`} /> : null}
      {overlayImage ? (
        <div
          className="absolute inset-0"
          style={{ backgroundImage: overlayImage }}
        />
      ) : null}
    </div>
  );
}
