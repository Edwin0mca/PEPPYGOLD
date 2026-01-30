"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type Particle = {
  left: string;
  size: string;
  duration: string;
  delay: string;
  isGold: boolean;
};

const PARTICLE_COUNT = 35;

const Hero = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  // Parallax
  const { scrollY } = useScroll();
  const logoY = useTransform(scrollY, [0, 400], [0, -40]);
  const bgY = useTransform(scrollY, [0, 400], [0, 60]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: PARTICLE_COUNT }).map(
      () => ({
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 8 + 4}px`,
        duration: `${Math.random() * 10 + 12}s`,
        delay: `${Math.random() * 6}s`,
        isGold: Math.random() > 0.5,
      })
    );

    setParticles(generatedParticles);
  }, []);

  return (
    <section className="relative overflow-hidden text-white py-32 px-8">

      {/* PARALLAX BACKGROUND */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-gradient-to-r from-black to-gray-900"
      />

      {/* GOLD & SILVER SNOW – GLOBAL */}
      <div className="fixed inset-0 top-0 pointer-events-none z-0">
        {particles.map((p, i) => (
          <span
            key={i}
            className={`absolute top-[-15%] rounded-full blur-sm opacity-70 animate-frost-fall ${
              p.isGold ? "bg-[#6816EF]" : "bg-gray-200"
            }`}
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDuration: p.duration,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#6816EF] mb-5">
            India’s Trusted Gold Aggregator
          </h1>

          <p className="max-w-2xl mx-auto md:mx-0 text-lg text-gray-300">
            Buy, sell, and manage gold securely with PeppyGold — transparent,
            reliable, and built for the future.
          </p>

          <motion.button
            whileHover={{
              scale: 1.06,
              boxShadow: "0 0 25px rgba(104,22,239,0.45)",
            }}
            transition={{ duration: 0.3 }}
            className="mt-12 px-8 py-3 bg-[#6816EF] text-white font-semibold rounded-xl"
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* RIGHT LOGO */}
        <div className="flex justify-center md:justify-end">
          <motion.div
            style={{ y: logoY }}
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Soft Glow */}
            <div className="absolute inset-0 rounded-full bg-[#6816EF]/20 blur-3xl" />

            <Image
              src="/Logo/Logo.png"
              alt="Peppy Gold Logo"
              width={260}
              height={260}
              priority
              className="relative z-10 drop-shadow-2xl"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
