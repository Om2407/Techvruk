const features = [
  {
    icon: "⚡",
    tag: "Training",
    title: "Industry-Ready Programs",
    desc: "Hands-on training in AI/ML, Cloud, Robotics, IoT, and more — designed with industry experts to match real job requirements.",
    color: "#FF5C1A",
    items: ["Project-based learning", "Expert mentors", "Live sessions", "Certificates"],
  },
  {
    icon: "🏆",
    tag: "Contests",
    title: "Innovation Challenges",
    desc: "National-level hackathons, design contests, and engineering olympiads to test your skills and win recognition and prizes.",
    color: "#FFB800",
    items: ["Monthly contests", "Cash prizes", "National ranking", "Industry judges"],
  },
  {
    icon: "🌐",
    tag: "Community",
    title: "Engineer Network",
    desc: "Connect with 50,000+ engineers across India — collaborate on projects, find teammates, and get mentored by industry leaders.",
    color: "#4ECDC4",
    items: ["Discussion forums", "Project collaboration", "Mentorship", "Study groups"],
  },
  {
    icon: "🎖️",
    tag: "Awards",
    title: "Recognition & Awards",
    desc: "National Innovation Awards, Top Innovator badges, and leaderboard rankings that matter to recruiters and investors.",
    color: "#A855F7",
    items: ["National awards", "Digital badges", "Leaderboards", "Recruiter visibility"],
  },
];

export default function Features() {
  return (
    <section id="programs" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="text-[#FF5C1A] text-sm font-mono uppercase tracking-widest block mb-4"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            — What We Offer —
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
          >
            Everything an Engineer
            <span className="gradient-text block">Needs to Thrive</span>
          </h2>
          <p className="text-[#7070A0] text-lg max-w-xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            From your first line of code to your first innovation award — Techvruk powers every step.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map(({ icon, tag, title, desc, color, items }) => (
            <div
              key={title}
              className="card-hover bg-[#111118] border border-[#1E1E2E] rounded-2xl p-7 group relative overflow-hidden"
            >
              {/* Corner glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ background: color, transform: "translate(40%, -40%)" }}
              />

              {/* Tag + Icon */}
              <div className="flex items-center justify-between mb-5">
                <span
                  className="text-xs px-3 py-1 rounded-full font-mono uppercase tracking-wide"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    background: `${color}18`,
                    color: color,
                    border: `1px solid ${color}30`,
                  }}
                >
                  {tag}
                </span>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: `${color}15` }}
                >
                  {icon}
                </div>
              </div>

              <h3
                className="text-xl font-bold text-white mb-3"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {title}
              </h3>
              <p className="text-[#7070A0] text-sm leading-relaxed mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {desc}
              </p>

              {/* Feature list */}
              <div className="grid grid-cols-2 gap-2">
                {items.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-[#9090A8]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
                    {item}
                  </div>
                ))}
              </div>

              {/* Hover CTA */}
              <div className="mt-6 flex items-center gap-1 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color, fontFamily: "'DM Sans', sans-serif" }}>
                Explore {tag} <span className="ml-1">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
