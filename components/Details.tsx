import { details } from "@/lib/content";

export default function Details() {
  return (
    <section className="section" id="details">
      <h2 className="section-heading reveal">Event Details</h2>
      <div className="details-grid">
        {details.map((d) => (
          <div className="detail-card reveal" key={d.big}>
            <span className="big">{d.big}</span>
            <span className="small">{d.small}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
