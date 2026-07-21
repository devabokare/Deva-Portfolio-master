import React, { useRef, useState } from 'react'

/**
 * Magnetic element wrapper. Pulls the child toward the cursor when hovering.
 */
export default function Magnetic({ children, scale = 0.35 }) {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return

    const { clientX, clientY } = e
    const { left, top, width, height } = el.getBoundingClientRect()
    
    const centerX = left + width / 2
    const centerY = top + height / 2

    const x = (clientX - centerX) * scale
    const y = (clientY - centerY) * scale

    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: position.x !== 0 ? 'transform 0.1s ease-out' : 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        display: 'inline-block',
      }}
    >
      {children}
    </div>
  )
}
