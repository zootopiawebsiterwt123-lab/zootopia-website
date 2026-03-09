import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import diningRoom from "@/assets/dining-room.jpg";
import spa from "@/assets/spa.jpg";
import weddingHall from "@/assets/wedding-hall.jpeg"
import resortPool from "@/assets/resort-pool.jpeg";

const services = [{

title: "Dining Room",
subtitle: "Open-Air Fine Dining",
description: "Enjoy a relaxed dining experience in our airy, arch-framed restaurant with teak wood furnishings, woven pendant lights, and a serene garden backdrop.",
image: diningRoom,
link: "#dining"},
  {
    
    title: "Wedding Hall",
    subtitle: "Your Dream Celebration",
    description: "An elegantly decorated wedding stage with lush floral arches, golden chandeliers, and luxurious velvet seating — crafted to make your special day truly unforgettable.",
    image: weddingHall,
    link: "#wedding"
  },
  // {
  //   icon: "🌿",
  //   title: "Luxury Spa",
  //   subtitle: "Serenity Sanctuary",
  //   description: "Ancient rituals meet modern wellness in our award-winning spa retreat — pure bliss for body and soul.",
  //   image: spa,
  //   link: "#resort",
  // },
  {
   
title: "Resort Pool",
subtitle: "Relax & Unwind",
description: "Dive into our stunning outdoor pool surrounded by lush greenery, lounge chairs, and a tranquil waterfall feature — your perfect escape.",
image: resortPool,
link: "#resort",
  },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const scrollTo = (href) => {
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      className="py-28 relative"
      style={{ background: "hsl(var(--royal-blue-deep))" }}
    >
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, hsl(var(--gold)) 0px, hsl(var(--gold)) 1px, transparent 1px, transparent 50px)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4" style={{ color: "hsl(var(--gold-light))" }}>
            What We Offer
          </p>
          <h2
            className="font-serif-luxury text-5xl lg:text-6xl font-light leading-tight mb-4"
            style={{ color: "hsl(var(--ivory))" }}
          >
            Our Signature{" "}
            <span className="text-gold-gradient">Experiences</span>
          </h2>
          <div className="ornament-separator w-64 mx-auto mt-6">
            <span className="font-serif-luxury text-xl" style={{ color: "hsl(var(--gold))" }}>
              ✦
            </span>
          </div>
        </motion.div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="group relative overflow-hidden rounded-sm cursor-pointer card-luxury"
              style={{
                border: "1px solid hsla(44,85%,55%,0.15)",
              }}
              onClick={() => scrollTo(service.link)}
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(to top, hsla(222,80%,8%,0.95) 0%, hsla(222,72%,15%,0.6) 50%, hsla(222,72%,15%,0.2) 100%)",
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 h-72 flex flex-col justify-end">
                <span className="text-3xl mb-3">{service.icon}</span>
                <p className="section-label mb-1" style={{ color: "hsl(var(--gold-light))" }}>
                  {service.subtitle}
                </p>
                <h3
                  className="font-serif-luxury text-2xl mb-3"
                  style={{ color: "hsl(var(--ivory))" }}
                >
                  {service.title}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-4"
                  style={{ color: "hsla(44,30%,92%,0.7)" }}
                >
                  {service.description}
                </p>
                <div
                  className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0"
                >
                  <div className="w-6 h-px" style={{ background: "var(--gradient-gold)" }} />
                  <span className="section-label" style={{ color: "hsl(var(--gold))" }}>
                    Explore
                  </span>
                </div>
              </div>

              {/* Gold border on hover */}
              <div
                className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ border: "1px solid hsla(44,85%,55%,0.4)", boxShadow: "inset 0 0 30px hsla(44,85%,55%,0.05)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;