import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import diningRoom from "@/assets/dining-room.jpg";
import logoEmblem from "@/assets/logo-emblem.png";


const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 overflow-hidden" style={{ background: "hsl(var(--ivory))" }}>
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image stack */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative">
              <img
                src={diningRoom}
                alt="Zootopia Fine Dining"
                className="w-full h-[500px] object-cover rounded-sm shadow-elegant"
              />
              {/* Gold border overlay */}
              <div
                className="absolute inset-0 rounded-sm pointer-events-none"
                style={{ border: "1px solid hsla(44,85%,55%,0.3)" }}
              />
              {/* Offset decorative frame */}
              <div
                className="absolute -bottom-6 -right-6 w-full h-full rounded-sm -z-10"
                style={{ border: "1px solid hsla(44,85%,55%,0.2)", background: "transparent" }}
              />
            </div>

            {/* Floating emblem card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -top-8 -right-8 glass-royal p-5 rounded-sm shadow-gold"
              style={{ border: "1px solid hsla(44,85%,55%,0.25)" }}
            >
              <img src={logoEmblem} alt="Zootopia" className="w-16 h-16 object-contain" />
            </motion.div>

          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          >
            <p className="section-label mb-4">Our Heritage</p>
            <div className="gold-divider w-16 mb-6" />

            <h2
              className="font-serif-luxury text-5xl lg:text-6xl font-light leading-tight mb-6"
              style={{ color: "hsl(var(--royal-blue-deep))" }}
            >
              A Legacy of
              <br />
              <span className="text-gold-gradient">Refined Grandeur</span>
            </h2>

            <p className="font-body text-base leading-relaxed mb-5" style={{ color: "hsl(var(--muted-foreground))" }}>
              Zootopia was born from a singular vision — to create a sanctuary where exceptional hospitality meets timeless elegance. Nestled amidst lush landscapes with ocean vistas, our estate offers an unparalleled fusion of modern luxury and classical grandeur.
            </p>
            <p className="font-body text-base leading-relaxed mb-10" style={{ color: "hsl(var(--muted-foreground))" }}>
              From our award-winning fine dining restaurant to our exquisite wedding ballrooms and serene resort villas, every corner of Zootopia tells a story of meticulous craftsmanship and heartfelt service.
            </p>

            {/* Ornament + CTA */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-px" style={{ background: "var(--gradient-gold)" }} />
              <span className="font-serif-luxury italic text-lg" style={{ color: "hsl(var(--gold-dark))" }}>
                Where Every Moment Matters
              </span>
            </div>

            <button
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-luxury-gold px-8 py-3.5 rounded-sm"
            >
              Discover Our Services
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
