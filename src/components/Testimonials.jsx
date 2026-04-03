const testimonials = [
  {
    name: "Ankit Sharma",
    role: "SDE @ Microsoft",
    college: "IIT Roorkee '23",
    avatar: "AS",
    color: "#FF5C1A",
    quote:
      "Techvruk's AI/ML bootcamp gave me the industry skills my college curriculum lacked. The mentors were actual practitioners. I landed my dream role 3 months after completing the program.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "Product Manager @ Razorpay",
    college: "NIT Trichy '22",
    avatar: "PN",
    color: "#FFB800",
    quote:
      "The Innovation Contest on the platform opened doors I didn't know existed. I won a national award and got direct interview calls from 5 companies. Techvruk is the real deal.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "Startup Founder",
    college: "BITS Pilani '24",
    avatar: "RV",
    color: "#4ECDC4",
    quote:
      "I found my co-founder through Techvruk's community. We met in a hackathon, collaborated on a project, and now run a funded startup. This platform builds real connections.",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    role: "Cloud Architect @ AWS",
    college: "VJTI Mumbai '23",
    avatar: "SP",
    color: "#A855F7",
    quote:
      "The AWS Cloud program on Techvruk was better than any YouTube series or paid course I tried. Structured, practical, and with actual projects. Got AWS certified in 60 days.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span
            className="text-[#FF5C1A] text-sm font-mono uppercase tracking-widest block mb-4"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            — Student Stories —
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
          >
            Engineers Who
            <span className="gradient-text"> Made It</span>
          </h2>
          <p className="text-[#7070A0] max-w-lg mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Real stories from real engineers who transformed their careers with Techvruk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map(({ name, role, college, avatar, color, quote, rating }) => (
            <div
              key={name}
              className="card-hover bg-[#111118] border border-[#1E1E2E] rounded-2xl p-7 relative group"
            >
              {/* Subtle corner glow */}
              <div
                className="absolute bottom-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none"
                style={{ background: color }}
              />

              {/* Quote mark */}
              <div
                className="text-5xl font-black opacity-10 leading-none mb-3"
                style={{ color, fontFamily: "'Syne', sans-serif" }}
              >
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: rating }).map((_, i) => (
                  <span key={i} className="text-[#FFB800] text-sm">★</span>
                ))}
              </div>

              {/* Quote text */}
              <p
                className="text-[#C0C0D8] text-sm leading-relaxed mb-6"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                "{quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${color}, ${color}88)` }}
                >
                  {avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {name}
                  </div>
                  <div className="text-[#7070A0] text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {role} · {college}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
