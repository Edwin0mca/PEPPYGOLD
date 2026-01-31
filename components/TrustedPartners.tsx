"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
{ name: "AGS Thangamaaligai", logo: "/Tpartners/ags.png" },
{ name: "BG Jewellery", logo: "/Tpartners/bg.png" },
{ name: "Garudaa Gold Palace", logo: "/Tpartners/garuda.png" },
{ name: "Gokulam Jewellery", logo: "/Tpartners/gokulam.png" },
{ name: "Kamalam Jewellery", logo: "/Tpartners/kamalam.png" },
{ name: "OM Jewellery", logo: "/Tpartners/om.png" },
{ name: "Priyanga Bullion", logo: "/Tpartners/priyangabullion.png" },
{ name: "SKTM Jewellery", logo: "/Tpartners/sktm.png" },
{ name: "Thaksha Jewellery", logo: "/Tpartners/thaksha.png" },
];

const TrustedPartners = () => {
return (
 <section
   id="partners"
   className="relative py-28 px-6 scroll-mt-24
              bg-gradient-to-b from-[#6816EF]/5 via-white to-[#6816EF]/5
              overflow-hidden"
 >
   <div className="max-w-6xl mx-auto text-center">

     {/* TITLE */}
     <motion.h2
       initial={{ opacity: 0, y: 12 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.6, ease: "easeOut" }}
       viewport={{ once: true }}
       className="text-3xl font-bold text-[#6816EF] mb-4"
     >
       Our Trusted Partners
     </motion.h2>

     <p className="text-gray-600 max-w-2xl mx-auto mb-16">
       We proudly work with reputed jewellers and bullion partners across India.
     </p>

     {/* CAROUSEL */}
     <div className="relative w-full overflow-hidden">
       <motion.div
         className="flex gap-12 w-max"
         animate={{ x: ["0%", "-50%"] }}
         transition={{
           repeat: Infinity,
           duration: 32,
           ease: "linear",
         }}
       >
         {[...partners, ...partners].map((partner, index) => (
           <motion.div
             key={index}
             whileHover={{ y: -6, scale: 1.03 }}
             transition={{ duration: 0.3 }}
             className="flex items-center justify-center
                        bg-white/90 backdrop-blur
                        rounded-2xl p-6
                        border border-[#6816EF]/10
                        shadow-sm hover:shadow-lg"
           >
             <Image
               src={partner.logo}
               alt={partner.name}
               width={140}
               height={80}
               className="object-contain"
             />
           </motion.div>
         ))}
       </motion.div>
     </div>

   </div>
 </section>
);
};

export default TrustedPartners;