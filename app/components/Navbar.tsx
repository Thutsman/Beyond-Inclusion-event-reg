"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.4s ease",
        background: scrolled
          ? "rgba(10, 42, 53, 0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.2)" : "none",
        padding: "1rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo / Brand */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.1rem",
              fontWeight: 700,
              letterSpacing: "0.05em",
              background: "linear-gradient(135deg, #c9a84c, #e8c96a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            BEYOND INCLUSION
          </span>
          <span style={{ fontSize: "0.65rem", color: "#a8bfc5", letterSpacing: "0.12em" }}>
            BOOK LAUNCH · AFRICA DAY 2026
          </span>
        </div>

        {/* Nav links */}
        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {[
            { label: "About", href: "#about" },
            { label: "The Book", href: "#book" },
            { label: "Author", href: "#author" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                color: "#a8bfc5",
                fontSize: "0.85rem",
                letterSpacing: "0.08em",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#a8bfc5")}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#register"
            style={{
              background: "linear-gradient(135deg, #c9a84c, #b8944a)",
              color: "#0a2a35",
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              padding: "0.5rem 1.25rem",
              borderRadius: "2px",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            REGISTER
          </a>
        </div>
      </div>
    </nav>
  );
}
