'use client'
import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'ABC Teknoloji',
    role: 'Frontend Developer',
    period: '2023 - 2024',
    desc: 'React ve Next.js kullanarak kurumsal dashboard arayüzleri geliştirdim.',
  },
  {
    company: 'XYZ Yazılım',
    role: 'Stajyer Mühendis',
    period: '2022 Yazı',
    desc: 'API entegrasyonu ve UI test otomasyonları üzerine çalıştım.',
  },
  {
    company: 'Freelance Projeler',
    role: 'Frontend Geliştirici',
    period: '2021 - Devam',
    desc: 'Küçük ölçekli işletmelere özel web çözümleri sundum.',
  },
]

export default function Experience() {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <motion.h2 className="text-3xl font-semibold text-center mb-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        İş Deneyimlerim
      </motion.h2>
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <motion.div key={idx} className="border-l-4 pl-4 border-blue-500">
            <h3 className="text-xl font-bold">{exp.company}</h3>
            <p className="italic text-sm text-muted-foreground">{exp.role} • {exp.period}</p>
            <p className="mt-2">{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}