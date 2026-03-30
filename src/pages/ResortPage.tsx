import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBook from "@/components/FloatingBook";
import { Coffee, Wifi, ShowerHead, Tv, Wind, ShieldCheck } from "lucide-react";

const ResortPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const rooms = [
        {
            name: "Heritage Villa",
            description: "Our crown jewel, featuring a private pool, personalized service, and panoramic garden views.",
            image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
            amenities: ["Private Pool", "24/7 Service", "Garden Terrace"]
        },
        {
            name: "Premium Suite",
            description: "Sophisticated modern design meets timeless luxury. Perfect for those who seek comfort with an edge of elegance.",
            image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop",
            amenities: ["Spa Bath", "Smart Connect", "Aromatic Scents"]
        },
        {
            name: "Classic Retreat",
            description: "A peaceful retreat designed with elegant aesthetics and warm textures to provide ultimate tranquility.",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
            amenities: ["Serene Space", "Premium Linens", "Courtyard View"]
        }
    ];

    return (
        <div className="bg-[#fcfbf7] min-h-screen text-royal-deep">
            <Navbar />

            {/* Immersive Hero */}
            <section className="relative h-screen flex items-end pb-24 px-6 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-luxury-resort-with-pool-and-palm-trees-4252-large.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-[#fcfbf7] via-transparent to-transparent z-10" />

                <div className="relative z-20 max-w-7xl mx-auto w-full animate-fade-up">
                    <span className="section-label text-gold-dark mb-4 block">Escape to Perfection</span>
                    <h1 className="font-serif-luxury text-6xl md:text-8xl mb-6">
                        The Art of <br /> Fine Living
                    </h1>
                    <p className="font-body text-lg md:text-xl max-w-xl text-royal-deep/70">
                        A sanctuary where time slows down and luxury knows no bounds.
                        Experience the zenith of hospitality in our curated villas.
                    </p>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-24 items-center">
                        <div>
                            <span className="section-label mb-6 block text-gold-dark">Our Philosophy</span>
                            <h2 className="font-serif-luxury text-4xl md:text-5xl mb-8 leading-tight">
                                Simplicity is the <br /> Ultimate Sophistication
                            </h2>
                            <p className="text-lg text-royal-deep/60 leading-relaxed mb-10">
                                At our resort, we believe that true luxury is found in the quiet moments.
                                Our spaces are designed to strip away the noise of the world,
                                leaving only beauty, comfort, and unparalleled service.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                {[
                                    { icon: <Coffee />, label: "Artisan Breakfast" },
                                    { icon: <Wifi />, label: "Ultra-Fast Connect" },
                                    { icon: <ShowerHead />, label: "Rainforest Spa" },
                                    { icon: <ShieldCheck />, label: "Absolute Privacy" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-sm font-body tracking-wider uppercase text-royal-deep/80">
                                        <span className="text-gold">{item.icon}</span>
                                        {item.label}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1544124499-58912cbddaad?q=80&w=2070&auto=format&fit=crop"
                                alt="Luxury Lounge"
                                className="w-full h-[600px] object-cover rounded-sm"
                            />
                            <div className="absolute -bottom-10 -left-10 w-64 h-64 glass hidden md:flex items-center justify-center text-center p-8 border-gold/30">
                                <div>
                                    <h4 className="font-serif-luxury text-3xl text-gold mb-2 italic">Awarded</h4>
                                    <p className="text-[10px] tracking-[0.2em] uppercase">Best Resort 2025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Room Showcase */}
            {false && (
            <section className="py-32 bg-royal-deep text-ivory px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="section-label">Accommodation</span>
                        <h2 className="font-serif-luxury text-5xl md:text-6xl mt-4">Curated Sanctuaries</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {rooms.map((room, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="relative h-[500px] overflow-hidden rounded-sm mb-8">
                                    <img
                                        src={room.image}
                                        alt={room.name}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-royal-deep via-transparent to-transparent opacity-60" />
                                    <div className="absolute bottom-8 left-8 right-8">
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <p className="text-[10px] tracking-[0.3em] uppercase mb-2 opacity-70">Experience</p>
                                                <p className="font-serif-luxury text-2xl text-gold">View Details</p>
                                            </div>
                                            <button className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:text-royal-deep transition-all duration-300">
                                                →
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="font-serif-luxury text-2xl mb-4 group-hover:text-gold transition-colors">{room.name}</h3>
                                <p className="text-ivory/60 text-sm leading-relaxed mb-6">
                                    {room.description}
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {room.amenities.map((a, j) => (
                                        <span key={j} className="text-[9px] tracking-widest uppercase py-1.5 px-3 border border-ivory/10 rounded-full">
                                            {a}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            )}

            {/* Large Image Scroller Placeholder */}
            <div className="h-[60vh] bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop')" }}>
                <div className="w-full h-full glass-royal flex items-center justify-center backdrop-blur-sm">
                    <h2 className="font-serif-luxury text-5xl md:text-7xl text-gold-gradient text-center max-w-3xl px-6 leading-tight">
                        Your Private Oasis Awaits
                    </h2>
                </div>
            </div>

            <Footer />
            <FloatingBook />
        </div>
    );
};

export default ResortPage;
