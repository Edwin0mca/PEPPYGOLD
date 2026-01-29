"use client";

import { TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

type PriceProps = {
  gold: number;
  silver: number;
};

const LivePrices = ({ gold, silver }: PriceProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-yellow-50 to-yellow-100 py-6 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Live Indicator */}
        <div className="flex items-center gap-3 font-semibold text-yellow-700">
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-green-500"
          />
          <TrendingUp size={20} />
          <span>Live Precious Metal Prices</span>
        </div>

        {/* Prices */}
        <div className="flex gap-10 text-gray-800 font-medium">
          
          <motion.p
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 rounded-lg bg-white shadow-sm"
          >
            🟡 Gold:{" "}
            <span className="font-bold text-yellow-600">
              ₹{gold}/gm
            </span>
          </motion.p>

          <motion.p
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 rounded-lg bg-white shadow-sm"
          >
            ⚪ Silver:{" "}
            <span className="font-bold text-gray-600">
              ₹{silver}/gm
            </span>
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default LivePrices;
