'use client'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-neutral-950">
      <motion.div
        className="relative bg-gradient-to-br from-neutral-900 via-neutral-950 to-black rounded-2xl shadow-2xl border border-neutral-800 p-10 max-w-xl w-full mx-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Glow effect */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl z-0" style={{
          boxShadow: "0 0 60px 10px #00f0ff44, 0 0 0 0 #000"
        }} />
        <div className="relative z-10 text-center">
          <motion.h2
            className="text-3xl font-bold mb-6 text-white drop-shadow-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Hakkımda
          </motion.h2>
          <motion.p
            className="text-lg text-neutral-300"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Bilgisayar mühendisiyim. Frontend teknolojilerine ilgi duyuyorum. Kullanıcı dostu ve animasyonlu arayüzler geliştiriyorum. React, Next.js, Tailwind CSS gibi teknolojilerle çalışıyorum.
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}