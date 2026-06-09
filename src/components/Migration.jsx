"use client";
import Image from "next/image";

const checkItems = [
  "Free website migrations by qualified experts",
  "No downtime during the actual transfer",
  "No data lost or links broken during the migration",
  "Support for WordPress and CMS",
  "Comprehensive post-migration testing",
];

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#22c55e"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Migration() {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-10"
      style={{
        background:
          "radial-gradient(ellipse at 70% 50%, #0d1a6e 0%, #030712 55%)",
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* ── LEFT: Text ── */}
        <div>
          <h2
            className="font-extrabold text-white leading-tight mb-5"
            style={{
              fontSize: "clamp(28px, 4vw, 46px)",
              letterSpacing: "-0.02em",
            }}
          >
            Switch to MilesWeb with zero downtime
          </h2>

          <p className="text-gray-400 text-base leading-relaxed mb-8">
            Our experts migrate your site for free — no data loss, no hassle.
          </p>

          <p className="text-white font-bold text-sm mb-4">
            Why you can migrate with confidence
          </p>

          <ul className="flex flex-col gap-3.5 mb-10">
            {checkItems.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-gray-300 text-sm sm:text-base"
              >
                <span className="flex-shrink-0">
                  <CheckIcon />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <a
            href="#pricing"
            className="inline-flex items-center font-bold text-white rounded-xl transition-colors mb-4"
            style={{
              background: "#2563eb",
              fontSize: "16px",
              padding: "14px 32px",
              textDecoration: "none",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "#1d4ed8")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "#2563eb")
            }
          >
            Migrate Now
          </a>

          <p className="text-sm" style={{ color: "#6b7280" }}>
            Free migration • Zero downtime
          </p>
        </div>

        {/* ── RIGHT: Image ── */}
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-[520px] h-[560px] rounded-2xl overflow-hidden">
            <img
              src="/images/migration.avif"
              alt="Migration expert"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}