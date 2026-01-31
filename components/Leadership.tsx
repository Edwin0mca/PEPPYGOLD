"use client";

import { motion } from "framer-motion";

const boardOfDirectors = [
  { name: "Mr. Arun Pradeep", role: "Founder & CEO, Global" },
  { name: "Mr. Emmanuel Mani", role: "Co-Founder & CTO, Global" },
  { name: "Mr. Ravindran Subramaniam", role: "Co-Founder & Head of Client Engagements, USA" },
  { name: "Mrs. Tabitha Emmanuel", role: "Co-Founder & Head of Security & Compliances, Global" },
  { name: "Mr. Praveen Kumar", role: "Regional Head of Business Development, India" },
];

const advisoryBoard = [
  { name: "Mr. CR Venkatesh (CRV)", role: "Founder & CEO – Dot Com Infoway" },
  { name: "Mr. Sethuraman Sathappan", role: "COO (Retired) – Emirates NBD Bank, India" },
  { name: "Mrs. Ramadevi S", role: "Founder & CEO – Elangi Thanga Maaligai" },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // ✅ FIXED
    },
  },
};

const Leadership = () => {
  return (
    <section className="relative overflow-hidden py-32 px-6 bg-gradient-to-b from-[#6816EF]/6 via-white to-[#6816EF]/10">

      {/* FLOATING BRAND LIGHTS */}
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-96 h-96 bg-[#6816EF]/15 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-[28rem] h-[28rem] bg-[#6816EF]/10 rounded-full blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto space-y-32">

        {/* BOARD */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-[#6816EF] mb-16"
          >
            Board of Directors
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {boardOfDirectors.map((member, index) => (
              <motion.div
                key={member.name}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white/85 backdrop-blur
                           rounded-2xl p-7 shadow-md
                           border border-[#6816EF]/15
                           overflow-hidden transition"
              >
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#6816EF] via-[#9b6cff] to-[#6816EF]" />

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#6816EF]/20 rounded-full blur-3xl" />
                </div>

                <h3 className="relative z-10 text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="relative z-10 text-sm text-gray-600 leading-relaxed">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ADVISORY */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-[#6816EF] mb-16"
          >
            Advisory Board
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {advisoryBoard.map((member, index) => (
              <motion.div
                key={member.name}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white/85 backdrop-blur
                           rounded-2xl p-7 shadow-md
                           border border-[#6816EF]/15
                           overflow-hidden transition"
              >
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#6816EF] via-[#9b6cff] to-[#6816EF]" />

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#6816EF]/20 rounded-full blur-3xl" />
                </div>

                <h3 className="relative z-10 text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="relative z-10 text-sm text-gray-600 leading-relaxed">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Leadership;
