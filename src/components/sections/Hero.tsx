"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-black text-white overflow-hidden flex items-center justify-center px-4">
      {/* Noise background layer */}
      <div className="absolute inset-0 z-0 noise-bg"></div>

      {/* Gradient Light Blur Circles */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-600 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-blue-500 opacity-30 rounded-full blur-3xl"></div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Merhaba, ben <span className="text-purple-400">Şevval Ercan</span>
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto mb-6 text-zinc-300">
          Bilgisayar Mühendisiyim. Web teknolojileri ile etkileşimli, kullanıcı
          odaklı deneyimler geliştiriyorum.
        </p>

        {/* Social links */}
        <div className="flex justify-center gap-6 mt-4">
          <Link
            href="https://github.com"
            target="_blank"
            className="hover:scale-110 transition-transform"
          >
            <Github className="w-6 h-6 text-white" />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="hover:scale-110 transition-transform"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </Link>
          <Link
            href="mailto:sevval@example.com"
            className="hover:scale-110 transition-transform"
          >
            <Mail className="w-6 h-6 text-white" />
          </Link>
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl shadow-lg hover:bg-purple-700 transition"
        >
          LinkedIn Profilimi İncele
        </motion.button>
      </motion.div>
    </section>
  );
}
