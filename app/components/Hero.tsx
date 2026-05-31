"use client"

import { useState, useEffect } from "react"

// El texto que se va a escribir solo
const TITLE = "Where tech minds connect"

export default function Hero() {
  // displayText = el texto que se muestra en pantalla
  // empieza vacío y va creciendo letra por letra
  const [displayText, setDisplayText] = useState("")
  // index = qué letra estamos escribiendo ahora
  const [index, setIndex] = useState(0)
  // cursor = controla si el cursor parpadeante se ve o no
  const [cursor, setCursor] = useState(true)

  useEffect(() => {
    // Si ya escribimos todas las letras — para
    if (index >= TITLE.length) return

    // Cada 50ms añade una letra nueva
    const timeout = setTimeout(() => {
      setDisplayText(TITLE.slice(0, index + 1))
      setIndex(index + 1)
    }, 50)

    return () => clearTimeout(timeout)
  }, [index])

  useEffect(() => {
    // El cursor parpadea cada 500ms
    const interval = setInterval(() => {
      setCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-[#1A1A1A] border border-[#00FF94]/30 rounded-full px-4 py-2 mb-8">
        <span className="w-2 h-2 bg-[#00FF94] rounded-full animate-pulse"></span>
        <span className="text-[#00FF94] text-sm font-medium">Now in development</span>
      </div>

      {/* Título con efecto de escritura */}
      <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl">
        {/* Muestra las primeras palabras normales */}
        <span className="text-white">Where </span>
        <span className="text-[#00FF94]">
          {/* Muestra el texto que ya se escribió */}
          {displayText.replace("Where ", "")}
          {/* Cursor parpadeante */}
          <span style={{ opacity: cursor ? 1 : 0 }}>|</span>
        </span>
      </h1>

      {/* Subtítulo */}
      <p className="text-[#888888] text-xl mb-10 max-w-2xl leading-relaxed">
        The social app for developers, gamers, and geeks.
        Find your tribe, join events, and make real friends
        in the tech world. 🚀
      </p>

      {/* Botones */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-[#00FF94] text-[#0A0A0A] font-bold px-8 py-4 rounded-full text-lg hover:opacity-80 transition-all">
          Join the Waitlist 🎉
        </button>
        <button className="border border-[#1A1A1A] text-white font-bold px-8 py-4 rounded-full text-lg hover:border-[#00FF94] transition-all">
          See how it works →
        </button>
      </div>

      {/* Stats */}
      <div className="flex gap-12 mt-16">
        <div>
          <p className="text-[#00FF94] font-bold text-3xl">500+</p>
          <p className="text-[#888888] text-sm">Waiting</p>
        </div>
        <div>
          <p className="text-[#00FF94] font-bold text-3xl">10+</p>
          <p className="text-[#888888] text-sm">Cities</p>
        </div>
        <div>
          <p className="text-[#00FF94] font-bold text-3xl">∞</p>
          <p className="text-[#888888] text-sm">Connections</p>
        </div>
      </div>

    </section>
  )
}