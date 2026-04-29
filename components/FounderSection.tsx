import Image from "next/image";
import { Linkedin } from "lucide-react";

export default function FounderSection() {
  return (
    <section className="founder-section" style={{ background: "var(--bg2)", padding: "100px 24px" }}>
      <div style={{ maxWidth: 620, margin: "0 auto", textAlign: "center" }}>

        <span style={{
          display: "inline-block",
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: "0.08em",
          color: "var(--violet-light)",
          textTransform: "uppercase",
          marginBottom: 20,
        }}>
          Quiénes somos
        </span>

        <h2 style={{ fontSize: 30, fontWeight: 700, letterSpacing: "-0.03em", color: "#F4F4F5", marginBottom: 40, lineHeight: 1.3 }}>
          Construido por <span className="emerald-text">Korriente</span>, en Santiago
        </h2>

        {/* Avatar */}
        <div style={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          border: "2px solid rgba(139,92,246,0.35)",
          margin: "0 auto 28px",
          overflow: "hidden",
          boxShadow: "0 0 30px rgba(139,92,246,0.25)",
          position: "relative",
          background: "transparent",
        }}>
          <Image
            src="/fotofounder.png"
            alt="Founder"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <p style={{ fontSize: 16, color: "#A1A1AA", lineHeight: 1.75, marginBottom: 16 }}>
          Somos un equipo técnico con años de experiencia construyendo herramientas de automatización y IA para empresas en Chile y
          LATAM. Vimos de primera mano cómo las agencias pierden semanas enteras en tareas que una máquina puede hacer en minutos.
        </p>
        <p style={{ fontSize: 16, color: "#A1A1AA", lineHeight: 1.75, marginBottom: 32 }}>
          JoteAI nació de esa frustración. El jote no desperdicia energía — detecta la oportunidad exacta y va directo. Eso es lo que hacemos por ti.
        </p>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="linkedin-link"
        >
          <Linkedin size={16} />
          Ver en LinkedIn
        </a>
      </div>
    </section>
  );
}
