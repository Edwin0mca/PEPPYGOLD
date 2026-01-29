"use client";

import { motion } from "framer-motion";

const boardOfDirectors = [
  {
    name: "Mr. Arun Pradeep",
    role: "Founder & CEO, Global",
  },
  {
    name: "Mr. Emmanuel Mani",
    role: "Co-Founder & CTO, Global",
  },
  {
    name: "Mr. Ravindran Subramaniam",
    role: "Co-Founder & Head of Client Engagements, USA",
  },
  {
    name: "Mrs. Tabitha Emmanuel",
    role: "Co-Founder & Head of Security & Compliances, Global",
  },
  {
    name: "Mr. Praveen Kumar",
    role: "Regional Head of Business Development, India",
  },
];

const advisoryBoard = [
  {
    name: "Mr. CR Venkatesh (CRV)",
    role: "Founder & CEO – Dot Com Infoway",
  },
  {
    name: "Mr. Sethuraman Sathappan",
    role: "COO (Retired) – Emirates NBD Bank, India",
  },
  {
    name: "Mrs. Ramadevi S",
    role: "Founder & CEO – Elangi Thanga Maaligai",
  },
];

const Leadership = () => {
  return (
    <section className="py-28 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto">

        {/* Board of Directors */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-yellow-400 mb-12 text-center"
        >
          Board of Directors
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {boardOfDirectors.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-400/40 transition"
            >
              <h3 className="text-lg font-semibold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Advisory Board */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-yellow-400 mb-12 text-center"
        >
          Advisory Board
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advisoryBoard.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-400/40 transition"
            >
              <h3 className="text-lg font-semibold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Leadership;
