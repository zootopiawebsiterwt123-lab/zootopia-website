import { useState, useEffect } from "react";
import instaLogo from "@/assets/insta.png";
import whatsappLogo from "@/assets/whatsapp_logo.png";

const FloatingBook = () => {
  const [visible, setVisible] = useState(false);
  const [hoveredInsta, setHoveredInsta] = useState(false);
  const [hoveredWhatsapp, setHoveredWhatsapp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const buttons = [
    {
      key: "whatsapp",
      logo: whatsappLogo,
      tooltip: "Contact Us",
      url: "https://wa.me/917028106759",
      hovered: hoveredWhatsapp,
      setHovered: setHoveredWhatsapp,
    },
    {
      key: "insta",
      logo: instaLogo,
      tooltip: "Follow Us",
      url: "https://www.instagram.com/zootopia_nagpur",
      hovered: hoveredInsta,
      setHovered: setHoveredInsta,
    },
  ];

  return (
    <div
      className={`fixed right-6 bottom-6 z-50 flex flex-col gap-3 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {buttons.map((btn) => (
        <div key={btn.key} className="relative flex items-center">
          {/* Tooltip */}
          <div
            className="absolute right-16 transition-all duration-300"
            style={{
              opacity: btn.hovered ? 1 : 0,
              transform: btn.hovered ? "translateX(0)" : "translateX(8px)",
              pointerEvents: "none",
            }}
          >
            <span
              className="whitespace-nowrap px-3 py-1.5 rounded-sm font-body text-[10px] tracking-[0.18em] uppercase"
              style={{
                background: "hsl(var(--ivory))",
                color: "hsl(var(--royal-blue-deep))",
                boxShadow: "0 4px 16px hsla(44,85%,55%,0.25)",
              }}
            >
              {btn.tooltip}
            </span>
            <div
              className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-0 h-0"
              style={{
                borderTop: "5px solid transparent",
                borderBottom: "5px solid transparent",
                borderLeft: "6px solid hsl(var(--ivory))",
              }}
            />
          </div>

          {/* Button */}
          <button
            onClick={() => window.open(btn.url, "_blank")}
            onMouseEnter={() => btn.setHovered(true)}
            onMouseLeave={() => btn.setHovered(false)}
            className="flex items-center justify-center w-14 h-14 rounded-full animate-float transition-all duration-500 ease-out hover:scale-110"
            style={{
              boxShadow: "0 8px 32px hsla(44,85%,55%,0.35), 0 0 0 1px hsla(44,85%,55%,0.15)",
              background: "transparent",
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
          >
            <img src={btn.logo} alt={btn.key} className="w-14 h-14 object-contain rounded-full" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default FloatingBook;