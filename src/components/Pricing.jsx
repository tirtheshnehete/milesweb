"use client";
import { useState } from "react";

const durations = ["1 month", "12 months", "36 months", "48 months"];

const plans = [
  {
    name: "Starter",
    tag: "Great for first-time users.",
    discount: "83% OFF",
    original: "₹399.00",
    price: "69.00",
    period: "36 months",
    total: "₹2,484.00",
    popular: false,
    freeDomain: true,
    extraMonths: null,
    features: [
      "1 website",
      "Free domain for 1 year",
      "10 GB NVMe storage",
      "Daily backups",
      "1 email account Free",
      "WordPress ready",
      "Free SSL for your website",
      "AI website builder",
      "Free AI credits",
      "LiteSpeed Server + CDN",
      "Free website migration",
      "India server location",
      "24/7 priority expert support",
    ],
    specs: "756 MB RAM, 1 CPU core · 20K visits/mo",
  },
  {
    name: "Premium",
    tag: "Best for blogs & startup websites.",
    discount: "80% OFF",
    original: "₹499.00",
    price: "99.00",
    period: "36 months",
    total: "₹3,564.00",
    popular: true,
    freeDomain: false,
    extraMonths: { label: "+3 mo free", tag: "Limited-Time Deal" },
    features: [
      "25 websites",
      "Free domain for 1 year",
      "50 GB NVMe storage",
      "Daily backups",
      "50 email accounts Free",
      "WordPress ready",
      "Free SSL for every website",
      "AI website builder",
      "Free AI credits",
      "LiteSpeed Server + CDN",
      "Free website migration",
      "India server location",
      "24/7 priority expert support",
    ],
    specs: "2 GB RAM, 2 CPU cores · 30K visits/mo",
  },
  {
    name: "Business",
    tag: "Optimized for growing businesses.",
    discount: "68% OFF",
    original: "₹599.00",
    price: "189.00",
    period: "36 months",
    total: "₹6,804.00",
    popular: false,
    freeDomain: false,
    extraMonths: { label: "+3 mo free", tag: null },
    features: [
      "50 websites",
      "Free domain for 1 year",
      "100 GB NVMe storage",
      "Daily & On-Demand Backups",
      "150 email accounts Free",
      "WordPress ready",
      "Free SSL for every website",
      "AI website builder",
      "Free AI credits",
      "LiteSpeed Server + CDN",
      "Free website migration",
      "India server location",
      "24/7 priority expert support",
    ],
    specs: "3 GB RAM, 3 CPU cores · 125K visits/mo",
  },
  {
    name: "Cloud Startup",
    tag: "20x more power with cloud hosting.",
    discount: "70% OFF",
    original: "₹1,499.00",
    price: "449.00",
    period: "36 months",
    total: "₹16,164.00",
    popular: false,
    freeDomain: false,
    extraMonths: { label: "+3 mo free", tag: null },
    features: [
      "100 websites",
      "Free domain for 1 year",
      "150 GB NVMe storage",
      "Daily & On-Demand Backups",
      "150 email accounts Free",
      "WordPress ready",
      "Free SSL for every website",
      "AI website builder",
      "Free AI credits",
      "LiteSpeed Server + CDN",
      "Free website migration",
      "India server location",
      "24/7 priority expert support",
    ],
    specs: "5 GB RAM, 5 CPU cores · 225K visits/mo",
  },
];

const trustBadges = [
  "Choose monthly or long-term",
  "24/7 expert support",
  "99.9% uptime guarantee",
  "Free migration included",
];

