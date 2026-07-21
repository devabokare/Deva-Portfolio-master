import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Splash({ onLoadComplete }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      setTimeout(onLoadComplete, 500) // Delay parent update until fadeout finishes
    }, 2200)

    return () => clearTimeout(timer)
  }, [onLoadComplete])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: 'easeInOut' } }}
        >
          <div className="splash-logo-container">
            <motion.h1
              className="splash-logo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              DB
            </motion.h1>
            <motion.div
              className="splash-bar"
              initial={{ width: 0 }}
              animate={{ width: '120px' }}
              transition={{ duration: 1.2, delay: 0.4, ease: 'easeInOut' }}
            />
            <motion.p
              className="splash-text"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              CTO & Developer Portfolio
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
