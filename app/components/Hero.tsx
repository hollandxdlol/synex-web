"use client"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">

      <div className="inline-flex items-center gap-2 bg-[#1A1A1A] border border-[#00FF94]/30 rounded-full px-4 py-2 mb-8">
        <span className="w-2 h-2 bg-[#00FF94] rounded-full animate-pulse"></span>
        <span className="text-[#00FF94] text-sm font-medium">Now in development</span>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl">
        Where{" "}
        <span className="text-[#00FF94]">tech minds</span>
        {" "}connect
      </h1>

      <p className="text-[#888888] text-xl mb-10 max-w-2xl leading-relaxed">
        The social app for developers, gamers, and geeks.
        Find your tribe, join events, and make real friends
        in the tech world. 🚀
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-[#00FF94] text-[#0A0A0A] font-bold px-8 py-4 rounded-full text-lg hover:opacity-80 transition-all"
        >
          Join the Waitlist 🎉
        </button>
        <button
          onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
          className="border border-[#1A1A1A] text-white font-bold px-8 py-4 rounded-full text-lg hover:border-[#00FF94] transition-all"
        >
          See how it works →
        </button>
      </div>

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