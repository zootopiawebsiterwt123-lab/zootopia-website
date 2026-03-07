import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 48);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ background: "hsl(var(--royal-blue-deep))" }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--gold)) 1px, transparent 1px),
                            radial-gradient(circle at 75% 75%, hsl(var(--gold)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Outer ring */}
      <div
        className="relative mb-8"
        style={{ animation: "preloader-pulse 2s ease-in-out infinite" }}
      >
        <div
          className="w-36 h-36 rounded-full flex items-center justify-center"
          style={{
            border: "1px solid hsla(44, 85%, 55%, 0.4)",
            boxShadow: "0 0 40px hsla(44, 85%, 55%, 0.2), inset 0 0 40px hsla(44, 85%, 55%, 0.05)",
          }}
        >
          <div
            className="w-28 h-28 rounded-full flex items-center justify-center"
            style={{
              border: "1px solid hsla(44, 85%, 55%, 0.6)",
              background: "hsla(222, 72%, 15%, 0.8)",
            }}
          >
            <img
              src={logo}
              alt="Zootopia"
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Brand name */}
      <h1
        className="font-serif-luxury text-5xl tracking-[0.3em] mb-2"
        style={{
          background: "var(--gradient-gold)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          backgroundSize: "200% 200%",
          animation: "gold-shimmer 3s ease infinite",
        }}
      >
        ZOOTOPIA
      </h1>
      <p
        className="section-label mb-10"
        style={{ color: "hsla(44, 85%, 68%, 0.7)" }}
      >
        Luxury · Resort · Restaurant
      </p>

      {/* Progress bar */}
      <div className="w-48 h-px relative" style={{ background: "hsla(44, 85%, 55%, 0.2)" }}>
        <div
          className="absolute left-0 top-0 h-full"
          style={{
            width: `${progress}%`,
            background: "var(--gradient-gold)",
            transition: "width 0.05s linear",
            boxShadow: "0 0 8px hsl(var(--gold))",
          }}
        />
      </div>
      <p
        className="mt-3 font-body text-xs tracking-widest"
        style={{ color: "hsla(44, 85%, 55%, 0.5)" }}
      >
        {progress}%
      </p>
    </div>
  );
};

export default Preloader;
