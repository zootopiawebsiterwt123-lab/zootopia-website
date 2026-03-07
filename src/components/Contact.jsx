import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import locationIcon from "@/assets/locationzoo.png";
import callIcon from "@/assets/callzootopia.png";
import mailIcon from "@/assets/mailzoo.png";
import threadIcon from "@/assets/thread.png";
import watchIcon from "@/assets/watch.png";
import instaIcon from "@/assets/insta.png";
import facebookIcon from "@/assets/facebook.png";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const contactDetails = [
    {
      icon: locationIcon,
      label: "Address",
      value: "KH NO. 28/2, Behind Gorewara Zoo, Pithesur Road, Pithesur, Nagpur-441501, Maharashtra",
    },
    {
      icon: callIcon,
      label: "Reservations",
      value: "+91 8460446076\n+91 9371276464",
    },
    {
      icon: mailIcon,
      label: "Email",
      value: "booking.zootopia@gmail.com\nreservation@zootopia.com",
    },
    {
      icon: watchIcon,
      label: "Hours",
      value: "Resort · Check-In: 4:00 PM | Check-Out: 11:30 AM\nRestaurant · 4:00 PM – 11:30 PM\nWaterpark · Entry: 9:00 AM | Exit: 7:00 PM",
    },
  ];

  return (
    <section id="contact" className="py-28" style={{ background: "hsl(var(--ivory))" }}>
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Find Us</p>
          <h2
            className="font-serif-luxury text-5xl lg:text-6xl font-light leading-tight"
            style={{ color: "hsl(var(--royal-blue-deep))" }}
          >
            Get in{" "}
            <span className="text-gold-gradient">Touch</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6 mb-10">
              {contactDetails.map((detail, i) => (
                <div
                  key={i}
                  className="flex gap-5 p-5 rounded-sm transition-all duration-300 group items-start"
                  style={{
                    border: "1px solid hsla(44,85%,55%,0.15)",
                    background: "hsl(var(--card))",
                  }}
                >
                  <div className="w-18 h-18 flex items-start justify-center flex-shrink-0 pt-1">
                    {typeof detail.icon === 'string' && detail.icon.length < 5 ? (
                      <span className="text-xl">{detail.icon}</span>
                    ) : (
                      <img src={detail.icon} alt={detail.label} className="w-16 h-16 object-contain" />
                    )}
                  </div>
                  <div>
                    <p className="section-label mb-1" style={{ color: "hsl(var(--gold-dark))" }}>
                      {detail.label}
                    </p>
                    {detail.value.split("\n").map((line, j) => (
                      <p key={j} className="font-body text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="section-label mb-4" style={{ color: "hsl(var(--gold-dark))" }}>Follow Our Story</p>
              <div className="flex gap-3">
                {[
                  { label: "Instagram", icon: instaIcon },
                  { label: "Facebook", icon: facebookIcon },
                  { label: "Thread", icon: threadIcon },
                ].map((social) => (
                  <button
                    key={social.label}
                    className="w-14 h-14 flex items-center justify-center rounded-sm transition-all duration-300 hover:-translate-y-1"
                    style={{
                      border: "1px solid hsla(44,85%,55%,0.25)",
                      background: "hsl(var(--card))",
                    }}
                    title={social.label}
                  >
                    <img src={social.icon} alt={social.label} className="w-10 h-10 object-contain" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative rounded-sm overflow-hidden"
            style={{
              height: "440px",
              border: "1px solid hsla(44,85%,55%,0.2)",
              boxShadow: "var(--shadow-elegant)",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.5!2d79.0317197!3d21.2200992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c35da9c6a7a3%3A0x29bb6098e9d46006!2sZootopia+Restaurant+by+Baig+Farms!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(20%) contrast(1.05)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zootopia Location"
            />
            {/* Map overlay label */}
            <div
              className="absolute bottom-4 left-4 glass-royal px-4 py-3 rounded-sm"
              style={{ border: "1px solid hsla(44,85%,55%,0.25)" }}
            >
              <p className="section-label mb-0.5" style={{ color: "hsl(var(--gold))" }}>Zootopia Estate</p>
              <p className="font-body text-xs" style={{ color: "hsla(44,30%,92%,0.7)" }}>Pithesur, Nagpur - 441501</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;