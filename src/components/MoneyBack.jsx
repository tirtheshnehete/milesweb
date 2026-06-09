import Image from "next/image";

export default function MoneyBack() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Card */}
        <div className="bg-white border border-gray-200 rounded-2xl px-14 py-20 sm:px-20 sm:py-20 flex flex-col sm:flex-row items-center sm:items-start gap-14 sm:gap-20">

          {/* Badge */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <Image
              src="/images/30-day.png"
              alt="30 Day Money Back Guarantee"
              width={190}
              height={190}
              className="object-contain"
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              30-Day Money Back
            </h2>

            {/* Body */}
            <p className="text-lg text-gray-700 leading-relaxed">
              Experience MilesWeb with confidence. If we don&apos;t meet your expectations,
              simply{" "}
              <a href="#" className="text-blue-500 hover:underline">request a refund</a>
              {" "}— we&apos;ll process it promptly with{" "}
              <a href="#" className="text-blue-500 hover:underline">no questions asked</a>.
            </p>

            {/* Signature + Avatar row */}
            <div className="mt-10 flex items-center gap-5">

              {/* Avatar */}
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200 flex-shrink-0">
                <Image
                  src="/images/deepak-kori-2.png"
                  alt="Deepak Kori"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Signature + name */}
              <div className="flex flex-col gap-1">
                <Image
                  src="/images/deepak_kori-s.png"
                  alt="Deepak Kori signature"
                  width={130}
                  height={45}
                  className="object-contain"
                />
                <p className="text-base text-gray-500">
                  <span className="font-semibold text-gray-700">Deepak Kori</span>
                  <span className="ml-1">Co-Founder, MilesWeb</span>
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="#pricing"
                className="inline-block bg-gray-100 hover:bg-gray-200 text-blue-500 font-semibold text-base px-9 py-4 rounded-full transition-colors"
              >
                Start Risk-Free
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}