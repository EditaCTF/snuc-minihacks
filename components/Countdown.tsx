"use client";

import { useEffect, useState } from "react";
import { REGISTRATION_DEADLINE } from "@/lib/content";

const pad = (n: number) => String(n).padStart(2, "0");

function getTimeLeft() {
  const diff = Math.max(0, REGISTRATION_DEADLINE - Date.now());
  return {
    d: pad(Math.floor(diff / 86_400_000)),
    h: pad(Math.floor((diff % 86_400_000) / 3_600_000)),
    m: pad(Math.floor((diff % 3_600_000) / 60_000)),
    s: pad(Math.floor((diff % 60_000) / 1000)),
  };
}

export default function Countdown() {
  // Starts empty so the server render and first client render match.
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { value: time?.d, label: "Days" },
    { value: time?.h, label: "Hours" },
    { value: time?.m, label: "Minutes" },
    { value: time?.s, label: "Seconds" },
  ];

  return (
    <section className="section countdown-section" id="countdown">
      <h2 className="section-heading reveal">Registrations close in</h2>
      <div className="countdown-grid reveal">
        {units.map((u) => (
          <div className="countdown-box" key={u.label}>
            <span className="number">{u.value ?? "--"}</span>
            <span className="label">{u.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
