export default function Support() {
  return (
    <section id="support" className="py-16 bg-white" style={{ fontFamily: "Inter, Arial, sans-serif" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">

        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-3">
          Stress-free hosting. Proactive support.
        </h2>
        <p className="text-gray-500 text-center mb-10 text-base">
          Real humans. Fast answers. Support in English or Hindi, 24/7.
        </p>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* ── LEFT: Feature cards ── */}
          <div className="flex flex-col gap-3.5">

            {/* Card 1 — 24/7 (active/highlighted) */}
            <div className="flex gap-4 items-start border-2 border-blue-500 bg-blue-50/40 rounded-2xl p-5 hover:shadow-md transition-all cursor-default">
              <div className="w-11 h-11 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-gray-900 text-sm">24/7 support in English &amp; Hindi</span>
                  <span className="text-[10px] font-bold tracking-widest text-green-700 bg-green-100 border border-green-200 rounded-full px-2.5 py-0.5">
                    ALWAYS ON
                  </span>
                </div>
                <p className="text-gray-500 text-sm">
                  Live chat, email, and ticket assistance — backed by real hosting experts.
                </p>
              </div>
            </div>

            {/* Card 2 — Fast responses */}
            <div className="flex gap-4 items-start border border-gray-200 rounded-2xl p-5 hover:shadow-md hover:border-blue-200 transition-all cursor-default">
              <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm mb-1.5">Fast &amp; friendly responses</div>
                <p className="text-gray-500 text-sm">
                  Average live chat response time: <strong className="text-gray-800">under 30 seconds</strong>.
                </p>
              </div>
            </div>

            {/* Card 3 — What we help with */}
            <div className="flex gap-4 items-start border border-gray-200 rounded-2xl p-5 hover:shadow-md hover:border-blue-200 transition-all cursor-default">
              <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm mb-2">What our team helps with</div>
                <ul className="flex flex-col gap-1.5">
                  {[
                    "WordPress plugin & theme conflicts",
                    "Hacked or broken website recovery",
                    "Performance tuning on request",
                    "Initial website setup & launch",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-500">
                      <svg className="w-[18px] h-[18px] flex-shrink-0" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" fill="#16a34a" />
                        <path d="M8 12l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 96% stat card */}
            <div className="flex items-center gap-5 border border-gray-200 rounded-2xl p-5 hover:shadow-md hover:border-blue-200 transition-all cursor-default">
              <div className="text-[42px] font-black text-green-600 leading-none whitespace-nowrap">
                96<sup className="text-[22px]">%</sup>
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm mb-0.5">Customer Satisfaction</div>
                <div className="text-xs text-gray-500">Based on 28,790+ ratings from our customers</div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Chat widget (PNG version) ── */}
{/* ── RIGHT: Chat widget (PNG version) ── */}
<div className="rounded-2xl border border-gray-200 overflow-hidden shadow-lg bg-white flex items-center justify-center p-2">

  <img
    src="/images/chatting.png"   // <-- your full right section PNG
    alt="MilesWeb Support Chat"
    width={600}
    height={800}
    className="w-full h-auto object-contain"
    priority
  />

</div>
        </div>
      </div>



    </section>

    
  );
}