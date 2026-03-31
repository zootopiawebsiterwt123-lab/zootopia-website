import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import diningRoom from "@/assets/dining-room.jpg";
import gourmet from "@/assets/gourmet.jpg";
import loungeBg from "@/assets/lounge-bg.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


// ─── Data ────────────────────────────────────────────────────────────────────

const menuCategories = ["All", "Starters", "Mains", "Seafood", "Desserts", "Drinks"];

const menuItems = [
  { category: "Starters", name: "Smoked Burrata", desc: "Wood-smoked burrata, heirloom tomatoes, aged balsamic & microgreens", price: "\u20b9620", image: "https://images.unsplash.com/photo-1662116765994-1e4200c43589?w=600&q=80" },
  { category: "Starters", name: "Coastal Calamari", desc: "Crispy golden rings, saffron aioli, pickled chilli & sea salt", price: "\u20b9540", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80" },
  { category: "Starters", name: "Chicken Tango", desc: "Crispy golden chicken tenders tossed in a tangy sauce with minimal spices", price: "\u20b9480", image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80" },
  { category: "Mains", name: "Lamb Osso Buco", desc: "Slow-braised lamb shank, saffron risotto, gremolata & jus", price: "\u20b91,480", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80" },
  { category: "Mains", name: "Mutton Kasturi", desc: "Tender mutton slow-cooked in aromatic kasturi methi gravy with rich Indian spices", price: "\u20b9980", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80" },
  { category: "Mains", name: "Zootopia Grilled Chicken", desc: "Herb-marinated free-range chicken, roasted garlic mash & pan jus", price: "\u20b91,120", image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=600&q=80" },
  { category: "Seafood", name: "Butter Poached Lobster", desc: "Whole lobster, drawn butter, lemon beurre blanc & garden herbs", price: "\u20b92,200", image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=600&q=80" },
  { category: "Seafood", name: "Seared Sea Bass", desc: "Pan-seared sea bass, fennel puree, capers & olive oil", price: "\u20b91,650", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80" },
  { category: "Seafood", name: "Prawn Thermidor", desc: "Tiger prawns, cognac cream sauce, gruyere gratin & brioche toast", price: "\u20b91,380", image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=600&q=80" },
  { category: "Desserts", name: "Creme Brulee", desc: "Classic vanilla custard, caramelised sugar crust & seasonal berries", price: "\u20b9420", image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600&q=80" },
  { category: "Desserts", name: "Chocolate Sizzler Brownie", desc: "Warm fudgy brownie served sizzling with hot chocolate sauce and vanilla ice cream", price: "\u20b9480", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80" },
  { category: "Drinks", name: "Signature Zootopia Spritz", desc: "House blend citrus, elderflower, sparkling water & fresh mint", price: "\u20b9380", image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&q=80" },
  { category: "Drinks", name: "Mango Cardamom Lassi", desc: "Fresh Alphonso mango, cardamom, yoghurt & rose water", price: "\u20b9280", image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=600&q=80" },
];

const ambienceImages = [
  { src: diningRoom, label: "Open-Air Dining Hall" },
  { src: loungeBg, label: "Lounge Terrace" },
  { src: gourmet, label: "Signature Dishes" },
  { src: heroBg, label: "Evening Setting" },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

const SectionLabel = ({ children, className = "" }) => (
  <p
    className={`uppercase tracking-[0.25em] text-xs font-semibold ${className}`}
    style={{ color: "hsl(44,85%,65%)", fontFamily: "'Cormorant Garamond', serif" }}
  >
    {children}
  </p>
);

const GoldDivider = () => (
  <div className="flex items-center justify-center gap-3 my-6">
    <div className="h-px w-16" style={{ background: "linear-gradient(to right, transparent, hsl(44,85%,55%))" }} />
    <span style={{ color: "hsl(44,85%,55%)", fontSize: "1rem" }}>✦</span>
    <div className="h-px w-16" style={{ background: "linear-gradient(to left, transparent, hsl(44,85%,55%))" }} />
  </div>
);

// ─── Hero ─────────────────────────────────────────────────────────────────────

const Hero = () => (
  <section className="relative h-screen min-h-[600px] flex items-end pb-24 overflow-hidden">
    <div className="absolute inset-0">
      <img src={diningRoom} alt="Restaurant" className="w-full h-full object-cover" />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, hsla(222,80%,6%,1) 0%, hsla(222,72%,10%,0.75) 50%, hsla(222,72%,10%,0.3) 100%)",
        }}
      />
    </div>

    <div
      className="absolute top-0 right-0 w-px h-full opacity-20 pointer-events-none"
      style={{ background: "linear-gradient(to bottom, transparent, hsl(44,85%,55%), transparent)", marginRight: "12%" }}
    />

    <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1
          className="font-light leading-none mb-6"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(3rem, 8vw, 7rem)",
            color: "hsl(44,40%,94%)",
            letterSpacing: "-0.02em",
          }}
        >
          The Dining <span style={{ color: "hsl(44,85%,65%)", fontStyle: "italic" }}>Room</span>
        </h1>
        <GoldDivider />
        <p
          className="max-w-xl text-base leading-relaxed mt-4"
          style={{ color: "hsla(44,30%,90%,0.65)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
        >
          Where sun-bleached arches frame every meal and woven lanterns cast a warm, golden glow.
          An open-air sanctuary where bold flavours meet unhurried elegance.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-10 flex items-center gap-6"
        >
          <button
            onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 text-sm uppercase tracking-widest transition-all duration-300 hover:opacity-80"
            style={{
              background: "linear-gradient(135deg, hsl(44,85%,55%), hsl(44,70%,42%))",
              color: "hsl(222,80%,8%)",
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
              letterSpacing: "0.15em",
            }}
          >
            View Menu
          </button>
          <div className="flex items-center gap-2" style={{ color: "hsl(44,85%,65%)" }}>
            <div className="w-8 h-px" style={{ background: "hsl(44,85%,55%)" }} />
            <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "'Lato', sans-serif" }}>
              Scroll to explore
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>

    <div
      className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
      style={{ background: "linear-gradient(to bottom, transparent, hsl(222,80%,6%))" }}
    />
  </section>
);

// ─── About ────────────────────────────────────────────────────────────────────

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-28 relative overflow-hidden"
      style={{ background: "hsl(222,80%,6%)" }}
    >
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, hsl(44,85%,55%) 0px, hsl(44,85%,55%) 1px, transparent 1px, transparent 60px)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="relative overflow-hidden" style={{ height: "520px" }}>
            <img src={loungeBg} alt="Ambience" className="w-full h-full object-cover" />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, hsla(222,80%,8%,0.3), transparent)" }}
            />
          </div>
          <div
            className="absolute pointer-events-none"
            style={{
              top: "20px", left: "-20px", right: "20px", bottom: "-20px",
              border: "1px solid hsla(44,85%,55%,0.25)", zIndex: -1,
            }}
          />
          <div
            className="absolute bottom-8 right-8 px-6 py-4 text-center"
            style={{ background: "hsla(222,80%,8%,0.9)", border: "1px solid hsla(44,85%,55%,0.3)" }}
          >
            <p className="font-light text-4xl" style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(44,85%,65%)" }}>12+</p>
            <p className="text-xs uppercase tracking-widest mt-1" style={{ color: "hsla(44,30%,90%,0.6)", fontFamily: "'Lato', sans-serif" }}>Years of Excellence</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <SectionLabel className="mb-4">Our Story</SectionLabel>
          <h2
            className="font-light leading-tight mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              color: "hsl(44,40%,94%)",
            }}
          >
            A Culinary Journey <br />
            <span style={{ color: "hsl(44,85%,65%)", fontStyle: "italic" }}>Born from Passion</span>
          </h2>
          <GoldDivider />
          <p
            className="text-base leading-loose mb-6"
            style={{ color: "hsla(44,30%,90%,0.6)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            Nestled within Zootopia's lush estate, our restaurant was conceived as a place where the
            boundaries between indoors and outdoors dissolve. Whitewashed arches open to tropical gardens,
            woven pendant lights cast warmth across hand-laid mosaic floors, and every dish tells a story
            of craft and care.
          </p>
          <p
            className="text-base leading-loose mb-10"
            style={{ color: "hsla(44,30%,90%,0.6)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            Our kitchen celebrates bold, honest flavours — drawing from coastal traditions, global
            techniques and the finest seasonal produce. Whether you arrive for a leisurely Sunday brunch
            or an intimate candlelit dinner, every visit is an occasion.
          </p>

          <div className="grid grid-cols-3 gap-6">
            {[["Open Air", "Dining"], ["Award", "Winning"], ["Farm to", "Table"]].map(([l1, l2], i) => (
              <div key={i} className="text-center py-4 px-2" style={{ borderTop: "1px solid hsla(44,85%,55%,0.2)" }}>
                <p className="text-lg font-light" style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(44,85%,65%)" }}>{l1}</p>
                <p className="text-lg font-light" style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(44,85%,65%)" }}>{l2}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ─── Menu ─────────────────────────────────────────────────────────────────────

const Menu = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="menu"
      ref={ref}
      className="py-28 relative"
      style={{ background: "hsl(222,72%,9%)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <SectionLabel className="mb-4">Curated for You</SectionLabel>
          <h2
            className="font-light leading-tight"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              color: "hsl(44,40%,94%)",
            }}
          >
            Our <span style={{ color: "hsl(44,85%,65%)", fontStyle: "italic" }}>Signature</span> Menu
          </h2>
          <GoldDivider />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {menuCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 text-xs uppercase tracking-widest transition-all duration-300"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 600,
                letterSpacing: "0.15em",
                background: activeCategory === cat ? "linear-gradient(135deg, hsl(44,85%,55%), hsl(44,70%,42%))" : "transparent",
                color: activeCategory === cat ? "hsl(222,80%,8%)" : "hsla(44,30%,90%,0.55)",
                border: activeCategory === cat ? "none" : "1px solid hsla(44,85%,55%,0.2)",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <motion.div
              key={`${item.name}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="group relative overflow-hidden rounded-sm cursor-default"
              style={{
                height: "320px",
                border: "1px solid hsla(44,85%,55%,0.15)",
              }}
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Default gradient */}
                <div
                  className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
                  style={{ background: "linear-gradient(to top, hsla(222,80%,6%,0.95) 0%, hsla(222,72%,12%,0.55) 55%, hsla(222,72%,12%,0.15) 100%)" }}
                />
                {/* Hover gradient */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "linear-gradient(to top, hsla(222,80%,6%,0.98) 0%, hsla(222,72%,12%,0.88) 65%, hsla(222,72%,12%,0.35) 100%)" }}
                />
              </div>

              {/* Category pill */}
              <div className="absolute top-4 left-4 z-10">
                <span
                  className="px-3 py-1 text-xs uppercase tracking-widest"
                  style={{
                    background: "hsla(222,80%,8%,0.75)",
                    border: "1px solid hsla(44,85%,55%,0.35)",
                    color: "hsl(44,85%,65%)",
                    fontFamily: "'Lato', sans-serif",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {item.category}
                </span>
              </div>

              {/* Content — pinned to bottom, description expands on hover */}
              <div className="absolute bottom-0 left-0 right-0 px-5 pb-5 z-10 transition-transform duration-500 group-hover:-translate-y-1">
                <h4
                  className="font-light leading-tight mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", color: "hsl(44,40%,94%)" }}
                >
                  {item.name}
                </h4>
                {/* Price always visible */}
                <p className="font-light mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", color: "hsl(44,85%,65%)" }}>
                  {item.price}
                </p>
                {/* Description reveals on hover */}
                <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-24">
                  <p
                    className="text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
                    style={{ color: "hsla(44,30%,92%,0.65)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Gold border on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ border: "1px solid hsla(44,85%,55%,0.4)" }}
              />
            </motion.div>
          ))}
        </div>

        <p
          className="text-center text-xs mt-10 opacity-40"
          style={{ color: "hsl(44,30%,90%)", fontFamily: "'Lato', sans-serif", letterSpacing: "0.05em" }}
        >
          All prices inclusive of taxes · Menu subject to seasonal change · Kindly inform us of any dietary requirements
        </p>
      </div>
    </section>
  );
};

// ─── Ambience Gallery ─────────────────────────────────────────────────────────

const AmbienceGallery = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  return (
    <section
      ref={ref}
      className="py-28 relative"
      style={{ background: "hsl(222,80%,6%)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <SectionLabel className="mb-4">The Space</SectionLabel>
          <h2
            className="font-light leading-tight"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              color: "hsl(44,40%,94%)",
            }}
          >
            Step Into Our <span style={{ color: "hsl(44,85%,65%)", fontStyle: "italic" }}>World</span>
          </h2>
          <GoldDivider />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative overflow-hidden mb-4"
          style={{ height: "520px" }}
        >
          <img
            src={ambienceImages[active].src}
            alt={ambienceImages[active].label}
            className="w-full h-full object-cover transition-all duration-700"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, hsla(222,80%,6%,0.7) 0%, transparent 60%)" }}
          />
          <div className="absolute bottom-8 left-8">
            <p
              className="text-2xl font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsl(44,40%,94%)" }}
            >
              {ambienceImages[active].label}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-4 gap-3">
          {ambienceImages.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden cursor-pointer transition-all duration-300"
              style={{
                height: "110px",
                border: active === i ? "2px solid hsl(44,85%,55%)" : "2px solid transparent",
                opacity: active === i ? 1 : 0.55,
              }}
              onClick={() => setActive(i)}
            >
              <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────

const Restaurant = () => {
  return (
    <div style={{ background: "hsl(222,80%,6%)", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <AmbienceGallery />

      {/* Footer CTA */}
      <section
        className="py-24 text-center relative overflow-hidden"
        style={{ background: "hsl(222,72%,9%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, hsl(44,85%,55%) 0px, hsl(44,85%,55%) 1px, transparent 1px, transparent 60px)`,
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <SectionLabel className="mb-4">Reserve Your Table</SectionLabel>
          <h2
            className="font-light mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "hsl(44,40%,94%)",
            }}
          >
            An Unforgettable <span style={{ color: "hsl(44,85%,65%)", fontStyle: "italic" }}>Evening Awaits</span>
          </h2>
          <GoldDivider />
          <p
            className="mb-10 text-base leading-loose"
            style={{ color: "hsla(44,30%,90%,0.55)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            For reservations, private dining or event enquiries, our team is delighted to assist you.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 text-sm uppercase tracking-widest transition-all duration-300 hover:opacity-80"
            style={{
              background: "linear-gradient(135deg, hsl(44,85%,55%), hsl(44,70%,42%))",
              color: "hsl(222,80%,8%)",
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
              letterSpacing: "0.15em",
            }}
          >
            Make a Reservation
          </a>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Restaurant;