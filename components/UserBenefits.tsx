"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const benefits = [
  "India’s First Gold Savings Aggregator",
  "Savings start at just ₹100",
  "Compare & choose from trusted jewellers",
  "Lock today’s gold price, pay later (zero interest)",
  "Save 40–50% on wastage & labour costs",
  "Flexible saving options: one-time, anytime, monthly",
  "Natural 15–20% appreciation over time",
  "100% transparent, secure, and customer-centric",
  "Empowering families, strengthening futures",
];

const UserBenefits = () => {
  return (
    <section className="relative overflow-hidden py-28 px-6">

      {/* Soft Animated Brand Blobs (Slower) */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, 12, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-24 left-12 w-80 h-80 bg-[#6816EF]/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, -12, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-24 right-12 w-96 h-96 bg-[#6816EF]/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content Card */}
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#6816EF]/5 via-white to-[#6816EF]/10 rounded-3xl p-10 md:p-16 shadow-xl">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-[#6816EF] mb-16"
        >
          User Benefits
        </motion.h2>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.04,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="flex items-start gap-3 p-5 rounded-xl bg-white/90 backdrop-blur border border-[#6816EF]/10 hover:shadow-md transition-all"
            >
              <CheckCircle
                className="text-[#6816EF] mt-1 shrink-0"
                size={20}
              />
              <p className="text-gray-700 text-sm leading-relaxed">
                {benefit}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default UserBenefits;
