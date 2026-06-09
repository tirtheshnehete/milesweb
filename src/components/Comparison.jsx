const groups = [
  {
    rows: [
      { label: "Company origin: India", milesweb: true, hostinger: false, godaddy: false, type: "check" },
    ],
  },
  {
    groupLabel: "PRICE",
    rows: [
      { label: "Offer price", milesweb: "₹99.00/mo", hostinger: "₹149.00/mo", godaddy: "₹219.00/mo", type: "price" },
      {
        label: "Renewal price",
        milesweb: { main: "₹99.00/mo", sub: "Same price at renewal", good: true },
        hostinger: { main: "₹449.00/mo", sub: "↑ 201% increase", good: false },
        godaddy: { main: "₹599.00/mo", sub: "↑ 270% increase", good: false },
        type: "renewal",
      },
    ],
  },
  {
    groupLabel: "FEATURES",
    rows: [
      { label: "NVMe servers", milesweb: true, hostinger: false, godaddy: true, type: "check" },
      {
        label: "Website hosting limit",
        milesweb: { num: "25", unit: "websites" },
        hostinger: { num: "3", unit: "websites" },
        godaddy: { num: "1", unit: "website" },
        type: "hosting",
      },
      { label: "Advanced WordPress optimization", milesweb: true, hostinger: false, godaddy: false, type: "check" },
      { label: "Email accounts", milesweb: "Free", hostinger: "Paid", godaddy: "Free", type: "email" },
      { label: "SSH access", milesweb: true, hostinger: true, godaddy: false, type: "check" },
      { label: "Daily backups", milesweb: true, hostinger: false, godaddy: false, type: "check" },
      { label: "Full website migration", milesweb: true, hostinger: false, godaddy: false, type: "check" },
      { label: "Email migration", milesweb: true, hostinger: false, godaddy: false, type: "check" },
      { label: "Database migration", milesweb: true, hostinger: false, godaddy: false, type: "check" },
    ],
  },
];

const CheckIcon = () => (
  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border-2 border-green-500">
    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </span>
);

const CrossIcon = () => (
  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border-2 border-red-400">
    <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </span>
);

function Cell({ value, type, isMilesweb }) {
  if (type === "check") {
    return <div className="flex justify-center">{value ? <CheckIcon /> : <CrossIcon />}</div>;
  }
  if (type === "price") {
    return (
      <div className={`text-center text-base font-bold ${isMilesweb ? "text-blue-600" : "text-gray-800"}`}>
        {value}
      </div>
    );
  }
  if (type === "renewal") {
    return (
      <div className="text-center">
        <div className={`text-base font-bold ${isMilesweb ? "text-blue-600" : "text-orange-500"}`}>
          {value.main}
        </div>
        <div className={`text-xs mt-0.5 ${value.good ? "text-gray-400" : "text-orange-400 font-medium"}`}>
          {value.sub}
        </div>
      </div>
    );
  }
  if (type === "hosting") {
    return (
      <div className="text-center">
        <div className={`text-2xl font-extrabold ${isMilesweb ? "text-blue-600" : "text-gray-700"}`}>
          {value.num}
        </div>
        <div className="text-xs text-gray-400">{value.unit}</div>
      </div>
    );
  }
  if (type === "email") {
    return (
      <div className={`text-center text-sm font-bold ${value === "Free" ? "text-green-500" : "text-gray-500"}`}>
        {value}
      </div>
    );
  }
  return <div className="text-center text-sm text-gray-600">{value}</div>;
}

export default function Comparison() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-3">
          MilesWeb vs Others: Who delivers more value?
        </h2>
        <p className="text-gray-400 text-center mb-12 text-sm sm:text-base">
          We've compared MilesWeb with leading web hosting providers to help you make the smarter choice.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse">

            {/* Header */}
            <thead>
              <tr>
                <th className="w-[38%] pb-4" />

                {/* MilesWeb — blue highlighted column */}
                <th className="w-[20%] pb-0 px-2 align-bottom">
                  <div className="relative flex flex-col items-center">
                    <span className="mb-2 bg-yellow-400 text-yellow-900 text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full">
                      ★ Best Choice
                    </span>
                    <div className="w-full bg-blue-600 rounded-t-2xl py-4 px-2 text-white text-center">
                      <div className="text-lg font-extrabold">MilesWeb</div>
                    </div>
                  </div>
                </th>

                <th className="w-[21%] pb-4 px-2 text-center align-bottom">
                  <div className="text-base font-bold text-gray-800 pb-4">Hostinger</div>
                </th>
                <th className="w-[21%] pb-4 px-2 text-center align-bottom">
                  <div className="text-base font-bold text-gray-800 pb-4">GoDaddy</div>
                </th>
              </tr>
            </thead>

            <tbody className="border border-gray-200 rounded-2xl overflow-hidden">
              {groups.map((group, gi) => (
                <>
                  {group.groupLabel && (
                    <tr key={`g-${gi}`} className="bg-gray-100">
                      <td
                        colSpan={4}
                        className="px-5 py-2 text-[11px] font-extrabold tracking-widest text-gray-400 uppercase"
                      >
                        {group.groupLabel}
                      </td>
                    </tr>
                  )}
                  {group.rows.map((row, ri) => (
                    <tr
                      key={row.label}
                      className="border-t border-gray-100 hover:bg-gray-50/60 transition-colors"
                    >
                      <td className="px-5 py-4 text-sm text-gray-500">{row.label}</td>

                      {(["milesweb", "hostinger", "godaddy"]).map((provider) => (
                        <td
                          key={provider}
                          className={`px-3 py-4 ${
                            provider === "milesweb" ? "bg-blue-50" : ""
                          } ${
                            provider === "milesweb" && gi === groups.length - 1 && ri === group.rows.length - 1
                              ? "rounded-b-none"
                              : ""
                          }`}
                        >
                          <Cell
                            value={row[provider]}
                            type={row.type}
                            isMilesweb={provider === "milesweb"}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </>
              ))}

              {/* Bottom border row to close MilesWeb blue column */}
              <tr>
                <td className="py-0" />
                <td className="bg-blue-600 h-2 rounded-b-2xl py-0" />
                <td className="py-0" />
                <td className="py-0" />
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-center mt-10">
          
           <a href="#pricing"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-10 py-3.5 rounded-xl transition-colors"
          >
            Get Started
          </a>
        </div>

        <p className="text-center text-xs text-gray-300 mt-4">
          Prices are indicative and based on publicly available information at the time of comparison.
        </p>
      </div>
    </section>
  );
}