"use client";

import { useState } from "react";
import JoteIcon from "./JoteIcon";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !company) return;
    setLoading(true);
    setTimeout(() => {
      console.log("JoteAI waitlist payload:", { email, company, timestamp: new Date().toISOString() });
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section style={{
      position: "relative",
      padding: "110px 24px",
      overflow: "hidden",
      background: "var(--bg2)",
    }}>
      {/* Gradient backdrop */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(139,92,246,0.18) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        top: "20%",
        right: "-5%",
        width: 500,
        height: 500,
        background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>

        {/* Label */}
        <span style={{
          display: "inline-block",
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: "0.08em",
          color: "var(--violet-light)",
          textTransform: "uppercase",
          marginBottom: 20,
        }}>
          Últimos cupos
        </span>

        <h2 style={{
          fontSize: 44,
          fontWeight: 700,
          letterSpacing: "-0.04em",
          color: "#F4F4F5",
          marginBottom: 14,
          lineHeight: 1.1,
        }}>
          10 cupos. 4 semanas.<br />
          <span className="emerald-text">Después subimos el precio.</span>
        </h2>
        <p style={{ fontSize: 16, color: "#A1A1AA", marginBottom: 44, lineHeight: 1.6 }}>
          Entra ahora y recibe tu reporte antes de que la beta esté lista.
        </p>

        {submitted ? (
          <div style={{
            background: "rgba(139,92,246,0.08)",
            border: "1px solid rgba(139,92,246,0.3)",
            borderRadius: 20,
            padding: "40px 32px",
          }}>
            <div style={{ marginBottom: 14, display: "flex", justifyContent: "center" }}>
              <JoteIcon size={48} />
            </div>
            <h3 style={{ fontSize: 22, fontWeight: 700, color: "#F4F4F5", marginBottom: 10 }}>¡Cupo reservado!</h3>
            <p style={{ color: "#A1A1AA", fontSize: 16, lineHeight: 1.65 }}>
              Te contactamos en las próximas 24 horas para coordinar el pago vía WebPay y empezar tu reporte.
            </p>
          </div>
        ) : (
          <form
            id="waitlist-form"
            onSubmit={handleSubmit}
            className="cta-form"
            style={{ display: "flex", gap: 10, flexWrap: "wrap" }}
          >
            <input
              className="form-input"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ flex: 1, minWidth: 180, padding: "14px 16px", borderRadius: 12, fontSize: 16 }}
            />
            <input
              className="form-input"
              type="text"
              placeholder="Nombre de tu agencia"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
              style={{ flex: 1, minWidth: 180, padding: "14px 16px", borderRadius: 12, fontSize: 16 }}
            />
            <button
              type="submit"
              className="btn-emerald"
              style={{
                padding: "14px 26px",
                borderRadius: 12,
                fontSize: 15,
                whiteSpace: "nowrap",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                opacity: loading ? 0.85 : 1,
              }}
              disabled={loading}
              aria-busy={loading}
            >
              {loading && (
                <span style={{
                  width: 14,
                  height: 14,
                  border: "2px solid rgba(8,8,12,0.25)",
                  borderTopColor: "#08080C",
                  borderRadius: "50%",
                  display: "inline-block",
                  animation: "spin 0.7s linear infinite",
                }} />
              )}
              {loading ? "Reservando…" : "Reservar mi cupo →"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
