"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type SplitLinesProps = {
  /** Plain text. A newline forces a break, matching a `<br>` in the design. */
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "div";
  className?: string;
  /** Offset before this block's first line moves, for cascading siblings. */
  startDelay?: number;
  /** Gap between consecutive lines. */
  step?: number;
};

const DURATION = 800;

/**
 * Reveals text one rendered line at a time, each rising from behind a clipped
 * edge.
 *
 * The split exists only while the animation runs. Before it the element holds
 * the plain string (so server and client markup match, and the text is readable
 * without JS); once the last line has landed it reverts to the plain string, so
 * the resting text reflows normally at any width and can never sit clipped.
 *
 * Lines are found by walking the text a character at a time with a Range and
 * watching for the top edge to change. Character granularity matters: the
 * browser can break inside a word at a hyphen ("built-to-sell"), which
 * word-level scanning misses — and a mis-measured line overflows its clip.
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

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let cancelled = false;
    let revertTimer: ReturnType<typeof setTimeout>;

    const measure = () => {
      const node = el.firstChild;
      if (!node || node.nodeType !== Node.TEXT_NODE) return null;

      const source = node.textContent ?? "";
      const range = document.createRange();
      const found: string[] = [];
      let lineTop: number | null = null;
      let lineStart = 0;

      for (let i = 0; i < source.length; i += 1) {
        if (/\s/.test(source[i])) continue;
        range.setStart(node, i);
        range.setEnd(node, i + 1);
        const top = Math.round(range.getBoundingClientRect().top);

        if (lineTop === null) {
          lineTop = top;
        } else if (top !== lineTop) {
          found.push(source.slice(lineStart, i).trim());
          lineTop = top;
          lineStart = i;
        }
      }

      if (lineTop !== null) found.push(source.slice(lineStart).trim());
      return found.length ? found : null;
    };

    const run = () => {
      if (cancelled) return;
      const found = measure();
      if (!found) return;

      setLines(found);
      // Let the hidden state paint first, otherwise there is no starting
      // style for the transition and the lines would simply appear.
      requestAnimationFrame(() => {
        if (!cancelled) setShown(true);
      });

      // Hand the text back to normal layout once the last line has landed.
      const total = startDelay + (found.length - 1) * step + DURATION + 120;
      revertTimer = setTimeout(() => {
        if (!cancelled) setLines(null);
      }, total);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        // Wrapping depends on the final face, so wait for fonts before measuring.
        if (document.fonts?.status === "loaded") run();
        else document.fonts?.ready.then(run).catch(run);
      },
      { threshold: 0.05, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);

    return () => {
      cancelled = true;
      clearTimeout(revertTimer);
      observer.disconnect();
    };
  }, [startDelay, step]);

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
