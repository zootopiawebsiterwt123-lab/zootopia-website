import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBook from "@/components/FloatingBook";

import weddingHall from "@/assets/wedding-hall.jpeg"
import weddingGarden from "@/assets/wedding-garden.jpeg";
import loungeBg from "@/assets/lounge-bg.jpg";
import resortPool from "@/assets/resort-pool.jpeg"
import resortSuite from "@/assets/resort-suite.jpg";
import diningRoom from "@/assets/dining-room.jpg";
import spa from "@/assets/spa.jpg";
import gourmet from "@/assets/gourmet.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import weddingRoyalBeach from "@/assets/wedding_royal_beach.png";
import weddingGrandBallroom from "@/assets/wedding_grand_ballroom.png";
import resortOceanVilla from "@/assets/resort_ocean_villa.png";
import resortMountainView from "@/assets/resort_mountain_view.png";
import restaurantTerraceDining from "@/assets/restaurant_terrace_dining.png";
import restaurantFineCuisine from "@/assets/restaurant_fine_cuisine.png";

const galleryImages = [
    { id: 1, src: weddingHall, title: "Royal Ballroom", category: "Wedding", size: "large" },
    { id: 2, src: loungeBg, title: "Nocturne Lounge", category: "Resort", size: "small" },
    { id: 3, src: resortPool, title: "Azure Infinity", category: "Resort", size: "medium" },
    { id: 4, src: diningRoom, title: "The Gilded Plate", category: "Restaurant", size: "small" },
    { id: 5, src: weddingGarden, title: "Eden Grove", category: "Wedding", size: "medium" },
    { id: 6, src: resortSuite, title: "Majestic Suite", category: "Resort", size: "small" },
    { id: 7, src: gourmet, title: "Culinary Art", category: "Restaurant", size: "large" },
    { id: 8, src: spa, title: "Serenity Spa", category: "Resort", size: "medium" },
    { id: 9, src: heroBg, title: "Zootopia Estate", category: "Resort", size: "small" },
    { id: 10, src: weddingRoyalBeach, title: "Seaside Serenity", category: "Wedding", size: "small" },
    { id: 11, src: weddingGrandBallroom, title: "Imperial Gala", category: "Wedding", size: "medium" },
    { id: 12, src: resortOceanVilla, title: "Oceanic Retreat", category: "Resort", size: "small" },
    { id: 13, src: resortMountainView, title: "Summit Sanctuary", category: "Resort", size: "medium" },
    { id: 14, src: restaurantTerraceDining, title: "Starlight Terrace", category: "Restaurant", size: "small" },
    { id: 15, src: restaurantFineCuisine, title: "Epicurean Canvas", category: "Restaurant", size: "large" },
    { id: 16, src: weddingHall, title: "Crystal Gala", category: "Wedding", size: "small" },
    { id: 17, src: loungeBg, title: "Sunset Terrace", category: "Resort", size: "medium" },
    { id: 18, src: resortPool, title: "Palm Breeze", category: "Resort", size: "small" },
    { id: 19, src: diningRoom, title: "Vintage Vault", category: "Restaurant", size: "medium" },
    { id: 20, src: weddingGarden, title: "Forever After", category: "Wedding", size: "small" },
    { id: 21, src: resortSuite, title: "Oasis Loft", category: "Resort", size: "large" },
];

const categories = ["All", "Resort", "Wedding", "Restaurant"];

const GalleryItem = ({ item, index, onSelect }) => {
    const cardRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }, []);

    const handleMouseMove = (e) => {
        if (!cardRef.current || isTouch) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePos({ x, y });
    };

    const springConfig = { damping: 25, stiffness: 120 };
    const rotateX = useSpring(isHovered && !isTouch ? mousePos.y * -20 : 0, springConfig);
    const rotateY = useSpring(isHovered && !isTouch ? mousePos.x * 20 : 0, springConfig);
    const translateZ = useSpring(isHovered && !isTouch ? 60 : 0, springConfig);
    const scale = useSpring(isHovered ? 1.05 : 1, springConfig);
    
    // Dynamic shadow offsets (opposite to tilt)
    const shadowX = useSpring(isHovered && !isTouch ? mousePos.x * -30 : 0, springConfig);
    const shadowY = useSpring(isHovered && !isTouch ? mousePos.y * -30 : 20, springConfig);
    const shadowOpacity = useSpring(isHovered ? 0.4 : 0.2, springConfig);

    return (
        <motion.div
            ref={cardRef}
            className="relative cursor-pointer group mb-10 md:mb-16 aspect-[4/5] md:aspect-auto md:h-[550px] w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
                delay: index * 0.05, 
                duration: 1.2, 
                ease: [0.16, 1, 0.3, 1] 
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setMousePos({ x: 0, y: 0 });
            }}
            onClick={() => onSelect(item)}
            style={{
                perspective: "1500px",
            }}
        >
            {/* Dynamic Shadow Layer */}
            <motion.div 
                className="absolute inset-4 bg-black/80 rounded-sm blur-3xl pointer-events-none"
                style={{
                    x: shadowX,
                    y: shadowY,
                    opacity: shadowOpacity,
                    scale: isHovered ? 0.95 : 0.9,
                }}
            />

            <motion.div
                className="w-full h-full relative rounded-sm overflow-hidden bg-royal-deep/40 backdrop-blur-sm shadow-2xl"
                style={{
                    rotateX,
                    rotateY,
                    translateZ,
                    scale,
                    transformStyle: "preserve-3d",
                    border: "1px solid hsla(44, 85%, 55%, 0.1)"
                }}
            >
                {/* Gold Sheen Sweep Effect */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div 
                            className="absolute inset-0 z-30 pointer-events-none"
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: "100%", opacity: [0, 1, 0] }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                            style={{
                                background: "linear-gradient(115deg, transparent 0%, transparent 40%, rgba(255,215,0,0.3) 50%, transparent 60%, transparent 100%)",
                            }}
                        />
                    )}
                </AnimatePresence>

                {/* Spotlight Interaction */}
                <motion.div 
                    className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: `radial-gradient(circle at ${50 + mousePos.x * 100}% ${50 + mousePos.y * 100}%, rgba(255,215,0,0.15) 0%, transparent 60%)`,
                    }}
                />
                
                <motion.img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
                
                {/* Sophisticated Dark Overlay */}
                <div
                    className="absolute inset-0 bg-gradient-to-t from-royal-deep via-royal-deep/40 to-royal-deep/10 opacity-70 group-hover:opacity-90 transition-all duration-700"
                />

                {/* Content with Depth */}
                <motion.div
                    className="absolute inset-0 p-8 flex flex-col justify-end items-center text-center pointer-events-none"
                    style={{ translateZ: isTouch ? 0 : 80, transformStyle: "preserve-3d" }}
                >
                    <motion.span 
                        className="section-label text-gold-light mb-2 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
                    >
                        {item.category}
                    </motion.span>
                    
                    <motion.h3 
                        className="font-serif-luxury text-2xl md:text-3xl text-white mb-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75"
                    >
                        {item.title}
                    </motion.h3>
                    
                    <motion.div 
                        className="h-px bg-gradient-gold w-0 group-hover:w-16 transition-all duration-700 delay-150 shadow-gold"
                    />
                </motion.div>

                {/* Multi-Layered Premium Frame */}
                {/* Beveled edge look */}
                <div className="absolute inset-0 border border-white/5 pointer-events-none" />
                <div className="absolute inset-[1px] border border-black/20 pointer-events-none" />
                <div className="absolute inset-3 border border-gold/10 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
                <div className="absolute inset-5 border border-gold/5 opacity-0 group-hover:opacity-100 transition-all duration-1000 pointer-events-none scale-95 group-hover:scale-100" />
            </motion.div>
        </motion.div>
    );
};

