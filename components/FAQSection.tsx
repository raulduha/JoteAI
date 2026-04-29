"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Por qué USD 50 si todavía no tienen producto?",
    a: "Exactamente por eso. Estamos en fase de validación y queremos que los primeros 10 clientes sean reales, no teóricos. El reporte lo hacemos a mano con criterio humano — eso tiene valor inmediato, aunque la automatización venga después. USD 50 cubre el costo del trabajo y nos ayuda a validar que el problema vale la pena resolver a escala.",
  },
  {
    q: "¿Qué tipo de empresas funcionan mejor con JoteAI?",
    a: "Agencias de marketing digital, consultoras B2B, agencias de ventas y empresas de servicios que venden a PYMEs en Chile y LATAM. Si tienes un ticket promedio sobre $500K CLP y prospectas manualmente, JoteAI es para ti.",
  },
  {
    q: "¿Qué pasa con los datos de los prospectos? ¿Es legal?",
    a: "Usamos únicamente información pública disponible en LinkedIn, sitios web corporativos y directorios de empresa. No accedemos a datos privados. Cumplimos con la Ley 19.628 de Protección de Datos Personales de Chile.",
  },
  {
    q: "¿Cuándo estará lista la versión automatizada?",
    a: "Proyectamos lanzar la beta cerrada en Q3 2026. Los 10 primeros inscritos tienen acceso preferencial a precio early adopter — sin compromisos adicionales. Te avisamos antes que a nadie.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section id="faq" style={{ background: "var(--bg)", padding: "100px 24px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <span style={{
            display: "inline-block",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.08em",
            color: "var(--violet-light)",
            textTransform: "uppercase",
            marginBottom: 16,
          }}>
            FAQ
          </span>
          <h2 style={{ fontSize: 34, fontWeight: 700, letterSpacing: "-0.03em", color: "#F4F4F5" }}>
            Preguntas frecuentes
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: "var(--bg3)",
                border: `1px solid ${open === i ? "rgba(139,92,246,0.50)" : "rgba(255,255,255,0.12)"}`,
                borderRadius: 14,
                overflow: "hidden",
                transition: "border-color 0.2s",
              }}
            >
              <button
                onClick={() => toggle(i)}
                style={{
                  width: "100%",
                  padding: "20px 24px",
                  background: "none",
                  border: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: 16,
                  fontFamily: "inherit",
                }}
              >
                <span style={{ fontSize: 16, fontWeight: 600, color: "#F8FAFC", letterSpacing: "-0.01em" }}>{faq.q}</span>
                <div style={{ transform: open === i ? "rotate(180deg)" : "none", transition: "transform 0.3s", flexShrink: 0 }}>
                  <ChevronDown size={18} color={open === i ? "#A78BFA" : "#6D6D80"} />
                </div>
              </button>
              <div className={`faq-content ${open === i ? "open" : ""}`}>
                <p style={{ padding: "0 24px 22px", fontSize: 16, color: "#A1A1AA", lineHeight: 1.75 }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
