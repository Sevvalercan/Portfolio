'use client'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Eczane Platformu',
    description: 'Nöbetçi eczane ve ilaç bulma uygulaması',
    tech: ['Next.js', 'Tailwind', 'Redux'],
    link: '#',
  },
  {
    title: 'Konum Paylaşım App',
    description: 'Kullanıcıların konumlarını kaydedip paylaşabileceği mobil web uygulaması',
    tech: ['React', 'Leaflet', 'Firebase'],
    link: '#',
  },
  {
    title: 'Kişisel Portföy',
    description: 'Bu site dahil olmak üzere projelerimin sergilendiği portföy sitesi',
    tech: ['Next.js', 'Tailwind', 'Framer Motion'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto">
      <motion.h2 className="text-3xl font-semibold text-center mb-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        Projelerim
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div key={i} className="border rounded-xl p-6 shadow-sm hover:shadow-md transition" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-muted-foreground mb-2">{project.description}</p>
            <div className="flex gap-2 flex-wrap text-sm mb-2">
              {project.tech.map((t, idx) => (
                <span key={idx} className="bg-zinc-200 dark:bg-zinc-700 px-2 py-1 rounded">{t}</span>
              ))}
            </div>
            <a href={project.link} className="text-blue-600 hover:underline" target="_blank">Projeyi Gör</a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}