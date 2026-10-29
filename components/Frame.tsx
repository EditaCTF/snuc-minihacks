"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import CcLogo from "./CcLogo";
import Nav from "./Nav";
import Sky from "./Sky";

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

// --sky value past which the notch's sky is light enough for a navy logo.
const DAY_THRESHOLD = 0.38;

// The poster's rounded panel, with the CC logo sitting in a notch cut out of
// the top-left corner. Content scrolls inside the panel; scroll progress is
// published as CSS variables that drive the night -> clouds -> fields scene.
export default function Frame({ children }: { children: ReactNode }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  // Held in React state (not toggled on the DOM) so a re-render can't drop it.
  const [isDay, setIsDay] = useState(false);

  useEffect(() => {
    const frame = frameRef.current;
    const scroller = scrollRef.current;
    if (!frame || !scroller) return;

    // The descent is anchored on the .cloud-gap element rather than raw scroll
    // %, so the clouds always peak there regardless of how tall content gets.
    // ct = distance (in viewport heights) from the viewport centre to the gap:
    // positive above the clouds, 0 inside them, negative below.
    const gap = scroller.querySelector<HTMLElement>(".cloud-gap");

    let raf = 0;
    const update = () => {
      raf = 0;
      const h = scroller.clientHeight;
      const top = scroller.scrollTop;
      const max = scroller.scrollHeight - h;
      const gapMid = gap
        ? gap.offsetTop + gap.offsetHeight / 2
        : scroller.scrollHeight / 2;
      const ctAt = (y: number) => (gapMid - y - h / 2) / h;
      const ct = ctAt(top);
      // Sky position: 0 = poster night, 0.5 = inside the clouds, 1 = daylight.
      const sky =
        ct > 0
          ? 0.5 * (1 - clamp01(ct / Math.max(ctAt(0), 0.01)))
          : 0.5 + 0.5 * clamp01(-ct / Math.max(-ctAt(max), 0.01));

      const s = frame.style;
      s.setProperty("--ct", ct.toFixed(4));
      s.setProperty("--sky", sky.toFixed(4));
      // Snaps the notch glyphs to their dark state once the sky behind them is
      // light. React bails out when the value hasn't changed.
      setIsDay(sky > DAY_THRESHOLD);
      s.setProperty("--stars", clamp01(ct - 0.3).toFixed(4));
      s.setProperty(
        "--fog",
        (clamp01(1 - Math.abs(ct) / 0.7) * 0.8).toFixed(4),
      );
      s.setProperty("--sun", clamp01((-ct - 0.2) / 0.8).toFixed(4));
      s.setProperty("--hills", clamp01(1 - (max - top) / (h * 1.2)).toFixed(4));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    scroller.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            obs.unobserve(e.target);
          }
        }
      },
      // The positive bottom margin fires the reveal ~200px before the element
      // enters the viewport, so the transition finishes off-camera instead of
      // running in front of the user mid-scroll.
      { root: scroller, threshold: 0, rootMargin: "0px 0px 200px 0px" },
    );
    for (const el of scroller.querySelectorAll(".reveal")) obs.observe(el);

    return () => {
      cancelAnimationFrame(raf);
      scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      obs.disconnect();
    };
  }, []);

  return (
    <div className={`frame${isDay ? " is-day" : ""}`} ref={frameRef}>
      <Sky />
      <div className="frame-scroll" ref={scrollRef}>
        {children}
      </div>
      <Nav />
      <a href="#top" className="notch" aria-label="Back to top">
        <span className="notch-logo">
          <CcLogo />
        </span>
      </a>
    </div>
  );
}
