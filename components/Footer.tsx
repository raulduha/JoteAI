import JoteIcon from "./JoteIcon";

export default function Footer() {
  return (
    <footer style={{
      background: "var(--bg)",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "40px 24px",
    }}>
      <div
        className="footer-inner"
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <JoteIcon size={24} />
          <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: "-0.03em", color: "#F4F4F5" }}>
            Jote<span style={{ color: "#10B981" }}>AI</span>
          </span>
          <span style={{ fontSize: 13, color: "#6D6D80", marginLeft: 8 }}>· Prospección B2B con IA para LATAM</span>
        </div>

        <div className="footer-links" style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
          <a href="#" className="footer-link">Privacidad</a>
          <a href="#" className="footer-link">Términos</a>
          <a href="mailto:hola@joteai.cl" className="footer-link">Contacto</a>
          <span style={{ fontSize: 13, color: "#3F3F46" }}>Hecho en Chile · 2026</span>
        </div>
      </div>
    </footer>
  );
}
