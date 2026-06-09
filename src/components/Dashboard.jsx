import Image from "next/image";

const dashboardFeatures = [
  {
    title: "Install WordPress",
    desc: "Launch your site instantly with our one-click installer — just click and go live.",
    icon: (
      <svg viewBox="0 0 40 40" width="36" height="36" fill="none" stroke="#0f172a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="20" r="16" />
        <path d="M12 17l3.5 9 4.5-8 4.5 8L28 17" />
      </svg>
    ),
  },
  {
    title: "Create Emails",
    desc: "Create business emails in seconds and stay connected with your customers easily.",
    icon: (
      <svg viewBox="0 0 40 40" width="36" height="36" fill="none" stroke="#0f172a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="9" width="30" height="22" rx="3" />
        <polyline points="5,14 20,23 35,14" />
      </svg>
    ),
  },
  {
    title: "Manage Files",
    desc: "Upload, edit, and organize your website files easily from the control panel or via FTP.",
    icon: (
      <svg viewBox="0 0 40 40" width="36" height="36" fill="none" stroke="#0f172a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 10h16l4 5v17H8z" />
        <path d="M24 10v5h4" />
        <circle cx="28" cy="30" r="5" />
        <path d="M26 32l1.5 1.5 3-3" />
      </svg>
    ),
  },
  {
    title: "Daily Backups",
    desc: "Your site and emails are backed up daily. Restore your files instantly when needed.",
    icon: (
      <svg viewBox="0 0 40 40" width="36" height="36" fill="none" stroke="#0f172a" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M34 20a14 14 0 11-4-9.9" />
        <polyline points="34 6 34 14 26 14" />
      </svg>
    ),
  },
];

export default function Dashboard() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mb-4 leading-tight">
          Manage everything from one dashboard
        </h2>
        <p className="text-gray-500 text-center text-base sm:text-lg max-w-2xl mx-auto mb-14 leading-relaxed">
          Our easy-to-use dashboard helps you manage your website, emails, and backups without any confusion. Just log in and start.
        </p>

        {/* Dashboard Image */}
        <div className="rounded-2xl overflow-hidden border border-blue-100 bg-blue-50/40 shadow-xl shadow-blue-50 mb-16 mx-auto">
          <Image
            src="/images/dashboard.avif"   
            alt="MilesWeb Dashboard"
            width={1200}
            height={700}
            className="w-full h-auto block"
            priority
          />
        </div>

        {/* 4 Feature columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 max-w-5xl mx-auto mb-16 border-t border-gray-100 pt-14">
          {dashboardFeatures.map((f) => (
            <div key={f.title}>
              <div className="mb-4">{f.icon}</div>
              <h3 className="font-bold text-gray-900 text-base mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          
            <a href="#pricing"
            className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-14 py-4 rounded-xl transition-colors"
          >
            Get Started
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}