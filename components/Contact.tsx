import { contacts } from "@/lib/content";

const formatPhone = (phone: string) =>
  `+91 ${phone.slice(0, 5)} ${phone.slice(5)}`;

export default function Contact() {
  return (
    <section className="section on-day" id="contact">
      <h2 className="section-heading reveal">More Doubts? Contact Us</h2>
      <div className="contact-grid">
        {contacts.map((c) => (
          <a
            className="contact-card reveal"
            key={c.name}
            href={`https://wa.me/91${c.phone}`}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-name">{c.name}</span>
            <span className="contact-phone">{formatPhone(c.phone)}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
