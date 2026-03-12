import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBook from "@/components/FloatingBook";
import { MoveRight, Star, Calendar, MapPin, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import weddingHall from "@/assets/wedding-hall.jpeg";
import weddingGrandBallroom from "@/assets/wedding_grand_ballroom.png";
import loungeBg from "@/assets/lounge-bg.jpg";

const EventsPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const eventCategories = [
        {
            title: "Royal Weddings",
            description: "Exchange vows in a setting of unparalleled elegance. Our grand ballroom and lush gardens provide the perfect backdrop for your love story.",
            image: weddingHall,
            features: ["Up to 500 guests", "Custom floral design", "Gourmet catering"]
        },
        {
            title: "Corporate Celebrations",
            description: "Elevate your professional milestones with sophisticated corporate events, award ceremonies, and high-impact celebrations handled with precision.",
            image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            features: ["State-of-the-art AV", "Executive catering", "Private entrance"]
        },
        {
            title: "Private Celebrations",
            description: "From milestone birthdays to intimate anniversaries, create lasting memories in our exclusive private dining rooms or garden terraces.",
            image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            features: ["Themed decor", "Live music options", "Personalized service"]
        }
    ];

    const scrollToContact = () => {
        const section = document.getElementById("inquiry-section");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="bg-royal-deep min-h-screen text-ivory">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 z-0 bg-fixed bg-cover bg-center transition-transform duration-1000 scale-105"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop')",
                    }}
                >
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
                </div>

                <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-up">
                    <span className="section-label mb-4 block">Celebrations of Excellence</span>
                    <h1 className="font-serif-luxury text-5xl md:text-7xl mb-6 text-gold-gradient">
                        Grand Events & Weddings
                    </h1>
                    <p className="font-body text-lg md:text-xl text-ivory/80 max-w-2xl mx-auto leading-relaxed">
                        Where every detail is orchestrated to perfection, creating moments that transcend time.
                    </p>
                    <div className="mt-10">
                        <button onClick={scrollToContact} className="btn-luxury-gold px-10 py-4">Inquire Now</button>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 px-6 bg-royal">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center gap-4 mb-8">
                        <div className="h-px w-12 bg-gold/50" />
                        <span className="font-serif-luxury text-gold tracking-widest text-sm uppercase">The Art of Hosting</span>
                        <div className="h-px w-12 bg-gold/50" />
                    </div>
                    <h2 className="font-serif-luxury text-4xl md:text-5xl mb-8 leading-tight">
                        Crafting Unforgettable Experiences
                    </h2>
                    <div className="grid md:grid-cols-3 gap-12 mt-16 text-left">
                        {[
                            { icon: <Star className="text-gold w-6 h-6" />, title: "Exquisite Design", text: "Every event is a custom masterpiece, tailored to your unique vision." },
                            { icon: <Calendar className="text-gold w-6 h-6" />, title: "Expert Planning", text: "Dedicated concierges managing every logistical nuance with precision." },
                            { icon: <MapPin className="text-gold w-6 h-6" />, title: "Iconic Venues", text: "From historic ballrooms to modern open-air garden terraces." }
                        ].map((item, i) => (
                            <div key={i} className="animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                                <div className="mb-6">{item.icon}</div>
                                <h3 className="font-serif-luxury text-2xl mb-4 text-gold-light">{item.title}</h3>
                                <p className="text-ivory/60 leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Event Categories */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                        <div className="max-w-2xl">
                            <span className="section-label">Our Venues</span>
                            <h2 className="font-serif-luxury text-4xl md:text-5xl mt-4">Venues Designed For <br /> Life's Grandest Moments</h2>
                        </div>
                    </div>

                    <div className="grid gap-20">
                        {eventCategories.map((evt, i) => (
                            <div
                                key={i}
                                className={`flex flex-col md:flex-row gap-12 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className="w-full md:w-1/2 group overflow-hidden rounded-sm relative">
                                    <img
                                        src={evt.image}
                                        alt={evt.title}
                                        className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 border border-gold/20 m-4 pointer-events-none" />
                                </div>
                                <div className="w-full md:w-1/2">
                                    <h3 className="font-serif-luxury text-3xl mb-6 text-gold">{evt.title}</h3>
                                    <p className="text-ivory/70 text-lg mb-8 leading-relaxed">
                                        {evt.description}
                                    </p>
                                    <ul className="grid grid-cols-2 gap-4 mb-10">
                                        {evt.features.map((f, j) => (
                                            <li key={j} className="flex items-center gap-3 text-sm text-ivory/60">
                                                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <button onClick={scrollToContact} className="flex items-center gap-3 font-body text-xs tracking-widest uppercase text-gold hover:translate-x-2 transition-transform duration-300">
                                        Discover More <MoveRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="inquiry-section" className="relative py-32 px-6 overflow-hidden min-h-[500px] flex items-center justify-center">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('https://media.istockphoto.com/id/2223681047/photo/a-room-with-a-beautiful-sparkling-chandelier.webp?a=1&b=1&s=612x612&w=0&k=20&c=rDRQPHqUBKPhU_roNEwzFiXyS2ZFig1AT9XyaV9fJXI=')` }}
                >
                    <div className="absolute inset-0 bg-royal-deep/85 backdrop-blur-[2px]" />
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-serif-luxury text-4xl md:text-5xl mb-8 text-ivory">Ready to Begin Your Story?</h2>
                        <p className="text-xl mb-10 text-ivory/80 leading-relaxed max-w-2xl mx-auto">
                            Whether it's a grand wedding or a strategic corporate milestone, our team is ready to orchestrate your vision into reality.
                        </p>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-12 py-4 btn-luxury-gold uppercase tracking-widest font-bold"
                        >
                            Contact Events Team
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Inquiry Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
                            onClick={() => setIsModalOpen(false)}
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-2xl glass-royal p-8 md:p-12 mt-10 rounded-sm border border-gold/20 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-6 right-6 text-gold hover:scale-110 transition-transform z-50"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="text-center mb-10">
                                <span className="section-label mb-2 block">Event Inquiry</span>
                                <h2 className="font-serif-luxury text-3xl md:text-4xl text-white">Let's Craft Your Event</h2>
                            </div>

                            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); alert("Inquiry sent successfully!"); }}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-gold-light opacity-70">Full Name</label>
                                        <input required type="text" className="w-full bg-white/5 border border-white/10 p-4 text-ivory focus:border-gold outline-none transition-colors" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-gold-light opacity-70">Email Address</label>
                                        <input required type="email" className="w-full bg-white/5 border border-white/10 p-4 text-ivory focus:border-gold outline-none transition-colors" placeholder="john@example.com" />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-gold-light opacity-70">Phone Number</label>
                                        <input required type="tel" className="w-full bg-white/5 border border-white/10 p-4 text-ivory focus:border-gold outline-none transition-colors" placeholder="+91 00000 00000" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-gold-light opacity-70">Event Type</label>
                                        <input required type="text" className="w-full bg-white/5 border border-white/10 p-4 text-ivory focus:border-gold outline-none transition-colors" placeholder="e.g. Corporate Gala, Birthday" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-gold-light opacity-70">Expected Guests</label>
                                    <input required type="text" className="w-full bg-white/5 border border-white/10 p-4 text-ivory focus:border-gold outline-none transition-colors" placeholder="e.g. 150 guests" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-gold-light opacity-70">Event Details</label>
                                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 p-4 text-ivory focus:border-gold outline-none transition-colors resize-none" placeholder="Tell us more about your vision..." />
                                </div>
                                <button type="submit" className="w-full py-5 btn-luxury-gold font-bold tracking-widest uppercase">
                                    Submit Inquiry
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <Footer />
            <FloatingBook />
        </div>
    );
};

export default EventsPage;
