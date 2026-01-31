"use client";

import { ShieldCheck, Wallet, IndianRupee, Headset } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Secure Payments & Trusted Jewellers",
    description:
      "Save and redeem your gold safely through our network of verified and trusted jewellers.",
    icon: ShieldCheck,
  },
  {
    title: "Flexible Saving Options",
    description:
      "Choose from one-time, monthly, anytime, or product-based gold saving schemes.",
    icon: Wallet,
  },
  {
    title: "Zero Platform Fees",
    description:
      "Invest 100% of your money with zero hidden charges or platform fees.",
    icon: IndianRupee,
  },
  {
    title: "24/7 Support & Guidance",
    description:
      "Our friendly support team is available round the clock to assist you.",
    icon: Headset,
  },
];

const WhyPeppyGold = () => {
  return (
    <section id="why-peppy-gold" className="scroll-mt-24">

    <section className="relative py-28 px-6 overflow-hidden bg-gradient-to-br from-[#6816EF]/5 via-white to-[#6816EF]/10">

      {/* Soft Brand Wave */}
      <motion.div
        animate={{ opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 left-0 right-0 h-80 bg-gradient-to-r from-transparent via-[#6816EF]/30 to-transparent blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-[#6816EF] mb-16"
        >
          Why Peppy Gold?
        </motion.h2>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl border border-[#6816EF]/10 p-6 shadow-sm hover:shadow-lg transition"
              >
                {/* Icon */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-[#6816EF]/10 mb-4"
                >
                  <Icon className="text-[#6816EF]" size={24} />
                </motion.div>

                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
    </section>
  );
};

export default WhyPeppyGold;
