import { useEffect, useRef, useState } from 'react'
import { profile, projects, experience } from './data.js'

/* Reveals .reveal elements when they enter the viewport.
   Uses inline styles (NOT a class): React re-renders rewrite className,
   which would wipe an imperatively-added class and re-hide content. */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          const el = e.target
          el.style.opacity = '1'
          el.style.transform = 'none'
          io.unobserve(el)
          // clear any stagger delay so hover transitions feel instant afterwards
          setTimeout(() => { el.style.transitionDelay = '0ms' }, 1200)
        }),
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/* Scroll progress bar + hero parallax drift */
function useScrollFx(progressRef, heroTitleRef) {
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const doc = document.documentElement
        const max = doc.scrollHeight - window.innerHeight
        if (progressRef.current)
          progressRef.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`
        if (heroTitleRef.current) {
          const y = window.scrollY
          heroTitleRef.current.style.transform = `translateY(${y * 0.18}px)`
          heroTitleRef.current.style.opacity = Math.max(0, 1 - y / (window.innerHeight * 0.9))
        }
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [progressRef, heroTitleRef])
}

/* Nav label with roll-over hover effect */
function Roll({ children }) {
  return (
    <span className="roll">
      <span data-txt={children}>{children}</span>
    </span>
  )
}

function Clock() {
  const [now, setNow] = useState(new Date())
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])
  return (
    <span>
      {now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}{' '}
      · {profile.location}
    </span>
  )
}

function ProjectRow({ p, i, open, onToggle, onShot }) {
  // Mount media on first open (lazy images inside a collapsed container
  // won't load until scroll, so we defer mounting instead)
  const [mediaMounted, setMediaMounted] = useState(false)
  useEffect(() => {
    if (open) setMediaMounted(true)
  }, [open])
  return (
    <div
      className={`project-row reveal ${open ? 'open' : ''}`}
      style={{ transitionDelay: `${Math.min(i * 70, 350)}ms` }}
      onClick={onToggle}
    >
      <div className="project-main">
        <span className="idx">{String(i + 1).padStart(2, '0')}</span>
        <h3 className="title">{p.title}</h3>
        <div className="tags">
          {p.tags.map((t) => (
            <span className="tag" key={t}>{t}</span>
          ))}
        </div>
        <span className="year">{p.year}</span>
        <span className="arrow">↗</span>
      </div>
      <div className="project-details">
        <div className="project-details-inner">
          <p>{p.description}</p>
          {mediaMounted && (p.video || (p.images && p.images.length > 0)) && (
            <div className="shots" onClick={(e) => e.stopPropagation()}>
              {p.video && (
                <video controls preload="metadata" poster={p.videoPoster}>
                  <source src={p.video} type="video/mp4" />
                </video>
              )}
              {p.images.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt={`${p.title} screenshot`}
                  onClick={() => onShot(src)}
                />
              ))}
            </div>
          )}
          {p.highlight && <div className="highlight">{p.highlight}</div>}
          <div className="links">
            {p.link && (
              <a href={p.link} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                GitHub ↗
              </a>
            )}
            {p.live && (
              <a href={p.live} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                Live ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  useReveal()
  const [openIdx, setOpenIdx] = useState(null)
  const [lightbox, setLightbox] = useState(null)
  const year = new Date().getFullYear()

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => e.key === 'Escape' && setLightbox(null)
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox])
  const progressRef = useRef(null)
  const heroTitleRef = useRef(null)
  useScrollFx(progressRef, heroTitleRef)

  return (
    <>
      <div className="grain" />
      <div className="progress" ref={progressRef} />

      <nav className="nav">
        <a href="#top" className="brand">
          {profile.name}
        </a>
        <div className="nav-links">
          <a href="#work"><Roll>Work</Roll></a>
          <a href="#about"><Roll>About</Roll></a>
          <a href="#contact"><Roll>Contact</Roll></a>
          <a href={profile.github} target="_blank" rel="noreferrer"><Roll>GitHub</Roll></a>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="hero-meta fade-late d1">
          <span>
            <span className="status-dot" />
            Open to opportunities
          </span>
          <Clock />
        </div>
        <h1 className="hero-title" ref={heroTitleRef}>
          <span className="line-mask">
            <span className="line-inner">{profile.heroLine1}</span>
          </span>
          <span className="line-mask">
            <span className="line-inner d2 serif">{profile.heroLine2}</span>
          </span>
        </h1>
        <p className="hero-tagline fade-late d2">{profile.tagline}</p>
        <div className="cta-row fade-late d2">
          <a className="btn btn-solid" href="#work">See projects ↓</a>
          <a className="btn btn-ghost" href={`mailto:${profile.email}`}>Get in touch</a>
        </div>
        <div className="hero-bottom fade-late d3">
          <span>{profile.role}</span>
          <span className="scroll-hint">Scroll ↓</span>
        </div>
      </header>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...profile.skills, ...profile.skills].map((s, i) => (
            <span className="marquee-item" key={i}>{s}</span>
          ))}
        </div>
      </div>

      <section id="work">
        <div className="section-head reveal">
          <span className="num">01</span>
          <h2>Projects</h2>
          <span className="count">{String(projects.length).padStart(2, '0')} projects</span>
        </div>
        {projects.map((p, i) => (
          <ProjectRow
            key={p.title}
            p={p}
            i={i}
            open={openIdx === i}
            onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            onShot={setLightbox}
          />
        ))}
      </section>

      <section id="about">
        <div className="section-head reveal">
          <span className="num">02</span>
          <h2>About</h2>
        </div>
        <div className="facts reveal">
          {profile.facts.map((f) => (
            <div className="fact" key={f.k}>
              <div className="k">{f.k}</div>
              <div className="v">{f.v}</div>
            </div>
          ))}
        </div>
        <div className="about-grid">
          <div className="about-text reveal">
            {profile.about.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            <div className="skill-groups">
              {profile.skillGroups.map((g) => (
                <div className="skill-group" key={g.label}>
                  <div className="label">{g.label}</div>
                  <div className="chips">
                    {g.items.map((s) => (
                      <span className="chip" key={s}>{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal">
            {experience.map((e) => (
              <div className="exp-item" key={e.role + e.period}>
                <div className="exp-top">
                  <span className="role">{e.role}</span>
                  <span className="period">{e.period}</span>
                </div>
                <div className="org">{e.org}</div>
                <div className="note">{e.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="section-head reveal">
          <span className="num">03</span>
          <h2>Contact</h2>
        </div>
        <p className="lede reveal">Have a project, a role, or just want to talk shop?</p>
        <div className="chips contact-tags reveal">
          {profile.openTo.map((t) => (
            <span className="chip chip-accent" key={t}>{t}</span>
          ))}
        </div>
        <a className="big-mail reveal" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <div className="contact-links reveal">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          {profile.resumeUrl && profile.resumeUrl !== '#' && (
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer">Résumé ↗</a>
          )}
        </div>
      </section>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="Screenshot enlarged" />
          <span className="lightbox-hint">Click anywhere or press Esc to close</span>
        </div>
      )}

      <footer>
        <span>© {year} {profile.name}</span>
        <span>Designed & built from scratch — no template</span>
      </footer>
    </>
  )
}
