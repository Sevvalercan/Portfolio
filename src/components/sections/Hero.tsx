"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 text-white overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      {/* Işık efekti */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-purple-600/10 to-transparent" />

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold tracking-tight z-10"
      >
        Merhaba, ben <span className="text-indigo-400">Şevval Ercan</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-4 text-lg md:text-xl max-w-2xl z-10 text-white/80"
      >
        LinkedIn profilimi inceleyin. Kod odaklı çözümler geliştiriyor, yaratıcı
        web projelerine hayat veriyorum.
      </motion.p>

      <motion.div
        className="flex flex-wrap gap-6 mt-8 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Link href="https://github.com" target="_blank" className="card-item">
          <Github className="w-6 h-6" />
          <span>GitHub</span>
        </Link>
        <Link href="https://linkedin.com" target="_blank" className="card-item">
          <Linkedin className="w-6 h-6" />
          <span>LinkedIn</span>
        </Link>
        <Link href="mailto:sevvalercan3@gmail.com" className="card-item">
          <Mail className="w-6 h-6" />
          <span>Mail</span>
        </Link>
      </motion.div>
      <motion.pre
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-12 bg-zinc-800/80 text-left text-sm p-6 rounded-xl text-green-400 font-mono w-full max-w-2xl overflow-auto shadow-lg"
      >
        {`{
  "name": "Şevval Ercan",
  "title": "Bilgisayar Mühendisi",
  "skills": ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Redux"],
  "location": "Türkiye,Diyarbakır",
  "contact": {
    "linkedin": "linkedin.com/in/sevval-ercan",
    "github": "github.com/sevvalercan3",
    "email": "sevvalercan3@gmail.com"
  }
}`}
      </motion.pre>
    </section>
  );
}
