"use client";

export default function BookDescription() {
  const waves = [
    {
      number: "01",
      title: "Financial Access",
      heading: "The First Wave",
      subtitle: "Expanding Access",
      description:
        "The first wave expanded access, bringing billions of people into the formal financial system through mobile payments, digital wallets, and agent banking networks. Inclusion became the rallying call of an era.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" stroke="#c9a84c" strokeWidth="1.5" strokeDasharray="4 2" />
          <path d="M16 24h16M24 16v16" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" />
          <circle cx="24" cy="24" r="6" stroke="#c9a84c" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Financial Intelligence",
      heading: "The Second Wave",
      subtitle: "Expanding Intelligence",
      description:
        "The second wave, now unfolding, expands intelligence. Artificial intelligence analyses financial behaviour, automates credit decisions, detects fraud in milliseconds, and begins to personalise financial services at unprecedented scale.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="10" stroke="#c9a84c" strokeWidth="1.5" />
          <path d="M24 10V8M24 40v-2M38 24h2M8 24h-2" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M33 15l1.4-1.4M13.6 34.4L15 33M33 33l1.4 1.4M13.6 13.6L15 15" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="24" cy="24" r="4" fill="rgba(201,168,76,0.3)" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Financial Autonomy",
      heading: "The Third Wave",
      subtitle: "Expanding Autonomy",
      description:
        "The third wave will expand autonomy. Intelligent agents will operate on behalf of individuals and institutions within financial markets — executing strategies, managing portfolios, and negotiating terms without human intervention.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M16 32l4-8 4 4 4-12 4 6" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="8" y="10" width="32" height="28" rx="3" stroke="#c9a84c" strokeWidth="1.5" />
          <path d="M20 42h8M24 38v4" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="book"
      style={{
        position: "relative",
        padding: "6rem 2rem",
        background: "linear-gradient(180deg, #0a2a35 0%, #0b3040 50%, #0a2a35 100%)",
        overflow: "hidden",
      }}
    >
      {/* Subtle background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(201,168,76,0.1)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "2px",
              padding: "0.3rem 0.9rem",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                color: "#c9a84c",
                fontFamily: "var(--font-geist-sans)",
              }}
            >
              ABOUT THE BOOK
            </span>
          </div>

          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#f0ede6",
              marginBottom: "1rem",
              lineHeight: 1.15,
            }}
          >
            Three Revolutions.
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #c9a84c, #e8c96a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              One Trajectory.
            </span>
          </h2>

          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.1rem",
              color: "#a8bfc5",
              maxWidth: "620px",
              margin: "0 auto",
              lineHeight: 1.8,
              fontStyle: "italic",
            }}
          >
            Understanding the three waves of fintech is the key to understanding the future of finance — and the future of economic participation itself.
          </p>
        </div>

        {/* Waves */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {waves.map((wave, index) => (
            <div
              key={wave.number}
              style={{
                position: "relative",
                background: "rgba(15,61,82,0.45)",
                border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: "6px",
                padding: "2rem",
                overflow: "hidden",
                transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.45)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Wave number watermark */}
              <span
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1.5rem",
                  fontFamily: "Georgia, serif",
                  fontSize: "5rem",
                  fontWeight: 700,
                  color: "rgba(201,168,76,0.06)",
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {wave.number}
              </span>

              {/* Icon */}
              <div style={{ marginBottom: "1.25rem" }}>{wave.icon}</div>

              {/* Wave label */}
              <span
                style={{
                  display: "block",
                  fontSize: "0.65rem",
                  letterSpacing: "0.18em",
                  color: "#c9a84c",
                  fontFamily: "var(--font-geist-sans)",
                  marginBottom: "0.4rem",
                }}
              >
                {wave.heading.toUpperCase()}
              </span>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "#f0ede6",
                  marginBottom: "0.25rem",
                  lineHeight: 1.2,
                }}
              >
                {wave.title}
              </h3>

              {/* Subtitle */}
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#c9a84c",
                  fontFamily: "var(--font-geist-sans)",
                  letterSpacing: "0.05em",
                  marginBottom: "1rem",
                }}
              >
                {wave.subtitle}
              </p>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  background: "linear-gradient(90deg, #c9a84c, transparent)",
                  marginBottom: "1rem",
                  width: "60px",
                }}
              />

              {/* Description */}
              <p
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "0.95rem",
                  color: "#a8bfc5",
                  lineHeight: 1.8,
                }}
              >
                {wave.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div
          style={{
            marginTop: "4rem",
            textAlign: "center",
            padding: "2.5rem",
            background: "rgba(201,168,76,0.07)",
            border: "1px solid rgba(201,168,76,0.2)",
            borderRadius: "6px",
            position: "relative",
          }}
        >
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "5rem",
              color: "rgba(201,168,76,0.2)",
              lineHeight: 0,
              position: "absolute",
              top: "2rem",
              left: "2rem",
            }}
          >
            &ldquo;
          </span>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              color: "#d4e8ec",
              lineHeight: 1.9,
              fontStyle: "italic",
              maxWidth: "700px",
              margin: "0 auto",
              position: "relative",
              zIndex: 1,
            }}
          >
            Understanding this progression is the key to understanding the future of finance — and the future of every economy that aspires to participate in it.
          </p>
          <p
            style={{
              marginTop: "1.25rem",
              fontSize: "0.85rem",
              color: "#c9a84c",
              fontFamily: "var(--font-geist-sans)",
              letterSpacing: "0.08em",
            }}
          >
            — Dr. Tadiwanashe Muganyi
          </p>
        </div>
      </div>
    </section>
  );
}
