'use client'

import { useEffect, useRef, useState } from 'react'

const REGISTER_URL = 'https://app.synexapp.com/register'
const LOGIN_URL = 'https://app.synexapp.com/login'

function navigate(url: string) {
  window.location.href = url
}

// ── SVG Icons ──────────────────────────────────────────────────────────────
const Icons = {
  Users: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00FF94" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  Zap: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00FF94" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  Star: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00FF94" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  Calendar: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00FF94" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
    </svg>
  ),
  MessageCircle: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00FF94" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  ),
  Code: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00FF94" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  Globe: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00FF94" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  Shield: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00FF94" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  ArrowRight: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  ChevronDown: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  ),
  Menu: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  ),
  X: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  ),
  Check: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00FF94" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  MapPin: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  ),
}

// ── Tech tags for ticker ────────────────────────────────────────────────────
const TECH_TAGS = ['React', 'Next.js', 'TypeScript', 'Python', 'Node.js', 'AWS', 'Docker', 'Kubernetes', 'Rust', 'Go', 'Swift', 'Kotlin', 'Flutter', 'AI/ML', 'Web3', 'GraphQL', 'PostgreSQL', 'MongoDB', 'TailwindCSS', 'Figma', 'DevOps', 'Firebase', 'Vue.js', 'Angular', 'Java', 'C++', 'Cybersec', 'iOS', 'Android']

// ── Features data ───────────────────────────────────────────────────────────
const FEATURES = [
  {
    icon: <Icons.Users />,
    title: 'Smart Networking',
    desc: 'Discover developers, designers, and tech enthusiasts matched to your stack, interests, and experience level.',
  },
  {
    icon: <Icons.MessageCircle />,
    title: 'Real-Time Chat',
    desc: 'Connect directly with your matches. No spam, no bots — only genuine conversations with real tech people.',
  },
  {
    icon: <Icons.Star />,
    title: 'Mentorship',
    desc: 'Learn from senior engineers and industry leaders. Accelerate your career with guided mentorship.',
  },
  {
    icon: <Icons.Calendar />,
    title: 'Tech Events',
    desc: 'Join hackathons, meetups, workshops, and online conferences. Network live or virtually worldwide.',
  },
  {
    icon: <Icons.Code />,
    title: 'Knowledge Feed',
    desc: 'Share code snippets, articles, and insights. Build your reputation in the community.',
  },
  {
    icon: <Icons.Globe />,
    title: 'Global Community',
    desc: 'Members in 50+ countries. Find your local tech scene or connect globally across time zones.',
  },
]

// ── Testimonials ────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    name: 'Alejandro Rios',
    role: 'Senior React Developer',
    location: 'Mexico City',
    text: 'Synex helped me land my first senior role. The mentorship network here is unlike anything else — real engineers sharing real knowledge.',
    avatar: 'AR',
    level: 'senior',
  },
  {
    name: 'Sarah Chen',
    role: 'ML Engineer at Stripe',
    location: 'San Francisco',
    text: "I found my co-founder on Synex. We matched based on complementary tech stacks and shipped our startup in 3 months. Incredible platform.",
    avatar: 'SC',
    level: 'senior',
  },
  {
    name: 'Diego Morales',
    role: 'Full-Stack Developer',
    location: 'Bogotá',
    text: 'As a self-taught dev, Synex gave me access to a community I never had. Now I mentor others and attend events every month.',
    avatar: 'DM',
    level: 'semi-senior',
  },
  {
    name: 'Yuki Tanaka',
    role: 'iOS Engineer',
    location: 'Tokyo',
    text: "The events section alone is worth it. I've attended 3 hackathons through Synex and won two of them with teams I met here.",
    avatar: 'YT',
    level: 'semi-senior',
  },
]

