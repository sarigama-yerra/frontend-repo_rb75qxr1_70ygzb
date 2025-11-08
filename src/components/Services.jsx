import { Rocket, Sparkles, PenTool } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Rocket,
    title: 'Conversion-first landing pages',
    desc: 'Designs engineered for performance with crisp visuals, compelling copy, and frictionless flows.'
  },
  {
    icon: Sparkles,
    title: 'Brand systems & visual identity',
    desc: 'Modern, minimal and distinctive — cohesive systems that scale across platforms.'
  },
  {
    icon: PenTool,
    title: 'Rapid prototyping',
    desc: 'Interactive prototypes that de-risk ideas and accelerate stakeholder alignment.'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Services</h2>
          <p className="mt-3 text-slate-600">A focused set of offerings crafted to turn ideas into high-performing products.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-900/10 hover:shadow-md transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{desc}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
              <div className="mt-4 text-sm text-slate-500">Learn more →</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
