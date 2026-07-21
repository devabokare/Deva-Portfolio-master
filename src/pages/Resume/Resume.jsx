import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { IoBookOutline, IoBriefcaseOutline, IoDownloadOutline } from 'react-icons/io5'
import {
  education,
  experience,
  skills,
  detailedSkills,
  languages,
  certificates,
  interestsAndHobbies,
  spokenLanguages,
  awardsAndActivities
} from '../../data/portfolio'
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal'

const pageAnim = {
  initial:  { opacity: 0, y: 22 },
  animate:  { opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.4, 0, 0.2, 1] } },
  exit:     { opacity: 0, y: -14, transition: { duration: 0.24 } },
}

// Animated skill bar that triggers on scroll into view
function SkillBar({ name, level, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div className="skill-item" ref={ref}>
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{level}%</span>
      </div>
      <div className="skill-bar-bg">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.1, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </div>
  )
}

export default function Resume() {
  return (
    <motion.article className="page" {...pageAnim}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
        <h2 className="page-title" style={{ marginBottom: 0 }}>Resume</h2>
        <a
          href="/Devrao_Bokare_Resume.pdf"
          download="Devrao_Bokare_Resume.pdf"
          className="btn-primary"
          style={{ padding: '8px 16px', fontSize: '0.82rem', marginTop: '-4px', height: 'fit-content' }}
        >
          <IoDownloadOutline style={{ marginRight: '6px', fontSize: '1.1rem', verticalAlign: 'middle' }} /> Download PDF
        </a>
      </div>

      <div className="resume-cols">
        {/* ── Education ── */}
        <ScrollReveal duration={0.6}>
          <section className="timeline-block">
            <h3 className="tl-heading">
              <span className="tl-heading-icon"><IoBookOutline /></span>
              Education
            </h3>
            <div className="timeline">
              {education.map((item, i) => (
                <div key={i} className="tl-item">
                  <h4 className="tl-title">{item.title}</h4>
                  <span className="tl-period">{item.period}</span>
                  <p className="tl-institution">
                    {item.institution}
                    {item.description && <><br />{item.description}</>}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* ── Experience ── */}
        <ScrollReveal duration={0.6} delay={0.1}>
          <section className="timeline-block">
            <h3 className="tl-heading">
              <span className="tl-heading-icon"><IoBriefcaseOutline /></span>
              Experience
            </h3>
            <div className="timeline">
              {experience.map((item, i) => (
                <div key={i} className="tl-item">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tl-title"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <h4 className="tl-title">{item.title}</h4>
                  )}
                  <span className="tl-period">{item.period}</span>
                  <ul className="tl-points">
                    {item.points.map((pt, j) => <li key={j}>{pt}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>
      </div>

      {/* ── Skills ── */}
      <ScrollReveal duration={0.6}>
        <section className="skills-block" style={{ marginBottom: '36px' }}>
          <h3 className="section-title">My Skills</h3>
          <div className="skills-card">
            {skills.map((skill, i) => (
              <SkillBar key={i} name={skill.name} level={skill.level} index={i} />
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ── Extra Details: Certificates, Languages, Awards, Interests ── */}
      <div className="resume-cols" style={{ marginTop: '36px' }}>
        {/* Left Column: Certificates & Awards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          {/* Certificates */}
          <ScrollReveal duration={0.6}>
            <section className="timeline-block">
              <h3 className="tl-heading">
                <span className="tl-heading-icon"><IoBookOutline /></span>
                Certificates
              </h3>
              <div className="timeline">
                {certificates.map((cert, i) => (
                  <div key={i} className="tl-item">
                    <h4 className="tl-title">{cert.title}</h4>
                    <p className="tl-institution">{cert.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* Awards & Activities */}
          <ScrollReveal duration={0.6} delay={0.1}>
            <section className="timeline-block">
              <h3 className="tl-heading">
                <span className="tl-heading-icon"><IoBriefcaseOutline /></span>
                Awards & Activities
              </h3>
              <div className="timeline">
                {awardsAndActivities.map((award, i) => (
                  <div key={i} className="tl-item">
                    <h4 className="tl-title">{award.title}</h4>
                    <span className="tl-period">{award.year}</span>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>
        </div>

        {/* Right Column: Detailed Skills, Languages, Hobbies */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          {/* Detailed Skills */}
          <ScrollReveal duration={0.6}>
            <section className="skills-block">
              <h3 className="section-title">Technical Expertise</h3>
              <div className="skills-card" style={{ gap: '14px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {detailedSkills.map((s, i) => (
                    <span key={i} className="tech-badge">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Languages */}
          <ScrollReveal duration={0.6} delay={0.1}>
            <section className="skills-block">
              <h3 className="section-title">Programming Languages</h3>
              <div className="skills-card" style={{ gap: '14px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {languages.map((lang, i) => (
                    <span key={i} className="tech-badge" style={{ borderColor: 'var(--border-accent)', color: 'var(--accent)' }}>
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* Interests & Spoken Languages */}
          <ScrollReveal duration={0.6} delay={0.2}>
            <section className="skills-block">
              <h3 className="section-title">Interests & Hobbies</h3>
              <div className="skills-card" style={{ padding: '24px', gap: '16px' }}>
                <ul className="tl-points" style={{ gap: '8px' }}>
                  {interestsAndHobbies.map((item, i) => (
                    <li key={i} style={{ fontSize: '0.82rem' }}>{item}</li>
                  ))}
                </ul>
                <hr className="sidebar-divider" style={{ margin: '8px 0', borderColor: 'var(--border)' }} />
                <div>
                  <h4 className="tl-title" style={{ marginBottom: '8px', fontSize: '0.85rem' }}>Spoken Languages</h4>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {spokenLanguages.map((sl, i) => (
                      <span key={i} className="tech-badge" style={{ fontSize: '0.72rem', padding: '4px 10px' }}>
                        {sl}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </ScrollReveal>
        </div>
      </div>
    </motion.article>
  )
}
