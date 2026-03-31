import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import diningRoom from "@/assets/dining-room.jpg";
import gourmet from "@/assets/gourmet.jpg";
import loungeBg from "@/assets/lounge-bg.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── Data ────────────────────────────────────────────────────────────────────

const ambienceImages = [
  { src: diningRoom, label: "The Dining Room" },
  { src: gourmet, label: "Gourmet Kitchen" },
  { src: loungeBg, label: "The Lounge" },
  { src: heroBg, label: "Evening Ambience" },
];

const menuCards = [
  {
    title: "Starters",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=1200&q=80",
    dishes: [
      { name: "Chicken Tango", desc: "Crispy golden chicken tenders in a tangy sauce", price: "₹480" },
      { name: "Coastal Calamari", desc: "Golden rings, saffron aioli, pickled chilli & sea salt", price: "₹540" },
      { name: "Smoked Burrata", desc: "Wood-smoked burrata, heirloom tomatoes, aged balsamic", price: "₹620" },
      { name: "Lamb Seekh Kebab", desc: "Minced lamb, aromatic spices, mint chutney", price: "₹580" },
      { name: "Prawn Cocktail", desc: "Chilled tiger prawns, Marie Rose sauce, iceberg", price: "₹660" },
    ],
  },
  {
    title: "Mains — Non Veg",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1200&q=80",
    dishes: [
      { name: "Mutton Kasturi", desc: "Slow-cooked in kasturi methi gravy with rich Indian spices", price: "₹980" },
      { name: "Zootopia Grilled Chicken", desc: "Herb-marinated free-range chicken, roasted garlic mash", price: "₹1,120" },
      { name: "Lamb Osso Buco", desc: "Slow-braised lamb shank, saffron risotto, gremolata", price: "₹1,480" },
      { name: "Chicken Tikka Masala", desc: "Tandoor-smoked chicken in rich tomato-cream masala", price: "₹880" },
      { name: "Keema Mutter", desc: "Minced lamb, green peas, fragrant whole spices", price: "₹820" },
    ],
  },
  {
    title: "Mains — Veg",
    image: "https://images.unsplash.com/photo-1645696301019-35adcc18cae1?w=1200&q=80",
    dishes: [
      { name: "Mushroom Mutter", desc: "Button mushrooms & peas in spiced tomato-cream sauce", price: "₹720" },
      { name: "Wild Mushroom Risotto", desc: "Porcini, truffle oil, parmesan crisp & fresh thyme", price: "₹980" },
      { name: "Dal Makhani", desc: "Black lentils slow-cooked overnight, cream & butter", price: "₹680" },
      { name: "Paneer Shahi Korma", desc: "Cottage cheese in a royal almond-saffron gravy", price: "₹760" },
      { name: "Stuffed Bell Pepper", desc: "Quinoa, roasted vegetables, feta & herb oil", price: "₹820" },
    ],
  },
  {
    title: "Seafood",
    image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=1200&q=80",
    dishes: [
      { name: "Butter Poached Lobster", desc: "Whole lobster, lemon beurre blanc & garden herbs", price: "₹2,200" },
      { name: "Seared Sea Bass", desc: "Pan-seared sea bass, fennel puree, capers & olive oil", price: "₹1,650" },
      { name: "Prawn Thermidor", desc: "Tiger prawns, cognac cream sauce, gruyere gratin", price: "₹1,380" },
      { name: "Goan Fish Curry", desc: "Fresh catch in coconut-tamarind Goan masala, steamed rice", price: "₹1,100" },
      { name: "Crab Bisque", desc: "Velvety crab soup, saffron cream & toasted sourdough", price: "₹960" },
    ],
  },
  {
    title: "Desserts",
    image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=1200&q=80",
    dishes: [
      { name: "Creme Brulee", desc: "Classic vanilla custard, caramelised sugar crust & berries", price: "₹420" },
      { name: "Chocolate Sizzler Brownie", desc: "Warm fudgy brownie, hot chocolate sauce, vanilla ice cream", price: "₹480" },
      { name: "Gulab Jamun Cheesecake", desc: "Rose syrup gulab jamun atop a creamy baked cheesecake", price: "₹520" },
      { name: "Mango Panna Cotta", desc: "Alphonso mango panna cotta, cardamom tuile", price: "₹440" },
      { name: "Chocolate Fondant", desc: "Warm molten chocolate heart, vanilla bean ice cream", price: "₹480" },
    ],
  },
  {
    title: "Drinks",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=1200&q=80",
    dishes: [
      { name: "Zootopia Spritz", desc: "House blend citrus, elderflower, sparkling water & mint", price: "₹380" },
      { name: "Mango Cardamom Lassi", desc: "Fresh Alphonso mango, cardamom, yoghurt & rose water", price: "₹280" },
      { name: "Cold Brew Coffee", desc: "12-hour cold brew, condensed milk, coffee foam", price: "₹320" },
      { name: "Rose Lemonade", desc: "Fresh lemon, rose syrup, basil seeds & sparkling water", price: "₹260" },
      { name: "Virgin Mojito", desc: "Fresh lime, mint, brown sugar, soda & crushed ice", price: "₹240" },
    ],
  },
];

