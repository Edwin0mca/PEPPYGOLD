"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    title: "Start Saving Gold with Confidence",
    content:
      "Peppy Gold provides a secure platform with a quick KYC process, allowing you to start saving gold smoothly and confidently.",
  },
  {
    title: "Smart Solutions to Grow Your Gold Savings",
    content:
      "Load your wallet using UPI, net banking, or debit and credit cards. Enjoy instant and hassle-free transactions.",
  },
  {
    title: "Boost Your Gold Saving Success",
    content:
      "Monitor saving patterns, earn milestone rewards, and manage your gold goals effortlessly with smart automation.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const GoldenSteps = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-yellow-50 via-white to-yellow-50 overflow-hidden">
      
      {/* 🔶 ZIG-ZAG BACKGROUND (NEW) */}
      <motion.svg
        viewBox="0 0 1000 200"
        preserveAspectRatio="none"
        className="absolute top-20 left-0 w-[120%] h-40 opacity-[0.12]"
        initial={{ x: 0 }}
        animate={{ x: [-80, 0, -80] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <path
          d="M0 100 L100 50 L200 120 L300 40 L400 130 L500 60 L600 120 L700 50 L800 130 L900 60 L1000 100"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="3"
        />
        <defs>
          <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#facc15" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#facc15" />
          </linearGradient>
        </defs>
      </motion.svg>

      <div className="relative z-10 max-w-4xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-yellow-600 mb-14"
        >
          Enrich Your Future in 3 Golden Steps
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-5"
        >
          {steps.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className={`rounded-xl border bg-white shadow-sm overflow-hidden ${
                openIndex === index ? "ring-2 ring-yellow-400/40" : ""
              }`}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left font-semibold text-gray-800"
              >
                <span className="flex items-center gap-3">
                  <motion.span
                    animate={{ scale: openIndex === index ? 1.2 : 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-2 h-2 rounded-full bg-yellow-400"
                  />
                  {item.title}
                </span>

                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-yellow-500" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="px-6 pb-6 text-gray-600 text-sm leading-relaxed"
                  >
                    {item.content}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default GoldenSteps;
