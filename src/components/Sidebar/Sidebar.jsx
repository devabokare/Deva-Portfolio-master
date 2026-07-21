import React, { useState } from 'react'
import { IoMailOutline, IoPhonePortraitOutline, IoCalendarOutline, IoLocationOutline, IoChevronDown, IoCopyOutline } from 'react-icons/io5'
import { FaWhatsapp, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa'
import { personalInfo } from '../../data/portfolio'
import { motion, AnimatePresence } from 'framer-motion'
import ProgressiveImage from '../ProgressiveImage/ProgressiveImage'

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true)
  const [toastMessage, setToastMessage] = useState(null)

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      setToastMessage(`Copied ${label}!`)
      setTimeout(() => setToastMessage(null), 2000)
    })
  }

  return (
    <aside className="sidebar">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            className="toast-alert"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Avatar + Name */}
      <div className="sidebar-top">
        <div className="avatar-ring">
          <ProgressiveImage src={personalInfo.avatar} alt={personalInfo.name} />
        </div>
        <div>
          <h1 className="sidebar-name">{personalInfo.name}</h1>
          <span className="sidebar-title-badge">{personalInfo.title}</span>
        </div>

        <button
          className="sidebar-toggle-btn"
          onClick={() => setExpanded(e => !e)}
          aria-label="Toggle contacts"
        >
          {expanded ? 'Hide Contacts' : 'Show Contacts'}
          <IoChevronDown
            style={{
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: '0.3s',
            }}
          />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="contacts"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <hr className="sidebar-divider" style={{ marginBottom: 22 }} />

            {/* Contact List */}
            <ul className="contacts-list">
              <li className="contact-item">
                <div className="contact-icon-box"><IoMailOutline /></div>
                <div className="contact-info-wrap">
                  <div>
                    <p className="contact-label">Email</p>
                    <a href={`mailto:${personalInfo.email}`} className="contact-value">
                      {personalInfo.email}
                    </a>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalInfo.email, 'Email')}
                    className="copy-btn"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    <IoCopyOutline />
                  </button>
                </div>
              </li>

              <li className="contact-item">
                <div className="contact-icon-box"><IoPhonePortraitOutline /></div>
                <div className="contact-info-wrap">
                  <div>
                    <p className="contact-label">Phone</p>
                    <a href={`tel:${personalInfo.phone}`} className="contact-value">
                      {personalInfo.phone}
                    </a>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalInfo.phone, 'Phone')}
                    className="copy-btn"
                    title="Copy Phone Number"
                    aria-label="Copy Phone Number"
                  >
                    <IoCopyOutline />
                  </button>
                </div>
              </li>

              <li className="contact-item">
                <div className="contact-icon-box"><IoCalendarOutline /></div>
                <div>
                  <p className="contact-label">Birthday</p>
                  <span className="contact-value">{personalInfo.birthday}</span>
                </div>
              </li>

              <li className="contact-item">
                <div className="contact-icon-box"><IoLocationOutline /></div>
                <div>
                  <p className="contact-label">Location</p>
                  <span className="contact-value">{personalInfo.location}</span>
                </div>
              </li>
            </ul>

            <hr className="sidebar-divider" style={{ margin: '22px 0' }} />

            {/* Social Links */}
            <ul className="social-list">
              <li>
                <a href={personalInfo.social.whatsapp} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                  <FaWhatsapp />
                </a>
              </li>
              <li>
                <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href={personalInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                  <FaGithub />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  )
}
