import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "solid" | "outline";
type ButtonSize = "md" | "sm" | "icon";

type ButtonProps = {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Icon rendered after the label. Pass `null` to omit it. */
  icon?: { src: string; alt: string } | null;
  href?: string;
  className?: string;
  "aria-label"?: string;
  "aria-expanded"?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
};

const VARIANTS: Record<ButtonVariant, string> = {
  solid: "bg-utility-gray-900 text-title-inverse hover:bg-utility-gray-800",
  outline:
    "border border-border-secondary text-title-inverse hover:bg-white/10",
};

const SIZES: Record<ButtonSize, string> = {
  md: "px-[18px] py-3",
  sm: "px-4 py-2.5",
  icon: "p-3",
};

const DEFAULT_ICON = { src: "/fura/icons/arrow-narrow-right.svg", alt: "" };

/** Pill button from the Figma `Buttons/Button` component. */
export function Button({
  children,
  variant = "solid",
  size = "md",
  icon = DEFAULT_ICON,
  href,
  className,
  onClick,
  type = "button",
  ...rest
}: ButtonProps) {
  const classes = cn(
    "inline-flex shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-full text-base font-semibold transition-colors",
    VARIANTS[variant],
    SIZES[size],
    className,
  );

  const content = (
    <>
      {children ? <span className="px-0.5">{children}</span> : null}
      {icon ? (
        <Image
          src={icon.src}
          alt={icon.alt}
          width={20}
          height={20}
          className="size-5 shrink-0"
        />
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  );
}
