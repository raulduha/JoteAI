import { Target, Radar, Send } from "lucide-react";

const steps = [
  {
    num: "01",
    Icon: Target,
    title: "Cuéntanos a quién buscas",
    desc: "Defines el perfil de empresa y cliente ideal: rubro, tamaño, zona. Cinco minutos de onboarding.",
  },
  {
    num: "02",
    Icon: Radar,
    title: "JoteAI rastrea el mercado",
    desc: "Buscamos en bases de datos LATAM, LinkedIn y la web para encontrar los prospectos que más califican.",
  },
  {
    num: "03",
    Icon: Send,
    title: "Recibes prospectos + propuestas",
    desc: "Un reporte listo para enviar, con datos de contacto y propuesta personalizada por cada prospecto.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" style={{ background: "var(--bg)", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <span style={{
            display: "inline-block",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.08em",
            color: "var(--violet-light)",
            textTransform: "uppercase",
            marginBottom: 16,
          }}>
            Cómo funciona
          </span>
          <h2 style={{ fontSize: 38, fontWeight: 700, letterSpacing: "-0.03em", color: "#F4F4F5", marginBottom: 12 }}>
            3 pasos. 5 minutos.
          </h2>
          <p style={{ fontSize: 18, color: "#A1A1AA" }}>Prospectos calientes en bandeja.</p>
        </div>

        <div className="steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, position: "relative" }}>
          {/* Connector */}
          <div style={{
            position: "absolute",
            top: 56,
            left: "22%",
            right: "22%",
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.35), transparent)",
            pointerEvents: "none",
          }} />

          {steps.map(({ num, Icon, title, desc }, i) => (
            <div key={i} className="step-card" style={{ padding: "36px 28px" }}>
              <div style={{
                fontSize: 48,
                fontWeight: 700,
                color: "rgba(139,92,246,0.40)",
                letterSpacing: "-0.04em",
                lineHeight: 1,
                marginBottom: 16,
              }}>
                {num}
              </div>
              <div style={{
                width: 40,
                height: 40,
                background: "rgba(139,92,246,0.1)",
                border: "1px solid rgba(139,92,246,0.25)",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 16,
              }}>
                <Icon size={18} color="#A78BFA" strokeWidth={1.8} />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: "#F8FAFC", marginBottom: 10, letterSpacing: "-0.02em", lineHeight: 1.4 }}>
                {title}
              </h3>
              <p style={{ fontSize: 16, color: "#A1A1AA", lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
