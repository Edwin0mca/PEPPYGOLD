"use client";

import { TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const OUNCE_TO_GRAM = 31.1035;

const LivePrices = () => {
  const [gold, setGold] = useState<number | null>(null);
  const [silver, setSilver] = useState<number | null>(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const headers = {
          "x-access-token": process.env.NEXT_PUBLIC_GOLD_API_KEY!,
          "Content-Type": "application/json",
        };

        const [goldRes, silverRes] = await Promise.all([
          fetch("https://www.goldapi.io/api/XAU/INR", { headers }),
          fetch("https://www.goldapi.io/api/XAG/INR", { headers }),
        ]);

        const goldData = await goldRes.json();
        const silverData = await silverRes.json();

        setGold(Math.round(goldData.price / OUNCE_TO_GRAM));
        setSilver(Math.round(silverData.price / OUNCE_TO_GRAM));
      } catch (error) {
        console.error("Failed to fetch live prices", error);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-[#6816EF]/5 to-[#6816EF]/10 py-6 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Live Indicator */}
        <div className="flex items-center gap-3 font-semibold text-[#6816EF]">
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
            <span className="font-bold text-[#6816EF]">
              {gold ? `₹${gold}/gm` : "Loading..."}
            </span>
          </motion.p>

          <motion.p
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 rounded-lg bg-white shadow-sm"
          >
            ⚪ Silver:{" "}
            <span className="font-bold text-[#6816EF]">
              {silver ? `₹${silver}/gm` : "Loading..."}
            </span>
          </motion.p>

        </div>
      </div>
    </motion.section>
  );
};

export default LivePrices;
