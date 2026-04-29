"use client";

import { useState } from "react";

const prospects = [
  { name: "Agencia Pixel Norte", industry: "E-commerce", score: 92, contact: "Felipe Muñoz", status: "Listo para enviar" },
  { name: "DigitalMind SPA", industry: "Retail", score: 87, contact: "Valentina Lagos", status: "Listo para enviar" },
  { name: "Grupo Creativo Sur", industry: "Inmobiliario", score: 81, contact: "Andrés Pérez", status: "En revisión" },
  { name: "MediaBoost Chile", industry: "Salud", score: 76, contact: "Camila Rojas", status: "Listo para enviar" },
  { name: "Konexión Digital", industry: "Educación", score: 71, contact: "Diego Vargas", status: "En revisión" },
];

export default function DashboardMockup() {
  const [active, setActive] = useState(0);

  return (
    <div className="mockup-browser">
      {/* Browser bar */}
      <div className="mockup-bar">
        <div className="dot" style={{ background: "#EF4444" }} />
        <div className="dot" style={{ background: "#F59E0B" }} />
        <div className="dot" style={{ background: "#22C55E" }} />
        <div style={{
          flex: 1,
          background: "rgba(255,255,255,0.04)",
          borderRadius: 5,
          height: 24,
          display: "flex",
          alignItems: "center",
          paddingLeft: 10,
          marginLeft: 8,
          border: "1px solid rgba(255,255,255,0.10)",
        }}>
          <span style={{ fontSize: 13, color: "#8B8B9E", fontFamily: "monospace" }}>app.joteai.cl/dashboard</span>
        </div>
      </div>

      {/* Dashboard content */}
      <div style={{ padding: "20px 20px 16px", background: "var(--bg)" }}>
        {/* Header row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <div>
            <div style={{ fontSize: 13, color: "#8B8B9E", marginBottom: 4, letterSpacing: "0.05em", textTransform: "uppercase", fontWeight: 600 }}>
              Campaña activa
            </div>
            <div style={{ fontSize: 15, fontWeight: 600, color: "#F8FAFC", letterSpacing: "-0.02em" }}>
              Agencias Ecommerce · Santiago
            </div>
          </div>
          <div style={{
            background: "rgba(139,92,246,0.1)",
            border: "1px solid rgba(139,92,246,0.30)",
            borderRadius: 6,
            padding: "5px 12px",
            fontSize: 13,
            fontWeight: 600,
            color: "#A78BFA",
          }}>
            5 prospectos
          </div>
        </div>

        {/* Prospect rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
          {prospects.map((p, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              style={{
                background: active === i ? "rgba(139,92,246,0.1)" : "rgba(255,255,255,0.03)",
                border: `1px solid ${active === i ? "rgba(139,92,246,0.40)" : "rgba(255,255,255,0.10)"}`,
                borderRadius: 8,
                padding: "11px 13px",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#F8FAFC", letterSpacing: "-0.01em" }}>{p.name}</div>
                  <div style={{ fontSize: 12, color: "#8B8B9E", marginTop: 2 }}>
                    {p.contact} · {p.industry}
                  </div>
                </div>
                <div style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: p.score >= 85 ? "#10B981" : p.score >= 75 ? "#A78BFA" : "#8B8B9E",
                  background: p.score >= 85
                    ? "rgba(16,185,129,0.12)"
                    : p.score >= 75
                    ? "rgba(139,92,246,0.12)"
                    : "rgba(139,139,158,0.12)",
                  padding: "3px 8px",
                  borderRadius: 4,
                }}>
                  {p.score}
                </div>
              </div>

              {/* Score bar */}
              <div style={{ height: 3, background: "rgba(255,255,255,0.08)", borderRadius: 2 }}>
                <div className="score-bar-fill" style={{ width: `${p.score}%` }} />
              </div>

              {active === i && (
                <div style={{
                  marginTop: 9,
                  fontSize: 12,
                  color: "#A1A1AA",
                  background: "rgba(255,255,255,0.03)",
                  borderRadius: 5,
                  padding: "8px 10px",
                  borderLeft: "2px solid #8B5CF6",
                  display: "flex",
                  gap: 7,
                  alignItems: "flex-start",
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
                    <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
                  </svg>
                  <span>&quot;Hola {p.contact}, vi que {p.name} trabaja con e-commerce en la región y creo que podemos ayudarlos a…&quot;</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer status */}
        <div style={{ marginTop: 13, display: "flex", justifyContent: "space-between", fontSize: 12, color: "#8B8B9E" }}>
          <span style={{ color: "#8B5CF6" }}>● Sincronizando datos LATAM</span>
          <span>Actualizado hace 2 min</span>
        </div>
      </div>
    </div>
  );
}
