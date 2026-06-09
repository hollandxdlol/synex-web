// Features — sección que muestra las 5 funciones principales
// Cada feature tiene icono, título y descripción

// Primero definimos los datos de cada feature
// Esto es un array de objetos en JS
const features = [
  {
    icon: "🔍",
    title: "Discover People",
    description: "Match with developers, gamers and geeks by stack and interests. Like Tinder but for tech friendships."
  },
  {
    icon: "📅",
    title: "Events & Meetups",
    description: "Find Comicon, hackathons, gaming nights and tech meetups near you. Meet in real life."
  },
  {
    icon: "📰",
    title: "Tech Feed",
    description: "Share projects, ask questions and discuss the latest in tech and gaming. Like Reddit for your tribe."
  },
  {
    icon: "💬",
    title: "Real Conversations",
    description: "Chat 1 to 1 or in groups. No algorithms, no ads. Just real conversations with real people."
  },
  {
    icon: "👤",
    title: "Your Tech Profile",
    description: "Show your stack, level and interests. Connect with juniors, seniors and everyone in between."
  },
  {
    icon: "🎮",
    title: "Geek Culture",
    description: "Anime, gaming, Comicon — Synex is for the whole geek experience, not just coding."
  },
]

export default function Features() {
  return (
    // py-24 = padding vertical grande para separar secciones
    <section id="features" className="py-24 px-6">
      
      {/* Contenedor centrado */}
      <div className="max-w-6xl mx-auto">
        
        {/* Título de sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need to{" "}
            <span className="text-[#00FF94]">find your tribe</span>
          </h2>
          <p className="text-[#888888] text-xl max-w-2xl mx-auto">
            One app. Your entire tech social life.
          </p>
        </div>

        {/* Grid de features */}
        {/* grid-cols-1 en móvil, 2 en tablet, 3 en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* map = recorre el array y crea una card por cada feature */}
          {features.map((feature, index) => (
            // key = React necesita un identificador único por cada elemento
            <div key={index} className="bg-[#1A1A1A] rounded-2xl p-6 border border-[#2A2A2A] hover:border-[#00FF94]/50 transition-all">
              
              {/* Icono */}
              <div className="text-4xl mb-4">{feature.icon}</div>
              
              {/* Título */}
              <h3 className="text-white font-bold text-xl mb-2">{feature.title}</h3>
              
              {/* Descripción */}
              <p className="text-[#888888] leading-relaxed">{feature.description}</p>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}