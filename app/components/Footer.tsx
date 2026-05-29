// Footer — pie de página con links y redes sociales

export default function Footer() {
  return (
    <footer className="border-t border-[#1A1A1A] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo */}
        <span className="text-[#00FF94] font-bold text-xl tracking-wider">
          SYNEX
        </span>

        {/* Tagline */}
        <p className="text-[#888888] text-sm">
          Where tech minds connect 🌍
        </p>

        {/* Links redes sociales */}
        <div className="flex gap-6">
          <a href="#" className="text-[#888888] hover:text-[#00FF94] transition-all text-sm">
            Twitter
          </a>
          <a href="#" className="text-[#888888] hover:text-[#00FF94] transition-all text-sm">
            Instagram
          </a>
          <a href="#" className="text-[#888888] hover:text-[#00FF94] transition-all text-sm">
            Discord
          </a>
        </div>

        {/* Copyright */}
        <p className="text-[#888888] text-sm">
          © 2026 Synex. All rights reserved.
        </p>

      </div>
    </footer>
  )
}