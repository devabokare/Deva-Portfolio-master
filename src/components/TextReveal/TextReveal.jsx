import React from 'react'
import { motion } from 'framer-motion'

/**
 * TextReveal splits text into separate characters and animates them on initial render.
 */
export default function TextReveal({ text, className = '', delay = 0 }) {
  const letters = Array.from(text)

  const containerVars = {
    hidden: { opacity: 0 },
    visible: (customDelay) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: customDelay },
    }),
  }

  const childVars = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.215, 0.61, 0.355, 1] },
    },
  }

  return (
    <motion.span
      className={`text-reveal-container ${className}`}
      variants={containerVars}
      initial="hidden"
      animate="visible"
      custom={delay}
      style={{ display: 'inline-flex', flexWrap: 'wrap' }}
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={childVars}
          style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}
