const stats = [
  { value: "50K+", label: "Engineers Trained", icon: "🎓" },
  { value: "200+", label: "Industry Partners", icon: "🤝" },
  { value: "500+", label: "Contests Hosted", icon: "🏆" },
  { value: "98%", label: "Placement Rate", icon: "📈" },
  { value: "40+", label: "Technologies", icon: "⚡" },
  { value: "15+", label: "States Covered", icon: "🗺️" },
];

const partners = [
  "Microsoft", "Google", "ISRO", "Infosys", "TCS", "Wipro",
  "IIT Bombay", "NIT Network", "NASSCOM", "StartupIndia",
];

export default function Stats() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className="text-center mb-12">
          <span
            className="text-[#FF5C1A] text-sm font-mono uppercase tracking-widest"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            — Impact Numbers —
          </span>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {stats.map(({ value, label, icon }) => (
            <div
              key={label}
              className="card-hover bg-[#111118] border border-[#1E1E2E] rounded-2xl p-5 text-center group"
            >
              <div className="text-3xl mb-2">{icon}</div>
              <div
                className="text-3xl font-black gradient-text mb-1"
                style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
              >
                {value}
              </div>
              <div className="text-[#7070A0] text-xs leading-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Partner marquee */}
        <div className="relative">
          <div className="text-center mb-6">
            <span className="text-[#404060] text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Trusted by India's leading organizations
            </span>
          </div>
          <div className="overflow-hidden relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0A0A0F] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0A0A0F] to-transparent z-10 pointer-events-none" />

            <div className="marquee-track flex gap-12 items-center whitespace-nowrap">
              {[...partners, ...partners].map((p, i) => (
                <span
                  key={i}
                  className="text-[#404060] text-lg font-semibold hover:text-[#FF5C1A] transition-colors cursor-default inline-block"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
