import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBook from "@/components/FloatingBook";
import locationIcon from "@/assets/locationzoo.png";
import callIcon from "@/assets/callzootopia.png";
import mailIcon from "@/assets/mailzoo.png";
import linkIcon from "@/assets/linkzoo.png";
import youtubeIcon from "@/assets/youtubezzoo.png";
import threadsIcon from "@/assets/threadzoo.png";

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-royal-deep min-h-screen text-ivory">
            <Navbar />

            {/* Contact Header */}
            <section className="pt-40 pb-20 px-6 text-center bg-gradient-to-b from-royal-deep to-royal">
                <div className="max-w-3xl mx-auto animate-fade-up">
                    <span className="section-label mb-6 block text-gold">Get in Touch</span>
                    <h1 className="font-serif-luxury text-5xl md:text-7xl mb-6">Concierge Inquiries</h1>
                    <p className="text-xl text-ivory/60 leading-relaxed font-body font-light">
                        Whether you are planning a legendary stay or a grand event,
                        our dedicated concierge team is here to assist you.
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-24">
                        {/* Contact Information */}
                        <div className="animate-slide-right">
                            <h2 className="font-serif-luxury text-4xl mb-12">Contact Details</h2>
                            <div className="space-y-12">
                                {[
                                    { icon: locationIcon, title: "The Estate", details: "123 Emerald Garden Road, Luxury Valley, CA 90210" },
                                    { icon: callIcon, title: "Reservations", details: "+1 (888) 123-ZOO-456" },
                                    { icon: mailIcon, title: "Inquiries", details: "concierge@zootopia-resort.com" },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-8 group">
                                        <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold transition-all duration-300 overflow-hidden p-3">
                                            <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                                        </div>
                                        <div>
                                            <h4 className="font-serif-luxury text-xl mb-2 text-gold-light">{item.title}</h4>
                                            <p className="text-ivory/60 font-body text-sm tracking-wide">{item.details}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-20">
                                <h3 className="font-serif-luxury text-2xl mb-8">Follow Our Story</h3>
                                <div className="flex gap-6">
                                    {[
                                        { label: "LinkedIn", icon: linkIcon },
                                        { label: "YouTube", icon: youtubeIcon },
                                        { label: "Threads", icon: threadsIcon },
                                    ].map((social, i) => (
                                        <button key={i} className="w-12 h-12 rounded-full glass flex items-center justify-center text-gold hover:scale-110 transition-all border-gold/20 overflow-hidden p-3" title={social.label}>
                                            <img src={social.icon} alt={social.label} className="w-full h-full object-contain" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Inquiry Form */}
                        <div className="animate-slide-left">
                            <div className="glass-royal p-8 md:p-12 border-gold/30 rounded-sm">
                                <h2 className="font-serif-luxury text-3xl mb-8">Inquiry Form</h2>
                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase tracking-widest text-gold/80 ml-1">Full Name</label>
                                            <input
                                                type="text"
                                                placeholder="ALEXANDER SMITH"
                                                className="w-full bg-royal-deep/50 border border-gold/20 p-4 font-body text-sm tracking-widest uppercase focus:border-gold outline-none transition-colors"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase tracking-widest text-gold/80 ml-1">Email Address</label>
                                            <input
                                                type="email"
                                                placeholder="ALEX@EXAMPLE.COM"
                                                className="w-full bg-royal-deep/50 border border-gold/20 p-4 font-body text-sm tracking-widest uppercase focus:border-gold outline-none transition-colors"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-gold/80 ml-1">Subject</label>
                                        <select className="w-full bg-royal-deep/50 border border-gold/20 p-4 font-body text-sm tracking-[0.1em] uppercase focus:border-gold outline-none transition-colors appearance-none">
                                            <option>Room Reservation</option>
                                            <option>Wedding Inquiry</option>
                                            <option>Corporate Event</option>
                                            <option>Dining Reservation</option>
                                            <option>Other Inquiry</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-gold/80 ml-1">Message</label>
                                        <textarea
                                            rows={5}
                                            placeholder="HOW MAY WE ASSIST YOU?"
                                            className="w-full bg-royal-deep/50 border border-gold/20 p-4 font-body text-sm tracking-widest uppercase focus:border-gold outline-none transition-colors resize-none"
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
            <section className="h-[400px] w-full relative grayscale hover:grayscale-0 transition-all duration-1000 grayscale">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.733248043701!2d-118.41173292341517!3d34.062134517112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc08d876a445%3A0xc66cc84c987815f9!2sThe%20Beverly%20Hills%20Hotel!5e0!3m2!1sen!2sus!4v1709121234567!5m2!1sen!2sus"
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
