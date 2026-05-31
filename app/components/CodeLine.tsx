"use client"

import { useState, useEffect } from "react"

// Líneas de código que van apareciendo
const CODE_LINES = [
  "const synex = new App()",
  "synex.connect(users)",
  "await synex.findTribe()",
  "synex.launch() // soon",
  "> compiling... ✓",
  "> deploying... ✓",
]

export default function CodeLine() {
  const [lineIndex, setLineIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      // Primero hace fade out
      setVisible(false)

      setTimeout(() => {
        // Cambia a la siguiente línea
        setLineIndex((prev) => (prev + 1) % CODE_LINES.length)
        // Hace fade in
        setVisible(true)
      }, 500)

    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    // Esquina inferior izquierda — casi invisible
    <div
      className="fixed bottom-8 left-8 z-20 transition-opacity duration-500"
      style={{ opacity: visible ? 0.3 : 0 }}
    >
      <p className="text-[#00FF94] text-xs font-mono">
        {CODE_LINES[lineIndex]}
      </p>
    </div>
  )
}