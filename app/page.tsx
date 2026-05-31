import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Screenshots from "./components/Screenshots"
import Waitlist from "./components/Waitlist"
import Footer from "./components/Footer"
import Background from "./components/Background"

export default function Home() {
  return (
    // relative z-10 = el contenido queda encima del fondo animado
    <main className="bg-[#0A0A0A] min-h-screen text-white">
      
      {/* Fondo animado — detrás de todo */}
      <Background />

      {/* z-10 = encima del fondo animado */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <Screenshots />
        <Waitlist />
        <Footer />
      </div>

    </main>
  )
}