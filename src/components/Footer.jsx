import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#080d22",
        color: "#9ca3af",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "72px 40px 0",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[300px_1fr_1fr_1fr_1fr] gap-x-12 gap-y-10 pb-14">
          {/* ── BRAND COL ── */}
          <div>
            <div className="text-white font-extrabold text-2xl tracking-tight mb-0.5">
              MilesWeb
            </div>

            <div className="text-sm text-gray-400 mb-1">
              Your Hosting, Our Responsibility.
            </div>

            <div
              className="w-12 h-[3px] rounded mb-5"
              style={{
                background:
                  "linear-gradient(90deg,#f59e0b 50%,#3b82f6 50%)",
              }}
            />

            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-[280px]">
              Founded in 2012, MilesWeb is an Indian web hosting company that
              helps businesses, developers, and startups host their websites
              reliably in India and globally.
            </p>

            {/* BADGES */}
            <div className="flex gap-3 items-end mb-7">
              <Image
                src="/images/b1.png"
                alt="badge 1"
                width={70}
                height={80}
                className="w-[80px] h-[90px] object-contain"
              />

              <Image
                src="/images/badge2.png"
                alt="badge 2"
                width={70}
                height={90}
                className="w-[80px] h-[100px] object-contain"
              />

              <Image
                src="/images/b3.png"
                alt="badge 3"
                width={70}
                height={80}
                className="w-[80px] h-[90px] object-contain"
              />
            </div>

            {/* Social icons */}
            <div className="flex gap-2.5">
              {[
                <svg
                  key="fb"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>,

                <span key="x" className="text-xs font-black">
                  𝕏
                </span>,

                <svg
                  key="li"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>,

                <svg
                  key="ig"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>,

                <svg
                  key="yt"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                  <polygon
                    points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
                    fill="#080d22"
                  />
                </svg>,
              ].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-400 hover:text-white transition-colors"
                  style={{ border: "1.5px solid #374151" }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="HOSTING"
            links={[
              "Web Hosting",
              "Free Domain",
              "Shared Hosting",
              "Cloud Hosting",
              "WordPress Hosting",
              "WooCommerce Hosting",
              "Agency Hosting",
              "Enterprise Hosting",
              "Windows hosting",
              "Reseller Hosting",
              "Node.js Hosting",
              "Laravel Hosting",
              "Python Hosting",
              "SSL Certificates",
            ]}
          >
            <FooterSubSection
              title="AFFILIATE"
              links={["Refer & Earn"]}
            />
          </FooterCol>

          <FooterCol
            title="SERVERS"
            links={[
              "VPS Hosting",
              "Windows VPS",
              "Managed VPS",
              "n8n VPS",
              "cPanel VPS",
              "Forex VPS",
              "CyberPanel VPS",
              "Plesk VPS",
              "Virtual Dedicated Server",
              "Dedicated Server",
              "Bare Metal",
              "GPU Dedicated Server",
              "MilesWeb Competitor",
            ]}
          />

          <FooterCol
            title="CLOUD"
            links={[
              "Cloud VPS",
              "GPU Cloud",
              "Managed AWS Cloud",
              "Acronis Backup",
              "Google Workspace",
            ]}
          >
            <FooterSubSection
              title="TOOLS"
              links={[
                "AI Website Builder",
                "AI Business Name Generator",
                "Smart Web Tools",
              ]}
            />
          </FooterCol>

          <FooterCol
            title="COMPANY"
            links={[
              "About MilesWeb",
              "Customer Reviews",
              "Success Stories",
              "Brand Assets",
              "Blog",
              "Knowledge Base",
              "Video Tutorials",
              "Contact Us",
              "Sitemap",
            ]}
          >
            <FooterSubSection
              title="LEGAL"
              links={[
                "Privacy Policy",
                "Terms of Service",
                "SLA",
              ]}
            />
          </FooterCol>
        </div>
      </div>

      {/* Payment bar */}
      <div
        className="border-t flex flex-wrap items-center justify-end gap-2.5 px-10 py-5"
        style={{ borderColor: "#1e2a4a" }}
      >
        {[
          <span
            key="visa"
            style={{
              fontFamily: "Georgia,serif",
              fontStyle: "italic",
              fontWeight: 900,
              color: "#1a1aff",
              fontSize: "14px",
              letterSpacing: "-1px",
            }}
          >
            VISA
          </span>,

          <div
            key="mc"
            style={{
              position: "relative",
              width: "36px",
              height: "22px",
            }}
          >
            <div
              style={{
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: "#eb001b",
                position: "absolute",
                left: 0,
                opacity: 0.9,
              }}
            />
            <div
              style={{
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: "#f79e1b",
                position: "absolute",
                left: "14px",
                opacity: 0.9,
              }}
            />
          </div>,

          <span key="rupay">
            <span
              style={{
                color: "#2c6ecd",
                fontWeight: 800,
                fontSize: "11px",
              }}
            >
              Ru
            </span>
            <span
              style={{
                color: "#ef4444",
                fontWeight: 800,
                fontSize: "11px",
              }}
            >
              Pay
            </span>
          </span>,

          <span
            key="upi"
            style={{
              color: "#5f259f",
              fontWeight: 700,
              fontSize: "11px",
            }}
          >
            UPI
          </span>,

          <span key="gpay" style={{ fontSize: "11px" }}>
            <span style={{ color: "#4285f4" }}>G</span>
            <span style={{ color: "#ea4335" }}>o</span>
            <span style={{ color: "#fbbc05" }}>o</span>
            <span style={{ color: "#4285f4" }}>g</span>
            <span style={{ color: "#34a853" }}>l</span>
            <span style={{ color: "#ea4335" }}>e</span>
            <span style={{ color: "#555", fontWeight: 600 }}>
              {" "}
              Pay
            </span>
          </span>,

          <span
            key="pp"
            style={{
              color: "#6739b7",
              fontWeight: 800,
              fontSize: "11px",
            }}
          >
            PhonePe
          </span>,
        ].map((pm, i) => (
          <div
            key={i}
            className="bg-white rounded-md flex items-center justify-center px-2.5"
            style={{
              height: "32px",
              minWidth: "52px",
            }}
          >
            {pm}
          </div>
        ))}

        <span className="text-sm text-gray-500 ml-1">
          And{" "}
          <a
            href="#"
            className="underline hover:text-white transition-colors"
          >
            more payment options
          </a>
          .
        </span>
      </div>

      {/* Copyright */}
      <div
        className="border-t text-center text-xs text-gray-600 py-4 px-6"
        style={{ borderColor: "#1e2a4a" }}
      >
        © Copyright 2012 – 2026 MilesWeb Internet Services Pvt Ltd – Best Web
        Hosting Provider in India. Company Registration No. 269947. GSTIN
        27AAKCM0202D1Z2.
      </div>
    </footer>
  );
}

function FooterCol({ title, links, children }) {
  return (
    <div>
      <h4 className="text-white font-bold text-xs tracking-widest mb-5">
        {title}
      </h4>

      <div className="flex flex-col gap-3">
        {links.map((link) => (
          <FooterLink key={link} href="#">
            {link}
          </FooterLink>
        ))}
      </div>

      {children}
    </div>
  );
}

function FooterSubSection({ title, links }) {
  return (
    <div className="mt-8">
      <h4 className="text-white font-bold text-xs tracking-widest mb-5">
        {title}
      </h4>

      <div className="flex flex-col gap-3">
        {links.map((link) => (
          <FooterLink key={link} href="#">
            {link}
          </FooterLink>
        ))}
      </div>
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="group relative text-gray-400 text-sm w-fit pb-px hover:text-white transition-colors"
      style={{ textDecoration: "none" }}
    >
      {children}

      <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-white group-hover:w-full transition-all duration-300 ease-out" />
    </a>
  );
}