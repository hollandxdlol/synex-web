// route.ts — es el endpoint que recibe el email del usuario
// y lo envía a través de Resend

// NextResponse = permite enviar respuestas HTTP
import { NextResponse } from "next/server"
// Resend = librería para enviar emails
import { Resend } from "resend"

// Inicializa Resend con tu API key
// process.env = lee las variables de entorno del archivo .env.local
const resend = new Resend(process.env.RESEND_API_KEY)

// POST = función que se ejecuta cuando el formulario envía un email
export async function POST(request: Request) {
  try {
    // request.json() = lee el cuerpo de la petición
    const { email } = await request.json()

    // Validación — si no hay email devuelve error
    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      )
    }

    // Envía el email de confirmación al usuario
    await resend.emails.send({
      // from = debe ser un email verificado en Resend
      // por ahora usamos el dominio de Resend gratis
      from: "Synex <onboarding@resend.dev>",
      to: email,
      subject: "You're on the Synex waitlist! 🚀",
      html: `
        <div style="background:#0A0A0A;color:#ffffff;padding:40px;font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border-radius:16px;">
          <h1 style="color:#00FF94;font-size:32px;margin-bottom:8px;">SYNEX</h1>
          <h2 style="font-size:24px;margin-bottom:16px;">You're in! 🎉</h2>
          <p style="color:#888888;font-size:16px;line-height:1.6;">
            Thanks for joining the Synex waitlist. You'll be one of the first to know when we launch.
          </p>
          <p style="color:#888888;font-size:16px;line-height:1.6;">
            We're building the social app for developers, gamers and geeks. 
            Stay tuned — something big is coming. 🚀
          </p>
          <div style="margin-top:32px;padding:20px;background:#1A1A1A;border-radius:12px;border:1px solid #00FF94;">
            <p style="color:#00FF94;font-size:14px;margin:0;">
              Where tech minds connect 🌍
            </p>
          </div>
        </div>
      `
    })

    // También te envía un email a ti avisándote del nuevo usuario
    await resend.emails.send({
      from: "Synex <onboarding@resend.dev>",
      // Cambia esto por tu email personal
      to: "hollandstrap15@gmail.com",
      subject: "New Synex waitlist signup! 🎉",
      html: `
        <p>New signup: <strong>${email}</strong></p>
      `
    })

    // Devuelve éxito
    return NextResponse.json(
      { success: true },
      { status: 200 }
    )

  } catch (error) {
    // Si algo falla devuelve error
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}