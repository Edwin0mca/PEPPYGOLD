"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid gap-12 md:grid-cols-4"
      >
        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-3">
            Peppy Gold
          </h2>
          <p className="text-sm mb-4">
            Offers and Schemes. <br />
            Invest in Peppy Gold with confidence and safeguard your future.
          </p>

          <button className="mt-3 bg-yellow-400 text-black px-5 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition">
            Start Today
          </button>
        </div>

        {/* APP QR */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4">
            Download Our App
          </h3>

          <div className="flex gap-6">
            <div className="text-center">
              <Image
                src="/qr/android.png"
                alt="Android App QR"
                width={90}
                height={90}
                className="bg-white p-2 rounded-md"
              />
              <p className="text-xs mt-2">Android</p>
            </div>

            <div className="text-center">
              <Image
                src="/qr/ios.png"
                alt="iOS App QR"
                width={90}
                height={90}
                className="bg-white p-2 rounded-md"
              />
              <p className="text-xs mt-2">iOS</p>
            </div>
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
                <Link href="#" className="hover:text-yellow-400 transition">
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
          <p className="text-sm mb-3">✉️ support@peppygold.com</p>

          <div className="flex gap-3">
            <button className="border border-yellow-400 text-yellow-400 px-3 py-1 rounded text-xs hover:bg-yellow-400 hover:text-black transition">
              WhatsApp Us
            </button>
            <button className="border border-gray-600 px-3 py-1 rounded text-xs hover:border-yellow-400 transition">
              Contact Form
            </button>
          </div>
        </div>
      </motion.div>

      {/* ADDRESSES */}
      <div className="max-w-7xl mx-auto mt-16 border-t border-white/10 pt-10 grid gap-8 md:grid-cols-3 text-sm">
        <div>
          <h4 className="text-white font-semibold mb-2">
            Head Office (Madurai)
          </h4>
          <p>
            94/19, Mani Kothonar Street,<br />
            Bypass Road, Opp. Central Warehouse,<br />
            Madurai – 625016, Tamilnadu, India<br />
            GSTIN: 33AAPCP5394N1ZL
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">
            Corporate Office (Chennai)
          </h4>
          <p>
            No. 56, Radhakrishnan Salai,<br />
            Palaniappa Nagar, Valasaravakkam,<br />
            Chennai – 600087, Tamilnadu, India
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">
            Global Office (USA)
          </h4>
          <p>
            15901 Rolater Rd, Suite #402,<br />
            Frisco, TX 75035, USA
          </p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-xs text-gray-500 mt-12 pb-6">
        © {new Date().getFullYear()} Peppy Gold Technologies Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
