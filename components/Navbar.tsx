"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50
                 flex justify-between items-center
                 px-8 py-4
                 bg-[#5A14D6]"
    >
      {/* LEFT */}
      <div className="flex items-center gap-3">
        <Image
          src="/Logo/Logo.png"
          alt="Peppy Gold Logo"
          width={34}
          height={34}
          priority
        />
        <span className="text-lg font-semibold text-yellow-400">
          PeppyGold
        </span>
      </div>

      {/* CENTER LINKS */}
      <div className="hidden md:flex gap-8 text-sm font-medium">
        {[
          { name: "Home", href: "/" },
          { name: "Why Peppy Gold", href: "#why" },
          { name: "How It Helps", href: "#how" },
          { name: "Partners", href: "#partners" },
          { name: "FAQ", href: "#faq" },
        ].map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-gray-200 hover:text-yellow-400 transition-colors duration-200"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* RIGHT CTA */}
      <Link
        href="#get-started"
        className="border border-yellow-400 text-yellow-400 px-4 py-2 rounded-lg
                   text-sm font-semibold
                   hover:bg-yellow-400 hover:text-black transition"
      >
        Get Started
      </Link>
    </motion.nav>
  );
};

export default Navbar;
