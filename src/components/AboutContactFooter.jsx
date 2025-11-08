import { motion } from 'framer-motion'
import { CheckCircle2, Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function AboutContactFooter() {
  return (
    <>
      <section id="about" className="py-20 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Why choose us</h2>
            <p className="mt-4 text-slate-600">We combine strategy, craft, and speed to deliver measurable outcomes with a spotless, modern aesthetic.</p>
            <ul className="mt-6 space-y-3 text-slate-700">
              {['Senior-only team', 'Fast iterations', 'CRO-first mindset', 'Transparent pricing'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Launched', value: '120+' },
              { label: 'Avg lift', value: '32%' },
              { label: 'NPS', value: '72' },
              { label: 'Years', value: '8+' },
              { label: 'Satisfaction', value: '98%' },
              { label: 'Countries', value: '14' }
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-900/10"
              >
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wide text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Let’s talk</h2>
            <p className="mt-4 text-slate-600">Tell us about your goals and we’ll craft a plan to get there fast.</p>
            <div className="mt-6 space-y-3 text-slate-700">
              <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-blue-600" /> hello@bluestudio.co</div>
              <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-blue-600" /> +1 (555) 123-4567</div>
              <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-blue-600" /> Remote / Global</div>
            </div>
          </div>

          <form className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-slate-900/10 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="First name" />
              <input className="rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Last name" />
            </div>
            <input className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" />
            <textarea rows={4} className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us about your project" />
            <button type="button" className="inline-flex rounded-xl bg-blue-500 text-white px-6 py-3 font-semibold hover:bg-blue-600 transition-colors">Send message</button>
          </form>
        </div>
      </section>

      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-slate-600">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-blue-500" />
              </div>
              <span className="font-semibold tracking-tight text-slate-900">BlueStudio</span>
            </div>
            <p className="mt-4">Designing high-performing interfaces with clarity and intent.</p>
          </div>

          <div>
            <div className="font-semibold text-slate-900">Company</div>
            <ul className="mt-3 space-y-2">
              <li><a href="#services" className="hover:text-slate-900">Services</a></li>
              <li><a href="#about" className="hover:text-slate-900">About</a></li>
              <li><a href="#contact" className="hover:text-slate-900">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="font-semibold text-slate-900">Resources</div>
            <ul className="mt-3 space-y-2">
              <li><a href="#" className="hover:text-slate-900">Blog</a></li>
              <li><a href="#" className="hover:text-slate-900">Case studies</a></li>
              <li><a href="#" className="hover:text-slate-900">Press</a></li>
            </ul>
          </div>

          <div>
            <div className="font-semibold text-slate-900">Follow</div>
            <div className="mt-3 flex items-center gap-3 text-slate-500">
              <a href="#" aria-label="Twitter" className="hover:text-slate-900"><Twitter className="h-5 w-5" /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-slate-900"><Linkedin className="h-5 w-5" /></a>
              <a href="#" aria-label="Instagram" className="hover:text-slate-900"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-8 text-xs text-slate-500">© {new Date().getFullYear()} BlueStudio. All rights reserved.</div>
      </footer>
    </>
  )
}
