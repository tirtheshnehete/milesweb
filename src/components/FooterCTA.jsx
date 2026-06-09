export default function FooterCTA() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div
          className="relative overflow-hidden rounded-3xl px-16 py-16 sm:py-20 flex flex-col justify-center"
          style={{
            background: "#2355f5",
            minHeight: "280px",
          }}
        >
          {/* Diagonal stripe pattern — right side */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `repeating-linear-gradient(
                -55deg,
                transparent,
                transparent 18px,
                rgba(255,255,255,0.06) 18px,
                rgba(255,255,255,0.06) 36px
              )`,
            }}
          />

          {/* Right radial glow overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 85% 50%, rgba(50,90,255,0.5) 0%, transparent 65%)",
            }}
          />

          {/* Content — left aligned */}
          <div className="relative z-10 max-w-xl">
            <p
              className="text-sm font-normal mb-4"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              Best Value Without Renewal Surprises
            </p>

            <h2
              className="font-extrabold leading-tight mb-8"
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                color: "#ffffff",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              Save up to 80% today — pay<br className="hidden sm:block" />
              the same at renewal.
            </h2>

            
              <a href="#pricing"
              className="inline-flex items-center font-bold rounded-xl mb-5 transition-colors hover:bg-blue-50"
              style={{
                background: "#ffffff",
                color: "#1a3fcc",
                fontSize: "15px",
                padding: "14px 32px",
                textDecoration: "none",
              }}
            >
              Claim Offer Now
            </a>

            <p
              className="text-sm font-normal"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              30-day money-back guarantee • No hidden charges
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}