import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5'
import { useTheme } from '../../context/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'About',     to: '/',          end: true  },
  { label: 'Resume',    to: '/resume',    end: false },
  { label: 'Portfolio', to: '/portfolio', end: false },
  { label: 'Blog',      to: '/blog',      end: false },
  { label: 'Contact',   to: '/contact',   end: false },
]

export default function Navbar() {
  const { theme, toggle } = useTheme()

  return (
    <nav className="navbar" aria-label="Main navigation">
      <ul className="navbar-list">
        {navItems.map(item => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                isActive ? 'navbar-link active' : 'navbar-link'
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <button
        className="theme-toggle"
        onClick={toggle}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={theme}
            style={{ display: 'inline-flex' }}
            initial={{ rotate: -90, scale: 0.7, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {theme === 'dark' ? <IoSunnyOutline /> : <IoMoonOutline />}
          </motion.span>
        </AnimatePresence>
      </button>
    </nav>
  )
}
