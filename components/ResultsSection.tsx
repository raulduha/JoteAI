const metrics = [
  { value: "20", label: "prospectos", sub: "entregados en 72h" },
  { value: "8%", label: "tasa de respuesta esperada", sub: "vs 2–5% de la industria" },
  { value: "1–2", label: "reuniones agendadas", sub: "primera semana" },
];

export default function ResultsSection() {
  return (
    <section style={{ background: "var(--bg)", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>

        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{
            display: "inline-block",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.08em",
            color: "var(--violet-light)",
            textTransform: "uppercase",
            marginBottom: 16,
          }}>
            Resultados esperados
          </span>
          <h2 style={{ fontSize: 38, fontWeight: 700, letterSpacing: "-0.03em", color: "#F4F4F5", lineHeight: 1.2 }}>
            Lo que esperamos que pase<br />con tu reporte
          </h2>
        </div>

        <div className="metrics-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 24 }}>
          {metrics.map((m, i) => (
            <div key={i} className="metric-card" style={{ padding: "44px 32px", textAlign: "center" }}>
              <div style={{
                fontSize: 60,
                fontWeight: 700,
                letterSpacing: "-0.05em",
                background: "linear-gradient(135deg, #F4F4F5 0%, #A1A1AA 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: 1,
              }}>
                {m.value}
              </div>
              <div style={{ fontSize: 16, fontWeight: 600, color: "#10B981", marginTop: 10, marginBottom: 4 }}>{m.label}</div>
              <div style={{ fontSize: 15, color: "#8B8B9E" }}>{m.sub}</div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", fontSize: 13, color: "#6D6D80" }}>
          Estimaciones basadas en benchmarks de industria. Resultados varían por rubro y mensaje.
        </p>
      </div>
    </section>
  );
}
