import { Footer } from "@/components/layout/Footer";
import { NavigationBar } from "@/components/layout/NavigationBar";
import { TouchActiveSupport } from "@/components/layout/TouchActiveSupport";
import { cn } from "@/lib/cn";

type PageShellProps = {
  children: React.ReactNode;
  /**
   * `"solid"` (default) is the white bar used by every page that opens on a
   * light section. Pages opening on a full-bleed hero pass `"transparent"`,
   * which also drops the `pt-20` offset the fixed bar otherwise needs.
   */
  nav?: "solid" | "transparent";
  className?: string;
};

/** Nav + main + footer frame shared by every page. */
export function PageShell({
  children,
  nav = "solid",
  className,
}: PageShellProps) {
  return (
    <>
      <TouchActiveSupport />
      <NavigationBar variant={nav} />
      <main
        className={cn(
          "flex w-full flex-1 flex-col overflow-x-clip",
          nav === "solid" && "pt-20",
          className,
        )}
      >
        {children}
        <Footer />
      </main>
    </>
  );
}
