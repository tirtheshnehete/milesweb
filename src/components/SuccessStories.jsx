"use client";
import Image from "next/image";
import { useState } from "react";

const stories = [
  {
    name: "Jaydev Solanki",
    company: "CEO of Search Minds Pvt Ltd",
    quote: (
      <>
        MilesWeb has ensured seamless website{" "}
        <span style={{ color: "#3b7de9" }}>performance</span> and consistent service{" "}
        <span style={{ color: "#3b7de9" }}>stability.</span>
      </>
    ),
    image: "/images/solanki.png",
    initials: "JS",
  },
  {
    name: "Gaurav Patil",
    company: "CEO of Standard Wings Technologies",
    quote: (
      <>
        The team has consistently delivered prompt and{" "}
        <span style={{ color: "#3b7de9" }}>professional support</span> whenever required.
      </>
    ),
    image: "/images/gaurav-p.png",
    initials: "GP",
  },
];

export default function SuccessStories() {
  const [current, setCurrent] = useState(0);
  const total = stories.length;
  const s = stories[current];

  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #dde8f8 0%, #f0eaf8 50%, #f8eaf0 100%)",
        padding: "90px 20px 100px",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "36px",
          fontWeight: 900,
          color: "#111",
          marginBottom: "56px",
        }}
      >
        Customer success stories
      </h2>

      {/* Card */}
      <div
        style={{
          maxWidth: "1250px",   // increased again
          margin: "0 auto",
          background: "#fff",
          borderRadius: "28px",
          padding: "72px 80px 72px 56px", // bigger padding
          display: "flex",
          alignItems: "center",
          gap: "72px", // more breathing space
          flexWrap: "wrap",
          boxShadow: "0 25px 70px rgba(0,0,0,0.10)",
        }}
      >
        {/* Person image */}
        <div
          style={{
            flexShrink: 0,
            width: "300px",  // bigger
            height: "320px", // bigger
            borderRadius: "20px",
            overflow: "hidden",
            background: "#e0e8f5",
            position: "relative",
          }}
        >
          <Image
            src={s.image}
            alt={s.name}
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        </div>

        {/* Quote area */}
        <div style={{ flex: 1, minWidth: "340px" }}>
          {/* Quote icon */}
          <div
            style={{
              width: "58px",
              height: "58px",
              background: "#e8f0fc",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "28px",
            }}
          >
            <span
              style={{
                fontSize: "32px",
                fontWeight: 900,
                color: "#3b7de9",
              }}
            >
              &#8220;
            </span>
          </div>

          {/* Quote text */}
          <p
            style={{
              fontSize: "26px", // increased
              fontWeight: 600,
              color: "#111",
              lineHeight: 1.7,
            }}
          >
            {s.quote}{" "}
            <a
              href="#"
              style={{
                display: "inline-block",
                marginLeft: "12px",
                padding: "6px 18px",
                border: "1px solid #cdd8ec",
                borderRadius: "10px",
                fontSize: "14px",
                color: "#333",
                background: "#f5f8ff",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Read More
            </a>
          </p>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid #e8eaf0",
              margin: "30px 0 22px",
            }}
          />

          <div
            style={{
              fontSize: "20px",
              fontWeight: 900,
              color: "#111",
              marginBottom: "6px",
            }}
          >
            {s.name}
          </div>

          <div style={{ fontSize: "16px", color: "#555" }}>
            {s.company}
          </div>
        </div>
      </div>

      {/* Nav buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        {[{ dir: -1, label: "←" }, { dir: 1, label: "→" }].map(
          ({ dir, label }) => (
            <button
              key={dir}
              onClick={() =>
                setCurrent((current + dir + total) % total)
              }
              style={{
                width: "54px",
                height: "54px",
                borderRadius: "50%",
                border: "1.5px solid #c0c8d8",
                background: "#fff",
                cursor: "pointer",
                fontSize: "20px",
                color: "#444",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {label}
            </button>
          )
        )}
      </div>
    </section>
  );
}