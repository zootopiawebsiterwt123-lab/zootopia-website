import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBook from "@/components/FloatingBook";
import logoEmblem from "@/assets/logo-emblem.png";
import storyimg from "@/assets/storyimg.jpg";

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#fcfbf7] min-h-screen text-royal-deep">
            <Navbar />

            {/* Narrative Hero */}
            <section className="pt-40 pb-24 px-6 text-center">
                <div className="max-w-4xl mx-auto animate-fade-up">
                    <img src={logoEmblem} alt="Zootopia" className="w-20 h-20 mx-auto mb-10 animate-float" />
                    <span className="section-label mb-6 block text-gol
                    
                    d-dark">Our Story</span>
                    <h1 className="font-serif-luxury text-5xl md:text-7xl mb-12 leading-tight">
                        Legendary Hospitality, <br /> Redefined for the Modern Era.
                    </h1>
                    <div className="w-px h-24 bg-gold/30 mx-auto" />
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                            <img
                                src={storyimg}
                                alt="Heritage"
                                className="w-full h-[700px] object-cover rounded-sm shadow-elegant"
                            />
                            <div className="absolute top-10 -right-10 bg-royal-deep text-gold p-10 max-w-xs shadow-gold hidden lg:block">
                                <p className="font-serif-luxury text-xl italic mb-4">"We don't just host guests; we curate memories that last a lifetime."</p>
                                <p className="text-[10px] tracking-widest uppercase opacity-70">— The Founder</p>
                            </div>
                        </div>
                        <div className="space-y-12">
                            <div>
                                <h2 className="font-serif-luxury text-4xl mb-6">A Legacy of Excellence</h2>
                                <p className="text-lg text-royal-deep/60 leading-relaxed">
                                    Founded on the principles of unparalleled service and aesthetic beauty,
                                    Zootopia began as a vision to create a sanctuary where the world's most
                                    discerning travelers could find true peace.
                                </p>
                            </div>
                            <div>
                                <h2 className="font-serif-luxury text-4xl mb-6">Our Philosophy</h2>
                                <p className="text-lg text-royal-deep/60 leading-relaxed mb-8">
                                    We believe in 'Sophisticated Soul'—a blend of high-end luxury and
                                    genuine human connection. Every corner of our resort, every ingredient
                                    in our kitchen, and every interaction with our staff is infused with
                                    this core belief.
                                </p>
                                <div className="grid grid-cols-2 gap-10">
                                    <div>
                                        <h4 className="font-serif-luxury text-4xl text-gold mb-2">2010</h4>
                                        <p className="text-xs uppercase tracking-[0.2em] opacity-60">Year Established</p>
                                    </div>
                                    <div>
                                        <h4 className="font-serif-luxury text-4xl text-gold mb-2">15+</h4>
                                        <p className="text-xs uppercase tracking-[0.2em] opacity-60">Global Awards</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-32 bg-royal-deep text-ivory px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <span className="section-label">Core Values</span>
                        <h2 className="font-serif-luxury text-5xl mt-4">Built on Brilliance</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-16">
                        {[
                            { title: "Uncompromising Quality", desc: "From the thread count of our linens to the sourcing of our truffles, only the best makes the cut." },
                            { title: "Bespoke service", desc: "No two guests are the same. Our service is fluid, anticipatory, and deeply personalized." },
                            { title: "Environmental Stewardship", desc: "Luxury and sustainability must coexist. We strive to protect the beauty that surrounds us." }
                        ].map((v, i) => (
                            <div key={i} className="text-center group">
                                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-gold/20 group-hover:bg-gold/20 transition-all duration-500">
                                    <span className="font-serif-luxury text-2xl text-gold italic">{i + 1}</span>
                                </div>
                                <h3 className="font-serif-luxury text-2xl mb-6 text-gold-light tracking-wide">{v.title}</h3>
                                <p className="text-ivory/60 leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingBook />
        </div>
    );
};

export default AboutPage;