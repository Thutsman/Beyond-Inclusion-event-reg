"use client";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#050f14",
        padding: "3rem 2rem 2rem",
        borderTop: "1px solid rgba(201,168,76,0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "2rem",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <h3
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "1.2rem",
                fontWeight: 700,
                background: "linear-gradient(135deg, #c9a84c, #e8c96a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "0.5rem",
              }}
            >
              Beyond Inclusion
            </h3>
            <p
              style={{
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                fontSize: "0.85rem",
                color: "#a8bfc5",
                lineHeight: 1.6,
              }}
            >
              Fintech&apos;s AI Inflection Point
              <br />
              by Dr. Tadiwanashe Muganyi
            </p>
          </div>

          {/* Event details */}
          <div>
            <h4
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                color: "#c9a84c",
                fontFamily: "var(--font-geist-sans)",
                marginBottom: "0.75rem",
              }}
            >
              EVENT DETAILS
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              {[
                "25 May 2026 — Africa Day",
                "10 on Pauling Hotel, Bulawayo",
                "10:00 am – 2:00 pm",
                "Refreshments provided",
              ].map((detail) => (
                <p
                  key={detail}
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "0.82rem",
                    color: "#a8bfc5",
                  }}
                >
                  {detail}
                </p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                color: "#c9a84c",
                fontFamily: "var(--font-geist-sans)",
                marginBottom: "0.75rem",
              }}
            >
              CONTACT
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <a
                href="mailto:jamila@nexcelia.com"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.82rem",
                  color: "#a8bfc5",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#a8bfc5")}
              >
                jamila@nexcelia.com
              </a>
              <a
                href="tel:+2630773266976"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.82rem",
                  color: "#a8bfc5",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#a8bfc5")}
              >
                077 732 6976
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)",
          }}
        />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              color: "rgba(168,191,197,0.5)",
              fontFamily: "var(--font-geist-sans)",
            }}
          >
            © 2026 Beyond Inclusion · All rights reserved
          </p>
          <p
            style={{
              fontSize: "0.7rem",
              color: "rgba(168,191,197,0.4)",
              fontFamily: "var(--font-geist-sans)",
            }}
          >
            A Nexcelia Consulting · EMEA event
          </p>
        </div>
      </div>

    </footer>
  );
}
