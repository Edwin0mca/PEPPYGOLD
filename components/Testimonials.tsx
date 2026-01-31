"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

type Testimonial = {
  message: string;
  name: string;
};

const userTestimonials: Testimonial[] = [
  {
    message:
      "I have started saving gold with Peppy Gold. It’s a really good app, and I recommend it to everyone.",
    name: "Sneha Shree",
  },
  {
    message:
      "Best and most trusted app for investing in gold. A safe and reliable platform for all gold savings.",
    name: "Jaya Sri",
  },
  {
    message:
      "Good application for investing in jewellery. Provides detailed comparison and easier subscription to saving schemes.",
    name: "Tamilselvan M",
  },
  {
    message:
      "Very user-friendly app! Makes gold investment simple, secure, and convenient.",
    name: "Mani Kandan",
  },
];

const partnerTestimonials: Testimonial[] = [
  {
    message:
      "An excellent platform for jewellers to trade profitably without investing a single penny. Truly a game-changer.",
    name: "AGS Thangamaaligai",
  },
  {
    message:
      "A great opportunity for jewellers to amplify revenue and reach more customers.",
    name: "Kamalam Jewellery",
  },
  {
    message:
      "Perfectly suited for the new generation of jewellers and investors.",
    name: "Garudaa Gold Palace Pvt Ltd",
  },
];

const Slider = ({ data }: { data: Testimonial[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 6500); // slower & calmer
    return () => clearInterval(timer);
  }, [data.length]);

  const prev = () => setIndex((index - 1 + data.length) % data.length);
  const next = () => setIndex((index + 1) % data.length);

  return (
    <div className="relative max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white/80 backdrop-blur border border-[#6816EF]/10 rounded-2xl p-8 text-center shadow-md"
        >
          <Quote className="mx-auto text-[#6816EF] mb-4" />
          <p className="text-gray-700 leading-relaxed mb-6">
            “{data[index].message}”
          </p>
          <h4 className="font-semibold text-gray-900">
            {data[index].name}
          </h4>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:scale-105 transition"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:scale-105 transition"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="relative py-28 px-6 bg-gradient-to-b from-[#6816EF]/5 via-white to-[#6816EF]/5">
      <div className="max-w-6xl mx-auto space-y-28">

        {/* USERS */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-[#6816EF] mb-14"
          >
            Loved by Users
          </motion.h2>
          <Slider data={userTestimonials} />
        </div>

        {/* PARTNERS */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-[#6816EF] mb-14"
          >
            What Our Partners Say About Peppy Gold
          </motion.h2>
          <Slider data={partnerTestimonials} />
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
