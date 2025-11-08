import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28" id="hero">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            Turn your ideas into exceptional websites.
          </motion.h1>
          <motion.p
            className="mt-6 text-slate-600 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          >
            We design high-converting landing pages that inspire and perform.
          </motion.p>
          <motion.div
            className="mt-8 flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-blue-500 text-white px-6 py-3 text-base font-semibold shadow-sm hover:bg-blue-600 transition-colors"
            >
              Get your design now
            </a>
            <a href="#services" className="text-slate-700 hover:text-slate-900 font-medium">See services</a>
          </motion.div>
        </div>
        <div className="relative h-[420px] sm:h-[520px] lg:h-[560px]">
          <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-xl ring-1 ring-slate-900/10 bg-white">
            <Spline
              scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className="pointer-events-none absolute -inset-x-16 -bottom-24 h-72 bg-gradient-to-t from-blue-500/10 via-white/10 to-transparent blur-2xl" />
        </div>
      </div>
    </section>
  )
}
