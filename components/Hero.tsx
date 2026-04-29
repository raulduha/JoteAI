"use client";

import { useState, useEffect } from "react";
import { ShieldCheck } from "lucide-react";
import JoteIcon from "./JoteIcon";
import DashboardMockup from "./DashboardMockup";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  const scrollTo = (id: string, block: ScrollLogicalPosition = "start") => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block });
  };

  return (
    <section
      className="noise-bg dot-grid"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: 80,
        overflow: "hidden",
        background: "var(--bg)",
      }}
    >
      {/* Violet glow */}
      <div style={{
        position: "absolute",
        top: "-10%",
        left: "30%",
        width: 700,
        height: 700,
        background: "radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />
      {/* Emerald glow */}
      <div style={{
        position: "absolute",
        top: "30%",
        left: "55%",
        width: 500,
        height: 500,
        background: "radial-gradient(circle, rgba(16,185,129,0.10) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "64px 24px", width: "100%", position: "relative", zIndex: 1 }}>
        <div
          className="hero-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}
        >
          {/* Left: copy */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(32px)",
              transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            {/* Badge */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(139,92,246,0.08)",
              border: "1px solid rgba(139,92,246,0.25)",
              borderRadius: 100,
              padding: "6px 14px",
              marginBottom: 28,
            }}>
              <div style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#A78BFA",
                animation: "pulse-emerald 2s infinite",
              }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: "#A78BFA", letterSpacing: "0.04em" }}>
                LANZAMIENTO 2026 · CUPOS LIMITADOS
              </span>
            </div>

            {/* Headline */}
            <div style={{ marginBottom: 28 }}>
              <div
                className="hero-headline"
                style={{
                  fontSize: 58,
                  fontWeight: 700,
                  lineHeight: 1.08,
                  letterSpacing: "-0.04em",
                  color: "#F4F4F5",
                  display: "block",
                }}
              >
                Encuentra clientes
              </div>
              <div
                className="hero-headline"
                style={{
                  fontSize: 58,
                  fontWeight: 700,
                  lineHeight: 1.08,
                  letterSpacing: "-0.04em",
                  background: "linear-gradient(135deg, #10B981 0%, #34D399 50%, #10B981 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "block",
                  paddingBottom: 4,
                }}
              >
                mientras duermes
              </div>
            </div>

            {/* Subhead */}
            <p style={{ fontSize: 18, lineHeight: 1.65, color: "#A1A1AA", marginBottom: 36, maxWidth: 480, fontWeight: 400 }}>
              JoteAI prospecta empresas, escribe propuestas en español y te las entrega listas para enviar.{" "}
              <span style={{ color: "#F4F4F5" }}>Sin contratar vendedores.</span>
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 20 }}>
              <button
                className="btn-emerald animate-pulse-emerald-3s"
                style={{ padding: "14px 26px", borderRadius: 12, fontSize: 15 }}
                onClick={() => scrollTo("oferta")}
              >
                Quiero mi reporte — USD 50
              </button>
              <button
                className="btn-outline"
                style={{ padding: "14px 22px", borderRadius: 12, fontSize: 15 }}
                onClick={() => scrollTo("como-funciona")}
              >
                Ver cómo funciona →
              </button>
            </div>

            {/* Microcopy */}
            <p style={{ fontSize: 13, color: "#8B8B9E", display: "flex", alignItems: "center", gap: 6 }}>
              <ShieldCheck size={14} color="#8B8B9E" />
              Solo 10 cupos · Pago seguro vía WebPay
            </p>
          </div>

          {/* Right: Dashboard Mockup */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateY(48px)",
              transition: "all 1s cubic-bezier(0.16,1,0.3,1) 0.2s",
            }}
            className={visible ? "animate-float" : ""}
          >
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
