import React, { useState, useEffect, useRef } from 'react'

/**
 * Custom gold + ring cursor.
 * Only renders on non-touch devices.
 */
export default function CustomCursor() {
  const ringRef = useRef(null)
  const dotRef  = useRef(null)
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible]   = useState(false)

  useEffect(() => {
    // Detect touch — skip on mobile
    if (window.matchMedia('(pointer: coarse)').matches) return

    document.body.classList.add('has-custom-cursor')
    setVisible(true)

    let ringX = 0, ringY = 0

    const onMove = (e) => {
      const { clientX: x, clientY: y } = e

      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`
        dotRef.current.style.top  = `${y}px`
      }

      // Ring follows with lerp in rAF
      ringX += (x - ringX) * 0.18
      ringY += (y - ringY) * 0.18
    }

    let rafId
    const animate = () => {
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`
        ringRef.current.style.top  = `${ringY}px`
      }
      rafId = requestAnimationFrame(animate)
    }
    animate()

    const onOver = (e) => {
      const el = e.target.closest('a, button, [role="button"], .project-card, .blog-card, .service-card, .filter-chip')
      setHovering(!!el)
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(rafId)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [])

  if (!visible) return null

  return (
    <>
      <div ref={ringRef} className={`cursor-ring${hovering ? ' hovering' : ''}`} />
      <div ref={dotRef}  className={`cursor-dot${hovering ? ' hovering' : ''}`} />
    </>
  )
}
