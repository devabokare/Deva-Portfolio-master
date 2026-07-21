import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { IoDownloadOutline, IoChatbubbleOutline } from 'react-icons/io5'
import { useTypewriter } from '../../hooks/useTypewriter'
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal'
import TiltCard from '../../components/TiltCard/TiltCard'
import TextReveal from '../../components/TextReveal/TextReveal'
import Magnetic from '../../components/Magnetic/Magnetic'
import {
  personalInfo, services, typewriterRoles,
  stats, techStack, processSteps,
} from '../../data/portfolio'

/* ── page animation ─────────────────────────────────── */
const pageAnim = {
  initial:  { opacity: 0, y: 24 },
  animate:  { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
  exit:     { opacity: 0, y: -16, transition: { duration: 0.24 } },
}

const stagger = (i, base = 0.06) => ({
  initial:  { opacity: 0, y: 20 },
  animate:  { opacity: 1, y: 0, transition: { delay: i * base, duration: 0.36 } },
})

/* ── animated stat counter ──────────────────────────── */
function CountStat({ value, suffix, label, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-30px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let frame, start = 0
    const duration = 1400
    const startTime = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * value))
      if (progress < 1) frame = requestAnimationFrame(tick)
      else setCount(value)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value])

  return (
    <motion.div
      ref={ref}
      className="stat-card"
      {...stagger(index, 0.1)}
      whileHover={{ y: -4 }}
    >
      <div className="stat-value">{count}{suffix}</div>
      <div className="stat-label">{label}</div>
    </motion.div>
  )
}

/* ── main component ─────────────────────────────────── */
export default function About() {
  const role = useTypewriter(typewriterRoles)
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 })

  const handleHeroMouseMove = (e) => {
    const { clientX, clientY } = e
    const x = (clientX - window.innerWidth / 2) * 0.03
    const y = (clientY - window.innerHeight / 2) * 0.03
    setParallaxOffset({ x, y })
  }

  return (
    <motion.article className="page" {...pageAnim}>

      {/* ════════════════════════════════════════════
          HERO SECTION — above the fold + parallax
          ════════════════════════════════════════════ */}
      <section
        className="hero-section"
        onMouseMove={handleHeroMouseMove}
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        {/* Parallax Background Shape */}
        <div
          className="hero-parallax-bg"
          style={{
            transform: `translate3d(${parallaxOffset.x}px, ${parallaxOffset.y}px, 0)`,
            transition: 'transform 0.2s ease-out',
          }}
          aria-hidden="true"
        />

        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.1 } }}
        >
          Hello, I'm
        </motion.p>

        <h1 className="hero-name" style={{ display: 'block' }}>
          <TextReveal text={personalInfo.name} delay={0.2} />
        </h1>

        <motion.div
          className="hero-role-line"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.4 } }}
        >
          <span className="typewriter-text">{role}</span>
          <span className="typewriter-cursor" aria-hidden="true" />
        </motion.div>

        <motion.p
          className="hero-bio"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.5 } }}
        >
          {personalInfo.bio[0]}
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.62 } }}
        >
          <Magnetic>
            <a
              href="/Devrao_Bokare_Resume.pdf"
              download="Devrao_Bokare_Resume.pdf"
              className="btn-primary"
              aria-label="Download CV"
            >
              <IoDownloadOutline /> Download CV
            </a>
          </Magnetic>
          <Magnetic>
            <Link to="/contact" className="btn-secondary" aria-label="Contact me">
              <IoChatbubbleOutline /> Let's Talk
            </Link>
          </Magnetic>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════
          STATS ROW — key numbers
          ════════════════════════════════════════════ */}
      <ScrollReveal>
        <section className="stats-section" aria-label="Career statistics">
          <div className="stats-row">
            {stats.map((s, i) => (
              <CountStat key={i} {...s} index={i} />
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ════════════════════════════════════════════
          SERVICES — what I do
          ════════════════════════════════════════════ */}
      <ScrollReveal>
        <section className="services-section">
          <h2 className="section-title">What I'm Doing</h2>
          <div className="services-grid">
            {services.map((s, i) => (
              <TiltCard key={i} className="service-card">
                <img src={s.icon} alt={s.title} className="service-icon" />
                <div className="service-body">
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ════════════════════════════════════════════
          TECH STACK — editorial badge grid
          ════════════════════════════════════════════ */}
      <ScrollReveal>
        <section className="tech-section">
          <h2 className="section-title">Tech Stack</h2>
          <div className="tech-grid">
            {techStack.map((t, i) => (
              <motion.span
                key={i}
                className="tech-badge"
                {...stagger(i, 0.04)}
                whileHover={{ y: -3, scale: 1.04 }}
              >
                <span
                  className="tech-dot"
                  style={{ background: t.color }}
                  aria-hidden="true"
                />
                {t.name}
              </motion.span>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ════════════════════════════════════════════
          MY PROCESS — case study / editorial
          ════════════════════════════════════════════ */}
      <ScrollReveal>
        <section className="process-section">
          <h2 className="section-title">My Process</h2>
          <div className="process-grid">
            {processSteps.map((step, i) => (
              <TiltCard key={i} className="process-card">
                <div className="process-step-number">{step.step}</div>
                <div className="process-icon" aria-hidden="true">{step.icon}</div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-desc">{step.description}</p>
              </TiltCard>
            ))}
          </div>
        </section>
      </ScrollReveal>

    </motion.article>
  )
}
