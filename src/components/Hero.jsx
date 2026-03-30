import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import weddingHall from "@/assets/wedding-hall.jpeg"
import resortPool from "@/assets/resort-pool.jpeg"
import loungeBg from "@/assets/lounge-bg.jpg";

const slides = [
  {
    image: heroBg,
    eyebrow: "Welcome to Zootopia",
    title: "Where Luxury\nMeets Legacy",
    subtitle: "An exclusive 5-star resort, wedding hall & lounge experience crafted for those who demand the extraordinary.",
    cta: "Explore Our World",
    ctaLink: "#about",
  },
  {
    image: weddingHall,
    eyebrow: "Wedding Collection",
    title: "Your Perfect\nRoyal Celebration",
    subtitle: "Lavish ballrooms adorned with crystal chandeliers and gold accents — where your fairytale becomes reality.",
    cta: "Plan Your Wedding",
    ctaLink: "#weddings",
  },
  {
    image: resortPool,
    eyebrow: "Resort Experience",
    title: "Paradise Awaits\nBeyond the Horizon",
    subtitle: "Where nature, comfort, and unforgettable moments come together, welcome to Zootopia Resort.",
    cta: "Discover the Resort",
    ctaLink: "#resort",
  },
  {
    image: loungeBg,
    eyebrow: "The Zootopia Lounge",
    title: "An Evening of\nRefined Indulgence",
    subtitle: "Velvet seating, bespoke cocktails, and candlelit dining — where every night becomes an unforgettable memory.",
    cta: "Enter the Lounge",
    ctaLink: "#lounge",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (href) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const slide = slides[current];

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background image with zoom animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <img
            src={slide.image}
            alt="Zootopia"
            className="w-full h-full object-cover"
          />
          {/* Multi-layer overlay */}
          <div className="absolute inset-0 hero-overlay" />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, hsla(222,80%,8%,0.4) 0%, transparent 60%)",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Decorative gold lines */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 z-10">
        <div className="w-px h-24" style={{ background: "var(--gradient-gold)", opacity: 0.5 }} />
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="w-1 rounded-full transition-all duration-500"
            style={{
              height: i === current ? "24px" : "6px",
              background: i === current ? "var(--gradient-gold)" : "hsla(44,85%,55%,0.3)",
              boxShadow: i === current ? "0 0 8px hsl(var(--gold))" : "none",
            }}
          />
        ))}
        <div className="w-px h-24" style={{ background: "var(--gradient-gold)", opacity: 0.5 }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl"
            >
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="w-8 h-px" style={{ background: "var(--gradient-gold)" }} />
                <span className="section-label" style={{ color: "hsl(var(--gold-light))" }}>
                  {slide.eyebrow}
                </span>
              </motion.div>

              {/* Main heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.8 }}
                className="font-serif-luxury text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] mb-6"
                style={{ color: "hsl(var(--ivory))" }}
              >
                {slide.title.split("\n").map((line, i) => (
                  <span key={i} className="block">
                    {i === 1 ? (
                      <span
                        style={{
                          background: "var(--gradient-gold)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                          backgroundSize: "200% 200%",
                        }}
                      >
                        {line}
                      </span>
                    ) : line}
                  </span>
                ))}
              </motion.h1>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.6, transformOrigin: "left" }}
                className="w-20 h-px mb-6"
                style={{ background: "var(--gradient-gold)" }}
              />

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="font-body text-base md:text-lg leading-relaxed mb-10 max-w-xl"
                style={{ color: "hsla(44, 30%, 92%, 0.75)" }}
              >
                {slide.subtitle}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={() => current === 1 ? navigate("/events") : current === 2 ? navigate("/resort") : scrollTo(slide.ctaLink)}
                  className="btn-luxury-outline px-8 py-4 rounded-sm text-xs"
                  style={{ borderColor: "hsla(44,85%,55%,0.6)", color: "hsl(var(--gold-light))" }}
                >
                  {slide.cta}
                </button>
                {current === 0 && (
                  <button
                    onClick={() => scrollTo("#booking")}
                    className="btn-luxury-outline px-8 py-4 rounded-sm text-xs"
                    style={{ borderColor: "hsla(44,85%,55%,0.6)", color: "hsl(var(--gold-light))" }}
                  >
                    Reserve a Table
                  </button>
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide indicators (mobile) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-10 lg:hidden">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all duration-500"
            style={{
              width: i === current ? "24px" : "6px",
              height: "6px",
              background: i === current ? "var(--gradient-gold)" : "hsla(44,85%,55%,0.4)",
            }}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-8 hidden lg:flex flex-col items-center gap-2 z-10">
        <span className="section-label" style={{ writingMode: "vertical-rl", color: "hsla(44,85%,55%,0.5)", fontSize: "9px" }}>
          SCROLL DOWN
        </span>
        <div className="w-px h-16 relative overflow-hidden" style={{ background: "hsla(44,85%,55%,0.2)" }}>
          <div
            className="absolute top-0 left-0 w-full h-1/2"
            style={{
              background: "var(--gradient-gold)",
              animation: "float-bob 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;