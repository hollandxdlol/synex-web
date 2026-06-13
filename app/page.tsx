'use client'

import { useEffect, useState } from 'react'

const REGISTER_URL = 'https://app.synexapp.com/register'
const LOGIN_URL = 'https://app.synexapp.com/login'

function go(url: string) { window.location.href = url }

const FEATURES = [
  {
    title: 'Smart Matching',
    desc: 'Get matched with developers and designers who share your stack and interests.',
  },
  {
    title: 'Mentorship',
    desc: 'Connect with senior engineers from top companies. Real guidance, real growth.',
  },
  {
    title: 'Events',
    desc: 'Join hackathons, workshops, and meetups happening worldwide every week.',
  },
  {
    title: 'Knowledge Feed',
    desc: 'Share what you build and learn. Build your reputation in the community.',
  },
]

export default function Page() {
  const [scrolled, setScrolled] = useState(false)
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && e.target.classList.add('revealed')),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <div style={{ fontFamily: 'var(--font-inter, system-ui, sans-serif)', background: '#080808', color: '#fff', minHeight: '100vh', overflowX: 'hidden' }}>

      {/* ── NAV ─────────────────────────────────────────────────── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 nav-glass ${scrolled ? 'scrolled' : ''}`}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'none', border: 'none', cursor: 'pointer' }}>
            <div style={{ width: 30, height: 30, borderRadius: 8, background: '#00FF94', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
            </div>
            <span style={{ fontWeight: 700, fontSize: 15, letterSpacing: '0.12em', color: '#fff' }}>SYNEX</span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: 32 }}>
            <button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} style={navLink}>Features</button>
            <button onClick={() => document.getElementById('mentorship')?.scrollIntoView({ behavior: 'smooth' })} style={navLink}>Mentorship</button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: 12 }}>
            <button onClick={() => go(LOGIN_URL)} style={ghostBtn}>Sign In</button>
            <button onClick={() => go(REGISTER_URL)} className="glow-btn" style={primaryBtn}>Create Account</button>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden" onClick={() => setMenu(!menu)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', padding: 4 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {menu
                ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                : <><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></>
              }
            </svg>
          </button>
        </div>

        {menu && (
          <div style={{ background: 'rgba(8,8,8,0.97)', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '20px 24px 24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 20 }}>
              <button onClick={() => { document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }); setMenu(false) }} style={{ ...navLink, textAlign: 'left' }}>Features</button>
              <button onClick={() => { document.getElementById('mentorship')?.scrollIntoView({ behavior: 'smooth' }); setMenu(false) }} style={{ ...navLink, textAlign: 'left' }}>Mentorship</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 20 }}>
              <button onClick={() => go(LOGIN_URL)} style={{ ...ghostBtn, width: '100%', justifyContent: 'center' }}>Sign In</button>
              <button onClick={() => go(REGISTER_URL)} className="glow-btn" style={{ ...primaryBtn, width: '100%', justifyContent: 'center' }}>Create Account</button>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 60, overflow: 'hidden' }}>
        {/* Orbs */}
        <div className="orb" style={{ width: 700, height: 700, top: -300, left: -200, background: '#00FF94', opacity: 0.12 }} />
        <div className="orb" style={{ width: 500, height: 500, bottom: -200, right: -150, background: '#00cc75', opacity: 0.09, animationDelay: '4s' }} />
        {/* Grid */}
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.25 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, #080808)' }} />

        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 780, margin: '0 auto', padding: '0 24px' }}>
          <h1 style={{ fontSize: 'clamp(52px, 10vw, 96px)', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.03em', marginBottom: 24 }}>
            <span className="gradient-text">Connect.</span><br />
            <span style={{ color: '#fff' }}>Learn.</span><br />
            <span className="gradient-text-green">Build.</span>
          </h1>

          <p style={{ color: '#555', fontSize: 18, maxWidth: 420, margin: '0 auto 40px', lineHeight: 1.6 }}>
            The social network built for the tech community.
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => go(REGISTER_URL)} className="glow-btn" style={primaryBtnLg}>
              Get Started — it's free
            </button>
            <button onClick={() => go(LOGIN_URL)} style={outlineBtn}>
              Sign In
            </button>
          </div>
        </div>
      </section>

      {/* ── FEATURES ────────────────────────────────────────────── */}
      <section id="features" style={{ padding: '120px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: 64 }}>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 12 }}>
              Everything you need<br />to grow in tech.
            </h2>
            <p style={{ color: '#555', fontSize: 16, maxWidth: 380 }}>
              One place. Real people. Meaningful connections.
            </p>
          </div>

          <div className="reveal reveal-delay-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 1, background: 'rgba(255,255,255,0.05)', borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
            {FEATURES.map((f, i) => (
              <div key={f.title} className="feature-cell" style={{ padding: '36px 32px', background: '#080808', transition: 'background 0.25s ease' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#0f0f0f')}
                onMouseLeave={e => (e.currentTarget.style.background = '#080808')}
              >
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#00FF94', marginBottom: 20, boxShadow: '0 0 8px #00FF94' }} />
                <p style={{ color: '#fff', fontWeight: 700, fontSize: 15, marginBottom: 10 }}>{f.title}</p>
                <p style={{ color: '#555', fontSize: 13, lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MENTORSHIP ──────────────────────────────────────────── */}
      <section id="mentorship" style={{ padding: '80px 24px 120px', position: 'relative', overflow: 'hidden' }}>
        <div className="orb" style={{ width: 500, height: 500, bottom: -200, left: -150, background: '#00FF94', opacity: 0.07, animationDelay: '2s' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 80, alignItems: 'center', position: 'relative', zIndex: 1 }}>
          {/* Text */}
          <div className="reveal">
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 20, lineHeight: 1.1 }}>
              Learn from<br /><span className="gradient-text">the best.</span>
            </h2>
            <p style={{ color: '#555', fontSize: 16, lineHeight: 1.7, marginBottom: 36, maxWidth: 360 }}>
              Connect with engineers from Google, Stripe, and GitHub. Real guidance that moves your career forward.
            </p>
            <button onClick={() => go(REGISTER_URL)} className="glow-btn" style={{ ...primaryBtn, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              Find a mentor
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>

          {/* Mentor cards */}
          <div className="reveal reveal-delay-2" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { init: 'JK', name: 'James Kim', role: 'Staff Engineer · Google' },
              { init: 'RL', name: 'Rosa López', role: 'Eng Lead · Stripe' },
              { init: 'TW', name: 'Thomas Wu', role: 'CTO · YC W24' },
            ].map(m => (
              <div key={m.name} className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 20px', borderRadius: 14 }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(0,255,148,0.08)', border: '1px solid rgba(0,255,148,0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00FF94', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>
                  {m.init}
                </div>
                <div>
                  <p style={{ color: '#fff', fontSize: 13, fontWeight: 600 }}>{m.name}</p>
                  <p style={{ color: '#555', fontSize: 12, marginTop: 2 }}>{m.role}</p>
                </div>
              </div>
            ))}
            <p style={{ color: '#333', fontSize: 12, paddingLeft: 4, marginTop: 4 }}>200+ mentors available</p>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section style={{ padding: '120px 24px', position: 'relative', overflow: 'hidden' }}>
        <div className="orb" style={{ width: 600, height: 600, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: '#00FF94', opacity: 0.1 }} />
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.2 }} />
        <div className="reveal" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: 20 }}>
            Your tribe is<br /><span className="gradient-text">waiting.</span>
          </h2>
          <p style={{ color: '#555', fontSize: 16, marginBottom: 36 }}>
            Join 12,000+ developers and designers on Synex.
          </p>
          <button onClick={() => go(REGISTER_URL)} className="glow-btn" style={primaryBtnLg}>
            Create Free Account
          </button>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '28px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 26, height: 26, borderRadius: 6, background: '#00FF94', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
            </div>
            <span style={{ fontWeight: 700, fontSize: 13, letterSpacing: '0.1em', color: '#fff' }}>SYNEX</span>
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            {[
              { label: 'Privacy', url: 'https://app.synexapp.com/privacy' },
              { label: 'Terms', url: 'https://app.synexapp.com/terms' },
            ].map(l => (
              <button key={l.label} onClick={() => go(l.url)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#444', fontSize: 13, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#444')}
              >{l.label}</button>
            ))}
          </div>
          <p style={{ color: '#333', fontSize: 12 }}>© {new Date().getFullYear()} Synex</p>
        </div>
      </footer>

    </div>
  )
}

// ── Shared styles ──────────────────────────────────────────────────────────
const navLink: React.CSSProperties = {
  background: 'none', border: 'none', cursor: 'pointer',
  color: '#555', fontSize: 14, fontWeight: 500,
  transition: 'color 0.2s', padding: 0,
}
const primaryBtn: React.CSSProperties = {
  background: '#00FF94', color: '#0A0A0A',
  border: 'none', borderRadius: 12, cursor: 'pointer',
  fontWeight: 700, fontSize: 14, padding: '11px 22px',
  display: 'flex', alignItems: 'center',
}
const primaryBtnLg: React.CSSProperties = {
  ...primaryBtn, fontSize: 15, padding: '14px 28px', borderRadius: 14,
}
const ghostBtn: React.CSSProperties = {
  background: 'none', border: 'none', cursor: 'pointer',
  color: '#555', fontSize: 14, fontWeight: 500,
  padding: '11px 16px', borderRadius: 10, transition: 'color 0.2s',
}
const outlineBtn: React.CSSProperties = {
  background: 'none', border: '1px solid rgba(255,255,255,0.1)',
  color: '#888', borderRadius: 14, cursor: 'pointer',
  fontWeight: 600, fontSize: 15, padding: '14px 28px',
  transition: 'all 0.2s',
}
