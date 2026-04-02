import { useState, useEffect } from "react";
import instaLogo from "@/assets/insta.png";

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

  const WhatsAppLogo = () => (
    <svg viewBox="0 0 48 48" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#25D366"/>
      <path
        fill="#ffffff"
        d="M24 10.5C16.55 10.5 10.5 16.55 10.5 24c0 2.37.63 4.67 1.82 6.69L10.5 37.5l6.99-1.79A13.44 13.44 0 0024 37.5c7.45 0 13.5-6.05 13.5-13.5S31.45 10.5 24 10.5zm6.6 18.4c-.28.78-1.6 1.5-2.2 1.56-.56.06-1.08.28-3.65-.76-3.08-1.25-5.04-4.38-5.19-4.58-.15-.2-1.22-1.63-1.22-3.1s.77-2.2 1.05-2.5c.28-.3.6-.37.8-.37.2 0 .4.01.57.01.18.01.43-.07.67.51.25.6.84 2.05.91 2.2.08.15.13.33.03.53-.1.2-.15.32-.3.5-.14.17-.3.38-.43.51-.14.14-.29.29-.12.57.17.28.74 1.22 1.59 1.97 1.09.97 2.01 1.27 2.29 1.41.28.14.44.12.6-.07.17-.2.7-.82.89-1.1.18-.28.37-.23.62-.14.25.09 1.6.75 1.87.89.28.14.46.2.53.32.07.11.07.65-.21 1.43z"
      />
    </svg>
  );

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
            {btn.key === "whatsapp" ? (
              <WhatsAppLogo />
            ) : (
              <img src={btn.logo} alt={btn.key} className="w-14 h-14 object-contain rounded-full" />
            )}
          </button>
        </div>
      ))}
    </div>
  );
};

export default FloatingBook;