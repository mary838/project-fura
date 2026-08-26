"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type SplitLinesProps = {
  /** Plain text. A newline forces a break, matching a `<br>` in the design. */
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  /** Offset before this block's first line moves, for cascading siblings. */
  startDelay?: number;
  /** Gap between consecutive lines. */
  step?: number;
};

/**
 * Reveals text one rendered line at a time, each rising from behind a clipped
 * edge.
 *
 * Server-render and the first client render emit the plain string, so hydration
 * matches and the text is readable without JS. Lines are measured afterwards
 * with a Range over the original text node — no DOM mutation to measure — and
 * re-measured whenever the box resizes, since wrapping changes with width.
 *
 * The split spans are `aria-hidden`; an `sr-only` copy carries the real text so
 * assistive tech reads it once, unbroken.
 */
export function SplitLines({
  text,
  as: Tag = "p",
  className,
  startDelay = 0,
  step = 100,
}: SplitLinesProps) {
  const ref = useRef<HTMLElement>(null);
  const [lines, setLines] = useState<string[] | null>(null);
  const [shown, setShown] = useState(false);

  const measure = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    const node = el.firstChild;
    if (!node || node.nodeType !== Node.TEXT_NODE) return;

    const source = node.textContent ?? "";
    const range = document.createRange();
    const found: string[] = [];
    let lineTop: number | null = null;
    let lineStart = 0;
    let wordEnd = 0;

    for (const match of source.matchAll(/\S+/g)) {
      const start = match.index ?? 0;
      const end = start + match[0].length;
      range.setStart(node, start);
      range.setEnd(node, end);
      const top = Math.round(range.getBoundingClientRect().top);

      if (lineTop === null) {
        lineTop = top;
        lineStart = start;
      } else if (top !== lineTop) {
        found.push(source.slice(lineStart, wordEnd).trim());
        lineTop = top;
        lineStart = start;
      }
      wordEnd = end;
    }

    if (lineTop !== null) found.push(source.slice(lineStart, wordEnd).trim());
    if (found.length) setLines(found);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let cancelled = false;
    // Wrapping depends on the final face, so wait for fonts before measuring.
    const run = () => {
      if (!cancelled) measure();
    };
    if (document.fonts?.status === "loaded") run();
    else document.fonts?.ready.then(run).catch(run);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);

    // Re-measure on width change: drop back to the plain string so there is a
    // text node to measure again, then re-split.
    let frame = 0;
    const resize = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setLines(null);
        requestAnimationFrame(() => !cancelled && measure());
      });
    });
    resize.observe(el);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      resize.disconnect();
    };
  }, [measure]);

  // A forced break only survives measurement if newlines are preserved.
  const hasBreak = text.includes("\n");

  if (!lines) {
    return (
      <Tag
        ref={ref as never}
        className={cn(className, hasBreak && "whitespace-pre-line")}
      >
        {text}
      </Tag>
    );
  }

  return (
    <Tag
      ref={ref as never}
      className={cn(className, shown && "is-visible")}
      data-split-lines
    >
      <span className="sr-only">{text}</span>
      <span className="block" aria-hidden>
        {lines.map((line, index) => (
          <span key={`${line}-${index}`} className="block overflow-hidden">
            <span
              className="split-line block whitespace-nowrap"
              style={{ transitionDelay: `${startDelay + index * step}ms` }}
            >
              {line}
            </span>
          </span>
        ))}
      </span>
    </Tag>
  );
}
