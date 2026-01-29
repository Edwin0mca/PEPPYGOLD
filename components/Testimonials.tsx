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
      "Good application for investing in jewellery. Provides detailed comparison and easier subscription to saving schemes from various jewellers.",
    name: "Tamilselvan M",
  },
  {
    message:
      "This app really good and easy to use. Lots of offers and rewards. Highly recommended for saving gold.",
    name: "Emmanlal Emman",
  },
  {
    message:
      "Very user-friendly app! Makes gold investment simple, secure, and convenient.",
    name: "Mani Kandan",
  },
  {
    message:
      "Investing in gold is a helpful way to save money. This app helped me build a savings habit.",
    name: "Ragul",
  },
];

const partnerTestimonials: Testimonial[] = [
  {
    message:
      "An excellent platform for jewellers to trade profitably without investing a single penny. Truly a game-changer for the industry.",
    name: "AGS Thangamaaligai",
  },
  {
    message:
      "A great opportunity for jewellers to amplify their revenue. Peppy Gold also serves as a vibrant marketplace for customers.",
    name: "Kamalam Jewellery",
  },
  {
    message:
      "An absolutely fantastic platform, perfectly suited for the new generation of jewellers and investors!",
    name: "Garudaa Gold Palace Pvt Ltd",
  },
];

const Slider = ({ data }: { data: Testimonial[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [data.length]);

  const prev = () =>
    setIndex((index - 1 + data.length) % data.length);
  const next = () => setIndex((index + 1) % data.length);

  return (
    <div className="relative max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8 text-center"
        >
          <Quote className="mx-auto text-yellow-400 mb-4" />
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
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:scale-105 transition"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:scale-105 transition"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-28 px-6 bg-gradient-to-b from-yellow-50 via-white to-yellow-100">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* Users */}
        <div>
          <h2 className="text-3xl font-bold text-center text-yellow-600 mb-14">
            Loved by Users 
          </h2>
          <Slider data={userTestimonials} />
        </div>

        {/* Partners */}
        <div>
          <h2 className="text-3xl font-bold text-center text-yellow-600 mb-14">
            What Our Partners Say About Peppy Gold
          </h2>
          <Slider data={partnerTestimonials} />
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
