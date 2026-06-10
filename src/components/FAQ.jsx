"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Is MilesWeb an Indian company?",
    a: "Founded in 2012, MilesWeb is an Indian-owned and India-based web hosting company headquartered in Nashik, Maharashtra. We provide the best web hosting services in India and across the world, with data centers in six countries — India, the USA, the UK, Canada, Australia and Singapore.",
  },
  {
    q: "What features do I get with web hosting?",
    a: "Our best web hosting services in India offer everything you need to start and succeed online. You get superfast and highly reliable web hosting services with NVMe storage, control panel, WordPress 1-click installer, free domain, website builder, and backups. We provide 24/7 support to help you with any of your concerns.",
  },
  {
    q: "How is MilesWeb's technical support?",
    a: "MilesWeb has proved itself as an award-winning web hosting provider in India with a stellar customer service record. The testimony is 20,000+ positive customer reviews and ratings on major review sites like Google, Trustpilot, HostAdvice, G2 and Serchen.",
  },
  {
    q: "Can I migrate my website to MilesWeb?",
    a: "Yes! Website migration is absolutely a breeze with us! Our dedicated migration team will help you migrate your website from another hosting provider to MilesWeb at no extra cost. We ensure all your website data is preserved exactly as it is and moved to our servers seamlessly.",
  },
  {
    q: "Why choose MilesWeb?",
    a: "With over 14 years of expertise in the Indian web hosting industry, MilesWeb is renowned for delivering blazing-fast page loads, ironclad security, and best web hosting services. We focus on delivering customer-oriented hosting solutions at the best prices in India with 24/7 support through email, live chat, and system tickets.",
  },
  {
    q: "Can I upgrade my web hosting plan later?",
    a: "Absolutely yes! You can upgrade your web hosting plan anytime. You only have to pay the difference amount; the upgrades will be done instantly. If you expect traffic surges or your existing plan has limited resources, you can upgrade to a higher plan, such as cloud hosting, VPS, or a dedicated server.",
  },
  {
    q: "What kind of web hosting services do you offer?",
    a: "At MilesWeb, we offer Shared Hosting, Managed WordPress Hosting, VPS Hosting, Reseller Hosting, Dedicated Hosting, and Cloud Hosting. You can choose a web hosting plan that best suits your requirements and budget!",
  },
  {
    q: "What security measures do you include?",
    a: "Security comes first at MilesWeb! Our servers are safeguarded with Firewall, Malware Scanners, CageFS, BitNinja Server Security, Brute-force Protection, Web Application Firewall (WAF), Two-Factor Authentication (2FA) and more. SSL certificates ensure secure encryption between website visitors and web browsers.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-5xl font-sans text-gray-900 text-center mb-20 leading-tight">
          Web hosting{" "}
          <span className="text-black">FAQs</span>
        </h2>

        <div className="space-y-5">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all ${
                open === i ? "border-blue-200 shadow-md" : "border-gray-100"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-8 py-6 text-left"
              >
                <span
                  className={`font-semibold text-lg ${
                    open === i ? "text-blue-600" : "text-gray-900"
                  }`}
                >
                  {faq.q}
                </span>

                <svg
                  className={`w-6 h-6 flex-shrink-0 ml-4 transition-transform ${
                    open === i ? "rotate-180 text-blue-600" : "text-gray-400"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {open === i && (
                <div className="px-8 pb-7">
                  <p className="text-gray-500 text-lg leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}