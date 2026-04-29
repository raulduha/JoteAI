"use client";

import { useState, useEffect } from "react";
import JoteIcon from "./JoteIcon";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(8,8,12,0.85)" : "rgba(8,8,12,0.5)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: `1px solid ${scrolled ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.03)"}`,
        transition: "background 0.3s ease, border-color 0.3s ease",
        padding: "0 24px",
      }}
    >
      <div style={{
        maxWidth: 1140,
        margin: "0 auto",
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
          <JoteIcon size={30} />
          <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.03em", color: "#F4F4F5" }}>
            Jote<span style={{ color: "#10B981" }}>AI</span>
          </span>
        </div>

        {/* Nav links */}
        <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <button className="nav-link" onClick={() => scrollTo("como-funciona")} style={{ background: "none", border: "none" }}>
            Cómo funciona
          </button>
          <button className="nav-link" onClick={() => scrollTo("precio")} style={{ background: "none", border: "none" }}>
            Precio
          </button>
          <button className="nav-link" onClick={() => scrollTo("faq")} style={{ background: "none", border: "none" }}>
            FAQ
          </button>
        </div>

        {/* CTA */}
        <button
          className="btn-emerald"
          style={{ padding: "9px 20px", borderRadius: 10, fontSize: 15 }}
          onClick={() => document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth", block: "center" })}
        >
          Únete al waitlist
        </button>
      </div>
    </nav>
  );
}
