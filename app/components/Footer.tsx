export default function Footer() {
  return (
    <footer className="border-t border-[#1A1A1A] py-12 px-6" translate="no">
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

          <a
            href="https://instagram.com/synexapp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#888888] hover:text-[#00FF94] transition-all text-sm flex items-center gap-1"
          >
            📸 Instagram
          </a>

          <a
            href="https://tiktok.com/@synexapp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#888888] hover:text-[#00FF94] transition-all text-sm flex items-center gap-1"
          >
            🎵 TikTok
          </a>

          <a
            href="https://twitter.com/synexapp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#888888] hover:text-[#00FF94] transition-all text-sm flex items-center gap-1"
          >
            𝕏 Twitter
          </a>

        </div>

        {/* Copyright */}
        <p className="text-[#888888] text-sm" translate="no">
          © 2026 Synex. All rights reserved.
        </p>

      </div>
    </footer>
  )
}