"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 200);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "120px 48px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background blobs */}
      <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "rgba(200,245,90,0.04)", filter: "blur(100px)", top: -100, right: -100, pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "rgba(90,245,212,0.03)", filter: "blur(100px)", bottom: 0, left: 200, pointerEvents: "none" }} />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: 80, alignItems: "center", width: "100%", maxWidth: 1200, margin: "0 auto" }}>

        {/* Left — main copy */}
        <div>
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", animation: "pulse 2s infinite" }} />
            <span style={{ fontSize: 12, color: "var(--text2)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Available for freelance — Quezon City, PH
            </span>
          </div>

          {/* Headline */}
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(44px, 6vw, 76px)", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-0.04em", color: "var(--text)", marginBottom: 28 }}>
            I build<br />
            <span style={{ color: "var(--accent)" }}>scalable systems</span>
            <br />
            <span style={{ color: "var(--text2)", fontWeight: 700 }}>and make them shine.</span>
          </h1>

          {/* Sub */}
          <p style={{ fontSize: 16, fontWeight: 300, color: "var(--text2)", lineHeight: 1.7, maxWidth: 500, marginBottom: 40 }}>
            Full-stack developer with enterprise IT roots — and a creative side.
            From <strong style={{ color: "var(--text)", fontWeight: 500 }}>MERN stack apps</strong> to{" "}
            <strong style={{ color: "var(--text)", fontWeight: 500 }}>product photography</strong>,
            I help businesses build digital products that actually work.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 48 }}>
            <Link href="#projects" style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 500, color: "var(--bg)", background: "var(--accent)", borderRadius: 40, padding: "13px 28px", textDecoration: "none", transition: "background 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accent2)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--accent)")}
            >
              See my work
            </Link>
            <Link href="#contact" style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 400, color: "var(--text)", background: "transparent", border: "1px solid var(--border2)", borderRadius: 40, padding: "13px 28px", textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--surface)"; e.currentTarget.style.borderColor = "var(--text2)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "var(--border2)"; }}
            >
              Let&apos;s talk
            </Link>
            <a href="/cv.pdf" download style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 400, color: "var(--text)", background: "transparent", border: "1px solid var(--border2)", borderRadius: 40, padding: "13px 28px", textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--surface)"; e.currentTarget.style.borderColor = "var(--text2)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "var(--border2)"; }}
            >
              Download CV
            </a>
          </div>

          {/* Pills */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["MERN Stack", "REST APIs", "IT Support L1–L2", "QA Testing", "Video Editing", "Photography", "Graphic Design"].map((skill) => (
              <span key={skill} style={{ fontSize: 11, color: "var(--text2)", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 20, padding: "5px 12px" }}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Right — card */}
        <div
          ref={cardRef}
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 20,
            padding: 32,
            opacity: 0,
            transform: "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          {/* Avatar */}
          <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--accent-dim)", border: "2px solid rgba(200,245,90,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 800, color: "var(--accent)", marginBottom: 16 }}>
            D
          </div>
          <p style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, color: "var(--text)", marginBottom: 2 }}>Dru</p>
          <p style={{ fontSize: 13, color: "var(--text2)", marginBottom: 24 }}>Full-Stack Developer · IT Specialist · Creative</p>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
            {[
              { num: "3+", label: "Years enterprise IT" },
              { num: "PUP", label: "High distinction" },
              { num: "5+", label: "Enterprise tools" },
              { num: "2-in-1", label: "Tech + Creative" },
            ].map((stat) => (
              <div key={stat.label} style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderRadius: 12, padding: 14 }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 800, color: "var(--accent)", lineHeight: 1, marginBottom: 3 }}>{stat.num}</div>
                <div style={{ fontSize: 11, color: "var(--text2)" }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Status */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(90,245,212,0.07)", border: "1px solid rgba(90,245,212,0.15)", borderRadius: 10, padding: "10px 14px" }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--teal)", animation: "pulse 2s infinite" }} />
            <span style={{ fontSize: 12, color: "var(--teal)" }}>Open to freelance & full-time roles</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.7); }
        }
      `}</style>
    </section>
  );
}