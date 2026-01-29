"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <section className="relative overflow-hidden bg-gradient-to-r from-black to-gray-900 text-white py-32 px-8">
      
      {/* Frost Gold & Silver Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <span
            key={i}
            className={`absolute top-[-15%] rounded-full blur-sm opacity-70 animate-frost-fall ${
              p.isGold ? "bg-yellow-300" : "bg-gray-200"
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

      {/* CONTENT GRID */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-5">
            India’s Trusted Gold Aggregator
          </h1>

          <p className="max-w-2xl mx-auto md:mx-0 text-lg text-gray-300">
            Buy, sell, and manage gold securely with PeppyGold — transparent,
            reliable, and built for the future.
          </p>

          <button className="mt-12 px-8 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:scale-105 transition">
            Get Started
          </button>
        </div>

        {/* RIGHT LOGO */}
        <div className="flex justify-center md:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: [1, 1.04, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Soft Glow */}
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-yellow-400/30 blur-3xl"
            />

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
