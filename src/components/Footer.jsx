import logoEmblem from "@/assets/logo-emblem.png";
import linkIcon from "@/assets/linkzoo.png";
import youtubeIcon from "@/assets/youtubezzoo.png";
import threadsIcon from "@/assets/threadzoo.png";

const footerLinks = {
  Experience: ["Fine Dining", "Lounge Bar", "Sunset Terrace", "Chef's Table", "Wine Cellar"],
  Celebrate: ["Weddings", "Anniversaries", "Corporate Events", "Birthday Galas", "Private Parties"],
  Stay: ["Ocean Suites", "Garden Villas", "Royal Penthouse", "Spa Packages", "Honeymoon Offers"],
  Discover: ["About Zootopia", "Gallery", "Press & Awards", "Careers", "Gift Cards"],
};

const Footer = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const socialIcons = [
    { src: linkIcon, alt: "LinkedIn" },
    { src: youtubeIcon, alt: "YouTube" },
    { src: threadsIcon, alt: "Threads" }
  ];

  return (
    <footer
      style={{ background: "hsl(var(--royal-blue-deep))" }}
    >
      {/* Gold top divider */}
      <div className="gold-divider-thick" />

      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src={logoEmblem} alt="Zootopia" className="w-12 h-12 object-contain" />
              <div>
                <p
                  className="font-serif-luxury text-2xl tracking-[0.15em]"
                  style={{
                    background: "var(--gradient-gold)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    backgroundSize: "200% 200%",
                  }}
                >
                  ZOOTOPIA
                </p>
                <p className="font-body text-[9px] tracking-[0.25em]" style={{ color: "hsla(44,85%,55%,0.5)" }}>
                  LUXURY RESORT
                </p>
              </div>
            </div>
            <p className="font-body text-sm leading-relaxed mb-6" style={{ color: "hsla(44,30%,92%,0.45)" }}>
              Where timeless elegance meets extraordinary hospitality. An icon of luxury since 1999.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {socialIcons.map((icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 flex items-center justify-center rounded-sm transition-all duration-300 hover:-translate-y-1"
                  style={{
                    border: "1px solid hsla(44,85%,55%,0.2)",
                    background: "hsla(44,85%,55%,0.05)",
                  }}
                >
                  <img src={icon.src} alt={icon.alt} className="w-6 h-6 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <p className="section-label mb-5" style={{ color: "hsl(var(--gold))" }}>
                {heading}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      className="font-body text-sm transition-colors duration-300 text-left"
                      style={{ color: "hsla(44,30%,92%,0.45)" }}
                      onMouseEnter={(e) => e.currentTarget.style.color = "hsl(var(--gold-light))"}
                      onMouseLeave={(e) => e.currentTarget.style.color = "hsla(44,30%,92%,0.45)"}
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div
          className="mt-16 p-8 rounded-sm"
          style={{
            border: "1px solid hsla(44,85%,55%,0.15)",
            background: "hsla(44,85%,55%,0.04)",
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-serif-luxury text-xl mb-1" style={{ color: "hsl(var(--ivory))" }}>
                Stay in the Loop
              </p>
              <p className="font-body text-sm" style={{ color: "hsla(44,30%,92%,0.45)" }}>
                Receive exclusive offers, seasonal menus, and invitations to private events.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 md:w-64 px-4 py-3 rounded-sm font-body text-sm"
                style={{
                  background: "hsla(222,72%,18%,0.4)",
                  border: "1px solid hsla(44,85%,55%,0.2)",
                  color: "hsl(var(--ivory))",
                  outline: "none",
                }}
              />
              <button className="btn-luxury-gold px-6 py-3 rounded-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gold mid divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="gold-divider opacity-30" />
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs" style={{ color: "hsla(44,30%,92%,0.3)" }}>
            © 2024 Zootopia Luxury Resort. All rights reserved. Crafted with love.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Cookie Settings"].map((link) => (
              <button key={link} className="font-body text-xs transition-colors duration-300"
                style={{ color: "hsla(44,30%,92%,0.3)" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "hsl(var(--gold))"}
                onMouseLeave={(e) => e.currentTarget.style.color = "hsla(44,30%,92%,0.3)"}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gold bottom divider */}
      <div className="gold-divider-thick" />
    </footer>
  );
};

export default Footer;
