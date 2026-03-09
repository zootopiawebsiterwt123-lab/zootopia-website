import { useState, useCallback } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Wedding from "@/components/Wedding";
import Lounge from "@/components/Lounge";


import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingBook from "@/components/FloatingBook";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {!loaded && <Preloader onComplete={handlePreloaderComplete} />}

      <div
        className={`transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Wedding />
        <Lounge />
      
        
        <Testimonials />
        <Booking />
        <Contact />
        <Footer />
        <FloatingBook />
      </div>
    </>
  );
};

export default Index;
