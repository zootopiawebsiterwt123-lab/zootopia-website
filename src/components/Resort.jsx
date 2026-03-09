// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import resortPool from "@/assets/resort-pool.jpeg";
// import resortSuite from "@/assets/resort-suite.jpg";
// import spaImg from "@/assets/spa.jpg";

// const roomTypes = [
//   {
//     name: "Ocean Suite",
//     size: "85 m²",
//     guests: "2 Adults",
//     features: ["Panoramic Ocean View", "Private Plunge Pool", "Butler Service", "King Bed"],
//     image: resortSuite,
//     price: "From ₹45,000 / night",
//   },
//   {
//     name: "Garden Villa",
//     size: "120 m²",
//     guests: "2+2",
//     features: ["Private Garden", "Outdoor Jacuzzi", "Living Room", "Kitchenette"],
//     image: resortPool,
//     price: "From ₹65,000 / night",
//   },
//   {
//     name: "Royal Penthouse",
//     size: "200 m²",
//     guests: "Up to 4",
//     features: ["360° Rooftop Terrace", "Private Pool", "Chef on Demand", "Rolls-Royce Transfer"],
//     image: spaImg,
//     price: "From ₹1,20,000 / night",
//   },
// ];

// const Resort = () => {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-80px" });

//   return (
//     <section id="resort" className="py-28 overflow-hidden" style={{ background: "hsl(var(--ivory-warm))" }}>
//       <div className="max-w-7xl mx-auto px-6" ref={ref}>
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7 }}
//           className="text-center mb-20"
//         >
//           <p className="section-label mb-4">The Zootopia Resort</p>
//           <h2
//             className="font-serif-luxury text-5xl lg:text-6xl font-light leading-tight mb-4"
//             style={{ color: "hsl(var(--royal-blue-deep))" }}
//           >
//             A World Unto Itself,
//             <br />
//             <span className="text-gold-gradient">An Escape Like No Other</span>
//           </h2>
//           <p className="font-body text-base max-w-xl mx-auto mt-4" style={{ color: "hsl(var(--muted-foreground))" }}>
//             Our resort offers an unmatched retreat — where every villa is a sanctuary, every sunrise is a spectacle, and every service is an art form.
//           </p>
//         </motion.div>

//         {/* Room cards */}
//         <div className="grid md:grid-cols-3 gap-6">
//           {roomTypes.map((room, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ delay: i * 0.12, duration: 0.7 }}
//               className="group overflow-hidden rounded-sm card-luxury bg-card"
//               style={{ border: "1px solid hsla(44,85%,55%,0.15)", boxShadow: "var(--shadow-card)" }}
//             >
//               {/* Image */}
//               <div className="relative overflow-hidden h-56">
//                 <img
//                   src={room.image}
//                   alt={room.name}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div
//                   className="absolute inset-0"
//                   style={{ background: "linear-gradient(to top, hsla(222,80%,8%,0.6) 0%, transparent 50%)" }}
//                 />
//                 <div className="absolute bottom-4 left-4">
//                   <span className="section-label" style={{ color: "hsl(var(--gold-light))" }}>{room.size} · {room.guests}</span>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <h3
//                   className="font-serif-luxury text-2xl mb-4"
//                   style={{ color: "hsl(var(--royal-blue))" }}
//                 >
//                   {room.name}
//                 </h3>
//                 <ul className="space-y-2 mb-6">
//                   {room.features.map((f, j) => (
//                     <li key={j} className="flex items-center gap-2">
//                       <span className="text-xs" style={{ color: "hsl(var(--gold))" }}>✦</span>
//                       <span className="font-body text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>{f}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <div className="gold-divider mb-4" />
//                 <div className="flex items-center justify-between">
//                   <p className="font-serif-luxury text-base" style={{ color: "hsl(var(--gold-dark))" }}>
//                     {room.price}
//                   </p>
//                   <button
//                     onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
//                     className="btn-luxury-gold px-5 py-2 rounded-sm text-[10px]"
//                   >
//                     Book
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Resort;
