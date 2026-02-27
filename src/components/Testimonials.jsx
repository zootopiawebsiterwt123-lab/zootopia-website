import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    quote: "Zootopia redefined what luxury means to me. The wedding hall was absolutely breathtaking — every detail was perfection. Our guests are still talking about it months later.",
    author: "Priya & Arjun Malhotra",
    occasion: "Royal Wedding Package",
    stars: 5,
    location: "Mumbai, India",
  },
  {
    quote: "From the moment we arrived, we were treated like royalty. The infinity pool villa, the private dining experience — it was simply the most magical vacation of our lives.",
    author: "James & Catherine Worthington",
    occasion: "Honeymoon Suite Stay",
    stars: 5,
    location: "London, UK",
  },
  {
    quote: "The lounge ambiance is unmatched anywhere in the country. Velvet seats, candlelight, and cocktails that are true works of art. Our corporate event was an absolute triumph.",
    author: "Vikram Nair",
    occasion: "Corporate Gala Evening",
    stars: 5,
    location: "Bangalore, India",
  },
  {
    quote: "The spa was transcendental. The Ayurvedic treatments paired with the marble interiors and gold accents created an experience I will cherish for years. Truly 5-star.",
    author: "Sofia Andrade",
    occasion: "Wellness Retreat",
    stars: 5,
    location: "Lisbon, Portugal",
  },
  {
    quote: "We've stayed at many luxury resorts worldwide — Zootopia stands in a class entirely its own. The attention to detail, the personalized service, the cuisine — incomparable.",
    author: "Ahmed Al-Farsi",
    occasion: "Presidential Suite",
    stars: 5,
    location: "Dubai, UAE",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isAuto, setIsAuto] = useState(true);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isAuto) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAuto]);

  const t = testimonials[current];

  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: "hsl(var(--royal-blue))" }}
    >
      {/* Decorative circles */}
      <div
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-10"
        style={{ border: "1px solid hsl(var(--gold))" }}
      />
      <div
        className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-10"
        style={{ border: "1px solid hsl(var(--gold))" }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="font-serif-luxury text-5xl font-light mb-16"
            style={{ color: "hsl(var(--ivory))" }}
          >
            What Our Guests{" "}
            <span className="text-gold-gradient">Are Saying</span>
          </h2>
        </motion.div>

        {/* Testimonial card */}
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(t.stars)].map((_, i) => (
              <span key={i} className="text-xl" style={{ color: "hsl(var(--gold))" }}>★</span>
            ))}
          </div>

          {/* Quote mark */}
          <div
            className="font-serif-luxury text-8xl leading-none mb-4 -mt-8"
            style={{ color: "hsla(44,85%,55%,0.2)" }}
          >
            "
          </div>

          <blockquote
            className="font-serif-luxury text-xl md:text-2xl font-light leading-relaxed mb-8 italic"
            style={{ color: "hsla(44,30%,96%,0.9)" }}
          >
            {t.quote}
          </blockquote>

          <div className="gold-divider w-20 mx-auto mb-6" />

          <p className="font-serif-luxury text-xl mb-1" style={{ color: "hsl(var(--gold))" }}>
            {t.author}
          </p>
          <p className="section-label" style={{ color: "hsla(44,85%,68%,0.6)" }}>
            {t.occasion} · {t.location}
          </p>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={() => { setCurrent((current - 1 + testimonials.length) % testimonials.length); setIsAuto(false); }}
            className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300"
            style={{
              border: "1px solid hsla(44,85%,55%,0.3)",
              color: "hsl(var(--gold))",
            }}
          >
            ←
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrent(i); setIsAuto(false); }}
                className="rounded-full transition-all duration-400"
                style={{
                  width: i === current ? "24px" : "6px",
                  height: "6px",
                  background: i === current ? "hsl(var(--gold))" : "hsla(44,85%,55%,0.3)",
                }}
              />
            ))}
          </div>

          <button
            onClick={() => { setCurrent((current + 1) % testimonials.length); setIsAuto(false); }}
            className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300"
            style={{
              border: "1px solid hsla(44,85%,55%,0.3)",
              color: "hsl(var(--gold))",
            }}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
