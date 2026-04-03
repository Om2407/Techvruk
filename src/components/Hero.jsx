import { useEffect, useRef } from "react";

const FloatingCard = ({ className, children }) => (
  <div
    className={`absolute bg-[#111118] border border-[#1E1E2E] rounded-xl p-3 float-anim shadow-xl ${className}`}
    style={{ animationDelay: Math.random() * 3 + "s" }}
  >
    {children}
  </div>
);

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    const move = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      el.style.setProperty("--mouse-x", `${x}px`);
      el.style.setProperty("--mouse-y", `${y}px`);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Background glow */}
      <div className="hero-glow absolute inset-0 pointer-events-none" />

      {/* Radial blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF5C1A]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#FFB800]/6 rounded-full blur-3xl pointer-events-none" />

      {/* Spinning ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full border border-[#FF5C1A]/5 spin-slow" />
        <div className="absolute w-[800px] h-[800px] rounded-full border border-[#FFB800]/3" style={{ animation: "spin-slow 35s linear infinite reverse" }} />
      </div>

      {/* Floating UI cards */}
      <FloatingCard className="top-32 left-12 hidden lg:block" style={{ animationDuration: "6s" }}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF5C1A] to-[#FFB800] flex items-center justify-center text-xs font-bold text-white">🏆</div>
          <div>
            <div className="text-white text-xs font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>Innovation Award</div>
            <div className="text-[#9090A8] text-xs">National Winner 2024</div>
          </div>
        </div>
      </FloatingCard>

      <FloatingCard className="top-48 right-16 hidden lg:block">
        <div className="text-center">
          <div className="text-2xl font-bold gradient-text" style={{ fontFamily: "'Syne', sans-serif" }}>50K+</div>
          <div className="text-[#9090A8] text-xs">Engineers Trained</div>
        </div>
      </FloatingCard>

      <FloatingCard className="bottom-48 left-16 hidden lg:block">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400 relative pulse-ring" />
          <span className="text-[#9090A8] text-xs ml-2">Live Contest Active</span>
        </div>
      </FloatingCard>

      <FloatingCard className="bottom-32 right-20 hidden lg:block">
        <div className="flex -space-x-2 mb-1">
          {["🧑‍💻","👩‍🔬","🧑‍🎓","👨‍💼"].map((e, i) => (
            <div key={i} className="w-7 h-7 rounded-full bg-[#1E1E2E] border-2 border-[#0A0A0F] flex items-center justify-center text-sm">{e}</div>
          ))}
        </div>
        <div className="text-[#9090A8] text-xs">+200 joined this week</div>
      </FloatingCard>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24">
        {/* Eyebrow tag */}
        <div className="inline-flex items-center gap-2 tag-chip text-sm px-4 py-1.5 rounded-full mb-8 font-mono" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C1A] animate-pulse" />
          Building India's Next Engineering Movement
        </div>

        {/* Headline */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-6 tracking-tight"
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
        >
          <span className="text-white block">Where Engineers</span>
          <span className="gradient-text block">Innovate,</span>
          <span className="gradient-text-white block">Connect & Grow</span>
        </h1>

        {/* Subtext */}
        <p
          className="text-lg md:text-xl text-[#7070888] max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "#7070A0", fontFamily: "'DM Sans', sans-serif" }}
        >
          Techvruk bridges the gap between academic learning and emerging industry 
          technologies — through training programs, innovation contests, and a thriving 
          community of future-ready engineers.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="btn-primary text-white font-semibold px-8 py-4 rounded-xl text-base w-full sm:w-auto">
            Start Your Journey →
          </button>
          <button className="flex items-center gap-3 text-white border border-[#1E1E2E] hover:border-[#FF5C1A]/50 px-8 py-4 rounded-xl text-base transition-all duration-300 w-full sm:w-auto hover:bg-[#FF5C1A]/5">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            Watch Demo
          </button>
        </div>

        {/* Trust bar */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-[#606080]">
          {[
            { icon: "🎓", label: "50K+ Students" },
            { icon: "🏢", label: "200+ Companies" },
            { icon: "🏆", label: "500+ Contests" },
            { icon: "⭐", label: "4.9 Rating" },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-1.5">
              <span>{icon}</span>
              <span style={{ fontFamily: "'DM Sans', sans-serif" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A0A0F] to-transparent pointer-events-none" />
    </section>
  );
}
