'use client'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  return (
    <section className="py-20 px-4 max-w-xl mx-auto text-center">
      <motion.h2 className="text-3xl font-semibold mb-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        İletişim
      </motion.h2>
      <motion.p className="text-muted-foreground mb-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        Benimle bağlantıya geçmek için aşağıdaki bağlantılardan birini kullanabilirsin.
      </motion.p>
      <div className="flex justify-center gap-6">
        <Link href="mailto:sevval@example.com"><Mail className="w-6 h-6" /></Link>
        <Link href="https://github.com" target="_blank"><Github className="w-6 h-6" /></Link>
        <Link href="https://linkedin.com" target="_blank"><Linkedin className="w-6 h-6" /></Link>
      </div>
    </section>
  )
}