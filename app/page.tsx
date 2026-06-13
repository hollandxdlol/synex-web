'use client'

import { useEffect, useState } from 'react'

const REGISTER_URL = 'https://app.synexapp.com/register'
const LOGIN_URL = 'https://app.synexapp.com/login'

function navigate(url: string) { window.location.href = url }

const Icons = {
  ArrowRight: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  Menu: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  ),
  X: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  ),
}

const TECH_TAGS = ['React', 'Next.js', 'TypeScript', 'Python', 'Node.js', 'AWS', 'Docker', 'Rust', 'Go', 'Swift', 'Flutter', 'AI/ML', 'Web3', 'GraphQL', 'PostgreSQL', 'Figma', 'DevOps', 'Kotlin', 'Vue.js', 'Cybersec', 'iOS', 'Android']

const FEATURES = [
  { icon: '⚡', title: 'Smart Matching', desc: 'Find developers and designers who share your stack.' },
  { icon: '💬', title: 'Real-Time Chat', desc: 'Message your connections directly. No noise.' },
  { icon: '🎯', title: 'Mentorship', desc: 'Learn from seniors. Accelerate your career.' },
  { icon: '📅', title: 'Events', desc: 'Hackathons, workshops, and meetups worldwide.' },
  { icon: '📰', title: 'Feed', desc: 'Share code, articles, and ideas with your community.' },
  { icon: '🌍', title: 'Global', desc: 'Members in 50+ countries building together.' },
]

