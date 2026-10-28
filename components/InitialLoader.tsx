"use client";

import { useEffect, useState } from "react";
import CcLogo from "./CcLogo";

// Keep the loader up until the fill animation (0.15s delay + 1.1s, see
// .loader-logo) has played, measured from navigation start.
const MIN_VISIBLE_MS = 1350;
const FADE_DURATION_MS = 450;

// The CC tile starts empty (white on white) and fills with the poster's
// colours from the bottom up; once the page has loaded it fades away.
export default function InitialLoader() {
  const [phase, setPhase] = useState<"loading" | "fading" | "done">("loading");

  useEffect(() => {
    let fadeTimer: number | undefined;
    let hideTimer: number | undefined;

    const finish = () => {
      // performance.now() counts from navigation start, which is roughly when
      // the server-rendered loader (and its CSS animation) first painted.
      const wait = Math.max(0, MIN_VISIBLE_MS - performance.now());
      fadeTimer = window.setTimeout(() => {
        setPhase("fading");
        hideTimer = window.setTimeout(() => setPhase("done"), FADE_DURATION_MS);
      }, wait);
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`initial-loader${phase === "fading" ? " is-fading" : ""}`}
      aria-hidden="true"
    >
      <div className="loader-logo">
        <CcLogo />
      </div>
    </div>
  );
}
