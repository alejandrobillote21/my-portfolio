"use client";
import { useEffect, useRef } from "react";
import { timeline, techSkills, creativeSkills } from "@/data/skills";

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

export default function About() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  useFadeUp(leftRef);
  useFadeUp(rightRef);

  const fadeStyle = {
    opacity: 0,
    transform: "translateY(24px)",
    transition: "opacity 0.6s ease, transform 0.6s ease",
  };

  return (
    <section
      id="about"
      style={{
        padding: "100px 48px",
        background: "var(--bg2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>

        <div ref={leftRef} style={fadeStyle}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 24, height: 1, background: "var(--accent)" }} />
            <span style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 500 }}>About me</span>
          </div>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)", lineHeight: 1.05, marginBottom: 20 }}>
            The dev who<br />knows the inside.
          </h2>

          <p style={{ fontSize: 15, fontWeight: 300, color: "var(--text2)", lineHeight: 1.8, marginBottom: 16 }}>
            I am a detail-oriented ICT graduate from the Polytechnic University of the Philippines with a background in{" "}
            <strong style={{ color: "var(--text)", fontWeight: 500 }}>full-stack web development, enterprise IT support, and creative production</strong>.
          </p>

          <blockquote style={{ borderLeft: "2px solid var(--accent)", paddingLeft: 20, margin: "28px 0", fontSize: 16, fontStyle: "italic", color: "var(--text)", fontWeight: 300, lineHeight: 1.7 }}>
            Most developers learn about enterprise software from tutorials. I learned it by living inside it and that makes me a better engineer.
          </blockquote>

          <p style={{ fontSize: 15, fontWeight: 300, color: "var(--text2)", lineHeight: 1.8, marginBottom: 32 }}>
            At Sourcefit, I manage IT service desk operations, Active Directory, and enterprise tools like SAP, Salesforce, and Microsoft 365. Outside of that, I build web applications, shoot product photos, and coach{" "}
            <strong style={{ color: "var(--text)", fontWeight: 500 }}>Muay Thai</strong> on a freelance basis.
          </p>

          <p style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text3)", marginBottom: 12, fontWeight: 500 }}>Technical</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
            {techSkills.map((skill) => (
              <span
                key={skill}
                style={{
                  fontSize: 12,
                  color: ["MongoDB", "Express.js", "React.js", "Node.js"].includes(skill) ? "var(--accent)" : "var(--text2)",
                  background: ["MongoDB", "Express.js", "React.js", "Node.js"].includes(skill) ? "var(--accent-dim)" : "var(--surface)",
                  border: ["MongoDB", "Express.js", "React.js", "Node.js"].includes(skill) ? "1px solid rgba(200,245,90,0.2)" : "1px solid var(--border)",
                  borderRadius: 6,
                  padding: "5px 12px",
                }}
              >
                {skill}
              </span>
            ))}
          </div>

          <p style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text3)", marginBottom: 12, fontWeight: 500 }}>Creative</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {creativeSkills.map((skill) => (
              <span key={skill} style={{ fontSize: 12, color: "var(--text2)", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 6, padding: "5px 12px" }}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div ref={rightRef} style={{ ...fadeStyle, transitionDelay: "0.15s" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text3)", marginBottom: 20, fontWeight: 500 }}>Career timeline</p>

          <div style={{ position: "relative", paddingLeft: 24 }}>
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 1, background: "var(--border2)" }} />

            {timeline.map((item, i) => (
              <div key={i} style={{ position: "relative", paddingBottom: i === timeline.length - 1 ? 0 : 32 }}>
                <div style={{
                  position: "absolute",
                  left: -28,
                  top: 5,
                  width: 9, height: 9,
                  borderRadius: "50%",
                  background: item.active ? "var(--accent)" : "var(--surface2)",
                  border: item.active ? "1.5px solid var(--accent)" : "1.5px solid var(--border2)",
                  boxShadow: item.active ? "0 0 8px rgba(200,245,90,0.4)" : "none",
                }} />
                <p style={{ fontSize: 11, color: "var(--text3)", letterSpacing: "0.06em", marginBottom: 3 }}>{item.year}</p>
                <p style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "var(--text)", marginBottom: 2 }}>{item.role}</p>
                <p style={{ fontSize: 13, color: "var(--text2)" }}>{item.company}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
