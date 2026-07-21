import React from 'react'
import { motion } from 'framer-motion'

/**
 * ScrollReveal component that fades and slides up children when scrolled into view.
 */
export default function ScrollReveal({ children, delay = 0, duration = 0.5, y = 30 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration, delay, ease: [0.25, 1, 0.5, 1] }}
    >
      {children}
    </motion.div>
  )
}
