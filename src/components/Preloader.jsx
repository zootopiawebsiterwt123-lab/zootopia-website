import { useEffect, useState } from "react";
import logo from "@/assets/Zootopia logo.png";

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [phase, setPhase] = useState("hidden"); // hidden → reveal → idle

  useEffect(() => {
    const p1 = setTimeout(() => setPhase("reveal"), 300);
    const p2 = setTimeout(() => setPhase("idle"), 1400);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(onComplete, 900);
          }, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 48);

    return () => {
      clearInterval(timer);
      clearTimeout(p1);
      clearTimeout(p2);
    };
  }, [onComplete]);

  const logoStyle = {
    hidden: {
      opacity: 0,
      filter: "blur(12px) brightness(2.5)",
      transform: "scale(1.15)",
    },
    reveal: {
      opacity: 1,
      filter: "blur(0px) brightness(1)",
      transform: "scale(1.0)",
    },
    idle: {
      opacity: 1,
      filter: "blur(0px) brightness(1)",
      transform: "scale(1.0)",
    },
  }[phase];

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        background: "hsl(var(--royal-blue-deep))",
        opacity: fadeOut ? 0 : 1,
        transform: fadeOut ? "scale(1.05)" : "scale(1)",
        transition: fadeOut ? "opacity 0.9s ease, transform 0.9s ease" : "none",
        pointerEvents: fadeOut ? "none" : "auto",
      }}
    >
      {/* Background dot pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--gold)) 1px, transparent 1px),
                            radial-gradient(circle at 75% 75%, hsl(var(--gold)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Logo */}
      <div
        className="relative mb-10"
        style={{
          ...logoStyle,
          transition: phase === "hidden"
            ? "none"
            : "opacity 0.8s ease, filter 0.9s ease, transform 0.9s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <img
          src={logo}
          alt="Zootopia"
          className="w-80 object-contain"
        />
      </div>

      {/* Progress bar */}
      <div
        style={{
          opacity: phase !== "hidden" ? 1 : 0,
          transform: phase !== "hidden" ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.7s ease 0.6s, transform 0.7s ease 0.6s",
        }}
      >
        <div
          className="w-48 h-px relative"
          style={{ background: "hsla(44, 85%, 55%, 0.2)" }}
        >
          <div
            className="absolute left-0 top-0 h-full"
            style={{
              width: `${progress}%`,
              background: "var(--gradient-gold)",
              transition: "width 0.05s linear",
              boxShadow: "0 0 10px hsl(var(--gold)), 0 0 20px hsla(44,85%,55%,0.4)",
            }}
          />
          {/* Glowing dot at tip */}
          <div
            className="absolute top-1/2 -translate-y-1/2"
            style={{
              left: `calc(${progress}% - 3px)`,
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "hsl(var(--gold))",
              boxShadow: "0 0 8px hsl(var(--gold)), 0 0 16px hsla(44,85%,55%,0.6)",
              transition: "left 0.05s linear",
              opacity: progress > 0 && progress < 100 ? 1 : 0,
            }}
          />
        </div>
        <p
          className="mt-3 font-body text-xs tracking-widest text-center"
          style={{ color: "hsla(44, 85%, 55%, 0.5)" }}
        >
          {progress}%
        </p>
      </div>
    </div>
  );
};

export default Preloader;