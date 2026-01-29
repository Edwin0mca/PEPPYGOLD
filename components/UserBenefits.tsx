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
      
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-yellow-50 via-white to-yellow-100 rounded-3xl p-10 md:p-16 shadow-xl">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-yellow-600 mb-16"
        >
          User Benefits
        </motion.h2>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="flex items-start gap-3 p-5 rounded-xl bg-white/80 backdrop-blur border hover:shadow-lg transition"
            >
              <CheckCircle className="text-yellow-500 mt-1" size={20} />
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
