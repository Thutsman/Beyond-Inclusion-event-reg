"use client";

import Image from "next/image";

export default function AuthorSection() {
  const credentials = [
    {
      label: "PhD",
      value: "Industrial Economics — Fintech",
    },
    {
      label: "MSc",
      value: "Global Central Banking & Financial Regulation",
    },
    {
      label: "Institution",
      value: "Warwick Business School · Bank of England",
    },
  ];

  const audiences = [
    "Policy Makers",
    "Finance & Economics Professionals",
    "Students",
    "Generalists & Curious Minds",
  ];

  return (
    <section
      id="author"
      style={{
        position: "relative",
        padding: "6rem 2rem",
        background: "linear-gradient(160deg, #0b3040 0%, #0a2a35 100%)",
        overflow: "hidden",
      }}
    >
      {/* Decorative dot pattern */}
      <div
        style={{
          position: "absolute",
          top: "60px",
          right: "60px",
          width: "160px",
          height: "160px",
          backgroundImage: "radial-gradient(circle, rgba(201,168,76,0.2) 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="author-grid"
        >
          {/* Left — photo */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "340px",
              }}
            >
              {/* Gold border frame */}
              <div
                style={{
                  position: "absolute",
                  inset: "-8px",
                  border: "1px solid rgba(201,168,76,0.3)",
                  borderRadius: "6px",
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: "-16px",
                  border: "1px solid rgba(201,168,76,0.1)",
                  borderRadius: "8px",
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  borderRadius: "4px",
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                }}
              >
                <Image
                  src="/tadiwa-pic.jpeg"
                  alt="Dr. Tadiwanashe Muganyi"
                  width={400}
                  height={500}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div>
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
                MEET THE AUTHOR
              </span>
            </div>

            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 700,
                color: "#f0ede6",
                marginBottom: "0.5rem",
                lineHeight: 1.2,
              }}
            >
              Dr. Tadiwanashe
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #c9a84c, #e8c96a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Muganyi
              </span>
            </h2>

            {/* Credentials */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", margin: "1.5rem 0" }}>
              {credentials.map((cred) => (
                <div
                  key={cred.label}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "baseline",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontFamily: "var(--font-geist-sans)",
                      color: "#c9a84c",
                      letterSpacing: "0.1em",
                      minWidth: "70px",
                      fontWeight: 700,
                    }}
                  >
                    {cred.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "0.95rem",
                      color: "#c8dde3",
                    }}
                  >
                    {cred.value}
                  </span>
                </div>
              ))}
            </div>

            <div
              style={{
                height: "1px",
                background: "linear-gradient(90deg, rgba(201,168,76,0.5), transparent)",
                margin: "1.5rem 0",
              }}
            />

            <p
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "1rem",
                color: "#a8bfc5",
                lineHeight: 1.85,
                marginBottom: "2rem",
              }}
            >
              Dr. Muganyi is an economist and researcher at the intersection of fintech, artificial intelligence, and financial policy. His work explores how emerging technologies reshape financial systems and what that means for economic inclusion, regulatory frameworks, and the architecture of global finance.
            </p>

            {/* Who should attend */}
            <div
              style={{
                background: "rgba(15,61,82,0.5)",
                border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: "6px",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  color: "#c9a84c",
                  marginBottom: "1rem",
                }}
              >
                WHO SHOULD ATTEND
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.6rem",
                }}
              >
                {audiences.map((audience) => (
                  <div
                    key={audience}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#c9a84c",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "Georgia, serif",
                        fontSize: "0.88rem",
                        color: "#c8dde3",
                      }}
                    >
                      {audience}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
