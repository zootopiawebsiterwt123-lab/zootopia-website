import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import loungeBg from "@/assets/lounge-bg.jpg";
import gourmet from "@/assets/gourmet.jpg";

const menuHighlights = [
  { course: "Appetizer", name: "Chicken Tango", desc: "Crispy golden chicken tenders tossed in a tangy sauce with minimal spices" },
  { course: "Main Course", name: "Mutton Kasturi", desc: "Tender mutton slow-cooked in aromatic kasturi methi gravy with rich Indian spices" },
  { course: "Veg Main Course", name: "Mushroom Mutter", desc: "Fresh button mushrooms and green peas simmered in a luscious spiced tomato-cream sauce" },
  { course: "Dessert", name: "Hot Chocolate Sizzler Brownie", desc: "Warm fudgy brownie served sizzling with hot chocolate sauce and a scoop of vanilla ice cream" },
];

const Lounge = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="lounge"
      className="py-28 overflow-hidden parallax-section relative"
      style={{
        backgroundImage: `url(${loungeBg})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "hsla(222,80%,6%,0.88)" }}
      />
      {/* Gold vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, hsla(44,85%,55%,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <p className="section-label mb-4" style={{ color: "hsl(var(--gold-light))" }}>
              The Zootopia Lounge
            </p>
            <div className="gold-divider w-12 mb-6" />
            <h2
              className="font-serif-luxury text-5xl lg:text-6xl font-light leading-tight mb-6"
              style={{ color: "hsl(var(--ivory))" }}
            >
              Ambience That
              <br />
              <span className="text-gold-gradient">Ignites the Senses</span>
            </h2>
            <p className="font-body text-base leading-relaxed mb-5" style={{ color: "hsla(44,30%,92%,0.65)" }}>
              Step into our signature lounge — a world of sapphire velvet, golden candlelight, and bespoke cocktails crafted by our master mixologists. Whether you're celebrating a milestone or simply unwinding after a long day, our lounge is your personal sanctuary.
            </p>
            <p className="font-body text-base leading-relaxed mb-10" style={{ color: "hsla(44,30%,92%,0.65)" }}>
              Open all week, from 4 PM to 11 PM late. Reservations strongly recommended.
            </p>

            <div className="flex flex-wrap gap-6 mb-10">
              {[
                { label: "Opens", value: "4:00 PM" },
                { label: "Closes", value: "11:00 PM" },
              ].map((item, i) => (
                <div key={i}>
                  <p className="section-label mb-1" style={{ color: "hsl(var(--gold))" }}>{item.label}</p>
                  <p className="font-serif-luxury text-xl" style={{ color: "hsl(var(--ivory))" }}>{item.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-luxury-gold px-8 py-3.5 rounded-sm transition-all duration-300"
                onMouseEnter={e => {
                  e.currentTarget.style.background = "hsl(44,85%,55%)";
                  e.currentTarget.style.color = "hsl(222,72%,9%)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "";
                  e.currentTarget.style.color = "";
                }}
              >
                Reserve Your Table
              </button>
              <button
                onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3.5 rounded-sm transition-all duration-300"
                style={{
                  border: "1px solid hsla(44,85%,55%,0.5)",
                  color: "hsl(44,40%,94%)",
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 400,
                  letterSpacing: "0.15em",
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  background: "transparent",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "hsl(44,85%,55%)"; e.currentTarget.style.color = "hsl(44,85%,55%)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "hsla(44,85%,55%,0.5)"; e.currentTarget.style.color = "hsl(44,40%,94%)"; }}
              >
                Explore Menu
              </button>
            </div>
          </motion.div>

          {/* Right: menu card + image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="space-y-4"
          >
            {/* Gourmet image */}
            <div className="relative overflow-hidden rounded-sm group mb-6">
              <img
                src={gourmet}
                alt="Gourmet Cuisine"
                className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ border: "1px solid hsla(44,85%,55%,0.2)" }}
              />
            </div>

            {/* Menu highlights */}
            <div
              className="glass-royal rounded-sm p-6 space-y-0"
              style={{ border: "1px solid hsla(44,85%,55%,0.2)" }}
            >
              <p className="section-label mb-4" style={{ color: "hsl(var(--gold))" }}>
                ✦ Signature Cuisine
              </p>
              <div className="gold-divider mb-5" />
              {menuHighlights.map((item, i) => (
                <div
                  key={i}
                  className="py-4 flex gap-4"
                  style={{ borderBottom: i < menuHighlights.length - 1 ? "1px solid hsla(44,85%,55%,0.1)" : "none" }}
                >
                  <span className="section-label w-24 shrink-0" style={{ color: "hsl(var(--gold))" }}>
                    {item.course}
                  </span>
                  <div>
                    <p className="font-serif-luxury text-lg leading-tight mb-1" style={{ color: "hsl(var(--ivory))" }}>
                      {item.name}
                    </p>
                    <p className="font-body text-xs" style={{ color: "hsla(44,30%,92%,0.5)" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Lounge;