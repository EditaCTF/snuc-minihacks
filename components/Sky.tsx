import type { CSSProperties } from "react";

// Deterministic PRNG so server and client render the same starfield.
function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = mulberry32(2026);
const dots = Array.from({ length: 140 }, () => ({
  x: rand() * 1000,
  y: rand() * 1000,
  r: 0.8 + rand() * 1.6,
  o: 0.35 + rand() * 0.6,
}));
const sparkles = Array.from({ length: 22 }, () => ({
  x: rand() * 1000,
  y: rand() * 1000,
  s: 6 + rand() * 9,
  delay: rand() * 4,
}));

// Four-point sparkle from the poster, unit-sized around the origin.
const SPARKLE =
  "M0,-1 C0.12,-0.12 0.12,-0.12 1,0 C0.12,0.12 0.12,0.12 0,1 C-0.12,0.12 -0.12,0.12 -1,0 C-0.12,-0.12 -0.12,-0.12 0,-1Z";

function Stars() {
  return (
    <svg
      className="sky-stars"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {dots.map((d) => (
        <circle
          key={`${d.x}-${d.y}`}
          cx={d.x}
          cy={d.y}
          r={d.r}
          fill="#fff"
          opacity={d.o}
        />
      ))}
      {sparkles.map((s) => (
        <path
          key={`${s.x}-${s.y}`}
          className="sparkle"
          d={SPARKLE}
          fill="#fff"
          transform={`translate(${s.x} ${s.y}) scale(${s.s})`}
          style={{ animationDelay: `${s.delay}s` }}
        />
      ))}
    </svg>
  );
}

function Cloud() {
  const puffs = (
    <>
      <circle cx="62" cy="78" r="34" />
      <circle cx="104" cy="56" r="44" />
      <circle cx="156" cy="62" r="36" />
      <circle cx="196" cy="84" r="26" />
      <rect x="36" y="74" width="182" height="40" rx="20" />
    </>
  );
  return (
    <svg viewBox="0 0 240 124" aria-hidden="true">
      <g fill="#dcd6f7" transform="translate(0 8)">
        {puffs}
      </g>
      <g fill="#fff">{puffs}</g>
    </svg>
  );
}

// x: left edge (% of frame width), y: offset from frame centre (vh) when
// we're right inside the clouds, w: width (vw), speed: parallax factor —
// higher means closer to the camera and sweeping past faster.
const clouds = [
  { x: -8, y: -70, w: 30, speed: 1.3, o: 0.6, blur: 3 },
  { x: 66, y: -48, w: 28, speed: 1.4, o: 0.6, blur: 3 },
  { x: 34, y: -28, w: 24, speed: 1.6, o: 0.7, blur: 2 },
  { x: 72, y: 10, w: 34, speed: 1.9, o: 0.8, blur: 1 },
  { x: -4, y: 26, w: 40, speed: 2.2, o: 0.9, blur: 0 },
  { x: 40, y: 60, w: 36, speed: 2.4, o: 0.9, blur: 0 },
  { x: 18, y: -50, w: 38, speed: 2, o: 0.85, blur: 1 },
  { x: 50, y: -14, w: 44, speed: 2.6, o: 0.95, blur: 0 },
  { x: 76, y: 70, w: 40, speed: 2.8, o: 0.95, blur: 0 },
  { x: 24, y: -36, w: 56, speed: 3, o: 1, blur: 0, front: true },
  { x: -22, y: -10, w: 62, speed: 3.2, o: 1, blur: 0, front: true },
  { x: 62, y: 30, w: 64, speed: 3.6, o: 1, blur: 0, front: true },
];

export default function Sky() {
  return (
    <div className="sky" aria-hidden="true">
      <div className="sky-gradient" />
      <Stars />
      <div className="sky-sun" />
      {clouds.map((c) => (
        <div
          key={`${c.x}-${c.y}`}
          className={`cloud${c.front ? " cloud--front" : ""}`}
          style={
            {
              left: `${c.x}%`,
              width: `${c.w}vw`,
              "--y": `${c.y}vh`,
              "--speed": c.speed,
              opacity: c.o,
              filter: c.blur ? `blur(${c.blur}px)` : undefined,
            } as CSSProperties
          }
        >
          <Cloud />
        </div>
      ))}
      <div className="sky-fog" />
      <div className="hills">
        <svg
          className="hill hill--back"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="#9fd67a"
            d="M0,110 C180,40 360,30 560,85 C760,140 900,40 1100,50 C1260,58 1360,95 1440,115 L1440,320 L0,320Z"
          />
        </svg>
        <svg
          className="hill hill--mid"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="#6fbf52"
            d="M0,150 C220,95 420,110 640,150 C860,190 1040,105 1240,112 C1340,116 1400,128 1440,138 L1440,320 L0,320Z"
          />
        </svg>
        <svg
          className="hill hill--front"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="#4a9e3f"
            d="M0,190 C260,160 520,182 760,196 C1000,210 1220,170 1440,180 L1440,320 L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
}
