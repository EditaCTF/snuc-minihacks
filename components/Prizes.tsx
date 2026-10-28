import { prizes } from "@/lib/content";

export default function Prizes() {
  return (
    <section className="section prizes-section" id="prizes">
      <p className="prize-amount reveal">
        &#8377;8,000 <span>Prize Pool</span>
      </p>
      <div className="prizes-grid">
        {prizes.map((p) => (
          <div
            className={`prize-card${p.featured ? " featured" : ""} reveal`}
            key={p.place}
          >
            <span className="place">{p.place}</span>
            <span className="amount">{p.amount}</span>
            <span className="desc">{p.desc}</span>
          </div>
        ))}
      </div>
      <div className="pill-row reveal">
        <span className="pill">Beginner Friendly</span>
        <span className="pill">Industry Experts as Judges</span>
      </div>
    </section>
  );
}
