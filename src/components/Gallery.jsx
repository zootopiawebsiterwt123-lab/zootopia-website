import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import weddingHall from "@/assets/wedding-hall.jpg";
import weddingGarden from "@/assets/wedding-garden.jpg";
import loungeBg from "@/assets/lounge-bg.jpg";
import resortPool from "@/assets/resort-pool.jpg";
import resortSuite from "@/assets/resort-suite.jpg";
import diningRoom from "@/assets/dining-room.jpg";
import spa from "@/assets/spa.jpg";
import gourmet from "@/assets/gourmet.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const galleryImages = [
  { src: weddingHall, label: "Grand Ballroom", category: "Wedding" },
  { src: loungeBg, label: "The Lounge", category: "Lounge" },
  { src: resortPool, label: "Infinity Pool", category: "Resort" },
  { src: weddingGarden, label: "Garden Ceremony", category: "Wedding" },
  { src: resortSuite, label: "Ocean Suite", category: "Resort" },
  { src: diningRoom, label: "Fine Dining", category: "Dining" },
  { src: spa, label: "Luxury Spa", category: "Resort" },
  { src: gourmet, label: "Gourmet Cuisine", category: "Dining" },
  { src: heroBg, label: "Zootopia Estate", category: "Resort" },
];

const categories = ["All", "Wedding", "Lounge", "Resort", "Dining"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section
      id="gallery"
      className="py-28"
      style={{ background: "hsl(var(--royal-blue-deep))" }}
    >
      <div className="max-w-7xl mx-auto px-6" ref={ref}>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-6 py-2 rounded-sm font-body text-xs tracking-widest uppercase transition-all duration-300"
              style={{
                background: activeCategory === cat ? "var(--gradient-gold-simple)" : "transparent",
                color: activeCategory === cat ? "hsl(var(--royal-blue-deep))" : "hsl(var(--gold-light))",
                border: `1px solid ${activeCategory === cat ? "transparent" : "hsla(44,85%,55%,0.3)"}`,
                boxShadow: activeCategory === cat ? "var(--shadow-gold)" : "none",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          <AnimatePresence>
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="break-inside-avoid relative group overflow-hidden rounded-sm cursor-pointer"
                onClick={() => setLightbox(img)}
                style={{ border: "1px solid hsla(44,85%,55%,0.1)" }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ aspectRatio: i % 3 === 0 ? "4/3" : "3/4" }}
                />
                <div
                  className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-all duration-400"
                  style={{ background: "linear-gradient(to top, hsla(222,80%,8%,0.85) 0%, transparent 60%)" }}
                >
                  <p className="section-label mb-1" style={{ color: "hsl(var(--gold-light))" }}>
                    {img.category}
                  </p>
                  <p className="font-serif-luxury text-lg" style={{ color: "hsl(var(--ivory))" }}>
                    {img.label}
                  </p>
                </div>
                {/* Hover border */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-sm"
                  style={{ border: "1px solid hsla(44,85%,55%,0.35)" }}
                />
                {/* Expand icon */}
                <div
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all duration-400 glass"
                  style={{ border: "1px solid hsla(44,85%,55%,0.4)" }}
                >
                  <span style={{ color: "hsl(var(--gold))", fontSize: "12px" }}>⤢</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
            style={{ background: "hsla(222,80%,5%,0.95)", backdropFilter: "blur(20px)" }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative max-w-4xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.label}
                className="w-full max-h-[80vh] object-contain rounded-sm"
                style={{ border: "1px solid hsla(44,85%,55%,0.25)" }}
              />
              <div className="mt-4 text-center">
                <p className="section-label" style={{ color: "hsl(var(--gold))" }}>{lightbox.category}</p>
                <p className="font-serif-luxury text-2xl mt-1" style={{ color: "hsl(var(--ivory))" }}>
                  {lightbox.label}
                </p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-4 -right-4 w-10 h-10 flex items-center justify-center rounded-full glass-royal"
                style={{ border: "1px solid hsla(44,85%,55%,0.3)", color: "hsl(var(--gold))", fontSize: "18px" }}
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
