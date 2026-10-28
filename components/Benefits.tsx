import { benefits } from "@/lib/content";

export default function Benefits() {
  return (
    <section className="section on-day" id="why">
      <h2 className="section-heading reveal">Why Join?</h2>
      <div className="benefits-list">
        {benefits.map((b) => (
          <div className="benefit-row reveal" key={b.title}>
            <h3>{b.title}</h3>
            <p>{b.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
