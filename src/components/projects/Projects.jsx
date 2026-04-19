"use client";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";

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

function ProjectCard({ project, featured }) {
  const cardStyle = {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: 20,
    overflow: "hidden",
    transition: "transform 0.25s, border-color 0.25s",
    cursor: "pointer",
    display: featured ? "grid" : "block",
    gridTemplateColumns: featured ? "1fr 1fr" : undefined,
  };

  const patternStyle = {
    height: featured ? "100%" : 200,
    background: "var(--bg3)",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderBottom: featured ? "none" : "1px solid var(--border)",
    borderRight: featured ? "1px solid var(--border)" : "none",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.borderColor = "var(--border2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "var(--border)";
      }}
    >
      <div style={patternStyle}>
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }} />
        {project.category === "tech" && (
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(200,245,90,0.04), rgba(90,245,212,0.03))",
          }} />
        )}
        <span style={{
          fontFamily: "var(--font-display)",
          fontSize: 13,
          fontWeight: 600,
          color: "var(--text3)",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          position: "relative",
          zIndex: 1,
        }}>
          {project.title}
        </span>
        <span style={{
          position: "absolute",
          bottom: 12,
          left: 12,
          fontSize: 10,
          fontWeight: 500,
          color: "var(--text2)",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: 6,
          padding: "3px 8px",
          zIndex: 1,
          letterSpacing: "0.04em",
        }}>
          {project.type.split("·")[0].trim()}
        </span>
      </div>

      <div style={{ padding: 24 }}>
        {featured && (
          <div style={{
            display: "inline-block",
            fontSize: 10,
            fontWeight: 500,
            color: "var(--accent)",
            background: "var(--accent-dim)",
            border: "1px solid rgba(200,245,90,0.2)",
            borderRadius: 20,
            padding: "3px 10px",
            marginBottom: 10,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}>
            Featured project
          </div>
        )}
        <p style={{ fontSize: 10, color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>
          {project.type}
        </p>
        <p style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, color: "var(--text)", marginBottom: 8, letterSpacing: "-0.02em" }}>
          {project.title}
        </p>
        <p style={{ fontSize: 13, fontWeight: 300, color: "var(--text2)", lineHeight: 1.7, marginBottom: 16 }}>
          {project.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{
              fontSize: 11,
              color: "var(--text2)",
              background: "var(--bg3)",
              border: "1px solid var(--border)",
              borderRadius: 5,
              padding: "3px 9px",
            }}>
              {tag}
            </span>
          ))}
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          {project.github && (
            <a href={project.github} style={{ fontSize: 12, fontWeight: 500, color: "var(--accent)", textDecoration: "none" }}>
              GitHub
            </a>
          )}
          {project.live && (
            <a href={project.live} style={{ fontSize: 12, fontWeight: 500, color: "var(--accent)", textDecoration: "none" }}>
              Live site
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const sectionRef = useRef(null);
  useFadeUp(sectionRef);

  const filters = ["all", "tech", "creative"];

  const filtered = projects.filter((p) =>
    activeFilter === "all" ? true : p.category === activeFilter
  );

  const featured = filtered.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      style={{
        padding: "100px 48px",
        background: "var(--bg2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          ref={sectionRef}
          style={{ opacity: 0, transform: "translateY(24px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 24, height: 1, background: "var(--accent)" }} />
            <span style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 500 }}>
              Projects
            </span>
          </div>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)", lineHeight: 1.05, marginBottom: 16 }}>
            Work I am proud of.
          </h2>

          <p style={{ fontSize: 16, fontWeight: 300, color: "var(--text2)", maxWidth: 580, lineHeight: 1.7, marginBottom: 40 }}>
            Case studies, not just screenshots. Here is the thinking behind the builds.
          </p>

          <div style={{ display: "flex", gap: 8, marginBottom: 48, flexWrap: "wrap" }}>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  fontSize: 12,
                  fontWeight: activeFilter === f ? 500 : 400,
                  color: activeFilter === f ? "var(--bg)" : "var(--text2)",
                  background: activeFilter === f ? "var(--accent)" : "transparent",
                  border: activeFilter === f ? "1px solid var(--accent)" : "1px solid var(--border)",
                  borderRadius: 20,
                  padding: "6px 16px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  textTransform: "capitalize",
                }}
              >
                {f === "all" ? "All work" : f === "tech" ? "Web & software" : "Creative"}
              </button>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {featured && (
              <ProjectCard project={featured} featured={true} />
            )}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {rest.map((project) => (
                <ProjectCard key={project.slug} project={project} featured={false} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}