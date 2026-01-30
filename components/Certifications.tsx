"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Certifications = () => {
  return (
    <section className="relative overflow-hidden py-28 px-6">

      {/* Soft Brand Background Accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-80 h-80 bg-[#6816EF]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#6816EF]/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#6816EF]/5 via-white to-[#6816EF]/10 rounded-3xl p-10 md:p-16 shadow-xl">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-[#6816EF] mb-16"
        >
          Our Certifications & Recognitions
        </motion.h2>

        {/* Startup India */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-[260px_1fr] gap-10 items-center mb-20 bg-white/70 backdrop-blur rounded-2xl p-8 shadow-md"
        >
          {/* Certificate */}
          <div className="flex justify-center">
            <Image
              src="/certifications/startupuindia-certificate.jpg"
              alt="Startup India Certificate"
              width={240}
              height={170}
              className="rounded-lg shadow-sm"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              StartupIndia Recognition
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Peppy Gold Technologies Private Limited is officially recognized
              by StartupIndia, validating our innovative approach to digital
              gold savings and our commitment to transforming the traditional
              gold investment ecosystem.
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="my-20 border-t border-[#6816EF]/20" />

        {/* DUNS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-[220px_1fr_160px] gap-10 items-center bg-white/70 backdrop-blur rounded-2xl p-8 shadow-md"
        >
          {/* DUNS Certificate */}
          <div className="flex justify-center">
            <Image
              src="/certifications/DUNS.jpeg"
              alt="DUNS Certificate"
              width={200}
              height={150}
              className="rounded-lg shadow-sm"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              D–U–N–S® Registration
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We are registered with Dun & Bradstreet under D–U–N–S® Number
              <span className="font-semibold"> 77–267–8924</span>. This
              registration confirms our verified global business identity and
              strengthens trust among customers, partners, and stakeholders
              worldwide.
            </p>
          </div>

          {/* QR */}
          <div className="flex justify-center">
            <div className="bg-white p-3 rounded-xl border border-[#6816EF]/20 shadow-sm">
              <Image
                src="/certifications/PEPPY-GOLD-TECHNOLOGIES-PVT-LTD-QR-Code.jpg"
                alt="DUNS QR Code"
                width={110}
                height={110}
              />
              <p className="text-xs text-center mt-2 text-gray-500">
                Verify D–U–N–S®
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Certifications;
