
"use client";
const features = [
  {
    title: "Fast Indian servers",
    desc: "Instant loading with NVMe SSD for zero latency, higher engagement, and better SEO.",
    iconBg: "#e8f0fe",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="4" rx="1" /><rect x="2" y="10" width="20" height="4" rx="1" /><rect x="2" y="17" width="20" height="4" rx="1" />
        <circle cx="18" cy="5" r="1" fill="#3b82f6" /><circle cx="18" cy="12" r="1" fill="#3b82f6" /><circle cx="18" cy="19" r="1" fill="#3b82f6" />
      </svg>
    ),
  },
  {
    title: "24×7 expert human support",
    desc: "Get instant help from our trained experts– no bots, automated systems, or delayed tickets.",
    iconBg: "#fef3e2",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "Free website migration",
    desc: "Switching from another host? We migrate your site free with zero downtime or interruptions.",
    iconBg: "#e8f5ee",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="16 16 12 12 8 16" /><line x1="12" y1="12" x2="12" y2="21" />
        <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
      </svg>
    ),
  },
  {
    title: "Transparent, fair pricing",
    desc: "No hidden renewals. With transparent pricing, what you see is exactly what you pay long term.",
    iconBg: "#f0ebfe",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
  },
  {
    title: "Optimized for SMB websites",
    desc: "Get optimized Indian SMB hosting plans. Run WordPress, eCommerce, or other sites.",
    iconBg: "#e8f0fe",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" />
        <path d="M15.54 8.46a5 5 0 010 7.07M8.46 8.46a5 5 0 000 7.07" />
      </svg>
    ),
  },
  {
    title: "Daily backups",
    desc: "We include automated, daily backups for your site. Just a click and get data restored anytime.",
    iconBg: "#fef3e2",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 12a9 9 0 109 9" /><polyline points="3 3 3 9 9 9" />
      </svg>
    ),
  },
];


export default function WhyTrust() {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(135deg, #dce8fa 0%, #f0eaf8 50%, #f8eaf0 100%)",
      }}
    >
      {/* Title — no blue highlight, pure black */}
      <h2
        className="font-extrabold text-gray-900 text-center mb-14 leading-tight"
        style={{ fontSize: "clamp(24px, 3vw, 38px)", maxWidth: "860px", margin: "0 auto 56px" }}
      >
        Why 10,00,000+ websites trust MilesWeb hosting
      </h2>

      {/* 3×2 grid — dividers only, no card shadows */}
      <div
        className="mx-auto mb-14 bg-white"
        style={{
          maxWidth: "1200px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          border: "1px solid #dde3ee",
          borderRadius: "4px",
          overflow: "hidden",
        }}
      >
        {features.map((f, i) => {
          const isLastRow = i >= 3;
          const isLastCol = (i + 1) % 3 === 0;
          return (
            <div
              key={f.title}
              className="p-10 sm:p-12"
              style={{
                borderRight: isLastCol ? "none" : "1px solid #dde3ee",
                borderBottom: isLastRow ? "none" : "1px solid #dde3ee",
              }}
            >
              {/* Icon circle */}
              <div
                className="flex items-center justify-center rounded-full mb-7 flex-shrink-0"
                style={{ width: "56px", height: "56px", background: f.iconBg }}
              >
                {f.icon}
              </div>

              <h3
                className="font-bold text-gray-900 mb-5 leading-snug"
                style={{ fontSize: "20px" }}
              >
                {f.title}
              </h3>

              <p className="text-gray-500 leading-relaxed" style={{ fontSize: "15px" }}>
                {f.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="text-center">
        
          <a href="#pricing"
          className="inline-block font-semibold text-white rounded-xl transition-colors"
          style={{
            background: "#2563eb",
            fontSize: "15px",
            padding: "14px 44px",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#1d4ed8")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#2563eb")}
        >
          Get Started
        </a>
      </div>
    </section>
  );
}