import { REGISTER_URL } from "@/lib/content";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <h1 className="hero-title">
        <span className="hero-snuc">SNUC</span>
        <span className="hero-name">
          <span className="thin">mini</span>Hacks
        </span>
        <span className="hero-year">2026</span>
      </h1>
      <p className="hero-tagline">
        <strong>Innovate. Build. Present. Win.</strong>
        <br />A beginner-friendly hackathon exclusively for 1st &amp; 2nd years
        at Shiv Nadar University Chennai.
      </p>
      <div className="hero-cta">
        <a
          href={REGISTER_URL}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Register Now <span className="btn-arrow">&rarr;</span>
        </a>
        <a href="#timeline" className="btn btn-outline">
          View Timeline
        </a>
      </div>
    </section>
  );
}
