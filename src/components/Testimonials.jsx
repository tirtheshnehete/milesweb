"use client";

// Using pravatar.cc for realistic dummy avatar photos
// In production, replace these with your actual customer photos
const avatarUrls = [
  "https://i.pravatar.cc/96?img=11",
  "https://i.pravatar.cc/96?img=32",
  "https://i.pravatar.cc/96?img=47",
  "https://i.pravatar.cc/96?img=15",
  "https://i.pravatar.cc/96?img=23",
  "https://i.pravatar.cc/96?img=56",
  "https://i.pravatar.cc/96?img=63",
  "https://i.pravatar.cc/96?img=18",
  "https://i.pravatar.cc/96?img=44",
  "https://i.pravatar.cc/96?img=29",
];

const row1 = [
  { date: "3 days ago", title: "Excellent support quality", body: "I had an outstanding experience with the support team at MilesWeb! They not only resolved my issue swiftly but did so with the utmost professionalism and a friendly attitude.", name: "Jaison J", img: 0 },
  { date: "5 days ago", title: "Exceptional hosting service", body: "MilesWeb constantly delivers on their promises of uptime and excellent service. Their team handled everything with ease, and I couldn't be more impressed with the service.", name: "Vineet B", img: 1 },
  { date: "3 days ago", title: "Superior Performance and Reliability", body: "MilesWeb is a super-fast and reliably engineered host. For anyone who is serious about maintaining a powerful online presence, I surely recommend going with them.", name: "Swagatika S", img: 2 },
  { date: "2 days ago", title: "Ideal for High-Growth Business Owners", body: "With SSD NVMe storage, LiteSpeed servers, and an intuitive control panel, I maximize my online business presence with MilesWeb's high-performance hosting plans.", name: "Firos K", img: 3 },
  { date: "7 days ago", title: "Highly recommended hosting provider", body: "MilesWeb has been an exceptional hosting partner. Their 24/7 support and incredible uptime have made managing my online presence completely stress-free.", name: "Rahul M", img: 4 },
];

const row2 = [
  { date: "12 days ago", title: "Website running smoothly", body: "Their high-quality servers, reliable customer support, and ample bandwidth consistently keep my website running smoothly without any hiccups whatsoever.", name: "Anika T", img: 5 },
  { date: "8 days ago", title: "Delightful experience with MilesWeb", body: "MilesWeb's support is exceptional in multiple instances, they efficiently resolved issues during chat sessions, earning high praise from Australia.", name: "Paul Gibson", img: 6 },
  { date: "6 days ago", title: "Support team is superb", body: "It was a super support team experience. Their technical support is compelling and supportive 24x7. I would definitely recommend MilesWeb to anyone.", name: "Kamal S", img: 7 },
  { date: "10 days ago", title: "Absolutely Love MilesWeb", body: "Their tech support expertise is just unbelievable. I highly recommend MilesWeb to anyone looking for the most dependable hosting provider.", name: "Sbio S", img: 8 },
  { date: "4 days ago", title: "Fast, reliable and affordable", body: "I switched from another provider and the difference is night and day. MilesWeb offers blazing fast speeds and rock-solid reliability at a very competitive price.", name: "Deepa R", img: 9 },
];

function TrustpilotStars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="w-5 h-5 rounded-sm flex items-center justify-center flex-shrink-0" style={{ background: "#00b67a" }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      ))}
    </div>
  );
}

function TestimonialCard({ t }) {
  return (
    <div
      className="flex-shrink-0 rounded-2xl flex flex-col"
      style={{
        width: "460px",
        padding: "32px 32px 28px",
        border: "1.5px solid #e2e8f0",
        background: "#fff",
      }}
    >
      <p className="text-sm text-gray-400 mb-3.5">{t.date}</p>
      <h3 className="font-bold text-gray-900 mb-3 leading-snug" style={{ fontSize: "18px" }}>
        {t.title}
      </h3>
      <p className="text-gray-500 leading-relaxed mb-6 flex-1" style={{ fontSize: "14.5px", lineHeight: "1.75" }}>
        {t.body}
      </p>
      <div className="flex items-center gap-3.5 mt-auto">
        {/* Avatar photo */}
        <img
          src={avatarUrls[t.img]}
          alt={t.name}
          width={46}
          height={46}
          className="rounded-full flex-shrink-0 object-cover"
          style={{ border: "2px solid #e2e8f0", width: "46px", height: "46px" }}
        />
        <div>
          <div className="text-sm font-semibold text-gray-900 mb-1">{t.name}</div>
          <TrustpilotStars />
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ items, direction = "left", className = "" }) {
  const doubled = [...items, ...items];
  const animName = direction === "left" ? "marqueeLeft" : "marqueeRight";
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="flex"
        style={{
          gap: "24px",
          width: "max-content",
          animation: `${animName} 50s linear infinite`,
        }}
        onMouseEnter={e => (e.currentTarget.style.animationPlayState = "paused")}
        onMouseLeave={e => (e.currentTarget.style.animationPlayState = "running")}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <>
      <style>{`
        @keyframes marqueeLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <section className="bg-white py-16">
        {/* Header */}
        <div className="text-center px-4 mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
            Hear what our customers have to say
          </h2>
          <p className="text-gray-500 text-base">
            We highly appreciate the kind and stellar feedback from our customers immensely.
          </p>
        </div>

        {/* Row 1 — right to left (always shown) */}
        <MarqueeRow items={row1} direction="left" />

        {/* Row 2 — left to right (hidden on mobile) */}
        <MarqueeRow items={row2} direction="right" className="hidden sm:block mt-6" />
      </section>
    </>
  );
}