const TESTIMONIALS = [
  {
    text: 'Found my co-founder here. We matched on tech stacks and shipped our startup in 3 months.',
    name: 'Sarah Chen',
    role: 'ML Engineer · San Francisco',
    avatar: 'SC',
  },
  {
    text: 'The mentorship network is unlike anything else. Real engineers, real knowledge.',
    name: 'Alejandro Rios',
    role: 'React Developer · Mexico City',
    avatar: 'AR',
  },
  {
    text: "Won two hackathons with teams I met through Synex. This community is the real deal.",
    name: 'Yuki Tanaka',
    role: 'iOS Engineer · Tokyo',
    avatar: 'YT',
  },
]

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('revealed')),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  function scrollTo(id: string) {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-[#080808] text-white min-h-screen overflow-x-hidden" style={{ fontFamily: 'var(--font-inter, sans-serif)' }}>

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 nav-glass ${scrolled ? 'scrolled' : ''}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#00FF94] flex items-center justify-center">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
            </div>
            <span className="font-bold text-base tracking-widest">SYNEX</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {['features', 'events', 'mentorship'].map(id => (
              <button key={id} onClick={() => scrollTo(id)} className="text-[#666] hover:text-white text-sm capitalize transition-colors">
                {id}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button onClick={() => navigate(LOGIN_URL)} className="text-[#666] hover:text-white text-sm px-4 py-2 transition-colors">
              Sign In
            </button>
            <button onClick={() => navigate(REGISTER_URL)} className="glow-btn bg-[#00FF94] text-[#0A0A0A] text-sm font-bold px-5 py-2.5 rounded-xl">
              Get Started
            </button>
          </div>

          <button className="md:hidden text-white p-1" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <Icons.X /> : <Icons.Menu />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-[#0a0a0a]/98 border-t border-white/5 px-6 py-6 space-y-5">
            {['features', 'events', 'mentorship'].map(id => (
              <button key={id} onClick={() => scrollTo(id)} className="block text-[#666] hover:text-white text-base capitalize">
                {id}
              </button>
            ))}
            <div className="pt-4 space-y-3 border-t border-white/5">
              <button onClick={() => navigate(LOGIN_URL)} className="w-full py-3 text-center border border-white/10 rounded-xl text-white text-sm">Sign In</button>
              <button onClick={() => navigate(REGISTER_URL)} className="w-full py-3 bg-[#00FF94] text-[#0A0A0A] font-bold rounded-xl text-sm glow-btn">Get Started</button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="orb w-[700px] h-[700px] top-[-250px] left-[-200px] bg-[#00FF94]" />
        <div className="orb w-[500px] h-[500px] bottom-[-150px] right-[-150px] bg-[#00cc75]" style={{ animationDelay: '3s' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080808]/20 to-[#080808]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none mb-6">
            <span className="gradient-text">Connect.</span><br />
            <span className="text-white">Learn.</span><br />
            <span className="gradient-text-green">Build.</span>
          </h1>

          <p className="text-[#666] text-lg md:text-xl max-w-lg mx-auto mb-10">
            The social network for developers, designers, and tech enthusiasts.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => navigate(REGISTER_URL)} className="glow-btn bg-[#00FF94] text-[#0A0A0A] font-bold text-base px-8 py-4 rounded-2xl flex items-center justify-center gap-2">
              Create Account <Icons.ArrowRight />
            </button>
            <button onClick={() => navigate(LOGIN_URL)} className="border border-white/10 text-[#888] hover:text-white text-base px-8 py-4 rounded-2xl hover:border-white/20 transition-all">
              Sign In
            </button>
          </div>

          {/* App mockup */}
          <div className="mt-20 relative mx-auto w-72 md:w-80">
            <div className="float-anim rounded-3xl border border-white/8 overflow-hidden shadow-2xl bg-[#0f0f0f]" style={{ boxShadow: '0 40px 100px rgba(0,0,0,0.8), 0 0 50px rgba(0,255,148,0.06)' }}>
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#00FF94] text-xs font-bold tracking-widest uppercase">Discover</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                    <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
                    <div className="w-2 h-2 rounded-full bg-[#28c840]" />
                  </div>
                </div>
                <div className="rounded-2xl bg-[#141414] border border-white/5 overflow-hidden">
                  <div className="h-20 bg-gradient-to-br from-[#00FF94]/15 to-transparent flex items-center justify-center">
                    <div className="w-14 h-14 rounded-2xl bg-[#00FF94]/15 border border-[#00FF94]/25 flex items-center justify-center text-[#00FF94] text-xl font-black">AK</div>
                  </div>
                  <div className="p-4">
                    <p className="text-white font-bold text-sm">Artur Kowalski</p>
                    <p className="text-[#00FF94] text-xs mb-3">Senior · Warsaw</p>
                    <div className="flex gap-1.5 mb-4">
                      {['Rust', 'Go', 'K8s'].map(t => <span key={t} className="tech-tag text-[9px]">{t}</span>)}
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 h-8 rounded-xl bg-white/4 border border-white/8 flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                      </div>
                      <div className="flex-1 h-8 rounded-xl bg-[#00FF94] flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <section className="py-8 overflow-hidden border-y border-white/5">
        <div className="ticker-wrap">
          <div className="ticker-inner">
            {[...TECH_TAGS, ...TECH_TAGS].map((tag, i) => <span key={i} className="tech-tag">{tag}</span>)}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14 reveal">
            <h2 className="text-4xl md:text-5xl font-black">
              Everything in <span className="gradient-text">one place</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 reveal reveal-delay-1">
            {FEATURES.map(f => (
              <div key={f.title} className="glass-card rounded-2xl p-6">
                <div className="text-2xl mb-3">{f.icon}</div>
                <p className="text-white font-semibold text-sm mb-1">{f.title}</p>
                <p className="text-[#555] text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="py-24 md:py-32 relative">
        <div className="orb w-[400px] h-[400px] top-0 right-[-100px] bg-[#00FF94]" style={{ opacity: 0.07, animationDelay: '2s' }} />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="mb-12 reveal">
            <h2 className="text-4xl md:text-5xl font-black">
              Hackathons. Workshops.<br /><span className="gradient-text">Meetups.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { emoji: '🚀', title: 'Global Hackathon', date: 'Aug 15', location: 'Virtual + Panama City', attendees: 847 },
              { emoji: '💻', title: 'Web Dev Summit LATAM', date: 'Sep 3', location: 'Bogotá, Colombia', attendees: 1240 },
              { emoji: '🤖', title: 'AI & ML Workshop', date: 'Sep 18', location: 'Virtual', attendees: 520 },
            ].map((e, i) => (
              <div key={e.title} className={`glass-card rounded-2xl p-6 reveal reveal-delay-${i + 1}`}>
                <div className="flex items-start justify-between mb-4">
                  <span className="text-2xl">{e.emoji}</span>
                  <span className="text-[#00FF94] text-xs font-bold">{e.date}</span>
                </div>
                <p className="text-white font-semibold mb-1">{e.title}</p>
                <p className="text-[#555] text-xs mb-4">{e.location} · {e.attendees.toLocaleString()} attending</p>
                <button onClick={() => navigate(REGISTER_URL)} className="text-xs font-semibold text-[#00FF94] hover:text-white transition-colors">
                  Join →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENTORSHIP */}
      <section id="mentorship" className="py-24 md:py-32 relative">
        <div className="orb w-[400px] h-[400px] bottom-0 left-[-100px] bg-[#00FF94]" style={{ opacity: 0.07, animationDelay: '1s' }} />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <h2 className="text-4xl md:text-5xl font-black mb-5">
                Learn from<br /><span className="gradient-text">the best</span>
              </h2>
              <p className="text-[#555] text-base mb-8 leading-relaxed">
                Connect with senior engineers and founders from Google, Stripe, GitHub, and more. Get real guidance, not generic advice.
              </p>
              <button onClick={() => navigate(REGISTER_URL)} className="glow-btn bg-[#00FF94] text-[#0A0A0A] font-bold px-7 py-3.5 rounded-2xl flex items-center gap-2 inline-flex">
                Find a mentor <Icons.ArrowRight />
              </button>
            </div>
            <div className="reveal reveal-delay-2 space-y-3">
              {[
                { init: 'JK', name: 'James Kim', role: 'Staff Engineer · Google', tag: 'System Design' },
                { init: 'RL', name: 'Rosa López', role: 'Engineering Lead · Stripe', tag: 'Career Growth' },
                { init: 'TW', name: 'Thomas Wu', role: 'CTO · YC Startup', tag: 'Startups' },
              ].map((m, i) => (
                <div key={m.name} className="glass-card rounded-2xl p-4 flex items-center gap-4" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="w-10 h-10 rounded-xl bg-[#00FF94]/10 border border-[#00FF94]/15 flex items-center justify-center text-[#00FF94] text-sm font-bold flex-shrink-0">{m.init}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-semibold">{m.name}</p>
                    <p className="text-[#555] text-xs">{m.role}</p>
                  </div>
                  <span className="text-[10px] text-[#00FF94] bg-[#00FF94]/8 px-2.5 py-1 rounded-full border border-[#00FF94]/15 flex-shrink-0">{m.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-12 reveal">
            What people <span className="gradient-text">say</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className={`glass-card rounded-2xl p-6 reveal reveal-delay-${i + 1}`}>
                <p className="text-[#777] text-sm leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#00FF94]/10 border border-[#00FF94]/15 flex items-center justify-center text-white text-xs font-bold">{t.avatar}</div>
                  <div>
                    <p className="text-white text-sm font-semibold">{t.name}</p>
                    <p className="text-[#555] text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="orb w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00FF94]" style={{ opacity: 0.12 }} />
        <div className="relative max-w-2xl mx-auto px-6 text-center reveal">
          <h2 className="text-5xl md:text-6xl font-black mb-5">
            Your tribe is<br /><span className="gradient-text">waiting</span>
          </h2>
          <p className="text-[#555] text-base mb-10">Join 12,000+ developers and designers already on Synex.</p>
          <button onClick={() => navigate(REGISTER_URL)} className="glow-btn bg-[#00FF94] text-[#0A0A0A] font-black text-base px-10 py-4 rounded-2xl inline-flex items-center gap-2">
            Create Free Account <Icons.ArrowRight />
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#00FF94] flex items-center justify-center">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
            </div>
            <span className="font-bold text-sm tracking-widest">SYNEX</span>
          </div>

          <div className="flex items-center gap-8">
            {['features', 'events', 'mentorship'].map(id => (
              <button key={id} onClick={() => scrollTo(id)} className="text-[#555] hover:text-white text-sm capitalize transition-colors">{id}</button>
            ))}
            <button onClick={() => navigate('https://app.synexapp.com/privacy')} className="text-[#555] hover:text-white text-sm transition-colors">Privacy</button>
            <button onClick={() => navigate('https://app.synexapp.com/terms')} className="text-[#555] hover:text-white text-sm transition-colors">Terms</button>
          </div>

          <p className="text-[#444] text-xs">© {new Date().getFullYear()} Synex · Panama</p>
        </div>
      </footer>

    </div>
  )
}
