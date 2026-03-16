import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBook from "@/components/FloatingBook";
import locationIcon from "@/assets/locationzoo.png";
import callIcon from "@/assets/callzootopia.png";
import mailIcon from "@/assets/mailzoo.png";
import instaIcon from "@/assets/insta.png";
import facebookIcon from "@/assets/facebook.png";
import threadsIcon from "@/assets/thread.png";
import XIcon from "@/assets/X.png";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toSentenceCase = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

  return (
    <div className="bg-royal-deep min-h-screen text-ivory">
      <Navbar />

      {/* Contact Header */}
      <section className="pt-40 pb-20 px-6 text-center bg-gradient-to-b from-royal-deep to-royal">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <span className="section-label mb-6 block text-gold">
            Get in Touch
          </span>
          <h1 className="font-serif-luxury text-5xl md:text-7xl mb-6">
            Plan Your Visit
          </h1>
          <p className="text-xl text-ivory/60 leading-relaxed font-body font-light">
            Where nature, comfort, and unforgettable moments come together,
          <p className="text-xl text-ivory/60 leading-relaxed font-body font-light"></p>
            Welcome to Zootopia
          </p>
        </div>
      </section>

      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24">
            {/* Contact Information */}
            <div className="animate-slide-right">
              <h2 className="font-serif-luxury text-4xl mb-12">
                Contact Details
              </h2>
              <div className="space-y-12">
                {[
                  {
                    icon: locationIcon,
                    title: "Address",
                    details: [
                      "KH NO. 28/2, Behind Gorewara Zoo, Pithesur Road, Pithesur, Nagpur-441501, Maharashtra",
                    ],
                  },
                  {
                    icon: callIcon,
                    title: "Reservations",
                    details: ["+91 8460446076", "+91 94236 37786"],
                  },
                  {
                    icon: mailIcon,
                    title: "Inquiries",
                    details: [
                      "booking.zootopia@gmail.com",
                      "reservation@zootopia.com",
                    ],
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div
                      className="relative w-16 h-16 rounded-full flex items-center justify-center overflow-hidden p-0 transition-all duration-500 flex-shrink-0"
                      style={{
                        border: "1px solid rgba(212, 175, 55, 0.35)",
                        boxShadow: "0 0 0px 0px rgba(212,175,55,0)",
                        transition:
                          "box-shadow 0.5s ease, border-color 0.5s ease",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLDivElement;
                        el.style.boxShadow =
                          "0 0 18px 4px rgba(212,175,55,0.45), 0 0 40px 10px rgba(10,20,80,0.7), inset 0 0 14px 2px rgba(212,175,55,0.15)";
                        el.style.borderColor = "rgba(212,175,55,0.9)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLDivElement;
                        el.style.boxShadow = "0 0 0px 0px rgba(212,175,55,0)";
                        el.style.borderColor = "rgba(212,175,55,0.35)";
                      }}
                    >
                      {/* Blurred gold halo behind icon — blends into deep blue */}
                      <span
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          background:
                            "radial-gradient(circle, rgba(212,175,55,0.22) 0%, rgba(10,20,80,0.0) 75%)",
                          filter: "blur(6px)",
                        }}
                      />
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="relative z-10 w-16 h-16 object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif-luxury text-xl mb-2 text-gold-light">
                        {item.title}
                      </h4>
                      <div className="flex flex-col gap-1">
                        {(Array.isArray(item.details)
                          ? item.details
                          : [item.details]
                        ).map((line, j) => (
                          <p
                            key={j}
                            className="text-ivory/60 font-body text-sm tracking-wide"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-20">
                <h3 className="font-serif-luxury text-2xl mb-8">
                  Follow Our Story
                </h3>
                <div className="flex gap-6">
                  {[
                    {
                      label: "Instagram",
                      icon: instaIcon,
                      href: "https://www.instagram.com/zootopiabybaigfarms?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D",
                    },
                    {
                      label: "Facebook",
                      icon: facebookIcon,
                      href: "https://www.facebook.com/people/Zootopia/61577093454896/?locale=en_GB#",
                    },
                    {
                      label: "Threads",
                      icon: threadsIcon,
                      href: "https://www.threads.com/@zootopiabybaigfarms",
                    },
                    {
                      label: "X",
                      icon: XIcon,
                      href: "https://x.com/ZootopiaFarms",
                    },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.label}
                    >
                      <button
                        className="relative w-14 h-14 rounded-full glass flex items-center justify-center text-gold hover:scale-110 transition-all overflow-hidden p- group"
                        style={{
                          border: "1px solid rgba(212,175,55,0.2)",
                          transition:
                            "box-shadow 0.4s ease, border-color 0.4s ease, transform 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget as HTMLButtonElement;
                          el.style.boxShadow =
                            "0 0 14px 3px rgba(212,175,55,0.4), 0 0 30px 8px rgba(10,20,80,0.6), inset 0 0 10px 2px rgba(212,175,55,0.1)";
                          el.style.borderColor = "rgba(212,175,55,0.85)";
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget as HTMLButtonElement;
                          el.style.boxShadow = "none";
                          el.style.borderColor = "rgba(212,175,55,0.2)";
                        }}
                      >
                        <span
                          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                          style={{
                            background:
                              "radial-gradient(circle, rgba(212,175,55,0.18) 0%, rgba(10,20,80,0.0) 75%)",
                            filter: "blur(4px)",
                          }}
                        />
                        <img
                          src={social.icon}
                          alt={social.label}
                          className="relative z-10 w-full h-full object-contain"
                        />
                      </button>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="animate-slide-left">
              <div className="glass-royal p-8 md:p-12 border-gold/30 rounded-sm">
                <h2 className="font-serif-luxury text-3xl mb-8 ">
                  Inquiry Form
                </h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[12px] uppercase tracking-widest text-gold/80 ml-1">
                        FULL NAME
                      </label>
                      <input
                        type="text"
                        placeholder="Your Name"
                         onChange={(e) => {
    e.target.value = toSentenceCase(e.target.value);
  }}
                        className="w-full bg-royal-deep/50 border border-gold/20 p-4 font-body text-sm tracking-widest  focus:border-gold outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] uppercase tracking-widest text-gold/80 ml-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="Your Email Address"
                        className="w-full bg-royal-deep/50 border border-gold/20 p-4 font-body text-sm tracking-widest focus:border-gold outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] uppercase tracking-widest text-gold/80 ml-1">
                      Subject
                    </label>
                    <select className="w-full bg-royal-deep/50 border border-gold/20 p-4 font-body text-sm tracking-[0.1em] focus:border-gold outline-none transition-colors appearance-none">
                      <option>Restaurant Reservation</option>
                      <option>Wedding Inquiry</option>
                      <option>Corporate Event</option>
                      <option>Table Reservation</option>
                      <option>Other Inquiry</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] uppercase tracking-widest text-gold/80 ml-1">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="How may we assist you?"
                       onChange={(e) => {
    e.target.value = toSentenceCase(e.target.value);
  }}
                      className="w-full bg-royal-deep/50 border border-gold/20 p-4 font-body text-sm tracking-widest focus:border-gold outline-none transition-colors resize-none"
                    />
                  </div>
                  <button className="btn-luxury-gold w-full py-5 text-sm font-bold shadow-gold-lg">
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full relative grayscale hover:grayscale-0 transition-all duration-1000">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.2936297266797!2d79.02946997526195!3d21.220201880477454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c35da9c6a7a3%3A0x29bb6098e9d46006!2sZootopia%20Restaurant%20by%20Baig%20Farms!5e0!3m2!1sen!2sin!4v1773210588189!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
        <div className="absolute inset-0 bg-royal-deep/20 pointer-events-none" />
      </section>

      <Footer />
      <FloatingBook />
    </div>
  );
};

export default ContactPage;