export default function Pricing() {
  const [activeDuration, setActiveDuration] = useState("36 months");

  return (
    <section id="pricing" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-gray-900 mb-3">
            Same price at renewal.{" "}
            <span className="text-black">Guaranteed.</span>
          </h2>

          {/* Trust badges row */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4">
            {trustBadges.map((badge) => (
              <span key={badge} className="flex items-center gap-1.5 text-md text-gray-600">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Duration Dropdown */}
        <div className="flex flex-col items-center mb-10">
          <label className="text-xs text-gray-500 mb-2 font-medium tracking-widest uppercase">
            Plan Duration
          </label>
          <div className="relative w-80">
            <select
              value={activeDuration}
              onChange={(e) => setActiveDuration(e.target.value)}
              className="w-full appearance-none bg-white border border-gray-300 rounded-2xl px-5 py-3.5 pr-12 text-gray-800 text-base font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
            >
              {durations.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Cards */}
<div className="flex md:grid md:grid-cols-2 xl:grid-cols-4 gap-5 overflow-x-auto md:overflow-visible pb-2 snap-x snap-mandatory scrollbar-hide">          {plans.map((plan) => (
           <div
  key={plan.name}
  className={`relative flex flex-col rounded-2xl bg-white overflow-visible
    min-w-[320px] md:min-w-0 snap-start
    ${
      plan.popular
        ? "border-2 border-blue-500 shadow-lg shadow-blue-100"
        : "border border-gray-200 shadow-sm"
    }`}

            >
              {/* FREE DOMAIN badge + curved arrow */}
              {plan.freeDomain && (
                <div className="absolute -top-8 left-6 flex flex-col items-start">
                  <div className="bg-white border border-gray-200 shadow text-gray-700 text-xs font-bold px-4 py-1.5 rounded-full tracking-wide">
                    FREE DOMAIN
                  </div>
                  {/* Curved arrow pointing down into card */}
                  <svg
                    className="ml-4 mt-0.5"
                    width="28" height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M6 4 C6 4, 22 4, 22 18"
                      stroke="#93c5fd"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path
                      d="M18 15 L22 19 L26 15"
                      stroke="#93c5fd"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </div>
              )}

              {/* MOST POPULAR badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-blue-600 text-white text-[11px] font-extrabold px-5 py-1.5 rounded-full tracking-widest uppercase whitespace-nowrap shadow">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">

                {/* Plan name + tag */}
                <div className="mb-4 mt-2">
                  <h3 className="text-xl font-extrabold text-gray-900">{plan.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{plan.tag}</p>
                </div>

                {/* Discount + strikethrough */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-orange-100 text-orange-500 text-xs font-extrabold px-2.5 py-0.5 rounded">
                    {plan.discount}
                  </span>
                  <span className="text-gray-400 text-sm line-through">{plan.original}</span>
                </div>

                {/* Price */}
                <div className="flex items-start gap-0.5 mb-1">
                  <span className="text-gray-700 text-lg font-bold mt-2">₹</span>
                  <span className="text-5xl font-black text-gray-900 leading-none">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 text-sm self-end mb-1">/mo</span>
                </div>

                {/* Billing note */}
                <p className="text-xs text-gray-500 mt-1 mb-2 leading-snug">
                  For {plan.period}, you pay {plan.total} today – no price increase.
                </p>

                {/* Extra months */}
                {plan.extraMonths ? (
                  <div className="flex items-center gap-2 mb-4 min-h-[24px]">
                    <span className="text-blue-600 text-sm font-semibold border-b border-dashed border-blue-400 cursor-pointer leading-none pb-0.5">
                      {plan.extraMonths.label}
                    </span>
                    {plan.extraMonths.tag && (
                      <span className="text-xs bg-orange-100 text-orange-500 font-semibold px-2.5 py-0.5 rounded-full">
                        {plan.extraMonths.tag}
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="mb-4 min-h-[24px]" />
                )}

                {/* CTA */}
                
                 <a href="#"
                  className={`w-full py-3.5 rounded-xl font-bold text-sm text-center transition-all block
                    ${plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-white text-blue-600 border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50"
                    }`}
                >
                  Choose Plan
                </a>

                {/* Features list */}
                <ul className="mt-5 space-y-2.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg
                        className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Specs */}
                <div className="mt-5 pt-4 border-t border-gray-100 text-xs text-gray-400 text-center">
                  {plan.specs}
                </div>
              </div>

              {/* Same price guarantee footer strip */}
              <div className="bg-green-50 border-t border-green-100 rounded-b-2xl py-2.5 px-4 text-center">
                <span className="text-green-600 text-xs font-semibold">
                  Same Price at Renewal — Guaranteed
                </span> 
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          Displayed prices do not include GST (18%).
        </p>
      </div>
    </section>
  );
}