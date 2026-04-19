"use client";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "32px 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 16,
          fontWeight: 800,
          color: "var(--text2)",
          letterSpacing: "-0.02em",
        }}
      >
        Dru<span style={{ color: "var(--accent)" }}>.</span>
      </div>

      <p style={{ fontSize: 12, color: "var(--text3)" }}>
        Full-stack developer · IT specialist · Creative — Quezon City, PH
      </p>

      <div style={{ display: "flex", gap: 24 }}>
        {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
            style={{
              fontSize: 12,
              color: "var(--text3)",
              textDecoration: "none",
              cursor: "pointer",
              transition: "0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--text2)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--text3)")}
          >
            {item}
          </a>
        ))}
      </div>
    </footer>
  );
}