import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoEyeOutline, IoClose, IoGlobeOutline } from 'react-icons/io5'
import { projects } from '../../data/portfolio'
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal'
import TiltCard from '../../components/TiltCard/TiltCard'
import ProgressiveImage from '../../components/ProgressiveImage/ProgressiveImage'

const CATEGORIES = ['All', 'Web design', 'Web development', 'Applications']

const pageAnim = {
  initial:  { opacity: 0, y: 22 },
  animate:  { opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.4, 0, 0.2, 1] } },
  exit:     { opacity: 0, y: -14, transition: { duration: 0.24 } },
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase() === activeFilter.toLowerCase())

  return (
    <motion.article className="page" {...pageAnim}>
      <h2 className="page-title">Portfolio</h2>

      {/* Filter chips */}
      <ScrollReveal>
        <div className="filter-strip">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`filter-chip${activeFilter === cat ? ' active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Project grid */}
      <ScrollReveal delay={0.1}>
        <motion.div className="projects-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.3 } }}
                exit={{ opacity: 0, scale: 0.88, transition: { duration: 0.2 } }}
                style={{ originX: 0.5, originY: 0.5 }}
              >
                <TiltCard
                  className="project-card"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="project-img-wrap">
                    <ProgressiveImage src={project.image} alt={project.title} />
                    <div className="project-eye-overlay">
                      <div className="project-eye-btn" aria-label="View case study">
                        <IoEyeOutline />
                      </div>
                    </div>
                  </div>
                  <div className="project-info">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-cat">{project.category}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </ScrollReveal>

      {/* ── Case Study Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-box"
              style={{ maxWidth: '620px' }}
              initial={{ opacity: 0, scale: 0.88, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.28, ease: [0.4, 0, 0.2, 1] } }}
              exit={{ opacity: 0, scale: 0.92, y: 16, transition: { duration: 0.2 } }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                <IoClose />
              </button>

              <div style={{ marginBottom: '20px' }}>
                <span className="sidebar-title-badge" style={{ marginBottom: '10px' }}>
                  {selectedProject.category}
                </span>
                <h3 className="modal-name" style={{ fontSize: '1.6rem', marginTop: '4px' }}>
                  {selectedProject.title}
                </h3>
              </div>

              <div className="project-img-wrap" style={{ borderRadius: '12px', marginBottom: '22px' }}>
                <ProgressiveImage src={selectedProject.image} alt={selectedProject.title} />
              </div>

              {/* Case study details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <h4 className="section-title" style={{ marginBottom: '6px' }}>The Problem</h4>
                  <p className="contact-value" style={{ fontSize: '0.88rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                    {selectedProject.caseStudy.problem}
                  </p>
                </div>

                <div>
                  <h4 className="section-title" style={{ marginBottom: '6px' }}>My Approach</h4>
                  <p className="contact-value" style={{ fontSize: '0.88rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                    {selectedProject.caseStudy.approach}
                  </p>
                </div>

                <div>
                  <h4 className="section-title" style={{ marginBottom: '6px' }}>Results & Value</h4>
                  <p className="contact-value" style={{ fontSize: '0.88rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                    {selectedProject.caseStudy.results}
                  </p>
                </div>

                <div>
                  <h4 className="section-title" style={{ marginBottom: '8px' }}>Technologies Used</h4>
                  <div className="tech-grid">
                    {selectedProject.caseStudy.tech.map((t, i) => (
                      <span key={i} className="tech-badge" style={{ padding: '4px 12px', fontSize: '0.72rem' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: '10px' }}>
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ padding: '9px 20px', fontSize: '0.8rem' }}
                  >
                    <IoGlobeOutline /> Live Project Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}
