"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "The Book", href: "#book" },
    { label: "Author", href: "#author" },
  ];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.4s ease",
          background:
            scrolled || menuOpen ? "rgba(10, 42, 53, 0.97)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
          borderBottom:
            scrolled || menuOpen ? "1px solid rgba(201,168,76,0.2)" : "none",
          padding: "1rem 1.5rem",
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
          <a href="#hero" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  background: "linear-gradient(135deg, #c9a84c, #e8c96a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1.2,
                }}
              >
                BEYOND INCLUSION
              </span>
              <span
                style={{
                  fontSize: "0.6rem",
                  color: "#a8bfc5",
                  letterSpacing: "0.12em",
                }}
              >
                BOOK LAUNCH · AFRICA DAY 2026
              </span>
            </div>
          </a>

          {/* Desktop nav links */}
          <div className="nav-desktop">
            {navLinks.map((item) => (
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

          {/* Mobile only: one REGISTER + menu (visibility controlled in globals.css; no inline display — it broke desktop) */}
          <div className="nav-mobile nav-mobile-actions" style={{ alignItems: "center", gap: "0.75rem" }}>
            <a
              href="#register"
              style={{
                background: "linear-gradient(135deg, #c9a84c, #b8944a)",
                color: "#0a2a35",
                fontWeight: 700,
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                padding: "0.45rem 0.9rem",
                borderRadius: "2px",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              REGISTER
            </a>

            {/* Hamburger button */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              style={{
                background: "none",
                border: "1px solid rgba(201,168,76,0.35)",
                borderRadius: "4px",
                padding: "0.4rem",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                width: "36px",
                height: "36px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {menuOpen ? (
                /* X icon */
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                /* Hamburger lines */
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        className="nav-mobile nav-mobile-drawer"
        style={{
          position: "fixed",
          top: menuOpen ? "64px" : "-100%",
          left: 0,
          right: 0,
          zIndex: 49,
          background: "rgba(10, 42, 53, 0.98)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(201,168,76,0.2)",
          transition: "top 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          padding: "1rem 1.5rem 1.5rem",
          flexDirection: "column",
          gap: "0",
        }}
      >
        {navLinks.map((item, i) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            style={{
              color: "#d4e8ec",
              fontSize: "1rem",
              letterSpacing: "0.08em",
              textDecoration: "none",
              padding: "0.9rem 0",
              borderBottom:
                i < navLinks.length - 1
                  ? "1px solid rgba(201,168,76,0.12)"
                  : "none",
              fontFamily: "Georgia, serif",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#d4e8ec")}
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Backdrop to close menu */}
      {menuOpen && (
        <div
          className="nav-mobile nav-mobile-backdrop"
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 48,
            background: "rgba(0,0,0,0.4)",
          }}
        />
      )}
    </>
  );
}
