import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    quote:
      "Beautiful place, ultimate food, premium hospitality. The owner himself is a foodie n hence one can definitely bet on the taste redefined what luxury means to me. The wedding hall was absolutely breathtaking — every detail was perfection. Our guests are still talking about it months later.",
    author: "Hemant Rajpt",
    occasion: "Dine In",
    stars: 4.5,
    location: "Zootopia Restaurant",
  },
  {
    quote:
      "A peaceful, homely stay with warm hospitality, delicious home-cooked food, and a welcoming family-like atmosphere an ideal place to stay in Nagpur.",
    author: "Ayush Singh",
    occasion: "Resort",
    stars: 4.3,
    location: "Zootopia Resort",
  },
  {
    quote:
      "Beautiful wedding hall, delicious food, and excellent service with courteous staff — a perfect venue for a memorable celebration.",
    author: "Noman Sheikh",
    occasion: "Wedding Hall",
    stars: 5,
    location: "Zootopia Garden",
  },
  {
    quote:
      "Great ambience, tasty food, and friendly service at Zootopia Resort & Restaurant — a perfect spot to relax and enjoy with friends and family.",
    author: "Alfiya Sheikh",
    occasion: "Dine In",
    stars: 4.5,
    location: "Zootopia Restaurant",
  },
  {
    quote:
      "Loved the vibrant atmosphere at Zootopia Resort & Restaurant — great food, quick service, and a fun place for a perfect outing.",
    author: "Muskan Qadri",
    occasion: "Dine In",
    stars: 4.3,
    location: "Zootopia Restaurant",
  },
];

/**
 * Renders exactly 5 star positions on one line:
 *  - Full gold star for each whole star
 *  - Half star (SVG clip — left half gold, right half dim) at the fractional slot
 *  - Dim empty star for remaining positions
 */
const StarRating = ({ stars }) => {
  const fullCount = Math.floor(stars);
  const hasHalf = stars % 1 >= 0.3; // 4.3 and 4.5 both show a half star
  const emptyCount = 5 - fullCount - (hasHalf ? 1 : 0);

  const GOLD = "hsl(var(--gold))";
  const DIM = "hsla(44,85%,55%,0.25)";
  const SIZE = 22;
  const POINTS = "12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26";

  return (
    <div className="flex justify-center items-center gap-1 mb-8">
      {/* Full stars */}
      {[...Array(fullCount)].map((_, i) => (
        <svg key={`full-${i}`} width={SIZE} height={SIZE} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <polygon points={POINTS} fill={GOLD} />
        </svg>
      ))}

      {/* Half star — left half filled via SVG clipPath */}
      {hasHalf && (
        <svg key="half" width={SIZE} height={SIZE} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="leftHalf">
              <rect x="0" y="0" width="12" height="24" />
            </clipPath>
          </defs>
          {/* Dim full star as background */}
          <polygon points={POINTS} fill={DIM} />
          {/* Gold left half on top */}
          <polygon points={POINTS} fill={GOLD} clipPath="url(#leftHalf)" />
        </svg>
      )}

      {/* Empty stars */}
      {[...Array(emptyCount)].map((_, i) => (
        <svg key={`empty-${i}`} width={SIZE} height={SIZE} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <polygon points={POINTS} fill={DIM} />
        </svg>
      ))}
    </div>
  );
};

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

      <div
        className="max-w-4xl mx-auto px-6 text-center relative z-10"
        ref={ref}
      >
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
          <StarRating stars={t.stars} />

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

          <p
            className="font-serif-luxury text-xl mb-1"
            style={{ color: "hsl(var(--gold))" }}
          >
            {t.author}
          </p>
          <p
            className="section-label"
            style={{ color: "hsla(44,85%,68%,0.6)" }}
          >
            {t.occasion} · {t.location}
          </p>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={() => {
              setCurrent(
                (current - 1 + testimonials.length) % testimonials.length,
              );
              setIsAuto(false);
            }}
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
                onClick={() => {
                  setCurrent(i);
                  setIsAuto(false);
                }}
                className="rounded-full transition-all duration-400"
                style={{
                  width: i === current ? "24px" : "6px",
                  height: "6px",
                  background:
                    i === current ? "hsl(var(--gold))" : "hsla(44,85%,55%,0.3)",
                }}
              />
            ))}
          </div>

          <button
            onClick={() => {
              setCurrent((current + 1) % testimonials.length);
              setIsAuto(false);
            }}
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