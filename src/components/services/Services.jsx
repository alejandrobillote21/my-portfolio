"use client";
import { useEffect, useRef, useState } from "react";
import { techServices, creativeServices } from "@/data/services";

function useFadeUp(ref) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
}

function TechCard({ svc }) {
  const cardStyle = {
    background: "var(--surface)",
    border: svc.featured
      ? "1px solid rgba(200,245,90,0.3)"
      : "1px solid var(--border)",
    borderRadius: 16,
    padding: "28px 24px",
    position: "relative",
    transition: "transform 0.2s",
    display: "flex",
    flexDirection: "column",
  };

  const linkStyle = {
    display: "block",
    textAlign: "center",
    fontSize: 12,
    fontWeight: 500,
    textDecoration: "none",
    padding: "8px",
    borderRadius: 8,
    transition: "all 0.2s",
    marginTop: "auto",
    color: svc.featured ? "var(--bg)" : "var(--text2)",
    background: svc.featured ? "var(--accent)" : "transparent",
    border: svc.featured ? "1px solid var(--accent)" : "1px solid var(--border)",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {svc.featured && (
        <div
          style={{
            display: "inline-block",
            fontSize: 10,
            fontWeight: 500,
            color: "var(--accent)",
            background: "var(--accent-dim)",
            border: "1px solid rgba(200,245,90,0.2)",
            borderRadius: 20,
            padding: "3px 10px",
            marginBottom: 14,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            width: "fit-content",
          }}
        >
          Most popular
        </div>
      )}

      <p style={{ fontSize: 10, color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>
        {svc.tier}
      </p>
      <p style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "var(--text)", marginBottom: 6 }}>
        {svc.name}
      </p>
      <p style={{ fontSize: 13, color: "var(--accent)", marginBottom: 16, fontWeight: 500 }}>
        {svc.price}
      </p>

      <ul style={{ listStyle: "none", marginBottom: 20 }}>
        {svc.features.map((f) => (
          <li
            key={f}
            style={{ fontSize: 13, color: "var(--text2)", padding: "5px 0", display: "flex", gap: 8, lineHeight: 1.4 }}
          >
            <span style={{ color: "var(--text3)", flexShrink: 0 }}>-</span>
            {f}
          </li>
        ))}
      </ul>

      <a href="#contact" style={linkStyle}>
        Get started
      </a>
    </div>
  );
}

function CreativeCard({ svc, color }) {
  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: 16,
        padding: "28px 24px",
        transition: "transform 0.2s, border-color 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.borderColor = "var(--border2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "var(--border)";
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          background: color.bg,
          border: "1px solid " + color.border,
          marginBottom: 14,
        }}
      />
      <p style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "var(--text)", marginBottom: 6 }}>
        {svc.name}
      </p>
      <p style={{ fontSize: 13, color: color.text, marginBottom: 12, fontWeight: 500 }}>
        {svc.price}
      </p>
      <p style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.6 }}>
        {svc.description}
      </p>
    </div>
  );
}

export default function Services() {
  const [activeTab, setActiveTab] = useState("tech");
  const sectionRef = useRef(null);
  useFadeUp(sectionRef);

  const creativeColors = [
    { bg: "var(--coral-dim)", border: "rgba(245,144,90,0.2)", text: "var(--coral)" },
    { bg: "var(--teal-dim)", border: "rgba(90,245,212,0.2)", text: "var(--teal)" },
    { bg: "var(--accent-dim)", border: "rgba(200,245,90,0.2)", text: "var(--accent)" },
  ];

  return (
    <section id="services" style={{ padding: "100px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          ref={sectionRef}
          style={{
            opacity: 0,
            transform: "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 24, height: 1, background: "var(--accent)" }} />
            <span style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 500 }}>
              Services
            </span>
          </div>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)", lineHeight: 1.05, marginBottom: 16 }}>
            What I can build
            <br />
            for you.
          </h2>

          <p style={{ fontSize: 16, fontWeight: 300, color: "var(--text2)", maxWidth: 580, lineHeight: 1.7, marginBottom: 40 }}>
            From a clean landing page to a full production system and the visuals to go with it.
          </p>

          <div
            style={{
              display: "flex",
              border: "1px solid var(--border)",
              borderRadius: 40,
              padding: 4,
              width: "fit-content",
              marginBottom: 48,
            }}
          >
            {["tech", "creative"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  fontWeight: activeTab === tab ? 500 : 400,
                  color: activeTab === tab ? "var(--bg)" : "var(--text2)",
                  background: activeTab === tab ? "var(--accent)" : "transparent",
                  border: "none",
                  borderRadius: 36,
                  padding: "8px 22px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {tab === "tech" ? "Web & software" : "Creative & media"}
              </button>
            ))}
          </div>

          {activeTab === "tech" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
              {techServices.map((svc) => (
                <TechCard key={svc.tier} svc={svc} />
              ))}
            </div>
          )}

          {activeTab === "creative" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {creativeServices.map((svc, i) => (
                <CreativeCard key={svc.name} svc={svc} color={creativeColors[i]} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}