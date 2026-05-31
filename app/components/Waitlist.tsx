// Waitlist.tsx actualizado — ahora envía el email de verdad
"use client"

import { useState } from "react"

export default function Waitlist() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  // loading = true mientras espera la respuesta del servidor
  const [loading, setLoading] = useState(false)
  // error = mensaje de error si algo falla
  const [error, setError] = useState("")

  async function handleSubmit() {
    // Validación básica del email
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email")
      return
    }

    // Activa el estado de carga
    setLoading(true)
    setError("")

    try {
      // fetch = envía una petición HTTP a nuestra API route
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        // Convierte el email a JSON para enviarlo
        body: JSON.stringify({ email })
      })

      // Lee la respuesta del servidor
      const data = await response.json()

      if (data.success) {
        // Si todo fue bien muestra el mensaje de éxito
        setSubmitted(true)
      } else {
        setError("Something went wrong. Please try again.")
      }
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      // Desactiva el estado de carga siempre
      setLoading(false)
    }
  }

  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Be the <span className="text-[#00FF94]">first</span> to know
        </h2>

        <p className="text-[#888888] text-xl mb-10">
          Join the waitlist and get early access when Synex launches.
          No spam, ever. 🤝
        </p>

        {submitted ? (
          <div className="bg-[#1A1A1A] border border-[#00FF94] rounded-2xl p-8">
            <p className="text-[#00FF94] text-2xl font-bold mb-2">You're in! 🎉</p>
            <p className="text-[#888888]">Check your email — we sent you a confirmation.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                // onKeyDown = si presiona Enter envía el formulario
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                className="flex-1 bg-[#1A1A1A] border border-[#2A2A2A] rounded-full px-6 py-4 text-white placeholder-[#888888] focus:outline-none focus:border-[#00FF94] transition-all"
              />
            <button
              onClick={handleSubmit}
               disabled={loading}
              className="relative bg-[#00FF94] text-[#0A0A0A] font-bold px-8 py-4 rounded-full hover:opacity-80 transition-all whitespace-nowrap disabled:opacity-50"
            >
               {/* Anillo que pulsa alrededor del botón */}
               <span className="absolute inset-0 rounded-full animate-ping bg-[#00FF94] opacity-20"></span>
              {loading ? "Joining..." : "Join Waitlist 🚀"}
            </button>
                {/* Muestra texto diferente según el estado */}
                {loading ? "Joining..." : "Join Waitlist 🚀"}
              </button>
            </div>

            {/* Muestra error si existe */}
            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}
          </div>
        )}
      </div>
    </section>
  )
}