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
    <section className="py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-yellow-400 mb-4"
        >
          Our Trusted Partners
        </motion.h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-14">
          We proudly collaborate with renowned jewellers and bullion partners
          across India to ensure trust, transparency, and quality.
        </p>

        {/* Logos Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 items-center"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ scale: 1.08 }}
              className="flex justify-center items-center bg-white rounded-xl p-5 shadow-md grayscale hover:grayscale-0 transition"
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
    </section>
  );
};

export default TrustedPartners;
