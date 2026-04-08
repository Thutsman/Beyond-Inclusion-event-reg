"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "linear-gradient(160deg, #0a2a35 0%, #0d3344 45%, #0a3040 100%)",
        paddingTop: "80px",
      }}
    >
      {/* Background decorative elements */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "radial-gradient(circle at 15% 85%, rgba(26,143,160,0.12) 0%, transparent 50%), radial-gradient(circle at 85% 15%, rgba(201,168,76,0.1) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      {/* Dot pattern top-left */}
      <div
        style={{
          position: "absolute",
          top: "80px",
          left: "20px",
          width: "120px",
          height: "120px",
          backgroundImage: "radial-gradient(circle, rgba(201,168,76,0.35) 1.5px, transparent 1.5px)",
          backgroundSize: "16px 16px",
          pointerEvents: "none",
        }}
      />
      {/* Dot pattern bottom-right */}
      <div
        style={{
          position: "absolute",
          bottom: "100px",
          right: "30px",
          width: "120px",
          height: "120px",
          backgroundImage: "radial-gradient(circle, rgba(201,168,76,0.25) 1.5px, transparent 1.5px)",
          backgroundSize: "16px 16px",
          pointerEvents: "none",
        }}
      />

      {/* Teal arc blobs */}
      <div
        style={{
          position: "absolute",
          top: "-60px",
          right: "-60px",
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,143,160,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-40px",
          left: "-40px",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,143,160,0.14) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1100px",
          width: "100%",
          margin: "0 auto",
          padding: "4rem 2rem 3rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Lead: stays above the fold on mobile; visuals sit next on small screens */}
        <div className="hero-col-lead">
          {/* Event badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(201,168,76,0.12)",
              border: "1px solid rgba(201,168,76,0.35)",
              borderRadius: "2px",
              padding: "0.35rem 0.9rem",
              marginBottom: "1.5rem",
            }}
          >
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#c9a84c", display: "inline-block" }} />
            <span style={{ color: "#c9a84c", fontSize: "0.7rem", letterSpacing: "0.18em", fontFamily: "var(--font-geist-sans)" }}>
              AFRICA DAY · BOOK LAUNCH
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              marginBottom: "0.5rem",
              letterSpacing: "-0.01em",
            }}
          >
            <span
              style={{
                display: "block",
                background: "linear-gradient(135deg, #c9a84c 0%, #e8c96a 50%, #c9a84c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Beyond
            </span>
            <span style={{ color: "#f0ede6" }}>Inclusion</span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "#a8bfc5",
              marginBottom: "0.75rem",
            }}
          >
            Fintech&apos;s AI Inflection Point
          </p>

          <div
            style={{
              height: "1px",
              background: "linear-gradient(90deg, #c9a84c, transparent)",
              marginBottom: "1.5rem",
              width: "200px",
            }}
          />
        </div>

        {/* Right column — images (desktop: right; mobile: directly under title block) */}
        <div
          className="hero-col-visual"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <div
            className="hero-book-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
              width: "100%",
            }}
          >
            {/* Book cover */}
            <div
              style={{
                position: "relative",
                borderRadius: "4px",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,168,76,0.25)",
                animation: "float 6s ease-in-out infinite",
              }}
            >
              <Image
                src="/book-cover.jpeg"
                alt="Beyond Inclusion book cover"
                width={220}
                height={320}
                priority
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* Author photo */}
            <div
              style={{
                position: "relative",
                borderRadius: "4px",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,168,76,0.25)",
                marginTop: "1.5rem",
              }}
            >
              <Image
                src="/tadiwa-pic.jpeg"
                alt="Dr. Tadiwanashe Muganyi"
                width={220}
                height={320}
                style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Author name card below images */}
          <div
            style={{
              textAlign: "center",
              background: "rgba(15,61,82,0.6)",
              border: "1px solid rgba(201,168,76,0.2)",
              borderRadius: "4px",
              padding: "1rem 1.5rem",
              width: "100%",
            }}
          >
            <p
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "#f0ede6",
                marginBottom: "0.25rem",
              }}
            >
              Dr. Tadiwanashe Muganyi
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                color: "#a8bfc5",
                fontFamily: "var(--font-geist-sans)",
                lineHeight: 1.6,
              }}
            >
              PhD Industrial Economics — Fintech
              <br />
              MSc Global Central Banking &amp; Financial Regulation
              <br />
              <span style={{ color: "#c9a84c" }}>Warwick Business School · Bank of England</span>
            </p>
          </div>
        </div>

        {/* Rest: quote, event cards, CTA — after visuals on mobile */}
        <div className="hero-col-rest">
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontSize: "1.05rem",
              color: "#c8dde3",
              lineHeight: 1.7,
              marginBottom: "2rem",
            }}
          >
            &ldquo;The evolution of financial technology is not a single revolution &mdash; it is three.&rdquo;
          </p>

          {/* Event details cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
            {[
              {
                icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="5" width="18" height="16" rx="2" />
                    <path d="M16 3v4M8 3v4M3 10h18" />
                  </svg>
                ),
                label: "DATE",
                value: "Monday, 25 May 2026 — Africa Day",
              },
              {
                icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                ),
                label: "VENUE",
                value: "10 on Pauling Hotel, Bulawayo",
              },
              {
                icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                ),
                label: "TIME",
                value: "10:00 am – 2:00 pm · Refreshments provided",
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  background: "rgba(15,61,82,0.5)",
                  border: "1px solid rgba(201,168,76,0.15)",
                  borderRadius: "4px",
                  padding: "0.75rem 1rem",
                }}
              >
                <span
                  style={{
                    width: "1.8rem",
                    height: "1.8rem",
                    borderRadius: "50%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#c9a84c",
                    background: "rgba(201,168,76,0.12)",
                    border: "1px solid rgba(201,168,76,0.24)",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </span>
                <div>
                  <span
                    style={{
                      display: "block",
                      fontSize: "0.65rem",
                      letterSpacing: "0.15em",
                      color: "#c9a84c",
                      fontFamily: "var(--font-geist-sans)",
                      fontWeight: 600,
                      marginBottom: "0.1rem",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontSize: "0.9rem",
                      color: "#d4e8ec",
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#register"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              background: "linear-gradient(135deg, #c9a84c 0%, #b8944a 100%)",
              color: "#0a2a35",
              fontWeight: 700,
              fontSize: "0.9rem",
              letterSpacing: "0.12em",
              padding: "0.9rem 2rem",
              borderRadius: "2px",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(201,168,76,0.3)",
              transition: "all 0.3s ease",
              fontFamily: "var(--font-geist-sans)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(201,168,76,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(201,168,76,0.3)";
            }}
          >
            RESERVE YOUR SEAT
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          opacity: 0.6,
          animation: "float 3s ease-in-out infinite",
        }}
      >
        <span style={{ fontSize: "0.65rem", color: "#a8bfc5", letterSpacing: "0.15em", fontFamily: "var(--font-geist-sans)" }}>
          SCROLL
        </span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <rect x="6" y="1" width="4" height="8" rx="2" stroke="#c9a84c" strokeWidth="1.5" />
          <path d="M8 12v8M5 17l3 3 3-3" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

    </section>
  );
}
