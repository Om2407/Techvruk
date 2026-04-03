export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF5C1A]/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF5C1A]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 tag-chip text-sm px-4 py-1.5 rounded-full mb-8 font-mono"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C1A] animate-pulse" />
          Free to Join — No Credit Card Required
        </div>

        <h2
          className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
        >
          Ready to Build
          <span className="gradient-text block">India's Future?</span>
        </h2>

        <p
          className="text-[#7070A0] text-lg mb-10 max-w-xl mx-auto leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Join 50,000+ engineers already shaping tomorrow's technology. 
          Your innovation journey starts today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="btn-primary text-white font-bold px-10 py-4 rounded-xl text-lg w-full sm:w-auto glow-orange">
            Join Techvruk Free →
          </button>
          <button
            className="text-[#9090A8] hover:text-white border border-[#1E1E2E] hover:border-[#FF5C1A]/30 px-8 py-4 rounded-xl text-base transition-all w-full sm:w-auto"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            View All Programs
          </button>
        </div>

        {/* Social proof micro */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <div className="flex -space-x-2">
            {["🧑‍💻","👩‍🔬","🧑‍🎓","👨‍💼","👩‍💻"].map((e, i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-[#1E1E2E] border-2 border-[#0A0A0F] flex items-center justify-center text-sm">{e}</div>
            ))}
          </div>
          <span className="text-[#7070A0] text-sm ml-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <span className="text-white font-semibold">+1,200</span> engineers joined this month
          </span>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const links = {
    Platform: ["Training Programs", "Contests", "Awards", "Community"],
    Company: ["About Us", "Blog", "Careers", "Press Kit"],
    Support: ["Help Center", "Contact", "Privacy Policy", "Terms"],
  };

  return (
    <footer className="border-t border-[#1E1E2E] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF5C1A] to-[#FFB800] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" opacity="0.9"/>
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="font-black text-xl text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                Tech<span className="gradient-text">vruk</span>
              </span>
            </div>
            <p className="text-[#7070A0] text-sm leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Building India's Next Engineering Movement — one innovator at a time.
            </p>
            <div className="flex gap-3">
              {["𝕏", "in", "📸", "▶"].map((s) => (
                <button
                  key={s}
                  className="w-8 h-8 rounded-lg bg-[#1E1E2E] hover:bg-[#FF5C1A]/20 hover:text-[#FF5C1A] text-[#7070A0] text-xs flex items-center justify-center transition-all"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([col, items]) => (
            <div key={col}>
              <h4
                className="text-white text-sm font-semibold mb-4"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {col}
              </h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[#7070A0] hover:text-[#FF5C1A] text-sm transition-colors"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#1E1E2E] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#505068] text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            © 2025 Techvruk. All rights reserved. Made with ❤️ in India.
          </p>
          <div
            className="flex items-center gap-2 text-xs text-[#505068] font-mono"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
