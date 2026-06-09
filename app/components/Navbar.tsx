"use client"

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#1A1A1A]">
      
      {/* Contenedor centrado con padding */}
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <span className="text-[#00FF94] font-bold text-2xl tracking-wider">
          SYNEX
        </span>

        {/* Botón waitlist */}
        <button
          onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-[#00FF94] text-[#0A0A0A] font-bold px-6 py-2 rounded-full hover:opacity-80 transition-all"
        >
          Join Waitlist
        </button>

      </div>
    </nav>
  )
}