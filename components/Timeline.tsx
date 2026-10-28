import { stages } from "@/lib/content";

// Mirrors the poster: three stage cards zig-zagging down, joined by dotted arcs.
export default function Timeline() {
  return (
    <section className="section" id="timeline">
      <h2 className="section-heading reveal">Timeline</h2>
      <ol className="stages">
        {stages.map((s, i) => (
          <li
            key={s.title}
            className={`stage tone-${s.tone} stage--${i % 2 ? "right" : "left"} reveal`}
          >
            <div className="stage-text">
              <h3>{s.title}</h3>
              <p>{s.blurb}</p>
            </div>
            <div className="stage-when">
              {s.when.map((w) => (
                <span key={w}>{w}</span>
              ))}
            </div>
            {i < stages.length - 1 && (
              <span
                className={`stage-link stage-link--${i % 2 ? "left" : "right"}`}
                aria-hidden="true"
              />
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
