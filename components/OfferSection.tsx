"use client";

import { Check, Lock } from "lucide-react";

const checks = [
  "20 prospectos calificados de tu rubro y zona",
  "Datos de contacto verificados (email + LinkedIn)",
  "Propuesta comercial personalizada por prospecto",
  "Email de primer contacto listo para enviar",
  "Entrega en 72 horas",
];

export default function OfferSection({ cuposLeft = 7 }: { cuposLeft?: number }) {
  const scrollToForm = () => {
    document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section id="oferta" style={{ background: "var(--bg2)", padding: "100px 24px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div id="precio" className="offer-section" style={{ padding: "60px 52px" }}>

          {/* Badge */}
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <span className="counter-badge">
              <div className="live-dot" />
              {cuposLeft} de 10 cupos restantes
            </span>
          </div>

          <h2 style={{
            fontSize: 34,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "#F4F4F5",
            textAlign: "center",
            marginBottom: 14,
            lineHeight: 1.2,
          }}>
            Primeros 10 inscritos:<br />reporte manual esta semana
          </h2>
          <p style={{
            textAlign: "center",
            color: "#A1A1AA",
            fontSize: 15,
            lineHeight: 1.7,
            maxWidth: 520,
            margin: "0 auto 40px",
          }}>
            Mientras construimos JoteAI, te entregamos un reporte hecho a mano con 20 prospectos calificados
            y propuestas personalizadas. USD 50, una sola vez. Lo que aprendas vale 10 veces eso.
          </p>

          {/* Checklist */}
          <div style={{ display: "flex", flexDirection: "column", gap: 13, marginBottom: 44 }}>
            {checks.map((c, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 20,
                  height: 20,
                  background: "rgba(139,92,246,0.12)",
                  border: "1px solid rgba(139,92,246,0.35)",
                  borderRadius: 6,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Check size={12} color="#A78BFA" />
                </div>
                <span style={{ fontSize: 15, color: "#D4D4D8" }}>{c}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center" }}>
            <button
              className="btn-emerald"
              style={{ padding: "16px 40px", borderRadius: 12, fontSize: 16, marginBottom: 14 }}
              onClick={scrollToForm}
            >
              Reservar mi reporte — USD 50
            </button>
            <div style={{ fontSize: 13, color: "#8B8B9E", display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
              <Lock size={11} color="#8B8B9E" />
              Pago seguro vía WebPay · Sin suscripción
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
