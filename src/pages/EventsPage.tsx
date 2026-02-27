import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBook from "@/components/FloatingBook";
import { MoveRight, Star, Calendar, MapPin } from "lucide-react";

const EventsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const eventCategories = [
        {
            title: "Royal Weddings",
            description: "Exchange vows in a setting of unparalleled elegance. Our grand ballroom and lush gardens provide the perfect backdrop for your love story.",
            image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
            features: ["Up to 500 guests", "Custom floral design", "Gourmet catering"]
        },
        {
            title: "Gala Dinners",
            description: "Host prestigious corporate events and celebratory banquets with sophisticated service and exquisite culinary experiences.",
            image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop",
            features: ["State-of-the-art AV", "Wine pairing", "Private entrance"]
        },
        {
            title: "Private Celebrations",
            description: "From milestone birthdays to intimate anniversaries, create lasting memories in our exclusive private dining rooms.",
            image: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?q=80&w=2070&auto=format&fit=crop",
            features: ["Themed decor", "Live music options", "Personalized service"]
        }
    ];

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
                        <button className="btn-luxury-gold px-10 py-4">Inquire Now</button>
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
                                    <button className="flex items-center gap-3 font-body text-xs tracking-widest uppercase text-gold hover:translate-x-2 transition-transform duration-300">
                                        Discover More <MoveRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 bg-gold relative overflow-hidden text-royal-deep">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="font-serif-luxury text-4xl md:text-5xl mb-8">Ready to Begin Your Story?</h2>
                    <p className="text-xl mb-10 opacity-90">
                        Contact our events team to schedule a private tour of our luxury venues.
                    </p>
                    <button className="px-12 py-4 bg-royal-deep text-gold rounded-sm uppercase tracking-widest font-bold hover:bg-royal transition-colors duration-300">
                        Contact Events Team
                    </button>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-royal-deep/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
            </section>

            <Footer />
            <FloatingBook />
        </div>
    );
};

export default EventsPage;
