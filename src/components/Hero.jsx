export default function Hero() {
  return (
    <section className="bg-white text-gray-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <p className="text-base font-semibold mb-2 ">
              Get{" "}
              <span className="text-blue-500 font-bold">80% </span>{" "}
              Off Hosting with Free Domain
            </p>

            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4 text-gray-900 font-sans">
              Launch your website in minutes
            </h1>

            <p className="text-gray-500 mb-6 text-base leading-relaxed">
              Fast, secure &amp; reliable hosting built for Indian websites.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Up to 20x faster website performance",
                "Free SSL, email & daily backups",
                "Create your website faster with AI",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-700 text-sm">
                  <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex items-end gap-1 mb-1">
              <span className="text-gray-800 text-2xl mb-3">₹</span>
              <span className="text-5xl font-semibold font-sans  text-gray-900 leading-none">69.00</span>
              <span className="text-black text-lg mb-1 ">/mo</span>
            </div>
            <p className="text-blue-500 font-semibold text-sm mb-6">
              Same price at renewal – Guaranteed.
            </p>

            <a
              href="#pricing"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-lg text-base transition-colors"
            >
              Start Now
            </a>

            <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
              <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              30-day money-back guarantee • Cancel anytime
            </div>
          </div>

            {/* Right - PNG image only */}
          <div className="flex items-center justify-center">
            <img
              src="/images/web-host.png"
              alt="80% Off Hosting Sale"
              className="w-full max-w-lg xl:max-w-xl object-contain"
            />
          </div>
        </div>
      </div>


   
   <div className="w-full">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 pt-2">

    {/* White floating rounded card */}
    <div
      className="bg-white rounded-2xl"
      style={{ boxShadow: "0 2px 16px 0 rgba(11,103,255,0.07)" }}
    >
      <div className="flex flex-col sm:flex-row items-stretch">

        {/* ── Item 1: Google Reviews ── */}
        <div className="flex items-center gap-3 flex-1 justify-center px-6 sm:px-8 py-5 sm:py-6">
          {/* Google wordmark */}
          <span
            className="flex-shrink-0 font-semibold select-none leading-none"
            style={{
              fontSize: "26px",
              fontFamily: "'Roboto', 'Arial', sans-serif",
              letterSpacing: "-0.4px",
            }}
          >
            <span style={{ color: "#4285F4" }}>G</span>
            <span style={{ color: "#EA4335" }}>o</span>
            <span style={{ color: "#FBBC05" }}>o</span>
            <span style={{ color: "#4285F4" }}>g</span>
            <span style={{ color: "#34A853" }}>l</span>
            <span style={{ color: "#EA4335" }}>e</span>
          </span>

          {/* Rating + stars + sub-text */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5">
              <span
                className="font-bold text-gray-900 leading-none"
                style={{ fontSize: "14px" }}
              >
                4.6 Stars
              </span>

              {/* 4 full stars */}
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4].map((s) => (
                  <svg
                    key={s}
                    className="w-3.5 h-3.5"
                    viewBox="0 0 20 20"
                    fill="#FBBC04"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}

                {/* Half star */}
                <svg
                  className="w-3.5 h-3.5"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <clipPath id="leftHalfClip">
                      <rect x="0" y="0" width="10" height="20" />
                    </clipPath>
                  </defs>

                  <path
                    fill="#D1D5DB"
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />

                  <path
                    fill="#FBBC04"
                    clipPath="url(#leftHalfClip)"
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
            </div>

            <p
              className="text-gray-400 leading-none"
              style={{ fontSize: "12px" }}
            >
              Based on 7,002 reviews
            </p>
          </div>
        </div>

        {/* Desktop Divider */}
        <div className="hidden sm:flex items-center py-4">
          <div
            className="w-px h-10"
            style={{ backgroundColor: "#E2EAF4" }}
          />
        </div>

        {/* Mobile Divider */}
        <div
          className="sm:hidden h-px w-full"
          style={{ backgroundColor: "#E2EAF4" }}
        />

        {/* ── Item 2: Trusted by 1M+ ── */}
        <div className="flex items-center justify-center flex-1 px-6 sm:px-10 py-5 sm:py-6">
          <p
            className="text-gray-600 whitespace-nowrap"
            style={{ fontSize: "14px" }}
          >
            Trusted by{" "}
            <span className="font-bold text-gray-900">1M+ websites</span>
          </p>
        </div>

        {/* Desktop Divider */}
        <div className="hidden sm:flex items-center py-4">
          <div
            className="w-px h-10"
            style={{ backgroundColor: "#E2EAF4" }}
          />
        </div>

        {/* Mobile Divider */}
        <div
          className="sm:hidden h-px w-full"
          style={{ backgroundColor: "#E2EAF4" }}
        />

        {/* ── Item 3: Company Since 2012 ── */}
        <div className="flex items-center justify-center gap-2 flex-1 px-6 sm:px-8 py-5 sm:py-6">

          {/* Indian Flag */}
          <svg
            className="w-5 h-4 flex-shrink-0 rounded-sm overflow-hidden"
            viewBox="0 0 90 60"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="90" height="20" fill="#FF9933" />
            <rect y="20" width="90" height="20" fill="#FFFFFF" />
            <rect y="40" width="90" height="20" fill="#138808" />
            <circle
              cx="45"
              cy="30"
              r="6"
              fill="none"
              stroke="#000080"
              strokeWidth="1.2"
            />
            <circle cx="45" cy="30" r="1" fill="#000080" />
          </svg>

          <p
            className="text-gray-600 whitespace-nowrap"
            style={{ fontSize: "14px" }}
          >
            Company since{" "}
            <span className="font-bold text-gray-900">2012</span>
          </p>
        </div>

      </div>
    </div>

  </div>
</div>
<div className="fixed bottom-4 right-3 md:right-6 md:bottom-6 z-[9999]">
  <button
    className="
      w-12 h-12
      md:w-[60px] md:h-[60px]
      rounded-full
      bg-[#007fff]
      shadow-xl
      flex items-center justify-center
      hover:scale-105
      transition-all duration-300
    "
  >
    <svg
      viewBox="0 0 800 800"
      className="w-5 h-5 md:w-7 md:h-7"
      fill="white"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M400 26.2c-193.3 0-350 156.7-350 350 0 136.2 77.9 254.3 191.5 312.1 15.4 8.1 31.4 15.1 48.1 20.8l-16.5 63.5c-2 7.8 5.4 14.7 13 12.1l229.8-77.6c14.6-5.3 28.8-11.6 42.4-18.7C672 630.6 750 512.5 750 376.2c0-193.3-156.7-350-350-350zm211.1 510.7c-10.8 26.5-41.9 77.2-121.5 77.2-79.9 0-110.9-51-121.6-77.4-2.8-6.8 5-13.4 13.8-11.8 76.2 13.7 147.7 13 215.3.3 8.9-1.8 16.8 4.8 14 11.7z"
      />
    </svg>
  </button>
</div>

    </section>
  );
}