"use client";

import React, { useState } from "react";

export default function PartnerSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    businessStage: "",
    capital: "",
    objective: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Strategic Assessment Request");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone/WhatsApp: ${formData.phone}\nCountry: ${formData.country}\nBusiness Stage: ${formData.businessStage}\nAvailable Capital: ${formData.capital}\nPrimary Objective: ${formData.objective}`,
    );
    window.open(
      `mailto:hello@stravamanagement.com?subject=${subject}&body=${body}`,
      "_blank",
    );
    setSubmitted(true);
  };

  return (
    <section
      id="partner"
      style={{
        backgroundColor: "#E6DEC8",
        color: "#5A2132",
        position: "relative",
        overflow: "hidden",
        direction: "ltr",
        textAlign: "left",
      }}
    >
      <style>{`
        /* ─────────── Ambient / Texture ─────────── */
        .pp-section-inner {
          padding-top: 90px;
          padding-bottom: 110px;
          position: relative;
          width: 100%;
          z-index: 2;
        }
        @media (min-width: 1024px) {
          .pp-section-inner {
            padding-top: 140px;
            padding-bottom: 160px;
          }
        }

        .pp-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(90px);
          z-index: 0;
        }
        .pp-glow-1 {
          width: 560px;
          height: 560px;
          top: -180px;
          right: -120px;
          background: radial-gradient(circle, rgba(90, 33, 50, 0.08) 0%, rgba(90, 33, 50, 0) 65%);
        }
        .pp-glow-2 {
          width: 640px;
          height: 640px;
          bottom: -260px;
          left: -180px;
          background: radial-gradient(circle, rgba(90, 33, 50, 0.06) 0%, rgba(90, 33, 50, 0) 65%);
        }

        .pp-grain {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          opacity: 0.25;
          mix-blend-mode: multiply;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.28'/%3E%3C/svg%3E");
        }

        /* ─────────── Entrance motion ─────────── */
        @keyframes ppFadeUp {
          from { opacity: 0; transform: translateY(26px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pp-reveal {
          opacity: 0;
          animation: ppFadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .pp-delay-1 { animation-delay: 0.08s; }
        .pp-delay-2 { animation-delay: 0.16s; }
        .pp-delay-3 { animation-delay: 0.24s; }
        .pp-delay-4 { animation-delay: 0.32s; }

        /* ─────────── Eyebrow ─────────── */
        .pp-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(90, 33, 50, 0.75);
          margin-bottom: 26px;
        }
        .pp-eyebrow::before {
          content: "";
          width: 44px;
          height: 1px;
          background: linear-gradient(to right, rgba(90, 33, 50, 0), rgba(90, 33, 50, 0.8));
        }

        /* ─────────── Ornamental divider ─────────── */
        .pp-ornament {
          display: flex;
          align-items: center;
          gap: 16px;
          padding-bottom: 54px;
          margin-bottom: 70px;
          border-bottom: 1px solid rgba(90, 33, 50, 0.25);
        }
        .pp-ornament-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, rgba(90, 33, 50, 0.35), rgba(90, 33, 50, 0.06));
        }
        .pp-ornament-diamond {
          width: 7px;
          height: 7px;
          background: #5A2132;
          transform: rotate(45deg);
          opacity: 0.85;
        }

        /* ─────────── Inputs ─────────── */
        .pp-field {
          position: relative;
        }
        .pp-input,
        .pp-select {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(90, 33, 50, 0.32);
          padding: 17px 0;
          font-size: 16px;
          font-weight: 500;
          color: #5A2132;
          outline: none;
          font-family: inherit;
          transition: border-color 0.35s ease, padding-left 0.35s ease;
        }
        .pp-input::placeholder {
          color: rgba(90, 33, 50, 0.45);
          font-weight: 400;
          transition: opacity 0.3s ease;
        }
        .pp-input:focus::placeholder { opacity: 0.35; }
        .pp-input:focus,
        .pp-select:focus {
          padding-left: 6px;
        }
        @media (min-width: 1024px) {
          .pp-input, .pp-select { font-size: 17px; padding: 19px 0; }
          .pp-input:focus, .pp-select:focus { padding-left: 8px; }
        }

        /* animated focus underline */
        .pp-field::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background: #5A2132;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .pp-field:focus-within::after { transform: scaleX(1); }

        .pp-select {
          cursor: pointer;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          padding-right: 30px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='%235A2132' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 2px center;
          background-size: 13px;
          transition: border-color 0.35s ease, padding-left 0.35s ease, background-color 0.35s ease;
        }
        .pp-select option {
          background: #E6DEC8;
          color: #5A2132;
        }
        .pp-select:invalid {
          color: rgba(90, 33, 50, 0.45);
          font-weight: 400;
        }

        /* ─────────── Submit button ─────────── */
        .pp-submit-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 14px;
          padding: 19px 48px;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          background-color: #5A2132;
          color: #E6DEC8;
          border: none;
          border-radius: 999px;
          cursor: pointer;
          overflow: hidden;
          font-family: inherit;
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease, background-color 0.35s ease;
        }
        .pp-submit-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -80%;
          width: 55%;
          height: 100%;
          background: linear-gradient(105deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0) 100%);
          transform: skewX(-22deg);
          transition: left 0.65s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .pp-submit-btn:hover {
          background-color: #421522;
          color: #ffffff;
          transform: translateY(-3px);
          box-shadow: 0 18px 45px rgba(90, 33, 50, 0.35);
        }
        .pp-submit-btn:hover::before { left: 130%; }
        .pp-submit-btn:active { transform: translateY(-1px); }
        .pp-submit-btn svg { transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1); }
        .pp-submit-btn:hover svg { transform: translateX(5px); }
        @media (min-width: 1024px) {
          .pp-submit-btn { padding: 21px 56px; font-size: 14px; }
        }

        /* ─────────── Premium card ─────────── */
        .pp-card {
          position: relative;
          border-radius: 22px;
          padding: 38px 30px;
          background: rgba(90, 33, 50, 0.035);
          border: 1px solid rgba(90, 33, 50, 0.25);
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.4s ease, box-shadow 0.4s ease, background 0.4s ease;
        }
        .pp-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 24px;
          right: 24px;
          height: 1px;
          background: linear-gradient(to right, rgba(90, 33, 50, 0), rgba(90, 33, 50, 0.7), rgba(90, 33, 50, 0));
          opacity: 0.55;
        }
        .pp-card:hover {
          transform: translateY(-4px);
          background: rgba(90, 33, 50, 0.055);
          border-color: rgba(90, 33, 50, 0.5);
          box-shadow: 0 24px 55px rgba(90, 33, 50, 0.15);
        }
        @media (min-width: 1024px) {
          .pp-card { padding: 48px 40px; }
        }

        .pp-corner { opacity: 0.75; transition: opacity 0.4s ease; }
        .pp-card:hover .pp-corner { opacity: 1; }

        /* ─────────── Main layout: text LEFT, form RIGHT ─────────── */
        .pp-main-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 50px;
          align-items: start;
        }
        @media (min-width: 1024px) {
          .pp-main-grid {
            grid-template-columns: 1fr 1fr;
            column-gap: 80px;
          }
          .pp-col-text { grid-column: 1; grid-row: 1; }
          .pp-col-form { grid-column: 2; grid-row: 1; }

          /* ✅ Left text column vertically centered against the form height */
          .pp-col-text {
            align-self: stretch;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
        }

        /* ─────────── Numbered copy blocks ─────────── */
        .pp-block {
          position: relative;
          padding-left: 58px;
        }
        .pp-block-num {
          position: absolute;
          left: 0;
          top: 4px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.18em;
          color: rgba(90, 33, 50, 0.65);
          font-family: var(--font-serif);
        }
        .pp-block-num::after {
          content: "";
          display: block;
          width: 26px;
          height: 1px;
          margin-top: 8px;
          background: rgba(90, 33, 50, 0.45);
        }
      `}</style>

      {/* ambient layers */}
      <div className="pp-glow pp-glow-1" />
      <div className="pp-glow pp-glow-2" />
      <div className="pp-grain" />

      <div className="pp-section-inner">
        <div className="container mx-auto px-4 max-w-[1600px]">
          {/* ─── Header ─── */}
          <div className="pp-ornament pp-reveal">
            <div style={{ maxWidth: "100%" }} className="w-full">
              <div className="pp-eyebrow">Private Partnership</div>
              <div className="grid gap-[20px] lg:gap-x-[60px] lg:grid-cols-2 items-start">
                <h2
                  className="h2 lg:col-start-1 font-bold text-[38px] sm:text-[50px] lg:text-[66px] leading-[0.95]"
                  style={{
                    color: "#5A2132",
                    fontFamily: "var(--font-serif)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Partner{" "}
                  <em style={{ fontStyle: "italic", fontWeight: 500 }}>With</em>{" "}
                  Us
                </h2>
                <div className="lg:col-start-2 flex flex-col gap-6 lg:gap-8">
                  <h3
                    className="font-bold text-[20px] sm:text-[24px] lg:text-[26px] leading-[1.2]"
                    style={{
                      color: "#5A2132",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    Request a Strategic Assessment.
                  </h3>
                  <p
                    className="normal-case font-normal text-[15px] lg:text-[17px] leading-[1.65] opacity-90"
                    style={{ color: "#5A2132" }}
                  >
                    You have the capital. What you don't have is time to learn
                    Amazon the hard way — or a team that already has.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ─── Persuasion Copy + Form Grid ─── */}
          <div className="pp-main-grid">
            {/* Left Column: Copy (vertically centered against form) */}
            <div className="pp-col-text flex flex-col gap-10 lg:gap-12">
              <div className="pp-block pp-reveal pp-delay-1">
                <span className="pp-block-num">01</span>
                <p
                  className="normal-case text-[15px] lg:text-[17px] leading-[1.7] opacity-90"
                  style={{ color: "#5A2132" }}
                >
                  Most first-time founders stall right here: too many decisions,
                  no one to make the call. Which market. How much to invest. Who
                  sources the product. Who runs the ads. Every week spent
                  figuring it out alone is a week a competitor closes the gap.
                </p>
              </div>

              <div className="pp-block pp-reveal pp-delay-2">
                <span className="pp-block-num">02</span>
                <p
                  className="normal-case text-[15px] lg:text-[17px] leading-[1.7] opacity-90"
                  style={{ color: "#5A2132" }}
                >
                  You don't need to become an Amazon expert. You need one
                  partner who already is — from the LLC to the P&L.
                </p>
              </div>

              <div
                className="pp-reveal pp-delay-3"
                style={{
                  borderTop: "1px solid rgba(90, 33, 50, 0.25)",
                  paddingTop: "32px",
                }}
              >
                <p
                  className="font-bold text-[17px] lg:text-[19px] leading-[1.6]"
                  style={{ color: "#5A2132", fontFamily: "var(--font-serif)" }}
                >
                  Tell us where you are. We'll tell you honestly whether there's
                  a credible business here, and what it would take to build it.
                </p>
              </div>

              {/* Who This Is For */}
              <div className="pp-card pp-reveal pp-delay-4">
                {/* Corner Brackets */}
                <span
                  className="absolute inset-0 pointer-events-none"
                  style={{ color: "#5A2132" }}
                >
                  <svg
                    className="pp-corner"
                    style={{ position: "absolute", top: "16px", left: "16px" }}
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 18L14 18M18 14L18 0"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                  <svg
                    className="pp-corner"
                    style={{ position: "absolute", top: "16px", right: "16px" }}
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 18L5 18M1 14L1 0"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                  <svg
                    className="pp-corner"
                    style={{
                      position: "absolute",
                      bottom: "16px",
                      left: "16px",
                    }}
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 1L14 1M18 5L18 19"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                  <svg
                    className="pp-corner"
                    style={{
                      position: "absolute",
                      bottom: "16px",
                      right: "16px",
                    }}
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 1L5 1M1 5L1 19"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </span>

                <div className="relative z-10">
                  <div className="flex items-center gap-3.5 mb-5">
                    <span
                      className="w-3.5 h-3.5 shrink-0"
                      style={{
                        backgroundColor: "#5A2132",
                        transform: "rotate(45deg)",
                        borderRadius: "2px",
                      }}
                    />
                    <h4
                      className="font-bold text-[18px] sm:text-[20px] lg:text-[22px]"
                      style={{
                        color: "#5A2132",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "0.01em",
                      }}
                    >
                      Who This Is For
                    </h4>
                  </div>
                  <p
                    className="normal-case text-[15px] lg:text-[17px] leading-[1.7] opacity-90 mb-4"
                    style={{ color: "#5A2132" }}
                  >
                    Founders who want a real business: evidence-led decisions,
                    and an asset that can eventually run without them.
                  </p>
                  <p
                    className="normal-case text-[14px] lg:text-[15px] leading-[1.65] opacity-70 italic"
                    style={{ color: "#5A2132" }}
                  >
                    Not a fit for speculative launches, or founders looking for
                    isolated tasks without a plan behind them.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="pp-col-form pp-reveal pp-delay-2">
              {submitted ? (
                <div
                  className="pp-card text-center"
                  style={{ minHeight: "420px" }}
                >
                  <div className="relative z-10 flex flex-col items-center justify-center h-full gap-6 py-16">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-2"
                      style={{
                        border: "1.5px solid rgba(90, 33, 50, 0.55)",
                      }}
                    >
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#5A2132"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3
                      className="font-bold text-[24px] lg:text-[28px]"
                      style={{
                        color: "#5A2132",
                        fontFamily: "var(--font-serif)",
                      }}
                    >
                      Assessment Requested
                    </h3>
                    <p
                      className="text-[15px] lg:text-[17px] leading-[1.7] opacity-90 max-w-[400px]"
                      style={{ color: "#5A2132" }}
                    >
                      We review every inquiry against our current capacity.
                      Where there's a fit, an account analyst will reach out to
                      walk through the business case.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                  <div className="pp-field">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      required
                      className="pp-input"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="pp-field">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      className="pp-input"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="pp-field">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone / WhatsApp"
                      className="pp-input"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="pp-field">
                    <input
                      type="text"
                      name="country"
                      placeholder="Country"
                      required
                      className="pp-input"
                      value={formData.country}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="pp-field">
                    <select
                      name="businessStage"
                      required
                      className="pp-select"
                      value={formData.businessStage}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Current Business Stage
                      </option>
                      <option value="idea">Idea / Research Phase</option>
                      <option value="pre-launch">Pre-Launch</option>
                      <option value="launched">
                        Launched — Under 12 Months
                      </option>
                      <option value="established">
                        Established — 12+ Months
                      </option>
                      <option value="scaling">Scaling / Multi-Product</option>
                    </select>
                  </div>
                  <div className="pp-field">
                    <select
                      name="capital"
                      required
                      className="pp-select"
                      value={formData.capital}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Available Capital
                      </option>
                      <option value="under-25k">Under $25,000</option>
                      <option value="25k-50k">$25,000 – $50,000</option>
                      <option value="50k-100k">$50,000 – $100,000</option>
                      <option value="100k-250k">$100,000 – $250,000</option>
                      <option value="250k-plus">$250,000+</option>
                    </select>
                  </div>
                  <div className="pp-field">
                    <select
                      name="objective"
                      required
                      className="pp-select"
                      value={formData.objective}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Primary Objective
                      </option>
                      <option value="build-to-sell">Build to Sell</option>
                      <option value="long-term-cash-flow">
                        Long-Term Cash Flow
                      </option>
                      <option value="portfolio">Portfolio Growth</option>
                    </select>
                  </div>

                  <div className="mt-10 lg:mt-14">
                    <button type="submit" className="pp-submit-btn">
                      Request a Strategic Assessment
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
