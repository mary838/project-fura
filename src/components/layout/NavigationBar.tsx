"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { NAV_LINKS, type NavLink } from "@/lib/nav-links";

export { NAV_LINKS };
export type { NavLink };

/** Distance scrolled before the bar switches to its solid state. */
const SOLID_AFTER_PX = 24;

/**
 * A link is current when the route matches it, or sits beneath it — so
 * `/properties/winghouse` still lights up "REAL ESTATE PROPERTIES". Home is
 * matched exactly, since every path starts with "/".
 */
function isCurrent(pathname: string, href?: string) {
  if (!href) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** Styling for a nav link, in its current-page and resting states. */
const LINK_STATE = {
  current: "font-semibold text-brand-accent",
  resting: "font-medium text-title",
} as const;

type NavigationBarProps = {
  links?: NavLink[];
  /**
   * `"transparent"` (default) starts translucent over a hero image and turns
   * white on scroll. `"solid"` is white at every scroll position — use it on
   * pages that open on a light section instead of a hero.
   */
  variant?: "transparent" | "solid";
};

/** Fixed nav bar shared across pages. */
export function NavigationBar({
  links = NAV_LINKS,
  variant = "transparent",
}: NavigationBarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Label of the dropdown currently open, so only one can be open at a time.
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const alwaysSolid = variant === "solid";
  const pathname = usePathname();

  useEffect(() => {
    if (alwaysSolid) return;
    const onScroll = () => setScrolled(window.scrollY > SOLID_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [alwaysSolid]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenMenu(null);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  // The open mobile panel needs an opaque backdrop regardless of scroll position.
  const solid = alwaysSolid || scrolled || open;

  return (
    <header
      ref={navRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full transition-colors duration-300",
        solid
          ? "border-b border-border-secondary bg-surface shadow-sm"
          : // The bar itself is bare from `lg` up; mobile keeps its tinted strip.
            "border-b border-white/5 bg-white/10 backdrop-blur-[2px] lg:border-0 lg:bg-transparent",
      )}
    >
      <div
        className={cn(
          "flex h-20 w-full items-center justify-between px-4 lg:px-[100px]",
          alwaysSolid ? "" : "lg:h-[88px]",
        )}
      >
        <Link href="/" aria-label="Fura Habitech home" className="shrink-0">
          <Image
            src="/fura/icons/logo-lockup.svg"
            alt="Fura Habitech"
            width={239}
            height={39}
            priority
            className="h-[39px] w-auto"
          />
        </Link>

        <nav
          className={cn(
            // The full link row needs ~1180px before it starts colliding with
            // the logo, so the bar keeps the compact menu until `xl`.
            "hidden min-w-0 flex-1 items-center px-8 xl:flex",
            alwaysSolid ? "justify-end" : "justify-center",
          )}
        >
          <ul
            className={cn(
              "flex items-center",
              alwaysSolid
                ? "gap-8"
                : cn(
                    "gap-4 rounded-xl px-4 py-2",
                    // The pill would be invisible against the white scrolled bar.
                    !scrolled && "bg-white/10",
                  ),
            )}
          >
            {links.map((link) => {
              // A menu counts as current when the open page is one of its items.
              const current =
                isCurrent(pathname, link.href) ||
                (link.items?.some((item) => isCurrent(pathname, item.href)) ??
                  false);

              return link.items ? (
                <li
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(link.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={openMenu === link.label}
                    onClick={() =>
                      setOpenMenu((current) =>
                        current === link.label ? null : link.label,
                      )
                    }
                    className={cn(
                      "flex cursor-pointer items-center gap-1 text-sm whitespace-nowrap transition-opacity hover:opacity-70 active:opacity-70",
                      current ? LINK_STATE.current : LINK_STATE.resting,
                      alwaysSolid ? "" : "rounded-lg px-4 py-3",
                    )}
                  >
                    {link.label}
                    <Image
                      src="/fura/icons/chevron-down.svg"
                      alt=""
                      width={24}
                      height={24}
                      className={cn(
                        "size-6 transition-transform duration-200",
                        openMenu === link.label && "rotate-180",
                      )}
                    />
                  </button>

                  {openMenu === link.label ? (
                    // The padded wrapper keeps the pointer inside the item
                    // while travelling from the trigger down to the panel.
                    <div className={cn("absolute top-full left-0", alwaysSolid && "pt-3")}>
                      <ul className="menu-in flex min-w-[229px] flex-col gap-5 rounded-lg bg-white/74 p-4 shadow-lg backdrop-blur-[12px]">
                        {link.items.map((item) => {
                          const itemCurrent = isCurrent(pathname, item.href);
                          return (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                aria-current={itemCurrent ? "page" : undefined}
                                onClick={() => setOpenMenu(null)}
                                className={cn(
                                  "block text-sm whitespace-nowrap transition-opacity hover:opacity-70 active:opacity-70",
                                  itemCurrent
                                    ? LINK_STATE.current
                                    : LINK_STATE.resting,
                                )}
                              >
                                {item.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ) : null}
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    href={link.href ?? "/"}
                    aria-current={current ? "page" : undefined}
                    className={cn(
                      "flex items-center gap-1 text-sm whitespace-nowrap transition-opacity hover:opacity-70 active:opacity-70",
                      current ? LINK_STATE.current : LINK_STATE.resting,
                      alwaysSolid ? "" : "rounded-lg px-4 py-3",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden xl:block">
          <Button href="#contact-form" size="sm">
            Invest with us
          </Button>
        </div>

        <div className="xl:hidden">
          <Button
            size="icon"
            icon={{ src: "/fura/icons/menu.svg", alt: "" }}
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          />
        </div>
      </div>

      {/*
        `grid-template-rows: 0fr -> 1fr` animates to the panel's own height
        without anyone having to measure it, and collapses to nothing when
        closed. `inert` keeps the collapsed links out of the tab order, which
        `hidden` used to handle.
      */}
      <div
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] xl:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
        inert={!open}
      >
        {/*
          The grid item itself carries no border: a border sits outside the
          zeroed content box and would leave the bar 1px taller when closed,
          pushing every page down by a pixel. It goes on the clipped content.
        */}
        <div className="min-h-0 overflow-hidden">
          <div className="border-t border-border-secondary bg-surface">
        <ul className="flex flex-col px-4 py-4">
          {links.map((link) => {
            const current =
              isCurrent(pathname, link.href) ||
              (link.items?.some((item) => isCurrent(pathname, item.href)) ??
                false);

            return (
              <li key={link.label}>
                {link.items ? (
                  <div className="py-3">
                    <p
                      className={cn(
                        "text-sm",
                        current ? LINK_STATE.current : LINK_STATE.resting,
                      )}
                    >
                      {link.label}
                    </p>
                    <ul className="mt-2 flex flex-col border-l border-border-secondary pl-3">
                      {link.items.map((item) => {
                        const itemCurrent = isCurrent(pathname, item.href);
                        return (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              aria-current={itemCurrent ? "page" : undefined}
                              onClick={() => setOpen(false)}
                              className={cn(
                                "-mx-2 block rounded-md px-2 py-2.5 text-sm transition-colors active:bg-surface-muted",
                                itemCurrent
                                  ? LINK_STATE.current
                                  : "text-subtitle",
                              )}
                            >
                              {item.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ) : (
                  <Link
                    href={link.href ?? "/"}
                    aria-current={current ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "-mx-2 block rounded-md px-2 py-3 text-sm transition-colors active:bg-surface-muted",
                      current ? LINK_STATE.current : LINK_STATE.resting,
                    )}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
        <div className="px-4 pb-6">
          <Button href="#contact-form" size="sm" className="w-full">
            Invest with us
          </Button>
        </div>
          </div>
        </div>
      </div>
    </header>
  );
}
