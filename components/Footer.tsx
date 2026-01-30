"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-300 pt-24 px-6 overflow-hidden">

      {/* Soft brand glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#6816EF]/20 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid gap-12 md:grid-cols-4"
      >
        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-[#6816EF] mb-3">
            Peppy Gold
          </h2>
          <p className="text-sm mb-5 leading-relaxed">
            Offers and Schemes. <br />
            Invest with confidence and safeguard your future.
          </p>

          <Link
            href="#get-started"
            className="inline-block bg-[#6816EF] text-white px-6 py-2 rounded-xl text-sm font-semibold hover:scale-105 transition"
          >
            Start Today
          </Link>
        </div>

        {/* APP QR */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4">
            Download Our App
          </h3>

          <div className="flex gap-6">
            {[
              { src: "/qr/android.png", label: "Android" },
              { src: "/qr/ios.png", label: "iOS" },
            ].map((app) => (
              <div key={app.label} className="text-center">
                <Image
                  src={app.src}
                  alt={`${app.label} App QR`}
                  width={90}
                  height={90}
                  className="bg-white p-2 rounded-lg shadow-md"
                />
                <p className="text-xs mt-2">{app.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              "How It Works",
              "FAQ",
              "Partner With Us",
              "Privacy Policy",
              "Terms of Service",
            ].map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="hover:text-[#6816EF] transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4">
            Contact & Support
          </h3>
          <p className="text-sm">📞 +91 9600898971</p>
          <p className="text-sm mb-4">✉️ support@peppygold.com</p>

          <div className="flex gap-3">
            <button className="border border-[#6816EF] text-[#6816EF] px-4 py-1.5 rounded-lg text-xs hover:bg-[#6816EF] hover:text-white transition">
              WhatsApp Us
            </button>
            <button className="border border-gray-600 px-4 py-1.5 rounded-lg text-xs hover:border-[#6816EF] transition">
              Contact Form
            </button>
          </div>
        </div>
      </motion.div>

      {/* ADDRESSES */}
      <div className="max-w-7xl mx-auto mt-16 border-t border-white/10 pt-10 grid gap-8 md:grid-cols-3 text-sm">
        <Address
          title="Head Office (Madurai)"
          content={`94/19, Mani Kothonar Street,
Bypass Road, Opp. Central Warehouse,
Madurai – 625016, Tamilnadu, India
GSTIN: 33AAPCP5394N1ZL`}
        />

        <Address
          title="Corporate Office (Chennai)"
          content={`No. 56, Radhakrishnan Salai,
Palaniappa Nagar, Valasaravakkam,
Chennai – 600087, Tamilnadu, India`}
        />

        <Address
          title="Global Office (USA)"
          content={`15901 Rolater Rd, Suite #402,
Frisco, TX 75035, USA`}
        />
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-xs text-gray-500 mt-12 pb-6">
        © {new Date().getFullYear()} Peppy Gold Technologies Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
};

const Address = ({ title, content }: { title: string; content: string }) => (
  <div>
    <h4 className="text-white font-semibold mb-2">{title}</h4>
    <p className="whitespace-pre-line">{content}</p>
  </div>
);

export default Footer;
