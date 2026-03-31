import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import HostCredibility from './components/HostCredibility'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

const waNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '91XXXXXXXXXX'
const waMsg = encodeURIComponent("Hi, I'm interested in the Konkan Village Reset experience")
export const ctaHref = `https://wa.me/${waNumber}?text=${waMsg}`

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Experience />
      <Testimonials />
      <HostCredibility />
      <FinalCTA />
      <Footer />
    </div>
  )
}
