import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Screenshots from "./components/Screenshots"
import Waitlist from "./components/Waitlist"
import Footer from "./components/Footer"
import CodeLine from "./components/CodeLine"

export default function Home() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen text-white">
      {/* Línea de código en esquina */}
      <CodeLine />
      <Navbar />
      <Hero />
      <Features />
      <Screenshots />
      <Waitlist />
      <Footer />
    </main>
  )
}