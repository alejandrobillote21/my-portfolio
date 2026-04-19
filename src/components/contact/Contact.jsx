"use client";
import { useEffect, useRef, useState } from "react";

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

const inputStyle = {
  width: "100%",
  background: "var(--surface)",
  border: "1px solid var(--border)",
  borderRadius: 10,
  color: "var(--text)",
  fontFamily: "var(--font-body)",
  fontSize: 14,
  fontWeight: 300,
  padding: "12px 16px",
  outline: "none",
  transition: "border-color 0.2s",
  boxSizing: "border-box",
};

const labelStyle = {
  display: "block",
  fontSize: 11,
  fontWeight: 500,
  color: "var(--text3)",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  marginBottom: 6,
};

function SocialLink({ label, href }) {
  const linkStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: 13,
    color: "var(--text2)",
    textDecoration: "none",
    padding: "10px 14px",
    background: "var(--bg2)",
    border: "1px solid var(--border)",
    borderRadius: 10,
    transition: "all 0.2s",
  };
  return (
    <a href={href}
      style={linkStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "var(--text)";
        e.currentTarget.style.borderColor = "var(--border2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "var(--text2)";
        e.currentTarget.style.borderColor = "var(--border)";
      }}
    >
      {label}
      <span style={{ fontSize: 11, color: "var(--text3)" }}>&#8599;</span>
    </a>
  );
}

function ContactForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
        <div>
          <label style={labelStyle}>Name</label>
          <input
            type="text"
            placeholder="Your name"
            style={inputStyle}
            required
            onFocus={(e) => { e.target.style.borderColor = "rgba(200,245,90,0.4)"; }}
            onBlur={(e) => { e.target.style.borderColor = "var(--border)"; }}
          />
        </div>
        <div>
          <label style={labelStyle}>Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            style={inputStyle}
            required
            onFocus={(e) => { e.target.style.borderColor = "rgba(200,245,90,0.4)"; }}
            onBlur={(e) => { e.target.style.borderColor = "var(--border)"; }}
          />
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
        <div>
          <label style={labelStyle}>Project type</label>
          <select
            style={{ ...inputStyle, cursor: "pointer" }}
            onFocus={(e) => { e.target.style.borderColor = "rgba(200,245,90,0.4)"; }}
            onBlur={(e) => { e.target.style.borderColor = "var(--border)"; }}
          >
            <option value="">Select a service</option>
            <option>Web development</option>
            <option>API / backend</option>
            <option>Full-stack system build</option>
            <option>Creative services</option>
            <option>Both tech + creative</option>
            <option>Other / not sure</option>
          </select>
        </div>
        <div>
          <label style={labelStyle}>Budget range</label>
          <select
            style={{ ...inputStyle, cursor: "pointer" }}
            onFocus={(e) => { e.target.style.borderColor = "rgba(200,245,90,0.4)"; }}
            onBlur={(e) => { e.target.style.borderColor = "var(--border)"; }}
          >
            <option value="">Select a range</option>
            <option>Under $500</option>
            <option>$500 - $2,000</option>
            <option>$2,000 - $5,000</option>
            <option>$5,000+</option>
          </select>
        </div>
      </div>
      <div style={{ marginBottom: 16 }}>
        <label style={labelStyle}>About your project</label>
        <textarea
          placeholder="Brief description of what you need, timeline, and any other details..."
          rows={5}
          style={{ ...inputStyle, resize: "vertical" }}
          onFocus={(e) => { e.target.style.borderColor = "rgba(200,245,90,0.4)"; }}
          onBlur={(e) => { e.target.style.borderColor = "var(--border)"; }}
        />
      </div>
      <button
        type="submit"
        style={{
          width: "100%",
          fontFamily: "var(--font-body)",
          fontSize: 14,
          fontWeight: 500,
          color: "var(--bg)",
          background: "var(--accent)",
          border: "none",
          borderRadius: 10,
          padding: "14px",
          cursor: "pointer",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = "var(--accent2)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "var(--accent)"; }}
      >
        Send inquiry
      </button>
    </form>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  useFadeUp(leftRef);
  useFadeUp(rightRef);

  const fadeStyle = {
    opacity: 0,
    transform: "translateY(24px)",
    transition: "opacity 0.6s ease, transform 0.6s ease",
  };

  const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/alejandrobillote/" },
  { label: "GitHub", href: "https://github.com/alejandrobillote21" },
  { label: "Upwork", href: "https://www.upwork.com/freelancers/~017fa37e4e7330eb3d?mp_source=share" },
  { label: "Behance", href: "https://behance.net/" },
];

  return (
    <section id="contact" style={{ padding: "100px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 400px", gap: 80, alignItems: "start" }}>
        <div ref={leftRef} style={fadeStyle}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 24, height: 1, background: "var(--accent)" }} />
            <span style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 500 }}>
              Contact
            </span>
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)", lineHeight: 1.05, marginBottom: 20 }}>
            Let us build
            <br />
            something great.
          </h2>
          <p style={{ fontSize: 16, fontWeight: 300, color: "var(--text2)", lineHeight: 1.7, marginBottom: 36 }}>
            Whether it is a web app, a brand system, or both — fill out the form and I will get back to you within 24 hours.
          </p>
          {submitted ? (
            <div style={{ background: "rgba(90,245,212,0.07)", border: "1px solid rgba(90,245,212,0.2)", borderRadius: 12, padding: 24, textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, color: "var(--teal)", marginBottom: 8 }}>
                Message sent!
              </p>
              <p style={{ fontSize: 14, color: "var(--text2)" }}>
                I will get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <ContactForm onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} />
          )}
        </div>
        <div ref={rightRef} style={{ ...fadeStyle, transitionDelay: "0.15s", display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, padding: 24 }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "var(--text)", marginBottom: 6 }}>
              Book a free 20-min call
            </p>
            <p style={{ fontSize: 13, color: "var(--text2)", marginBottom: 16, lineHeight: 1.6 }}>
              Prefer talking over typing? Let us hop on a quick call — no commitment.
            </p>
            <button
              style={{ fontSize: 13, fontWeight: 500, color: "var(--text)", border: "1px solid var(--border2)", borderRadius: 40, padding: "10px 20px", background: "transparent", cursor: "pointer", transition: "all 0.2s", fontFamily: "var(--font-body)" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--surface2)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
            >
              Book via Calendly
            </button>
          </div>
          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, padding: 24 }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "var(--text)", marginBottom: 14 }}>
              Find me on
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {socialLinks.map((link) => (
                <SocialLink key={link.label} label={link.label} href={link.href} />
              ))}
            </div>
          </div>
          <div style={{ fontSize: 12, color: "var(--text3)", lineHeight: 1.6, padding: 14, background: "var(--bg2)", borderRadius: 10, border: "1px solid var(--border)" }}>
            I typically reply within 24 hours.
            <br />
            Based in Quezon City, PH — available for remote and local projects.
          </div>
        </div>
      </div>
    </section>
  );
}

