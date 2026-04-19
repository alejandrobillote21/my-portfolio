"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: scrolled ? "12px 48px" : "18px 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "rgba(12,12,14,0.85)",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid var(--border)",
        transition: "padding 0.3s",
      }}
    >
      <Link href="/" style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 800, color: "var(--text)", textDecoration: "none", letterSpacing: "-0.03em" }}>
        Dru<span style={{ color: "var(--accent)" }}>.</span>
      </Link>

      <ul style={{ display: "flex", gap: 36, listStyle: "none" }}>
        {["About", "Services", "Projects", "Contact"].map((item) => (
          <li key={item}>
            <Link
              href={`#${item.toLowerCase()}`}
              style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 400, color: "var(--text2)", textDecoration: "none", letterSpacing: "0.04em", textTransform: "uppercase", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.target.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--text2)")}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="#contact"
        style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 500, color: "var(--bg)", background: "var(--accent)", borderRadius: 40, padding: "9px 22px", textDecoration: "none", transition: "background 0.2s" }}
        onMouseEnter={(e) => (e.target.style.background = "var(--accent2)")}
        onMouseLeave={(e) => (e.target.style.background = "var(--accent)")}
      >
        Hire me
      </Link>
    </nav>
  );
}