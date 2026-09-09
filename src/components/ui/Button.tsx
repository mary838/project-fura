import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "solid" | "outline" | "outline-light";
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
  disabled?: boolean;
};

/*
 * Each variant pairs its hover colour with the same colour on `:active`. Touch
 * devices never fire `:hover`, so the press is the only moment a phone can
 * show the shift — and a button, being natively clickable, gets `:active`
 * everywhere, iOS included.
 */
const VARIANTS: Record<ButtonVariant, string> = {
  solid:
    "bg-utility-gray-900 text-title-inverse hover:bg-utility-gray-800 active:bg-utility-gray-800",
  outline:
    "border border-border-secondary text-title-inverse hover:bg-black/40 active:bg-black/40",
  /*
   * `outline` is light-on-dark, for the buttons that sit over a hero photo.
   * This is the same shape on a light section — a separate variant rather than
   * a `className` override because `cn` only joins, so the colours passed in
   * would be settled by stylesheet order instead of by the caller.
   */
  "outline-light":
    "border border-border-primary bg-surface text-title hover:bg-surface-muted active:bg-surface-muted",
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
  disabled = false,
  ...rest
}: ButtonProps) {
  const classes = cn(
    "group press relative inline-flex shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-full text-base font-semibold transition-[background-color,border-color,color,transform] duration-200",
    VARIANTS[variant],
    SIZES[size],
    disabled && "pointer-events-none opacity-60",
    className,
  );

  const content = (
    <>
      {/*
        Quick black flash on press, the same feedback the portfolio cards give.
        The label and icon are positioned so they paint over it — an absolute
        layer would otherwise sit above static content whatever the order.
      */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-black/25 opacity-0 transition-opacity duration-150 group-active:opacity-100"
      />
      {children ? <span className="relative px-0.5">{children}</span> : null}
      {icon ? (
        <Image
          src={icon.src}
          alt={icon.alt}
          width={20}
          height={20}
          className="btn-arrow relative size-5 shrink-0 transition-transform duration-150 ease-out group-hover:translate-x-1 group-active:translate-x-1"
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
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...rest}
    >
      {content}
    </button>
  );
}
