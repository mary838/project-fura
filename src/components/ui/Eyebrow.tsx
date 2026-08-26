import { cn } from "@/lib/cn";

/** Small uppercase label above a section heading. */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-base font-medium text-brand-primary", className)}>
      {children}
    </p>
  );
}
