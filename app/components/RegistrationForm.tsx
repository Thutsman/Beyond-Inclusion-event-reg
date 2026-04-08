"use client";

import { useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organisation: string;
  category: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

const CATEGORIES = [
  "Policy Maker",
  "Finance & Economics Professional",
  "Academic / Researcher",
  "Student",
  "Business Executive",
  "Media",
  "General Public",
];

export default function RegistrationForm() {
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organisation: "",
    category: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          organisation: "",
          category: "",
        });
      } else {
        const data = await res.json();
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection.");
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.85rem 1rem",
    background: "rgba(10, 42, 53, 0.8)",
    border: "1px solid rgba(201,168,76,0.25)",
    borderRadius: "4px",
    color: "#f0ede6",
    fontSize: "0.9rem",
    fontFamily: "Georgia, serif",
    outline: "none",
    transition: "all 0.3s ease",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.65rem",
    letterSpacing: "0.15em",
    color: "#c9a84c",
    fontFamily: "var(--font-geist-sans)",
    marginBottom: "0.4rem",
    fontWeight: 600,
  };

  if (status === "success") {
    return (
      <section
        id="register"
        style={{
          padding: "6rem 2rem",
          background: "linear-gradient(160deg, #0a2a35 0%, #0c3545 100%)",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            textAlign: "center",
            background: "rgba(15,61,82,0.6)",
            border: "1px solid rgba(201,168,76,0.3)",
            borderRadius: "8px",
            padding: "3rem 2rem",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: "rgba(201,168,76,0.15)",
              border: "2px solid #c9a84c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.5rem",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2.5">
              <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.8rem",
              color: "#f0ede6",
              marginBottom: "0.75rem",
            }}
          >
            Registration Confirmed
          </h3>
          <p
            style={{
              fontFamily: "Georgia, serif",
              color: "#a8bfc5",
              lineHeight: 1.8,
              marginBottom: "1.5rem",
            }}
          >
            Thank you for registering for the Beyond Inclusion book launch. A confirmation email has been sent to your inbox. We look forward to seeing you on <strong style={{ color: "#c9a84c" }}>25 May 2026</strong>.
          </p>
          <p style={{ fontSize: "0.8rem", color: "#a8bfc5", fontFamily: "var(--font-geist-sans)" }}>
            Questions? Contact{" "}
            <a
              href="mailto:jamila@nexcelia.com"
              style={{ color: "#c9a84c", textDecoration: "none" }}
            >
              jamila@nexcelia.com
            </a>{" "}
            or call{" "}
            <a href="tel:+2630773266976" style={{ color: "#c9a84c", textDecoration: "none" }}>
              077 732 6976
            </a>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="register"
      style={{
        position: "relative",
        padding: "6rem 2rem",
        background: "linear-gradient(160deg, #0a2a35 0%, #0c3545 100%)",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 80% 50%, rgba(201,168,76,0.05) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
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
              RESERVE YOUR SEAT
            </span>
          </div>

          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 700,
              color: "#f0ede6",
              marginBottom: "1rem",
              lineHeight: 1.15,
            }}
          >
            Register for the
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #c9a84c, #e8c96a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Book Launch
            </span>
          </h2>

          <p
            style={{
              fontFamily: "Georgia, serif",
              color: "#a8bfc5",
              fontSize: "1rem",
              lineHeight: 1.7,
            }}
          >
            Complimentary admission · Refreshments provided · Limited seats available
          </p>
        </div>

        {/* Form card */}
        <div
          style={{
            background: "rgba(15,61,82,0.5)",
            border: "1px solid rgba(201,168,76,0.2)",
            borderRadius: "8px",
            padding: "2.5rem",
          }}
        >
          <form onSubmit={handleSubmit}>
            {/* Row 1: First name + Last name */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.25rem",
                marginBottom: "1.25rem",
              }}
              className="form-row"
            >
              <div>
                <label style={labelStyle} htmlFor="firstName">
                  FIRST NAME *
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  placeholder="Tendai"
                  value={form.firstName}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#c9a84c";
                    e.target.style.boxShadow = "0 0 0 3px rgba(201,168,76,0.12)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(201,168,76,0.25)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
              <div>
                <label style={labelStyle} htmlFor="lastName">
                  LAST NAME *
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  placeholder="Moyo"
                  value={form.lastName}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#c9a84c";
                    e.target.style.boxShadow = "0 0 0 3px rgba(201,168,76,0.12)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(201,168,76,0.25)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
            </div>

            {/* Row 2: Email + Phone */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.25rem",
                marginBottom: "1.25rem",
              }}
              className="form-row"
            >
              <div>
                <label style={labelStyle} htmlFor="email">
                  EMAIL ADDRESS *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="tendai@example.com"
                  value={form.email}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#c9a84c";
                    e.target.style.boxShadow = "0 0 0 3px rgba(201,168,76,0.12)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(201,168,76,0.25)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
              <div>
                <label style={labelStyle} htmlFor="phone">
                  PHONE NUMBER
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+263 77 123 4567"
                  value={form.phone}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#c9a84c";
                    e.target.style.boxShadow = "0 0 0 3px rgba(201,168,76,0.12)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(201,168,76,0.25)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
            </div>

            {/* Row 3: Organisation */}
            <div style={{ marginBottom: "1.25rem" }}>
              <label style={labelStyle} htmlFor="organisation">
                ORGANISATION / INSTITUTION
              </label>
              <input
                id="organisation"
                name="organisation"
                type="text"
                placeholder="Your organisation or institution"
                value={form.organisation}
                onChange={handleChange}
                style={inputStyle}
                onFocus={(e) => {
                  e.target.style.borderColor = "#c9a84c";
                  e.target.style.boxShadow = "0 0 0 3px rgba(201,168,76,0.12)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(201,168,76,0.25)";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Row 4: Category */}
            <div style={{ marginBottom: "2rem" }}>
              <label style={labelStyle} htmlFor="category">
                ATTENDEE CATEGORY *
              </label>
              <div style={{ position: "relative" }}>
                <select
                  id="category"
                  name="category"
                  required
                  value={form.category}
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    appearance: "none",
                    cursor: "pointer",
                    paddingRight: "2.5rem",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#c9a84c";
                    e.target.style.boxShadow = "0 0 0 3px rgba(201,168,76,0.12)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(201,168,76,0.25)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  <option value="" disabled style={{ background: "#0a2a35" }}>
                    Select your category
                  </option>
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat} style={{ background: "#0a2a35" }}>
                      {cat}
                    </option>
                  ))}
                </select>
                <div
                  style={{
                    position: "absolute",
                    right: "1rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    pointerEvents: "none",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Error message */}
            {status === "error" && (
              <div
                style={{
                  background: "rgba(220,38,38,0.1)",
                  border: "1px solid rgba(220,38,38,0.4)",
                  borderRadius: "4px",
                  padding: "0.75rem 1rem",
                  marginBottom: "1.5rem",
                  color: "#fca5a5",
                  fontSize: "0.85rem",
                  fontFamily: "var(--font-geist-sans)",
                }}
              >
                {errorMessage}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "submitting"}
              style={{
                width: "100%",
                padding: "1rem",
                background:
                  status === "submitting"
                    ? "rgba(201,168,76,0.5)"
                    : "linear-gradient(135deg, #c9a84c 0%, #b8944a 100%)",
                color: "#0a2a35",
                fontWeight: 700,
                fontSize: "0.9rem",
                letterSpacing: "0.12em",
                border: "none",
                borderRadius: "4px",
                cursor: status === "submitting" ? "not-allowed" : "pointer",
                fontFamily: "var(--font-geist-sans)",
                boxShadow:
                  status !== "submitting"
                    ? "0 4px 20px rgba(201,168,76,0.3)"
                    : "none",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.6rem",
              }}
            >
              {status === "submitting" ? (
                <>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    style={{ animation: "spin 1s linear infinite" }}
                  >
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
                  </svg>
                  SUBMITTING...
                </>
              ) : (
                <>
                  CONFIRM REGISTRATION
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </>
              )}
            </button>
          </form>

          {/* Contact info */}
          <div
            style={{
              marginTop: "1.5rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid rgba(201,168,76,0.15)",
              textAlign: "center",
              fontSize: "0.8rem",
              color: "#a8bfc5",
              fontFamily: "var(--font-geist-sans)",
            }}
          >
            Questions? Email{" "}
            <a
              href="mailto:jamila@nexcelia.com"
              style={{ color: "#c9a84c", textDecoration: "none" }}
            >
              jamila@nexcelia.com
            </a>{" "}
            or call{" "}
            <a href="tel:+2630773266976" style={{ color: "#c9a84c", textDecoration: "none" }}>
              077 732 6976
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
