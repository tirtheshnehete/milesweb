const g2Reviews = [
  {
    text: "MilesWeb has the best-in-class customer support team to manage the backend operations of the website.",
  },
  {
    text: "As a blogger, I need sufficient storage and customer support from a web host. MilesWeb is a reliable option to consider.",
  },
  {
    text: "The best thing about MilesWeb is that it has reliable customer support. Excellent Intel Xeon processors, unmetered bandwidth.",
  },
];

// G2 logo as an SVG component
function G2Logo() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="19"
        cy="22"
        r="14"
        stroke="#1a1a1a"
        strokeWidth="3.5"
        fill="none"
      />
      <path
        d="M19 15v7h7"
        stroke="#1a1a1a"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="27"
        y="16"
        fontSize="13"
        fontWeight="800"
        fill="#1a1a1a"
        fontFamily="Arial, sans-serif"
      >
        2
      </text>
    </svg>
  );
}

export default function G2Reviews() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {g2Reviews.map((review, i) => (
          <div
            key={i}
            className="bg-gray-50 border border-gray-200 rounded-2xl p-8 min-h-[280px] flex flex-col hover:shadow-md hover:border-gray-300 transition-all cursor-default"
          >
            {/* G2 Logo */}
            <div className="mb-7">
              <G2Logo />
            </div>

            {/* Review text */}
            <p className="text-gray-700 text-[17px] leading-relaxed flex-1 mb-6">
              {review.text}
            </p>

            {/* Footer: stars + arrow */}
            <div className="flex items-center justify-between mt-auto">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <span
                    key={j}
                    style={{
                      color: "#ef4444",
                      fontSize: "45px",
                      lineHeight: 1,
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>

              <span className="text-gray-400 text-xl font-light">›</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}