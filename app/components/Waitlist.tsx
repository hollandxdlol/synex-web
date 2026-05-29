// Waitlist — formulario para recoger emails de personas interesadas
// Es la sección más importante para el negocio

// "use client" es necesario porque usamos useState
// que es interactividad del lado del cliente
"use client"

// useState = hook de React para guardar el valor del input
import { useState } from "react"

export default function Waitlist() {
  // email = variable que guarda lo que escribe el usuario
  // setEmail = función para actualizar esa variable
  const [email, setEmail] = useState("")
  
  // submitted = true cuando el usuario envía el formulario
  const [submitted, setSubmitted] = useState(false)

  // función que se ejecuta cuando el usuario hace click en el botón
  function handleSubmit() {
    if (email) {
      // Por ahora solo muestra el mensaje de éxito
      // Cuando tengas backend aquí envías el email a tu base de datos
      setSubmitted(true)
    }
  }

  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        
        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Be the <span className="text-[#00FF94]">first</span> to know
        </h2>
        
        <p className="text-[#888888] text-xl mb-10">
          Join the waitlist and get early access when Synex launches. 
          No spam, ever. 🤝
        </p>

        {/* Si ya envió el email muestra mensaje de éxito */}
        {submitted ? (
          <div className="bg-[#1A1A1A] border border-[#00FF94] rounded-2xl p-8">
            <p className="text-[#00FF94] text-2xl font-bold mb-2">You're in! 🎉</p>
            <p className="text-[#888888]">We'll notify you when Synex launches.</p>
          </div>
        ) : (
          // Si no ha enviado muestra el formulario
          <div className="flex flex-col sm:flex-row gap-4">
            
            {/* Input de email */}
            {/* onChange = se ejecuta cada vez que el usuario escribe */}
            {/* value = el valor actual del input */}
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-[#1A1A1A] border border-[#2A2A2A] rounded-full px-6 py-4 text-white placeholder-[#888888] focus:outline-none focus:border-[#00FF94] transition-all"
            />
            
            {/* Botón submit */}
            <button
              onClick={handleSubmit}
              className="bg-[#00FF94] text-[#0A0A0A] font-bold px-8 py-4 rounded-full hover:opacity-80 transition-all whitespace-nowrap"
            >
              Join Waitlist 🚀
            </button>
          </div>
        )}
      </div>
    </section>
  )
}