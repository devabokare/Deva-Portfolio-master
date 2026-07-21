import React, { useState } from 'react'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import CustomCursor from './components/CustomCursor/CustomCursor'
import ScrollProgress from './components/ScrollProgress/ScrollProgress'
import Splash from './components/Splash/Splash'
import BackToTop from './components/BackToTop/BackToTop'
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import About from './pages/About/About'
import Resume from './pages/Resume/Resume'
import Portfolio from './pages/Portfolio/Portfolio'
import Blog from './pages/Blog/Blog'
import Contact from './pages/Contact/Contact'

function AppContent() {
  const location = useLocation()
  const [splashComplete, setSplashComplete] = useState(false)

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Splash onLoadComplete={() => setSplashComplete(true)} />
      {/* Noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {splashComplete && (
        <div className="app">
          <Sidebar />
          <div className="main-content">
            <Navbar />
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/"          element={<About />} />
                <Route path="/about"     element={<About />} />
                <Route path="/resume"    element={<Resume />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/blog"      element={<Blog />} />
                <Route path="/contact"   element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </div>
        </div>
      )}
      <BackToTop />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  )
}
