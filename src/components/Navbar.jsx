import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = ["Programs", "Contests", "Awards", "Community", "About"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0F]/90 backdrop-blur-xl border-b border-[#1E1E2E]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#FF5C1A] to-[#FFB800] opacity-20 blur-sm" />
            <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-[#FF5C1A] to-[#FFB800] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" opacity="0.9"/>
                <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          <span
            className="font-display font-800 text-xl tracking-tight text-white"
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
          >
            Tech<span className="gradient-text">vruk</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="nav-link text-sm text-[#9090A8] hover:text-white transition-colors duration-200"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm text-[#9090A8] hover:text-white transition-colors px-4 py-2">
            Log In
          </button>
          <button className="btn-primary text-white text-sm font-semibold px-5 py-2.5 rounded-lg">
            Join Free →
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={`w-5 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-5 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <div className={`w-5 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A0A0F]/95 backdrop-blur-xl border-t border-[#1E1E2E] px-6 py-6 space-y-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block text-[#9090A8] hover:text-white transition-colors py-2"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <button className="btn-primary w-full text-white font-semibold py-3 rounded-lg mt-4">
            Join Free →
          </button>
        </div>
      )}
    </nav>
  );
}
