import { Clock, FileX, TrendingUp } from "lucide-react";

const problems = [
  {
    Icon: Clock,
    title: "5 horas a la semana en LinkedIn buscando clientes",
    desc: "Tiempo que podrías estar cerrando tratos o creando campañas, perdido en búsquedas manuales sin sistema.",
  },
  {
    Icon: FileX,
    title: "Propuestas genéricas que nadie responde",
    desc: "Copiar y pegar plantillas con el nombre cambiado ya no funciona. Los prospectos lo notan de inmediato.",
  },
  {
    Icon: TrendingUp,
    title: "Contratar un vendedor cuesta $2M CLP/mes mínimo",
    desc: "Con sueldo, comisiones y tiempo de onboarding, es una apuesta enorme para una agencia pequeña.",
  },
];

export default function ProblemSection() {
  return (
    <section style={{ background: "var(--bg2)", padding: "100px 24px", position: "relative" }}>
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
            El problema
          </span>
          <h2 style={{ fontSize: 38, fontWeight: 700, letterSpacing: "-0.03em", color: "#F4F4F5", lineHeight: 1.15 }}>
            Si esto te suena familiar,<br />
            <span className="emerald-text">JoteAI es para ti</span>
          </h2>
        </div>

        <div className="problem-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {problems.map(({ Icon, title, desc }, i) => (
            <div key={i} className="problem-card" style={{ padding: "32px 28px" }}>
              <div style={{
                width: 44,
                height: 44,
                background: "rgba(16,185,129,0.08)",
                border: "1px solid rgba(16,185,129,0.2)",
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 20,
              }}>
                <Icon size={20} color="#10B981" strokeWidth={1.8} />
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 600, color: "#F8FAFC", lineHeight: 1.45, marginBottom: 10, letterSpacing: "-0.02em" }}>
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
