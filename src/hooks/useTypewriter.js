import { useState, useEffect } from 'react'

/**
 * Typewriter hook — cycles through an array of words with type/delete effect.
 * @param {string[]} words
 * @param {number}   speed  ms per character typed
 */
export function useTypewriter(words, speed = 95) {
  const [textIdx, setTextIdx]   = useState(0)
  const [charIdx, setCharIdx]   = useState(0)
  const [reverse, setReverse]   = useState(false)
  const [display, setDisplay]   = useState('')

  useEffect(() => {
    const current = words[textIdx]

    // Pause at the end before reversing
    if (charIdx === current.length + 1 && !reverse) {
      const t = setTimeout(() => setReverse(true), 1600)
      return () => clearTimeout(t)
    }

    // Switch word after fully deleted
    if (charIdx === 0 && reverse) {
      setReverse(false)
      setTextIdx(i => (i + 1) % words.length)
      return
    }

    const t = setTimeout(() => {
      setDisplay(current.substring(0, charIdx))
      setCharIdx(i => i + (reverse ? -1 : 1))
    }, reverse ? speed / 2 : speed)

    return () => clearTimeout(t)
  }, [charIdx, reverse, textIdx, words, speed])

  return display
}