const GalleryPage = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState(null);
    const containerRef = useRef(null);

    const filteredImages = activeCategory === "All"
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    return (
        <div className="bg-royal-deep min-h-screen selection:bg-gold/30">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[30vh] md:h-[35vh] flex items-center justify-center overflow-hidden pt-16 md:pt-20">
                <div className="absolute inset-0">
                    <img
                        src={heroBg}
                        className="w-full h-full object-cover opacity-30 scale-110 animate-hero-zoom"
                        alt="Hero"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-royal-deep/40 via-royal-deep/80 to-royal-deep" />
                </div>

                <div className="relative z-10 text-center px-6">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="section-label tracking-[0.4em] mb-2 block text-[10px] md:text-xs"
                    >
                        Visual Chronicles
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="font-serif-luxury text-3xl md:text-5xl lg:text-6xl text-gold-gradient mb-4"
                    >
                        The Masterpiece Gallery
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="w-20 md:w-32 h-0.5 bg-gradient-gold mx-auto"
                    />
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-4 md:py-6 bg-royal-deep sticky top-[64px] md:top-[72px] z-30 border-y border-white/5 backdrop-blur-md bg-royal-deep/80">
                <div className="max-w-7xl mx-auto px-4 md:px-6 overflow-x-auto no-scrollbar">
                    <div className="flex justify-start md:justify-center items-center gap-3 md:gap-4 min-w-max">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 md:px-8 py-2.5 md:py-3 rounded-full font-body text-[10px] md:text-xs tracking-[0.2em] uppercase transition-all duration-500 relative overflow-hidden group`}
                                style={{
                                    color: activeCategory === cat ? "hsl(var(--royal-blue-deep))" : "hsl(var(--gold-muted))",
                                    border: `1px solid ${activeCategory === cat ? "transparent" : "hsla(44,85%,55%,0.2)"}`,
                                    background: activeCategory === cat ? "var(--gradient-gold)" : "transparent",
                                }}
                            >
                                {activeCategory === cat && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-gradient-gold -z-10"
                                    />
                                )}
                                <span className="relative z-10">{cat}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-10 md:py-20 max-w-7xl mx-auto px-6 md:px-10" ref={containerRef}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    <AnimatePresence mode="popLayout">
                        {filteredImages.map((item, index) => (
                            <GalleryItem
                                key={`${item.id}-${item.title}`}
                                item={item}
                                index={index}
                                onSelect={setSelectedImage}
                            />
                        ))}
                    </AnimatePresence>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-3xl"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            layoutId={`img-${selectedImage.id}`}
                            className="relative max-w-6xl w-full max-h-screen flex flex-col items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="mb-6 md:mb-8 text-center bg-royal-deep/50 p-6 backdrop-blur-md rounded-lg border border-white/5 max-w-xl w-full mx-4">
                                <span className="section-label text-gold mb-2 block text-[10px] md:text-xs">{selectedImage.category}</span>
                                <h2 className="font-serif-luxury text-2xl md:text-4xl text-white mb-4">
                                    {selectedImage.title}
                                </h2>
                                <div className="w-16 md:w-20 h-0.5 bg-gradient-gold mx-auto" />
                            </div>
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                className="max-w-full max-h-[70vh] md:max-h-[75vh] object-contain shadow-2xl rounded-sm border border-white/10"
                            />

                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-0 right-0 md:top-4 md:right-4 w-10 md:w-12 h-10 md:h-12 flex items-center justify-center rounded-full glass-royal text-gold text-xl md:text-2xl hover:scale-110 transition-transform"
                            >
                                ×
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
            <FloatingBook />
        </div>
    );
};

export default GalleryPage;
