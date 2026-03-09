import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import weddingHall from "@/assets/wedding-hall.jpeg"
import weddingGarden from "@/assets/wedding-garden.jpeg";


const Wedding = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="weddings" className="py-28 overflow-hidden" style={{ background: "hsl(var(--ivory))" }}>
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="section-label mb-4">Weddings at Zootopia</p>
          <h2
            className="font-serif-luxury text-5xl lg:text-6xl font-light leading-tight mb-4"
            style={{ color: "hsl(var(--royal-blue-deep))" }}
          >
            Your Dream Wedding,
            <br />
            <span className="text-gold-gradient">Flawlessly Executed</span>
          </h2>
          <p className="font-body text-base max-w-xl mx-auto mt-4" style={{ color: "hsl(var(--muted-foreground))" }}>
            Every detail, every moment, every memory — crafted with absolute perfection for the most important day of your life.
          </p>
        </motion.div>

        {/* Main showcase */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative overflow-hidden rounded-sm group"
            style={{ height: "480px" }}
          >
            <img
              src={weddingHall}
              alt="Royal Ballroom"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, hsla(222,80%,8%,0.8) 0%, transparent 60%)" }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="section-label mb-2" style={{ color: "hsl(var(--gold-light))" }}>Indoor Venue</p>
              <h3 className="font-serif-luxury text-3xl" style={{ color: "hsl(var(--ivory))" }}>
                The Grand Ballroom
              </h3>
            </div>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-sm"
              style={{ border: "2px solid hsla(44,85%,55%,0.3)" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden rounded-sm group"
            style={{ height: "480px" }}
          >
            <img
              src={weddingGarden}
              alt="Garden Wedding"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, hsla(222,80%,8%,0.8) 0%, transparent 60%)" }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="section-label mb-2" style={{ color: "hsl(var(--gold-light))" }}>Outdoor Ceremony</p>
              <h3 className="font-serif-luxury text-3xl" style={{ color: "hsl(var(--ivory))" }}>
                The Royal Garden
              </h3>
            </div>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-sm"
              style={{ border: "2px solid hsla(44,85%,55%,0.3)" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Wedding;
