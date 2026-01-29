"use client";

import { motion } from "framer-motion";
import { Play, Apple } from "lucide-react";

const AppDownloadCTA = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-black to-gray-900 text-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6"
        >
          Secure Your Future with the Best Gold Saving Platform
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-300 mb-6"
        >
          ✨ We help you shine in every moment of life ✨
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 leading-relaxed mb-10"
        >
          Turn your savings into golden rewards with Peppy Gold. Invest in
          trusted gold saving schemes, track live gold rates, and unlock
          exciting benefits — all in one smart, easy-to-use app.
        </motion.p>

        {/* App Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          {/* Google Play */}
          <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
            <Play size={20} />
            <div className="text-left">
              <p className="text-xs">Get it on</p>
              <p className="text-sm font-bold">Google Play</p>
            </div>
          </button>

          {/* App Store */}
          <button className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
            <Apple size={20} />
            <div className="text-left">
              <p className="text-xs">Get it on</p>
              <p className="text-sm font-bold">App Store</p>
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AppDownloadCTA;
