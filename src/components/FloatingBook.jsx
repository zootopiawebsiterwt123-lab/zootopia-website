import { useState, useEffect } from "react";

const FloatingBook = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`fixed right-6 bottom-6 z-50 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <button
        onClick={scrollToBooking}
        className="px-5 py-3.5 rounded-sm flex items-center gap-2 animate-float font-body text-[11px] tracking-[0.15em] transition-all duration-500 ease-out hover:scale-105"
        style={{
          background: "hsl(var(--ivory))",
          color: "hsl(var(--royal-blue-deep))",
          boxShadow: "0 8px 32px hsla(0,0%,100%,0.2), 0 0 0 1px hsla(0,0%,100%,0.1)",
          border: "1px solid hsla(0,0%,100%,0.3)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "var(--gradient-gold-simple)";
          e.currentTarget.style.color = "hsl(var(--royal-blue-deep))";
          e.currentTarget.style.boxShadow = "0 8px 32px hsla(44,85%,55%,0.45), 0 0 0 1px hsla(44,85%,55%,0.2)";
          e.currentTarget.style.border = "1px solid hsla(44,85%,55%,0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "hsl(var(--ivory))";
          e.currentTarget.style.color = "hsl(var(--royal-blue-deep))";
          e.currentTarget.style.boxShadow = "0 8px 32px hsla(0,0%,100%,0.2), 0 0 0 1px hsla(0,0%,100%,0.1)";
          e.currentTarget.style.border = "1px solid hsla(0,0%,100%,0.3)";
        }}
      >
        <span className="text-base">🍽️</span>
        <span>BOOK A TABLE</span>
      </button>
    </div>
  );
};

export default FloatingBook;