// ── Events data ─────────────────────────────────────────────────────────────
const EVENTS = [
  {
    emoji: '🚀',
    title: 'Global Hackathon 2025',
    category: 'Hackathon',
    date: 'Aug 15',
    location: 'Virtual + Panama City',
    attendees: 847,
    color: 'border-[#00FF94]/20 hover:border-[#00FF94]/50',
    badge: 'bg-[#00FF94]/10 text-[#00FF94]',
  },
  {
    emoji: '💻',
    title: 'Web Dev Summit LATAM',
    category: 'Conference',
    date: 'Sep 3',
    location: 'Bogotá, Colombia',
    attendees: 1240,
    color: 'border-blue-500/20 hover:border-blue-500/50',
    badge: 'bg-blue-500/10 text-blue-400',
  },
  {
    emoji: '🤖',
    title: 'AI & ML Workshop',
    category: 'Workshop',
    date: 'Sep 18',
    location: 'Virtual — All timezones',
    attendees: 520,
    color: 'border-purple-500/20 hover:border-purple-500/50',
    badge: 'bg-purple-500/10 text-purple-400',
  },
]

// ── App preview mock cards ──────────────────────────────────────────────────
function AppPreviewCard({ delay = 0, className = '' }: { delay?: number; className?: string }) {
  return (
    <div
      className={`absolute rounded-2xl border border-white/10 backdrop-blur-xl overflow-hidden shadow-2xl ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="bg-[#0f0f0f]/95 p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00FF94]/30 to-[#00FF94]/10 flex items-center justify-center text-sm font-bold text-[#00FF94]">SC</div>
          <div>
            <p className="text-white text-xs font-semibold">Sarah Chen</p>
            <p className="text-[#00FF94] text-[10px]">Senior · ML Engineer</p>
          </div>
          <div className="ml-auto w-8 h-8 rounded-full bg-[#00FF94] flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {['React', 'Python', 'AWS'].map(t => (
            <span key={t} className="text-[9px] px-2 py-0.5 rounded-full bg-[#00FF94]/10 border border-[#00FF94]/20 text-[#00FF94]">{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Stat card ───────────────────────────────────────────────────────────────
function StatCard({ value, label, suffix = '' }: { value: string; label: string; suffix?: string }) {
  return (
    <div className="text-center">
      <p className="text-3xl md:text-4xl font-bold text-white mb-1">
        <span className="gradient-text-green">{value}</span>
        <span className="text-[#00FF94] text-2xl">{suffix}</span>
      </p>
      <p className="text-[#888] text-sm">{label}</p>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════════════════
export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const revealRefs = useRef<HTMLElement[]>([])

  // Navbar scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll reveal via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  function scrollTo(id: string) {
    setMobileMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-[#080808] text-white min-h-screen" style={{ fontFamily: 'var(--font-inter, sans-serif)' }}>

      {/* ── NAVBAR ─────────────────────────────────────────────────────────── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 nav-glass ${scrolled ? 'scrolled' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-[#00FF94] flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
            </div>
            <span className="text-white font-bold text-lg tracking-wider">SYNEX</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: 'Features', id: 'features' },
              { label: 'Community', id: 'community' },
              { label: 'Events', id: 'events' },
              { label: 'Mentorship', id: 'mentorship' },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-[#888] hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => navigate(LOGIN_URL)}
              className="text-[#888] hover:text-white text-sm font-medium px-4 py-2 rounded-xl transition-all duration-200 hover:bg-white/5"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate(REGISTER_URL)}
              className="glow-btn bg-[#00FF94] text-[#0A0A0A] text-sm font-bold px-5 py-2.5 rounded-xl"
            >
              Create Account
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <Icons.X /> : <Icons.Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0a0a]/98 border-t border-white/5 px-6 py-6 space-y-4">
            {[
              { label: 'Features', id: 'features' },
              { label: 'Community', id: 'community' },
              { label: 'Events', id: 'events' },
              { label: 'Mentorship', id: 'mentorship' },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left text-[#888] hover:text-white text-base font-medium py-2 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 space-y-3 border-t border-white/5">
              <button onClick={() => navigate(LOGIN_URL)} className="w-full py-3 text-center text-white font-medium border border-white/10 rounded-xl hover:bg-white/5 transition-all">
                Sign In
              </button>
              <button onClick={() => navigate(REGISTER_URL)} className="w-full py-3 text-center bg-[#00FF94] text-[#0A0A0A] font-bold rounded-xl glow-btn">
                Create Account
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Animated background */}
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="orb w-[600px] h-[600px] top-[-200px] left-[-200px] bg-[#00FF94]" style={{ animationDelay: '0s' }} />
        <div className="orb w-[500px] h-[500px] bottom-[-100px] right-[-150px] bg-[#00cc75]" style={{ animationDelay: '3s' }} />
        <div className="orb w-[300px] h-[300px] top-[40%] left-[50%] bg-[#00FF94]" style={{ animationDelay: '1.5s', animationDuration: '5s' }} />

        {/* Radial fade overlay */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#080808]/40 to-[#080808]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00FF94]/25 bg-[#00FF94]/8 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF94] opacity-75" style={{ animationDuration: '2s' }} />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF94]" />
            </span>
            <span className="text-[#00FF94] text-xs font-semibold tracking-wider uppercase">Now in Beta · Join Free</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6">
            <span className="gradient-text">Connect.</span>
            <br />
            <span className="text-white">Learn.</span>
            <br />
            <span className="gradient-text-green">Build.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[#888] max-w-2xl mx-auto mb-10 leading-relaxed">
            The social platform for <span className="text-white font-medium">developers, gamers, designers</span>, and tech enthusiasts.
            Find your tribe, join events, and build real connections in the tech world.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => navigate(REGISTER_URL)}
              className="glow-btn bg-[#00FF94] text-[#0A0A0A] font-bold text-base px-8 py-4 rounded-2xl flex items-center justify-center gap-2"
            >
              Create Free Account
              <Icons.ArrowRight />
            </button>
            <button
              onClick={() => navigate(LOGIN_URL)}
              className="border border-white/15 text-white font-semibold text-base px-8 py-4 rounded-2xl hover:bg-white/5 hover:border-white/30 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Sign In
            </button>
          </div>

          {/* Floating app mockup */}
          <div className="relative w-full max-w-3xl mx-auto h-72 md:h-96">
            {/* Main card */}
            <div className="float-anim absolute left-1/2 top-0 -translate-x-1/2 w-72 md:w-80 rounded-3xl border border-white/10 overflow-hidden shadow-2xl" style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.8), 0 0 40px rgba(0,255,148,0.08)' }}>
              <div className="bg-[#0f0f0f]/98 p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#00FF94] text-xs font-bold uppercase tracking-widest">Discover</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                    <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
                    <div className="w-2 h-2 rounded-full bg-[#28c840]" />
                  </div>
                </div>
                {/* Profile card */}
                <div className="rounded-2xl overflow-hidden border border-white/8 bg-[#141414]">
                  <div className="h-24 bg-gradient-to-br from-[#00FF94]/20 via-[#00FF94]/5 to-transparent flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00FF94]/40 to-[#00FF94]/10 border border-[#00FF94]/30 flex items-center justify-center text-[#00FF94] text-2xl font-black">AK</div>
                  </div>
                  <div className="p-4">
                    <p className="text-white font-bold text-sm">Artur Kowalski</p>
                    <p className="text-[#00FF94] text-xs mb-3">Senior · Warsaw, Poland</p>
                    <div className="flex gap-1.5 flex-wrap mb-4">
                      {['Rust', 'Go', 'K8s'].map(t => (
                        <span key={t} className="tech-tag text-[9px]">{t}</span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 h-8 rounded-xl bg-[#00FF94]/10 border border-[#00FF94]/20 flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00FF94" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                      </div>
                      <div className="flex-1 h-8 rounded-xl bg-[#00FF94] flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side card 1 — chat */}
            <div className="float-anim-2 absolute left-0 top-12 w-48 rounded-2xl border border-white/8 bg-[#0f0f0f]/95 p-3.5 shadow-xl hidden sm:block">
              <p className="text-[#888] text-[9px] uppercase tracking-widest mb-2">Messages</p>
              {[
                { name: 'Sarah', msg: 'Hey! Saw your React post...', color: 'from-blue-500/30' },
                { name: 'Carlos', msg: 'Want to join my team?', color: 'from-purple-500/30' },
              ].map(item => (
                <div key={item.name} className="flex items-center gap-2 py-1.5">
                  <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${item.color} to-transparent border border-white/10 flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0`}>{item.name[0]}</div>
                  <div className="min-w-0">
                    <p className="text-white text-[10px] font-semibold">{item.name}</p>
                    <p className="text-[#555] text-[9px] truncate">{item.msg}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Side card 2 — event */}
            <div className="float-anim-3 absolute right-0 top-8 w-44 rounded-2xl border border-[#00FF94]/15 bg-[#0f0f0f]/95 p-3.5 shadow-xl hidden sm:block">
              <div className="flex items-center gap-1.5 mb-2">
                <span className="text-xs">🚀</span>
                <p className="text-[#00FF94] text-[9px] font-bold uppercase tracking-wider">Hackathon</p>
              </div>
              <p className="text-white text-xs font-semibold mb-1">Global Build Night</p>
              <p className="text-[#555] text-[9px]">847 attending · Aug 15</p>
              <div className="mt-2 h-6 rounded-lg bg-[#00FF94]/10 border border-[#00FF94]/20 flex items-center justify-center">
                <span className="text-[#00FF94] text-[9px] font-bold">Join Event</span>
              </div>
            </div>

            {/* Notification bubble */}
            <div className="float-anim absolute right-4 bottom-4 sm:right-12 sm:bottom-0 bg-[#0f0f0f] border border-[#00FF94]/25 rounded-2xl px-4 py-2.5 flex items-center gap-2.5 shadow-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF94] opacity-75" style={{ animationDuration: '2s' }} />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00FF94]" />
              </span>
              <span className="text-[#888] text-xs">+<span className="text-white font-bold">23</span> new connections today</span>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <button onClick={() => scrollTo('features')} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#444] hover:text-[#666] transition-colors">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <Icons.ChevronDown />
        </button>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────────────────── */}
      <section className="py-16 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-30" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 reveal">
            <StatCard value="12,000" label="Members worldwide" suffix="+" />
            <StatCard value="500" label="Events hosted" suffix="+" />
            <StatCard value="50" label="Countries" suffix="+" />
            <StatCard value="200" label="Active mentors" suffix="+" />
          </div>
        </div>
      </section>

      {/* ── TECH TICKER ─────────────────────────────────────────────────────── */}
      <section className="py-8 overflow-hidden border-b border-white/5">
        <div className="ticker-wrap">
          <div className="ticker-inner">
            {[...TECH_TAGS, ...TECH_TAGS].map((tag, i) => (
              <span key={i} className="tech-tag">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────────────────────────────────── */}
      <section id="features" className="py-24 md:py-32 relative">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="orb w-[400px] h-[400px] top-[-100px] right-[-100px] bg-[#00FF94]" style={{ opacity: 0.08, animationDelay: '2s' }} />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <p className="text-[#00FF94] text-sm font-semibold uppercase tracking-widest mb-4">Everything you need</p>
            <h2 className="text-4xl md:text-5xl font-black mb-5">
              Built for the <span className="gradient-text">tech generation</span>
            </h2>
            <p className="text-[#666] text-lg max-w-xl mx-auto">
              One platform. Every tool you need to grow your network and career in tech.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f, i) => (
              <div key={f.title} className={`glass-card rounded-3xl p-7 reveal reveal-delay-${i + 1}`}>
                <div className="feature-icon mb-5">{f.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMUNITY ─────────────────────────────────────────────────────── */}
      <section id="community" className="py-24 md:py-32 relative overflow-hidden">
        <div className="orb w-[500px] h-[500px] bottom-[-200px] left-[-150px] bg-[#00FF94]" style={{ opacity: 0.1, animationDelay: '1s' }} />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <div className="reveal">
              <p className="text-[#00FF94] text-sm font-semibold uppercase tracking-widest mb-4">Your tribe is here</p>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Find people who <span className="gradient-text">get it</span>
              </h2>
              <p className="text-[#666] text-lg mb-8 leading-relaxed">
                Synex matches you with developers, gamers, designers, and tech enthusiasts who share your passion. Not just followers — real connections that matter.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  'Match by tech stack, interests, and experience level',
                  'No algorithm noise — real people, real conversations',
                  'Build connections globally or locally in your city',
                  'Private by design — you control who sees your profile',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#00FF94]/15 border border-[#00FF94]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icons.Check />
                    </div>
                    <p className="text-[#888] text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <button onClick={() => navigate(REGISTER_URL)} className="glow-btn bg-[#00FF94] text-[#0A0A0A] font-bold px-7 py-3.5 rounded-2xl flex items-center gap-2 inline-flex">
                Join the community <Icons.ArrowRight />
              </button>
            </div>

            {/* Right: profile cards visual */}
            <div className="reveal reveal-delay-2 relative h-96 md:h-[480px]">
              {/* Background glow */}
              <div className="absolute inset-0 bg-radial from-[#00FF94]/5 via-transparent to-transparent rounded-3xl" />

              {/* Profile cards stack */}
              {[
                { name: 'Marcus Lee', role: 'DevOps Engineer', level: 'Senior', stack: ['K8s', 'AWS', 'Terraform'], city: 'Singapore', color: 'from-blue-500/20' },
                { name: 'Valentina Cruz', role: 'UX Engineer', level: 'Semi-Senior', stack: ['Figma', 'React', 'CSS'], city: 'Buenos Aires', color: 'from-pink-500/20' },
                { name: 'Kevin O\'Brien', role: 'Security Engineer', level: 'Senior', stack: ['Rust', 'Cybersec', 'Go'], city: 'Dublin', color: 'from-purple-500/20' },
              ].map((p, i) => (
                <div
                  key={p.name}
                  className="absolute glass-card rounded-3xl p-5 w-64 shadow-2xl"
                  style={{
                    top: `${i * 80}px`,
                    left: `${i * 30}px`,
                    zIndex: 3 - i,
                    opacity: 1 - i * 0.15,
                    transform: `rotate(${i * 2 - 2}deg)`,
                    animation: `float ${7 + i * 2}s ease-in-out ${i * 1.5}s infinite`,
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.color} to-transparent border border-white/10 flex items-center justify-center text-white font-black text-base`}>
                      {p.name.split(' ').map(w => w[0]).join('')}
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">{p.name}</p>
                      <p className="text-[#00FF94] text-xs">{p.level} · {p.city}</p>
                    </div>
                  </div>
                  <p className="text-[#555] text-xs mb-3">{p.role}</p>
                  <div className="flex gap-1.5 flex-wrap">
                    {p.stack.map(t => <span key={t} className="tech-tag">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MENTORSHIP ────────────────────────────────────────────────────── */}
      <section id="mentorship" className="py-24 md:py-32 relative">
        <div className="absolute inset-0 dot-bg opacity-20" />
        <div className="orb w-[400px] h-[400px] top-0 right-0 bg-[#00FF94]" style={{ opacity: 0.08, animationDelay: '4s' }} />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <p className="text-[#00FF94] text-sm font-semibold uppercase tracking-widest mb-4">Grow faster</p>
            <h2 className="text-4xl md:text-5xl font-black mb-5">
              Learn from <span className="gradient-text">industry leaders</span>
            </h2>
            <p className="text-[#666] text-lg max-w-xl mx-auto">
              Connect with senior engineers, tech leads, and founders who have walked the path you're on.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                emoji: '🎯',
                title: '1-on-1 Sessions',
                desc: 'Book direct mentorship sessions with experienced engineers in your specific tech stack.',
              },
              {
                emoji: '📚',
                title: 'Career Guidance',
                desc: 'Navigate your career path with help from seniors who have done it at companies like Google, Stripe, and more.',
              },
              {
                emoji: '🤝',
                title: 'Pay It Forward',
                desc: 'Once you grow, become a mentor yourself. Help the next generation of developers find their path.',
              },
            ].map((item, i) => (
              <div key={item.title} className={`glass-card rounded-3xl p-8 text-center reveal reveal-delay-${i + 1}`}>
                <div className="text-4xl mb-5">{item.emoji}</div>
                <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Mentor showcase strip */}
          <div className="relative reveal reveal-delay-4">
            <div className="glass-card rounded-3xl p-8 text-center">
              <p className="text-[#888] text-sm mb-6">Mentors from companies like</p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                {['Google', 'Stripe', 'GitHub', 'Netflix', 'Airbnb', 'Meta', 'Apple', 'OpenAI'].map(c => (
                  <span key={c} className="text-[#444] font-bold text-base hover:text-white transition-colors duration-200 cursor-default">{c}</span>
                ))}
              </div>
              <div className="mt-8 flex justify-center gap-4 flex-wrap">
                <div className="flex items-center gap-2 text-[#888] text-sm">
                  <div className="flex -space-x-2">
                    {['AM', 'JK', 'RL', 'TW'].map(init => (
                      <div key={init} className="w-8 h-8 rounded-full bg-[#1a1a1a] border-2 border-[#080808] flex items-center justify-center text-white text-[9px] font-bold">{init}</div>
                    ))}
                  </div>
                  <span><span className="text-white font-semibold">200+</span> active mentors available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EVENTS ────────────────────────────────────────────────────────── */}
      <section id="events" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="orb w-[450px] h-[450px] bottom-[-150px] right-[-100px] bg-[#00FF94]" style={{ opacity: 0.09, animationDelay: '2s' }} />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal">
            <div>
              <p className="text-[#00FF94] text-sm font-semibold uppercase tracking-widest mb-4">Never stop learning</p>
              <h2 className="text-4xl md:text-5xl font-black">
                Hackathons. Meetups. <span className="gradient-text">Workshops.</span>
              </h2>
            </div>
            <button onClick={() => navigate(REGISTER_URL)} className="flex items-center gap-2 text-[#00FF94] text-sm font-semibold hover:gap-3 transition-all whitespace-nowrap">
              Browse all events <Icons.ArrowRight />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {EVENTS.map((event, i) => (
              <div key={event.title} className={`glass-card rounded-3xl overflow-hidden border reveal reveal-delay-${i + 1} ${event.color} transition-all duration-300`}>
                {/* Header */}
                <div className="p-6 border-b border-white/5">
                  <div className="flex items-start justify-between mb-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${event.badge}`}>{event.category}</span>
                    <div className="text-right">
                      <p className="text-[#00FF94] text-xs font-bold uppercase">
                        {event.date.split(' ')[0]}
                      </p>
                      <p className="text-white text-2xl font-black leading-none">
                        {event.date.split(' ')[1]}
                      </p>
                    </div>
                  </div>
                  <div className="text-3xl mb-3">{event.emoji}</div>
                  <h3 className="text-white font-bold text-xl mb-2">{event.title}</h3>
                </div>
                {/* Footer */}
                <div className="p-6 flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-[#666] text-xs">
                      <Icons.MapPin />
                      {event.location}
                    </div>
                    <p className="text-[#888] text-xs"><span className="text-white font-semibold">{event.attendees.toLocaleString()}</span> attending</p>
                  </div>
                  <button onClick={() => navigate(REGISTER_URL)} className="text-xs font-bold px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all">
                    Join
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 dot-bg opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 reveal">
            <p className="text-[#00FF94] text-sm font-semibold uppercase tracking-widest mb-4">Social proof</p>
            <h2 className="text-4xl md:text-5xl font-black">
              What our members <span className="gradient-text">say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className={`glass-card rounded-3xl p-6 flex flex-col reveal reveal-delay-${i + 1}`}>
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#00FF94" stroke="none">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>
                <p className="text-[#888] text-sm leading-relaxed flex-1 mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00FF94]/25 to-transparent border border-[#00FF94]/20 flex items-center justify-center text-white text-xs font-bold">
                    {t.avatar}
                  </div>
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

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="orb w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00FF94]" style={{ opacity: 0.15 }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00FF94]/25 bg-[#00FF94]/8 mb-8">
            <span className="text-[#00FF94] text-xs font-semibold uppercase tracking-wider">Free to join — always</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            Your tech tribe<br />is <span className="gradient-text">waiting</span>
          </h2>
          <p className="text-[#666] text-xl mb-10 max-w-xl mx-auto">
            Join 12,000+ developers, designers, and tech enthusiasts already building connections on Synex.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate(REGISTER_URL)}
              className="glow-btn bg-[#00FF94] text-[#0A0A0A] font-black text-lg px-10 py-5 rounded-2xl flex items-center justify-center gap-2"
            >
              Create Free Account
              <Icons.ArrowRight />
            </button>
            <button
              onClick={() => navigate(LOGIN_URL)}
              className="border border-white/15 text-white font-semibold text-base px-8 py-5 rounded-2xl hover:bg-white/5 hover:border-white/30 transition-all duration-300"
            >
              Already have an account?
            </button>
          </div>
          <p className="text-[#444] text-xs mt-6">No credit card required · Free forever plan available</p>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer className="border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#00FF94] flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                  </svg>
                </div>
                <span className="text-white font-bold text-lg tracking-wider">SYNEX</span>
              </div>
              <p className="text-[#555] text-sm leading-relaxed">Where tech minds connect and grow together.</p>
            </div>

            {/* Links */}
            {[
              {
                title: 'Platform',
                links: [
                  { label: 'Features', action: () => scrollTo('features') },
                  { label: 'Community', action: () => scrollTo('community') },
                  { label: 'Events', action: () => scrollTo('events') },
                  { label: 'Mentorship', action: () => scrollTo('mentorship') },
                ],
              },
              {
                title: 'Account',
                links: [
                  { label: 'Create Account', action: () => navigate(REGISTER_URL) },
                  { label: 'Sign In', action: () => navigate(LOGIN_URL) },
                  { label: 'Pricing', action: () => navigate(REGISTER_URL) },
                ],
              },
              {
                title: 'Legal',
                links: [
                  { label: 'Privacy Policy', action: () => navigate('https://app.synexapp.com/privacy') },
                  { label: 'Terms of Service', action: () => navigate('https://app.synexapp.com/terms') },
                  { label: 'Cookie Policy', action: () => navigate('https://app.synexapp.com/privacy') },
                ],
              },
              {
                title: 'Contact',
                links: [
                  { label: 'support@synexapp.com', action: () => { window.location.href = 'mailto:support@synexapp.com' } },
                  { label: 'privacy@synexapp.com', action: () => { window.location.href = 'mailto:privacy@synexapp.com' } },
                  { label: 'legal@synexapp.com', action: () => { window.location.href = 'mailto:legal@synexapp.com' } },
                ],
              },
            ].map(col => (
              <div key={col.title}>
                <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map(link => (
                    <li key={link.label}>
                      <button
                        onClick={link.action}
                        className="text-[#555] hover:text-white text-sm transition-colors duration-200 text-left"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#444] text-sm">© {new Date().getFullYear()} Synex. All rights reserved. Panama City, Panama.</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00FF94] animate-pulse" />
              <span className="text-[#444] text-xs">All systems operational</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
