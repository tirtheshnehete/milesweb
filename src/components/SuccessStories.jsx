"use client";

import Image from "next/image";
import { useState } from "react";

const stories = [
  {
    name: "Jaydev Solanki",
    company: "CEO of Search Minds Pvt Ltd",
    quote: (
      <>
        MilesWeb has ensured seamless website{" "}
        <span className="text-[#3b7de9]">performance</span> and consistent
        service <span className="text-[#3b7de9]">stability.</span>
      </>
    ),
    image: "/images/solanki.png",
  },
  {
    name: "Gaurav Patil",
    company: "CEO of Standard Wings Technologies",
    quote: (
      <>
        The team has consistently delivered prompt and{" "}
        <span className="text-[#3b7de9]">professional support</span> whenever
        required.
      </>
    ),
    image: "/images/gaurav-p.png",
  },
];

export default function SuccessStories() {
  const [current, setCurrent] = useState(0);

  const total = stories.length;
  const s = stories[current];

  return (
    <section className="bg-[linear-gradient(135deg,#dde8f8_0%,#f0eaf8_50%,#f8eaf0_100%)] py-16 md:py-20 lg:py-24 px-4 sm:px-6">
      {/* Heading */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-[30px] sm:text-[34px] lg:text-[36px] font-black text-[#111] mb-10 md:mb-14">
          Customer success stories
        </h2>

        {/* Card */}
        <div className="bg-white rounded-[28px] shadow-[0_25px_70px_rgba(0,0,0,0.10)] p-5 sm:p-8 md:p-10 lg:p-14">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Image */}
            <div className="relative w-full max-w-[300px] h-[320px] rounded-[20px] overflow-hidden bg-[#e0e8f5] flex-shrink-0">
              <Image
                src={s.image}
                alt={s.name}
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Content */}
            <div className="flex-1 w-full">
              {/* Quote Icon */}
              <div className="w-14 h-14 rounded-xl bg-[#e8f0fc] flex items-center justify-center mb-6">
                <span className="text-[32px] font-black text-[#3b7de9] leading-none">
                  &#8220;
                </span>
              </div>

              {/* Quote */}
              <p className="text-[20px] sm:text-[22px] lg:text-[26px] font-semibold text-[#111] leading-[1.7] break-words">
                {s.quote}

                <a
                  href="#"
                  className="inline-block ml-3 mt-3 sm:mt-0 px-4 py-2 border border-[#cdd8ec] rounded-[10px] text-sm text-[#333] bg-[#f5f8ff] font-medium hover:bg-[#eef4ff] transition"
                >
                  Read More
                </a>
              </p>

              <hr className="border-t border-[#e8eaf0] my-8" />

              {/* Name */}
              <h3 className="text-[20px] font-black text-[#111] mb-1">
                {s.name}
              </h3>

              {/* Company */}
              <p className="text-[15px] sm:text-[16px] text-[#555]">
                {s.company}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-8 md:mt-10">
          {[
            { dir: -1, label: "←" },
            { dir: 1, label: "→" },
          ].map(({ dir, label }) => (
            <button
              key={dir}
              onClick={() =>
                setCurrent((current + dir + total) % total)
              }
              className="
                w-12 h-12
                rounded-full
                border-[1.5px]
                border-[#c0c8d8]
                bg-white
                text-[#444]
                text-lg
                flex
                items-center
                justify-center
                hover:shadow-md
                hover:border-[#3b7de9]
                transition-all
              "
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}