// Screenshots — sección que muestra los frames de Figma
// Usa el componente Image de Next.js que es más rápido que <img>
import Image from "next/image"

// Array con los datos de cada screenshot
// Cada objeto tiene el archivo, título y descripción
const screens = [
  {
    src: "/screenshots/discover.png",
    title: "Discover People",
    description: "Match with developers and geeks by stack and interests"
  },
  {
    src: "/screenshots/events.png",
    title: "Events & Meetups",
    description: "Find Comicon, hackathons and gaming nights near you"
  },
  {
    src: "/screenshots/feed.png",
    title: "Tech Feed",
    description: "Share projects and discuss the latest in tech and gaming"
  },
  {
    src: "/screenshots/profile.png",
    title: "Your Profile",
    description: "Show your stack, level and interests to the world"
  },
]

export default function Screenshots() {
  return (
    // py-24 = espacio vertical entre secciones
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Título de sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See{" "}
            <span className="text-[#00FF94]">Synex</span>
            {" "}in action
          </h2>
          <p className="text-[#888888] text-xl">
            Designed for the next generation of tech minds
          </p>
        </div>

        {/* Grid de screenshots */}
        {/* grid-cols-2 en móvil, 4 en desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          
          {screens.map((screen, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              
              {/* Contenedor de la imagen con efecto de teléfono */}
              {/* rounded-3xl = bordes muy redondeados como un teléfono */}
              {/* overflow-hidden = la imagen no se sale del borde */}
              {/* border = borde oscuro alrededor */}
              <div className="rounded-3xl overflow-hidden border-2 border-[#2A2A2A] hover:border-[#00FF94] transition-all duration-300 shadow-lg shadow-black/50">
                <Image
                  src={screen.src}
                  // alt = descripción para accesibilidad y SEO
                  alt={screen.title}
                  // width y height = tamaño de la imagen
                  width={250}
                  height={500}
                  // object-cover = la imagen cubre todo el espacio sin distorsión
                  className="object-cover"
                />
              </div>

              {/* Título debajo de la imagen */}
              <div className="text-center">
                <h3 className="text-white font-bold text-sm mb-1">
                  {screen.title}
                </h3>
                <p className="text-[#888888] text-xs leading-relaxed">
                  {screen.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}