"use client";

import { motion } from "framer-motion";
import { Wallet, CreditCard, TrendingUp } from "lucide-react";

const steps = [
  {
    title: "Start Saving Gold with Confidence",
    description:
      "Create your account in minutes with a quick and secure KYC process. Begin your gold saving journey with complete peace of mind.",
    icon: Wallet,
  },
  {
    title: "Smart Solutions to Grow Your Gold Savings",
    description:
      "Load your wallet easily using UPI, net banking, or debit and credit cards. Enjoy instant and hassle-free transactions.",
    icon: CreditCard,
  },
  {
    title: "Boost Your Gold Saving Success",
    description:
      "Track your savings, achieve milestones, and manage your gold goals effortlessly with smart analytics and automation.",
    icon: TrendingUp,
  },
];

const GoldenSteps = () => {
  return (
    <section className="relative py-28 px-6 overflow-hidden bg-gradient-to-b from-white via-[#6816EF]/5 to-white">

      {/* Soft brand wave */}
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 left-0 right-0 h-72 bg-gradient-to-r from-transparent via-[#6816EF]/25 to-transparent blur-3xl"
      />

      <div className="relative max-w-5xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-[#6816EF] mb-20"
        >
          Enrich Your Future in 3 Golden Steps
        </motion.h2>

        {/* Steps */}
        <div className="space-y-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isReverse = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row ${
                  isReverse ? "md:flex-row-reverse" : ""
                } items-center gap-10`}
              >
                {/* Icon */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-20 h-20 rounded-2xl bg-[#6816EF]/10 flex items-center justify-center shadow-sm"
                >
                  <Icon className="text-[#6816EF]" size={36} />
                </motion.div>

                {/* Content */}
                <div className="bg-white rounded-2xl border border-[#6816EF]/10 p-8 shadow-sm max-w-xl">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {step.description}
                  </p>

                  {/* Progress line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-6 h-1 bg-[#6816EF]/20 rounded-full overflow-hidden"
                  >
                    <div className="h-full bg-[#6816EF] rounded-full" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default GoldenSteps;
