"use client";

import { useEffect, useRef, useState } from "react";

const cards = [
  {
    tag: "Cloud Hosting",
    title: "High-performance cloud hosting",
    desc: "Feature-rich cloud hosting with top-tier server specs and high uptime for consistent performance.",
    cta: "View Plans and Pricing",
    textSide: "right",
    imgContent: "cloud",
  },
  {
    tag: "Website Builder",
    title: "Build a professional website in minutes.",
    desc: "Our AI website builder creates your website in minutes — perfect for launching fast on MilesWeb hosting.",
    cta: "Create Your Website",
    textSide: "left",
    imgContent: "builder",
  },
  {
    tag: "Business Email",
    title: "Professional email for your business",
    desc: "Get secure, professional email accounts with your own domain — no website hosting required.",
    cta: "Get Started",
    textSide: "right",
    imgContent: "email",
  },
  {
    tag: "Domain Name Generator",
    title: "Your ideal domain starts here",
    desc: "Find the perfect domain name in seconds with our AI-powered domain generator.",
    cta: "Get Your Domain",
    textSide: "left",
    imgContent: "domain",
  },
];

const IMAGES = {
  cloud: "/images/optimized-cloud.avif",
  builder: "/images/ai-website-builder.avif",
  email: "/images/professional-emails.avif",
  domain: "/images/ai-domain-generator.avif",
};

export default function StackedScrollCards() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

 useEffect(() => {
  if (isMobile) return;

  const section = sectionRef.current;
  if (!section) return;

  const handleScroll = () => {
    const rect = section.getBoundingClientRect();

    const progress = Math.min(
      Math.max(
        -rect.top /
          (rect.height - window.innerHeight),
        0
      ),
      1
    );

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const segment = 1 / cards.length;

      const start = index * segment;
      const localProgress =
        (progress - start) / segment;

      const p = Math.max(
        0,
        Math.min(localProgress, 1)
      );

      if (index === 0) {
        card.style.transform =
          "translateY(0%) scale(1)";
      } else {
        card.style.transform =
          `translateY(${(1 - p) * 120}%) scale(1)`;
      }

      card.style.zIndex =
        String(index + 1);

      card.style.transition =
  "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)";
    });
  };

  handleScroll();

  window.addEventListener(
    "scroll",
    handleScroll,
    { passive: true }
  );

  return () =>
    window.removeEventListener(
      "scroll",
      handleScroll
    );
}, [isMobile]);

  if (isMobile) {
    return (
      <section className="bg-gray-100 py-8 px-4">
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div
                className={`flex-1 p-6 flex flex-col justify-center gap-5 ${
                  card.textSide === "right"
                    ? "md:order-2"
                    : "md:order-1"
                }`}
              >
                <span className="bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded-full w-fit">
                  {card.tag}
                </span>

                <h2 className="text-2xl font-bold text-gray-900">
                  {card.title}
                </h2>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {card.desc}
                </p>

                <a
                  href="#"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg w-fit text-sm font-semibold transition"
                >
                  {card.cta}
                </a>
              </div>

              <div className="min-h-[250px]">
                <img
                  src={IMAGES[card.imgContent]}
                  alt={card.tag}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `${cards.length * 80}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-gray-100">
        {cards.map((card, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className="absolute inset-0 flex items-center justify-center p-6 will-change-transform"
            style={{
  zIndex: i + 1,
  transform:
    i === 0
      ? "translateY(0%)"
      : "translateY(120%)",
}}
          >
            <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden max-w-5xl w-full min-h-[420px]">
              {/* TEXT */}
              <div
                className={`flex-1 p-10 flex flex-col justify-center gap-5 ${
                  card.textSide === "right"
                    ? "md:order-2"
                    : "md:order-1"
                }`}
              >
                <span className="bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded-full w-fit">
                  {card.tag}
                </span>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {card.title}
                </h2>

                <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md">
                  {card.desc}
                </p>

                <a
                  href="#"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg w-fit text-sm font-semibold transition"
                >
                  {card.cta}
                </a>
              </div>

              {/* IMAGE */}
              <div
                className={`flex-1 min-h-[300px] ${
                  card.textSide === "right"
                    ? "md:order-1"
                    : "md:order-2"
                }`}
              >
                <img
                  src={IMAGES[card.imgContent]}
                  alt={card.tag}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}