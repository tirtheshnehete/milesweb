const reviews = [
  {
    text: "I've been using MilesWeb India for hosting my website, and I'm really impressed with their uptime and customer support.",
  },
  {
    text: "We've had a great experience with MilesWeb hosting! Their support team is incredibly quick and efficient.",
  },
  {
    text: "The migration from Hostinger was smooth, and the 24/7 support has been excellent. The website speed has also been great.",
  },
];

export default function GoogleReviews() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-2xl p-7 flex flex-col hover:shadow-md hover:border-gray-300 transition-all cursor-default"
          >
            {/* Google logo */}
            <div className="mb-5">
              <span
                style={{
                  fontSize: "26px",
                  fontWeight: 400,
                  fontFamily: "Arial, sans-serif",
                  letterSpacing: "-0.5px",
                }}
              >
                <span style={{ color: "#4285F4" }}>G</span>
                <span style={{ color: "#EA4335" }}>o</span>
                <span style={{ color: "#FBBC05" }}>o</span>
                <span style={{ color: "#4285F4" }}>g</span>
                <span style={{ color: "#34A853" }}>l</span>
                <span style={{ color: "#EA4335" }}>e</span>
              </span>
            </div>

            {/* Review text */}
            <p className="text-gray-700 text-base leading-relaxed flex-1 mb-5">
              {review.text}
            </p>

            {/* Footer: stars + arrow */}
            <div className="flex items-center justify-between mt-auto">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <span
                    key={j}
                    style={{
                      color: "#f59e0b",
                      fontSize: "28px",
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