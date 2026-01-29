"use client";

import { motion } from "framer-motion";

type ServiceCardProps = {
  title: string;
  description: string;
};

const ServiceCard = ({ title, description }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-2xl p-7 shadow-md overflow-hidden border border-gray-100"
    >
      {/* Gold gradient accent */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500" />

      {/* Soft glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-yellow-400/20 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <h3 className="relative z-10 text-lg font-semibold text-gray-900 mb-3 group-hover:text-yellow-600 transition">
        {title}
      </h3>

      <p className="relative z-10 text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
