"use client";

import { useEffect } from "react";

/**
 * Lets `:active` fire on plain elements in iOS Safari.
 *
 * Touch devices never fire `:hover`, so every hover animation on the site is
 * mirrored onto `:active` to give phones the same feedback on press. iOS only
 * applies `:active` to natively clickable elements though — buttons and links
 * — unless the document carries a touch listener, which leaves the pressed
 * state dead on cards and tiles that are plain `div`s and `article`s.
 *
 * An empty passive listener is the whole fix: it never runs any work and never
 * blocks scrolling, it just opts the page into the behaviour.
 */
export function TouchActiveSupport() {
  useEffect(() => {
    const noop = () => {};
    document.addEventListener("touchstart", noop, { passive: true });
    return () => document.removeEventListener("touchstart", noop);
  }, []);

  return null;
}
