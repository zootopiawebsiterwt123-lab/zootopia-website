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
    { id: 10, src: weddingHall, title: "Crystal Gala", category: "Wedding", size: "small" },
    { id: 11, src: loungeBg, title: "Sunset Terrace", category: "Resort", size: "medium" },
    { id: 12, src: resortPool, title: "Palm Breeze", category: "Resort", size: "small" },
    { id: 13, src: diningRoom, title: "Vintage Vault", category: "Restaurant", size: "medium" },
    { id: 14, src: weddingGarden, title: "Forever After", category: "Wedding", size: "small" },
    { id: 15, src: resortSuite, title: "Oasis Loft", category: "Resort", size: "large" },
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

    const springConfig = { damping: 20, stiffness: 100 };
    const rotateX = useSpring(isTouch ? 0 : mousePos.y * -15, springConfig);
    const rotateY = useSpring(isTouch ? 0 : mousePos.x * 15, springConfig);
    const translateZ = useSpring(isHovered && !isTouch ? 40 : 0, springConfig);

    return (
        <motion.div
            ref={cardRef}
            className={`relative overflow-hidden rounded-sm cursor-pointer group mb-6
        ${item.size === "large" ? "md:col-span-2 md:row-span-2 h-[400px] md:h-[600px]" :
                    item.size === "medium" ? "md:col-span-1 md:row-span-2 h-[400px] md:h-[600px]" :
                        "col-span-1 row-span-1 h-[288px]"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.05, duration: 0.8, ease: "easeOut" }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setMousePos({ x: 0, y: 0 });
            }}
            onClick={() => onSelect(item)}
            style={{
                perspective: "1000px",
            }}
        >
            <motion.div
                className="w-full h-full relative"
                style={{
                    rotateX,
                    rotateY,
                    translateZ,
                    transformStyle: "preserve-3d",
                }}
            >
                <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 md:opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Floating Content */}
                <motion.div
                    className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end items-start pointer-events-none"
                    style={{ translateZ: isTouch ? 0 : 50, transformStyle: "preserve-3d" }}
                >
                    <span className="section-label text-gold-light mb-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0">
                        {item.category}
                    </span>
                    <h3 className="font-serif-luxury text-xl md:text-3xl text-white mb-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0">
                        {item.title}
                    </h3>
                    <div className="w-12 md:w-0 group-hover:w-16 h-0.5 bg-gradient-gold transition-all duration-500 delay-150" />
                </motion.div>

                {/* Outer Highlight */}
                <div className="absolute inset-0 border border-white/10 group-hover:border-gold/30 transition-colors duration-500 pointer-events-none" />
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
                        className="font-serif-luxury text-4xl md:text-7xl lg:text-8xl text-gold-gradient mb-4"
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
            <section className="py-12 md:py-20 max-w-7xl mx-auto px-4 md:px-6" ref={containerRef}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-fr">
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
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                className="max-w-full max-h-[70vh] md:max-h-[75vh] object-contain shadow-2xl rounded-sm border border-white/10"
                            />
                            <div className="mt-6 md:mt-8 text-center bg-royal-deep/50 p-6 backdrop-blur-md rounded-lg border border-white/5 max-w-xl w-full mx-4">
                                <span className="section-label text-gold mb-2 block text-[10px] md:text-xs">{selectedImage.category}</span>
                                <h2 className="font-serif-luxury text-2xl md:text-4xl text-white mb-4">
                                    {selectedImage.title}
                                </h2>
                                <div className="w-16 md:w-20 h-0.5 bg-gradient-gold mx-auto" />
                            </div>

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
