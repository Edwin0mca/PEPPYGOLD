"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  {
    name: "Mr. Manirathinam",
    role: "CEO – Priyanka Bullion",
    logo: "/Tpartners/priyangabullion.png",
  },
  {
    name: "Mr. Anandan",
    role: "Founder & CEO – AGS Thangamaaligai",
    logo: "/Tpartners/ags.png",
  },
  {
    name: "Mr. Gunaseelan",
    role: "Founder & CEO – Shree Gokulam Jewellers",
    logo: "/Tpartners/gokulam.png",
  },
  {
    name: "Mr. Venkatesh (CRV)",
    role: "Founder & CEO – Dot Com Infoway (DCI)",
    logo: "/Tpartners/dci.png",
  },
];

const BusinessConsultingPartners = () => {
  return (
    <section className="py-28 px-6 bg-gradient-to-b from-[#6816EF]/5 via-white to-[#6816EF]/5">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-[#6816EF] mb-16"
        >
          Business Consulting Partners
        </motion.h2>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white/80 backdrop-blur rounded-2xl p-6 text-center border border-[#6816EF]/10 shadow-sm hover:shadow-lg transition"
            >
              {/* Logo */}
              <div className="flex justify-center mb-5">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>

              {/* Name */}
              <h3 className="text-sm font-semibold text-gray-900 mb-1">
                {partner.name}
              </h3>

              {/* Role */}
              <p className="text-xs text-gray-600 leading-relaxed">
                {partner.role}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BusinessConsultingPartners;
