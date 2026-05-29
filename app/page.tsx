import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
// Importamos el nuevo componente Screenshots
import Screenshots from "./components/Screenshots"
import Waitlist from "./components/Waitlist"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen text-white">
      <Navbar />
      <Hero />
      {/* Screenshots va entre Features y Waitlist */}
      <Features />
      <Screenshots />
      <Waitlist />
      <Footer />
    </main>
  )
}