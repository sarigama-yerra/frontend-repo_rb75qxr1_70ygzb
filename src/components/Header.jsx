import { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
            <div className="h-3 w-3 rounded-full bg-blue-500" />
          </div>
          <span className="font-semibold tracking-tight text-slate-900">BlueStudio</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#services" className="hover:text-slate-900 transition-colors">Services</a>
          <a href="#testimonials" className="hover:text-slate-900 transition-colors">Clients</a>
          <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-xl bg-blue-500 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-blue-600 transition-colors"
        >
          Get Started
        </a>
      </div>
    </header>
  )
}
