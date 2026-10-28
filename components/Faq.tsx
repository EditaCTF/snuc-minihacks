"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (i: number) => setActiveIndex(activeIndex === i ? null : i);

  return (
    <section className="section on-day" id="faq">
      <h2 className="section-heading reveal">FAQs</h2>
      <div className="faq-container">
        {faqs.map((item, i) => {
          const isOpen = activeIndex === i;
          // The reveal lives on a wrapper: React rewrites this item's className
          // on toggle, which would wipe the observer-added "revealed" class.
          return (
            <div key={item.q} className="reveal">
              <div className={`faq-item${isOpen ? " active" : ""}`}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className="toggle">{isOpen ? "−" : "+"}</span>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-wrap">
                    <div className="faq-answer-inner">{item.a}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
