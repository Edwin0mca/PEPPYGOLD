"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const OUNCE_TO_GRAM = 31.1035;

const Navbar = () => {
  const [gold, setGold] = useState<number | null>(null);
  const [silver, setSilver] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  /* FETCH GOLD & SILVER PRICES */
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
      } catch (err) {
        console.error("Navbar price fetch failed", err);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  /* SCROLL COLOR CHANGE */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`sticky top-0 z-50 px-8 py-3
        transition-colors duration-700 ease-in-out
        ${scrolled ? "bg-[#0b0b0f]" : "bg-[#18181b]"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">

        {/* LEFT: LOGO */}
        <div className="flex items-center gap-3">
          <Image
            src="/Logo/Logo.png"
            alt="Peppy Gold Logo"
            width={32}
            height={32}
            priority
          />
          <span className="text-lg font-bold text-[#6816EF]">
            PeppyGold
          </span>
        </div>

        {/* CENTER: NAV LINKS */}
        <div className="hidden lg:flex gap-6 text-sm font-medium text-white">
          <Link href="#home" className="hover:text-[#6816EF] transition">
            Home
          </Link>
          <Link href="#why-peppy-gold" className="hover:text-[#6816EF] transition">
            Why Peppy Gold
          </Link>
          <Link href="#partners" className="hover:text-[#6816EF] transition">
            Partners
          </Link>
          <Link href="#faq" className="hover:text-[#6816EF] transition">
            FAQ
          </Link>
        </div>

        {/* RIGHT: PRICES + CTA */}
        <div className="flex items-center gap-5">

          {/* GOLD & SILVER */}
          <div className="hidden md:flex items-center gap-4 px-4 py-2 rounded-lg bg-[#1a1a1a] border border-white/10 text-sm font-medium">
            <span className="font-semibold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              GOLD 🟡 {gold ? `₹${gold}/gm` : "--"}
            </span>

            <span className="font-semibold bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
              SILVER ⚪ {silver ? `₹${silver}/gm` : "--"}
            </span>
          </div>

          {/* CTA */}
          <Link
            href="#get-started"
            className="bg-[#6816EF] text-white px-4 py-2 rounded-lg font-semibold hover:scale-105 transition"
          >
            Get Started
          </Link>

        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
