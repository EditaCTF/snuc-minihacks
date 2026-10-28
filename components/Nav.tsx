"use client";

import { type CSSProperties, useState } from "react";
import { REGISTER_URL } from "@/lib/content";

const links = [
  { href: "#details", label: "Details" },
  { href: "#timeline", label: "Timeline" },
  { href: "#why", label: "Why Join" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

// --i staggers each item's entrance in the mobile bottom sheet.
const stagger = (i: number) => ({ "--i": i }) as CSSProperties;

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className={`nav${open ? " menu-open" : ""}`}>
      {/* Mobile only: dims the page behind the sheet; tapping it closes. */}
      <button
        type="button"
        className="nav-scrim"
        onClick={close}
        aria-label="Close menu"
        tabIndex={-1}
      />
      {/* Mobile only: a mirror of the logo notch in the top-right corner. */}
      <button
        type="button"
        className="notch notch--right menu-toggle"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        <span className="notch-burger" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>
      <ul className="nav-links">
        {links.map((l, i) => (
          <li key={l.href} style={stagger(i)}>
            <a href={l.href} onClick={close}>
              {l.label}
            </a>
          </li>
        ))}
        <li style={stagger(links.length)}>
          <a
            href={REGISTER_URL}
            className="nav-register"
            target="_blank"
            rel="noreferrer"
            onClick={close}
          >
            Register
          </a>
        </li>
      </ul>
    </nav>
  );
}
