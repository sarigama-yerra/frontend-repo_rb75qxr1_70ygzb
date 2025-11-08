import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import AboutContactFooter from './components/AboutContactFooter'

function App() {
  return (
    <div className="font-inter antialiased text-slate-800 bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <AboutContactFooter />
      </main>
    </div>
  )
}

export default App
