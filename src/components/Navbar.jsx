import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logoEmblem from "@/assets/Zootopia logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Events", href: "/events" },
  { label: "Resort", href: "/resort" },
  { label: "Restaurant", href: "/restaurant" },
  { label: "Our Story", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navigate = useNavigate();
  const location = useLocation();

  const isLightHero = location.pathname === '/resort';
  const navTextColor = (!scrolled && isLightHero) ? "#0a192f" : "#ffffff";
  const navBorderColor = (!scrolled && isLightHero) ? "rgba(10, 25, 47, 0.4)" : "hsla(44, 85%, 55%, 0.6)";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    navigate(href);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3 shadow-elegant" : "py-5"
        }`}
        style={{
          background: scrolled ? "hsla(222, 80%, 10%, 0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid hsla(44, 85%, 55%, 0.15)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("/")}
            className="flex items-center gap-3 group flex-shrink-0"
          >
            <img
              src={logoEmblem}
              alt="Zootopia"
              className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-110 ml-10"
            />
          </button>

          {/* Desktop Links — centered, evenly spaced like screenshot */}
          <div className="hidden md:flex items-center justify-center flex-1 px-6">
            <div className="flex items-center justify-between w-full max-w-2xl">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="font-body text-[11px] tracking-[0.18em] uppercase transition-all duration-300 relative group whitespace-nowrap"
                  style={{ color: navTextColor }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(var(--gold))")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = navTextColor)}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                    style={{ background: "var(--gradient-gold)" }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`block w-6 h-px transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              style={{ background: "hsl(var(--gold))" }}
            />
            <span
              className={`block w-6 h-px transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              style={{ background: "hsl(var(--gold))" }}
            />
            <span
              className={`block w-6 h-px transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              style={{ background: "hsl(var(--gold))" }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "hsla(222, 80%, 8%, 0.98)", backdropFilter: "blur(20px)" }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="font-serif-luxury text-3xl tracking-[0.15em] transition-all duration-300"
              style={{
                color: "#ffffff",
                transitionDelay: `${i * 50}ms`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(var(--gold))")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#ffffff")}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;