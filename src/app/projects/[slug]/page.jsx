import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

export default function ProjectDetail({ params }) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div style={{ padding: "100px 48px", maxWidth: 800, margin: "0 auto" }}>
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <div style={{ width: 24, height: 1, background: "var(--accent)" }} />
          <span style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 500 }}>
            {project.category === "tech" ? "Web & software" : "Creative"}
          </span>
        </div>

        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)", lineHeight: 1.05, marginBottom: 16 }}>
          {project.title}
        </h1>

        <p style={{ fontSize: 16, fontWeight: 300, color: "var(--text2)", lineHeight: 1.7, marginBottom: 24 }}>
          {project.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{ fontSize: 12, color: "var(--text2)", background: "var(--bg3)", border: "1px solid var(--border)", borderRadius: 6, padding: "4px 12px" }}>
              {tag}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", gap: 24 }}>
          {project.github && (
            <a href={project.github} style={{ fontSize: 14, fontWeight: 500, color: "var(--accent)", textDecoration: "none" }}>
              View on GitHub →
            </a>
          )}
          {project.live && (
            <a href={project.live} style={{ fontSize: 14, fontWeight: 500, color: "var(--accent)", textDecoration: "none" }}>
              Live demo →
            </a>
          )}
        </div>
      </div>

      <div style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: 16,
        padding: 48,
        textAlign: "center",
        color: "var(--text2)"
      }}>
        <p style={{ fontSize: 18, marginBottom: 16 }}>🚧 Project details coming soon</p>
        <p>This is a placeholder for the detailed project case study.</p>
      </div>
    </div>
  );
}