import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * Thin gold progress bar fixed at the very top of the page.
 * Fills left-to-right as the user scrolls down.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="scroll-progress-bar"
      style={{ scaleX }}
    />
  )
}
