const steps = [
  {
    num: "01",
    title: "Create Your Profile",
    desc: "Sign up as a student or professional. Tell us your branch, interests, and goals.",
    icon: "👤",
  },
  {
    num: "02",
    title: "Explore & Enroll",
    desc: "Browse training programs, live contests, and networking events curated for you.",
    icon: "🔍",
  },
  {
    num: "03",
    title: "Learn & Compete",
    desc: "Take hands-on courses, participate in national challenges, and build real projects.",
    icon: "🚀",
  },
  {
    num: "04",
    title: "Get Recognized",
    desc: "Earn certifications, win awards, and get discovered by top companies across India.",
    icon: "🏆",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF5C1A]/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span
            className="text-[#FF5C1A] text-sm font-mono uppercase tracking-widest block mb-4"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            — Simple Process —
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
          >
            How Techvruk
            <span className="gradient-text"> Works</span>
          </h2>
          <p className="text-[#7070A0] max-w-lg mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Get from "curious student" to "recognized innovator" in 4 simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF5C1A]/30 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ num, title, desc, icon }, idx) => (
              <div
                key={num}
                className="card-hover relative bg-[#111118] border border-[#1E1E2E] rounded-2xl p-6 text-center group"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Step number bg */}
                <div
                  className="absolute top-4 right-4 text-6xl font-black opacity-5 select-none"
                  style={{ fontFamily: "'Syne', sans-serif", color: "#FF5C1A" }}
                >
                  {num}
                </div>

                {/* Icon circle */}
                <div className="relative w-16 h-16 mx-auto mb-5">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF5C1A] to-[#FFB800] opacity-15 group-hover:opacity-25 transition-opacity blur-sm" />
                  <div className="relative w-16 h-16 rounded-2xl bg-[#1A1A25] border border-[#FF5C1A]/20 flex items-center justify-center text-3xl">
                    {icon}
                  </div>
                </div>

                {/* Step tag */}
                <div
                  className="text-xs text-[#FF5C1A] font-mono mb-2 uppercase tracking-widest"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Step {num}
                </div>

                <h3
                  className="text-lg font-bold text-white mb-3"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {title}
                </h3>
                <p className="text-[#7070A0] text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
