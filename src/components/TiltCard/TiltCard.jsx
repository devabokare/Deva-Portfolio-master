import React, { useState, useRef } from 'react'

/**
 * 3D Tilt Card wrapper applying dynamic mouse-tilt rotations.
 */
export default function TiltCard({ children, className = '', onClick }) {
  const cardRef = useRef(null)
  const [tiltStyle, setTiltStyle] = useState({})

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left // Mouse position X relative to card
    const y = e.clientY - rect.top  // Mouse position Y relative to card

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Rotate up to 10 degrees depending on distance from center
    const rotateX = ((centerY - y) / centerY) * 10
    const rotateY = ((x - centerX) / centerX) * 10

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.1s ease-out',
    })
  }

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.4s ease-out',
    })
  }

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
