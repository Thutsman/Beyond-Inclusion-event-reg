"use client";

import Image from "next/image";

const sponsors = [
  {
    name: "Vacherot Wealth Management",
    location: "The Hague",
    logo: "/vacherot-logo.jpeg",
    width: 140,
    height: 70,
  },
  {
    name: "Institute of Applied Artificial Intelligence and Robotics",
    location: "USA",
    logo: "/iaair-logo.jpeg",
    width: 140,
    height: 70,
  },
  {
    name: "Nexcelia Consulting",
    location: "EMEA",
    logo: "/nexcelia-logo.jpeg",
    width: 140,
    height: 70,
  },
  {
    name: "Alderwyke Investments",
    location: "",
    logo: "/alderwyke-logo.jpeg",
    width: 140,
    height: 70,
  },
];

export default function SponsorsSection() {
  return (
    <section
      style={{
        padding: "4rem 2rem",
        background: "#071e28",
        borderTop: "1px solid rgba(201,168,76,0.15)",
        borderBottom: "1px solid rgba(201,168,76,0.15)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2.5rem",
          }}
        >
          {/* Label */}
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                color: "#a8bfc5",
                fontFamily: "var(--font-geist-sans)",
                textTransform: "uppercase",
              }}
            >
              Supported by
            </p>
            <div
              style={{
                height: "1px",
                width: "80px",
                background: "linear-gradient(90deg, transparent, #c9a84c, transparent)",
                margin: "0.75rem auto 0",
              }}
            />
          </div>

          {/* Logos */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "4rem",
            }}
          >
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.75rem",
                  transition: "transform 0.3s ease, opacity 0.3s ease",
                  opacity: 0.9,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "scale(1.08)";
                  (e.currentTarget as HTMLDivElement).style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
                  (e.currentTarget as HTMLDivElement).style.opacity = "0.9";
                }}
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={220}
                  height={120}
                  style={{
                    width: "auto",
                    height: "110px",
                    objectFit: "contain",
                    borderRadius: "4px",
                  }}
                />
                {sponsor.location && (
                  <span
                    style={{
                      fontSize: "0.6rem",
                      color: "#a8bfc5",
                      letterSpacing: "0.18em",
                      fontFamily: "var(--font-geist-sans)",
                      textTransform: "uppercase",
                    }}
                  >
                    {sponsor.location}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