// ─── Shared UI Components ─────────────────────────────────────────────────────

const SectionLabel = ({ children, className = "" }) => (
  <p
    className={`uppercase tracking-widest text-xs ${className}`}
    style={{
      color: "hsl(44,85%,55%)",
      fontFamily: "'Lato', sans-serif",
      letterSpacing: "0.25em",
    }}
  >
    {children}
  </p>
);

const GoldDivider = () => (
  <div className="flex items-center justify-center gap-3 mt-5 mb-2">
    <div className="h-px w-16" style={{ background: "linear-gradient(to right, transparent, hsl(44,85%,55%))" }} />
    <span style={{ color: "hsl(44,85%,55%)", fontSize: "0.6rem" }}>✦</span>
    <div className="h-px w-16" style={{ background: "linear-gradient(to left, transparent, hsl(44,85%,55%))" }} />
  </div>
);

// ─── Hero ─────────────────────────────────────────────────────────────────────

const Hero = () => (
  <section
    className="relative flex items-center justify-center overflow-hidden"
    style={{ minHeight: "100vh" }}
  >
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="Hero" className="w-full h-full object-cover" />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, hsla(222,80%,6%,0.55) 0%, hsla(222,80%,6%,0.75) 100%)" }}
      />
    </div>

    {/* Content */}
    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <SectionLabel className="mb-6">Fine Dining Experience</SectionLabel>
        <h1
          className="font-light leading-tight mb-6"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(3rem, 8vw, 7rem)",
            color: "hsl(44,40%,94%)",
          }}
        >
          Zootopia{" "}
          <span style={{ color: "hsl(44,85%,65%)", fontStyle: "italic" }}>Restaurant</span>
        </h1>
        <GoldDivider />
        <p
          className="mt-6 mb-10 text-base leading-loose max-w-xl mx-auto"
          style={{ color: "hsla(44,30%,90%,0.65)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
        >
          Where every plate tells a story and every evening becomes a memory.
          An unparalleled culinary journey in the heart of the city.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#menu"
            className="inline-block px-10 py-4 text-sm uppercase tracking-widest transition-all duration-300 hover:opacity-80"
            style={{
              background: "linear-gradient(135deg, hsl(44,85%,55%), hsl(44,70%,42%))",
              color: "hsl(222,80%,8%)",
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
              letterSpacing: "0.15em",
            }}
          >
            Explore Menu
          </a>
          <a
            href="/contact"
            className="inline-block px-10 py-4 text-sm uppercase tracking-widest transition-all duration-300 hover:opacity-80"
            style={{
              border: "1px solid hsla(44,85%,55%,0.5)",
              color: "hsl(44,40%,94%)",
              fontFamily: "'Lato', sans-serif",
              fontWeight: 400,
              letterSpacing: "0.15em",
            }}
          >
            Reserve a Table
          </a>
        </div>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
      <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, transparent, hsl(44,85%,55%))" }} />
      <span className="text-xs uppercase tracking-widest" style={{ color: "hsl(44,85%,55%)", fontFamily: "'Lato', sans-serif" }}>Scroll</span>
    </div>
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
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionLabel className="mb-4">Our Story</SectionLabel>
          <h2
            className="font-light leading-tight mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.2rem, 4vw, 3.8rem)",
              color: "hsl(44,40%,94%)",
            }}
          >
            Crafted with{" "}
            <span style={{ color: "hsl(44,85%,65%)", fontStyle: "italic" }}>Passion</span>
          </h2>
          <GoldDivider />
          <p
            className="mt-6 mb-5 leading-loose"
            style={{ color: "hsla(44,30%,90%,0.6)", fontFamily: "'Lato', sans-serif", fontWeight: 300, fontSize: "0.95rem" }}
          >
            Zootopia Restaurant was born from a simple belief — that extraordinary food
            deserves an extraordinary setting. Our chefs draw inspiration from both global
            techniques and the rich tapestry of Indian culinary heritage.
          </p>
          <p
            className="leading-loose"
            style={{ color: "hsla(44,30%,90%,0.6)", fontFamily: "'Lato', sans-serif", fontWeight: 300, fontSize: "0.95rem" }}
          >
            Every dish is a conversation between tradition and innovation, composed with
            the finest seasonal ingredients and presented with quiet elegance.
          </p>
        </motion.div>

        {/* Image collage */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-3">
            <img
              src={gourmet}
              alt="Gourmet dish"
              className="w-full object-cover"
              style={{ height: "260px", border: "1px solid hsla(44,85%,55%,0.15)" }}
            />
            <img
              src={diningRoom}
              alt="Dining room"
              className="w-full object-cover mt-8"
              style={{ height: "260px", border: "1px solid hsla(44,85%,55%,0.15)" }}
            />
          </div>
          {/* Gold accent */}
          <div
            className="absolute -bottom-4 -left-4 w-24 h-24 pointer-events-none"
            style={{ border: "1px solid hsla(44,85%,55%,0.25)" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

// ─── Menu ─────────────────────────────────────────────────────────────────────

const Menu = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i - 1 + menuCards.length) % menuCards.length);
  const next = () => setActiveIndex((i) => (i + 1) % menuCards.length);

  const card = menuCards[activeIndex];

  return (
    <section
      id="menu"
      ref={ref}
      className="py-28 relative overflow-hidden"
      style={{ background: "hsl(222,72%,9%)" }}
    >
      {/* Full-bleed background image with transition */}
      <div className="absolute inset-0 transition-all duration-700">
        <img
          key={card.image}
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover"
          style={{ opacity: 0.18 }}
        />
        <div className="absolute inset-0" style={{ background: "hsla(222,72%,9%,0.82)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
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

        {/* Carousel */}
        <div className="flex items-center justify-center gap-6">
          {/* Left arrow */}
          <button
            onClick={prev}
            className="group shrink-0 w-12 h-12 flex items-center justify-center transition-all duration-300"
            style={{
              border: "1px solid hsla(44,85%,55%,0.3)",
              background: "hsla(222,80%,8%,0.6)",
              backdropFilter: "blur(8px)",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "hsl(44,85%,55%)"; e.currentTarget.style.borderColor = "hsl(44,85%,55%)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "hsla(222,80%,8%,0.6)"; e.currentTarget.style.borderColor = "hsla(44,85%,55%,0.3)"; }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "hsl(44,40%,94%)" }}>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Card */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden w-full max-w-2xl"
            style={{
              border: "1px solid hsla(44,85%,55%,0.25)",
              background: "hsla(222,80%,6%,0.75)",
              backdropFilter: "blur(16px)",
            }}
          >
            {/* Card background image */}
            <div className="absolute inset-0 opacity-20">
              <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(222,80%,6%,0.9), hsla(222,72%,15%,0.7))" }} />
            </div>

            <div className="relative z-10 p-8">
              {/* Card header */}
              <div className="flex items-center gap-4 mb-6" style={{ borderBottom: "1px solid hsla(44,85%,55%,0.2)", paddingBottom: "1.25rem" }}>
                <span style={{ color: "hsl(44,85%,55%)", fontSize: "1rem" }}>✦</span>
                <h3
                  className="font-light uppercase tracking-widest"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", color: "hsl(44,40%,94%)", letterSpacing: "0.15em" }}
                >
                  {card.title}
                </h3>
              </div>

              {/* Dish list */}
              <div className="space-y-0">
                {card.dishes.map((dish, i) => (
                  <div
                    key={i}
                    className="group/dish flex items-start gap-4 py-4 transition-colors duration-200 cursor-default"
                    style={{ borderBottom: i < card.dishes.length - 1 ? "1px solid hsla(44,85%,55%,0.1)" : "none" }}
                    onMouseEnter={e => e.currentTarget.style.background = "hsla(44,85%,55%,0.05)"}
                    onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                  >
                    <div className="flex-1 min-w-0">
                      <span
                        className="font-light"
                        style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", color: "hsl(44,85%,65%)" }}
                      >
                        {dish.name}
                      </span>
                      <span
                        className="ml-3 text-xs leading-relaxed"
                        style={{ color: "hsla(44,30%,92%,0.5)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                      >
                        — {dish.desc}
                      </span>
                    </div>
                    <span
                      className="shrink-0 font-light text-sm"
                      style={{ fontFamily: "'Cormorant Garamond', serif", color: "hsla(44,40%,94%,0.8)", paddingTop: "2px" }}
                    >
                      {dish.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gold top border accent */}
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, hsl(44,85%,55%), transparent)" }} />
            <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, hsl(44,85%,55%), transparent)" }} />
          </motion.div>

          {/* Right arrow */}
          <button
            onClick={next}
            className="group shrink-0 w-12 h-12 flex items-center justify-center transition-all duration-300"
            style={{
              border: "1px solid hsla(44,85%,55%,0.3)",
              background: "hsla(222,80%,8%,0.6)",
              backdropFilter: "blur(8px)",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "hsl(44,85%,55%)"; e.currentTarget.style.borderColor = "hsl(44,85%,55%)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "hsla(222,80%,8%,0.6)"; e.currentTarget.style.borderColor = "hsla(44,85%,55%,0.3)"; }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "hsl(44,40%,94%)" }}>
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {menuCards.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="transition-all duration-300"
              style={{
                width: activeIndex === i ? "24px" : "8px",
                height: "8px",
                background: activeIndex === i ? "hsl(44,85%,55%)" : "hsla(44,85%,55%,0.3)",
                borderRadius: "4px",
              }}
            />
          ))}
        </div>

        <p
          className="text-center text-xs mt-8 opacity-40"
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
      <Footer />
    </div>
  );
};

export default Restaurant;