import React, { useState, useEffect } from 'react'

/**
 * ProgressiveImage - fades in a high-res image after loading,
 * rendering a modern loading skeleton placeholder beforehand.
 */
export default function ProgressiveImage({ src, alt, className = '', loading = 'lazy' }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`img-loader-wrapper${loaded ? ' loaded' : ''} ${className}`}>
      {!loaded && <div className="img-skeleton-pulse" />}
      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setLoaded(true)}
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />
    </div>
  )
}
