"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const hostingLinks = [
  { label: "Web Hosting", badge: "80% OFF", desc: "For new and business websites", href: "#" },
  { label: "Cloud Hosting", badge: "PREMIUM", desc: "For growing and scalable websites", href: "#" },
  { label: "cPanel Hosting", badge: "80% OFF", desc: "cPanel-powered Linux hosting", href: "#" },
  { label: "Node.js Hosting", badge: "", desc: "Run modern JavaScript apps", href: "#" },
  { label: "Reseller Hosting", badge: "", desc: "White-label hosting for agencies", href: "#" },
];

const wpLinks = [
  { label: "WordPress Hosting", badge: "80% OFF", desc: "Get your website online today", href: "#" },
  { label: "Managed WordPress", badge: "PREMIUM", desc: "Hosting for websites that make money", href: "#" },
];

const vpsLinks = [
  { label: "VPS Hosting", badge: "70% OFF", desc: "For more power and control", href: "#" },
  { label: "Managed VPS Hosting", badge: "50% OFF", desc: "We manage your VPS for you", href: "#" },
  { label: "Windows VPS", badge: "50% OFF", desc: "Ideal for ASP.NET and Windows apps", href: "#" },
  { label: "Dedicated Server", badge: "", desc: "Built for large-scale projects", href: "#" },
];

const domainLinks = [
  { label: "Domain", badge: "", desc: "Register your domain name", href: "#" },
  { label: "Business Email", badge: "83% OFF", desc: "Professional email for startups", href: "#" },
  { label: "Google Workspace", badge: "", desc: "Smart tools for everyday work", href: "#" },
  { label: "SSL Certificate", badge: "", desc: "Encrypt data & protect users", href: "#" },
];
const aboutLinks = [
  { label: "About MilesWeb",          badge: "", desc: "Trusted Indian host since 2012",    href: "#" },
  { label: "Customer Success Stories",badge: "", desc: "Real results from our clients",     href: "#" },
  { label: "Blog",                    badge: "", desc: "Guides, tips, and hosting updates", href: "#" },
];
const supportLinks = [
  { label: "Knowledge Base", badge: "", desc: "Find instant answers and solutions", href: "#" },
  { label: "Tutorials",      badge: "", desc: "Easy how-to videos",                href: "#" },
  { label: "Contact Us",     badge: "", desc: "Reach our support team anytime",    href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { key: "hosting", label: "Hosting", links: hostingLinks },
    { key: "wordpress", label: "WordPress", links: wpLinks },
    { key: "vps", label: "VPS & Dedicated", links: vpsLinks },
    { key: "domain", label: "Domain & Email", links: domainLinks },
    { key: "support",   label: "Support",        links: supportLinks  },
  { key: "about",     label: "About Us",       links: aboutLinks    },
  ];

  return (
    <nav className="bg-white border-b border-[#E2EAF4] sticky top-0 z-50">
      <div className="max-w-7xl px-5">
        <div className="flex items-center justify-between h-20">

          {/* Logo + Flag */}
          <Link href="/" className="flex items-center gap-1 flex-shrink-0">
            <Image
              src="/images/mw-logo.svg"
              alt="MilesWeb"
              width={230}
              height={60}
              priority
              className="w-auto h-12"
            />

            {/* Desktop Only Flag */}
            <div className="hidden lg:flex items-center ml-0">
              <Image
                src="/images/flag-ind.svg"
                alt="India"
                width={28}
                height={18}
                className="rounded-sm"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 -ml-20">
            {navItems.map((item) => (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => setOpen(item.key)}
                onMouseLeave={() => setOpen(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2  text-md font-medium text-gray-700 hover:text-[#0B67FF] rounded-lg hover:bg-blue-50">
                  {item.label}
                  <svg
                    className="w-3 h-3 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {open === item.key && (
                  <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-gray-100 p-2 z-50">
                    {item.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-blue-50 group"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-800 group-hover:text-[#0B67FF]">
                              {link.label}
                            </span>

                            {link.badge && (
                              <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-semibold">
                                {link.badge}
                              </span>
                            )}
                          </div>

                          <p className="text-xs text-gray-500 mt-0.5">
                            {link.desc}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            

          

          </div>

          {/* Account Button */}
          
          <div className="hidden lg:flex items-center  ">
            <a
              href="#"
              className="rounded-lg -mr-20 px-4 py-2 text-sm font-semibold text-[#394E63] border border-[#E2EAF4] transition-all duration-300 hover:bg-[#F5F9FF] hover:border-[#C9D8EA] hover:text-[#0B67FF]"
            >
              My Account
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.key}>
                <button
                  onClick={() => setOpen(open === item.key ? null : item.key)}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-blue-50 rounded-lg"
                >
                  {item.label}

                  <svg
                    className={`w-4 h-4 transition-transform ${
                      open === item.key ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {open === item.key && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-[#0B67FF] hover:bg-blue-50 rounded-lg"
                      >
                        {link.label}
                        {link.badge && (
                          <span className="ml-2 text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded">
                            {link.badge}
                          </span>
                        )}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-3 px-3">
              <a
                href="#"
                className="block text-center rounded-lg px-4 py-2 text-sm font-semibold text-[#394E63] border border-[#E2EAF4]"
              >
                My Account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}