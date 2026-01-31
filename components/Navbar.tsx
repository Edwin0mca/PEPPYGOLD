"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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

        {/* CENTER: LINKS */}
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

        {/* RIGHT: LOADING PRICES + CTA */}
        <div className="flex items-center gap-5">

          {/* Loading State */}
          <div className="hidden md:flex items-center gap-4 px-4 py-2 rounded-lg bg-[#1a1a1a] border border-white/10 text-sm font-medium">
            <span className="text-yellow-400 animate-pulse">
              GOLD 🟡 Loading…
            </span>

            <span className="text-gray-300 animate-pulse">
              SILVER ⚪ Loading…
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
