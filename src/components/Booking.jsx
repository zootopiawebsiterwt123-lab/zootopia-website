import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const occasions = ["Fine Dining", "Wedding Inquiry", "Resort Stay", "Corporate Event", "Special Celebration"];

const Booking = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({
    name: "", email: "", phone: "", date: "", guests: "2", occasion: "", message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputStyle = {
    background: "hsla(222,72%,18%,0.4)",
    border: "1px solid hsla(44,85%,55%,0.2)",
    color: "hsl(var(--ivory))",
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    padding: "14px 16px",
    borderRadius: "2px",
    width: "100%",
    outline: "none",
    transition: "border-color 0.3s ease",
  };

  const labelStyle = {
    fontFamily: "Inter, sans-serif",
    fontSize: "10px",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "hsl(var(--gold))",
    marginBottom: "8px",
    display: "block",
  };

  return (
    <section
      id="booking"
      className="py-28 relative overflow-hidden"
      style={{ background: "hsl(var(--royal-blue-deep))" }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(hsl(var(--gold)) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4" style={{ color: "hsl(var(--gold-light))" }}>
            Reservations
          </p>
          <h2
            className="font-serif-luxury text-5xl lg:text-6xl font-light leading-tight mb-4"
            style={{ color: "hsl(var(--ivory))" }}
          >
            Reserve Your{" "}
            <span className="text-gold-gradient">Luxury Experience</span>
          </h2>
          <p className="font-body text-sm max-w-md mx-auto mt-4" style={{ color: "hsla(44,30%,92%,0.55)" }}>
            Let us craft an extraordinary experience tailored to your desires. Our concierge team will be in touch within 24 hours.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="glass-royal rounded-sm p-8 md:p-12"
          style={{ border: "1px solid hsla(44,85%,55%,0.2)", boxShadow: "0 20px 60px hsla(222,80%,5%,0.5)" }}
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
              >
                <span className="text-2xl" style={{ color: "hsl(var(--royal-blue-deep))" }}>✓</span>
              </div>
              <h3 className="font-serif-luxury text-3xl mb-3" style={{ color: "hsl(var(--ivory))" }}>
                Reservation Received
              </h3>
              <p className="font-body text-sm" style={{ color: "hsla(44,30%,92%,0.6)" }}>
                Our concierge team will contact you within 24 hours to confirm your experience.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label style={labelStyle}>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = "hsl(var(--gold))"}
                    onBlur={(e) => e.target.style.borderColor = "hsla(44,85%,55%,0.2)"}
             
                            
                            
                            
                            
                      />
                </div>
                <div>
                  <label style={labelStyle}>Email Address</label >
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = "hsl(var(--gold))"}
                    onBlur={(e) => e.target.style.borderColor = "hsla(44,85%,55%,0.2)"}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 00000 00000"
                    value={form.phone}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = "hsl(var(--gold))"}
                    onBlur={(e) => e.target.style.borderColor = "hsla(44,85%,55%,0.2)"}


                  />
                  
                </div>
                <div>
                  <label style={labelStyle}>Preferred Date</label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                    style={{ ...inputStyle, colorScheme: "dark" }}
                    onFocus={(e) => e.target.style.borderColor = "hsl(var(--gold))"}
                    onBlur={(e) => e.target.style.borderColor = "hsla(44,85%,55%,0.2)"}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Number of Guests</label>
                  <select
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = "hsl(var(--gold))"}
                    onBlur={(e) => e.target.style.borderColor = "hsla(44,85%,55%,0.2)"}
                  >
                    {[1,2,3,4,5,6,8,10,15,20,50,100,200,500].map(n => (
                      <option key={n} value={n} style={{ background: "hsl(var(--royal-blue-deep))" }}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Occasion</label>
                  <select
                    name="occasion"
                    value={form.occasion}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => e.target.style.borderColor = "hsl(var(--gold))"}
                    onBlur={(e) => e.target.style.borderColor = "hsla(44,85%,55%,0.2)"}
                  >
                    <option value="" style={{ background: "hsl(var(--royal-blue-deep))" }}>Select Occasion</option>
                    {occasions.map(o => (
                      <option key={o} value={o} style={{ background: "hsl(var(--royal-blue-deep))" }}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label style={labelStyle}>Special Requests</label>
                <textarea
                  name="message"
                  placeholder="Tell us about your vision, dietary requirements, or any special arrangements..."
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={(e) => e.target.style.borderColor = "hsl(var(--gold))"}
                  onBlur={(e) => e.target.style.borderColor = "hsla(44,85%,55%,0.2)"}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <button type="submit" className="btn-luxury-gold px-10 py-4 rounded-sm w-full sm:w-auto">
                  Send Reservation Request
                </button>
                <p className="font-body text-xs" style={{ color: "hsla(44,30%,92%,0.4)" }}>
                  Or call us: <span style={{ color: "hsl(var(--gold))" }}>+91 9371276464</span>
                </p>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;
