// Background.tsx — fondo animado de Synex
// Combina partículas, gradiente y efecto Matrix
"use client"

import { useEffect, useRef } from "react"

export default function Background() {
  // useRef = referencia directa al elemento canvas del DOM
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // ctx = contexto 2D del canvas — aquí dibujamos todo
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // El canvas ocupa toda la pantalla
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // =====================
    // PARTÍCULAS — estrellas flotantes
    // =====================
    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
    }[] = []

    // Crea 80 partículas con posición y velocidad aleatoria
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    // =====================
    // MATRIX — caracteres cayendo
    // =====================
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    // drops = posición Y de cada columna de caracteres
    const drops: number[] = Array(columns).fill(1)

    // Caracteres tech que caen
    const chars = "01アイウエオカキクケコ</>{}[]()#$%&"

    // =====================
    // GRADIENTE animado
    // =====================
    let gradientAngle = 0

    // =====================
    // LOOP de animación
    // =====================
    function animate() {
      if (!ctx || !canvas) return

      // Fondo semi-transparente para efecto de trail
      // El 0.05 hace que los caracteres dejen rastro
      ctx.fillStyle = "rgba(10, 10, 10, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // ---- Dibuja gradiente de fondo ----
      gradientAngle += 0.002
      const gradient = ctx.createRadialGradient(
        canvas.width / 2 + Math.cos(gradientAngle) * 200,
        canvas.height / 2 + Math.sin(gradientAngle) * 200,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width * 0.8
      )
      gradient.addColorStop(0, "rgba(0, 255, 148, 0.03)")
      gradient.addColorStop(0.5, "rgba(0, 255, 148, 0.01)")
      gradient.addColorStop(1, "rgba(10, 10, 10, 0)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // ---- Dibuja partículas ----
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 255, 148, ${p.opacity})`
        ctx.fill()

        // Mueve la partícula
        p.x += p.speedX
        p.y += p.speedY

        // Si sale de la pantalla la regresa al otro lado
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
      })

      // ---- Dibuja Matrix ----
      ctx.fillStyle = "rgba(0, 255, 148, 0.07)"
      ctx.font = `${fontSize}px monospace`

      drops.forEach((drop, i) => {
        // Carácter aleatorio
        const char = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(char, i * fontSize, drop * fontSize)

        // Reinicia la columna aleatoriamente
        if (drop * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      })

      // requestAnimationFrame = repite la función ~60 veces por segundo
      requestAnimationFrame(animate)
    }

    animate()

    // Ajusta el canvas si cambia el tamaño de la ventana
    function handleResize() {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    // canvas = elemento HTML para dibujar gráficos
    // fixed = se queda fijo detrás de todo el contenido
    // z-0 = debajo de todo
    // pointer-events-none = no bloquea clicks
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  )
}