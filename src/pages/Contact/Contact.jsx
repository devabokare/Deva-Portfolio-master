import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoPaperPlane, IoCheckmarkCircleOutline } from 'react-icons/io5'
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal'

const pageAnim = {
  initial:  { opacity: 0, y: 22 },
  animate:  { opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.4, 0, 0.2, 1] } },
  exit:     { opacity: 0, y: -14, transition: { duration: 0.24 } },
}

const EMPTY_FORM = { fullname: '', email: '', phone: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [status, setStatus] = useState('idle') // idle | sending | success

  const isValid = Object.values(form).every(v => v.trim() !== '')

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!isValid) return

    setStatus('sending')

    // Simulate direct secure pipeline sending before triggering local mail client
    setTimeout(() => {
      setStatus('success')
      const { fullname, email, phone, subject, message } = form
      const body = `Name: ${fullname}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`
      const mailto = `mailto:devabokare@gmail.com?cc=devabokare0711@gmail.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      
      // Open local mail client
      window.location.href = mailto
    }, 1500)
  }

  const handleReset = () => {
    setForm(EMPTY_FORM)
    setStatus('idle')
  }

  return (
    <motion.article className="page" {...pageAnim}>
      <h2 className="page-title">Contact</h2>

      <ScrollReveal>
        <div className="contact-form-section">
          <AnimatePresence mode="wait">
            {status !== 'success' ? (
              <motion.div
                key="contact-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="section-title">Send a Message</h3>

                <form className="form" onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="fullname">Full Name</label>
                      <input
                        id="fullname"
                        type="text"
                        name="fullname"
                        className="form-input"
                        placeholder="Eg. John Doe"
                        value={form.fullname}
                        onChange={handleChange}
                        disabled={status === 'sending'}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="Eg. john@email.com"
                        value={form.email}
                        onChange={handleChange}
                        disabled={status === 'sending'}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone Number</label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        className="form-input"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={handleChange}
                        disabled={status === 'sending'}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="subject">Subject</label>
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        className="form-input"
                        placeholder="Project inquiry"
                        value={form.subject}
                        onChange={handleChange}
                        disabled={status === 'sending'}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-input"
                      placeholder="Tell me about your project..."
                      value={form.message}
                      onChange={handleChange}
                      disabled={status === 'sending'}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={!isValid || status === 'sending'}
                    style={{ position: 'relative', overflow: 'hidden' }}
                  >
                    {status === 'sending' ? (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                        <span className="spinner" /> Sending...
                      </span>
                    ) : (
                      <>
                        <IoPaperPlane /> Send Message
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                style={{
                  textAlign: 'center',
                  padding: '40px 20px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-accent)',
                  borderRadius: '16px',
                  boxShadow: 'var(--shadow)',
                }}
              >
                <div style={{ fontSize: '3.5rem', color: 'var(--accent)', marginBottom: '16px' }}>
                  <IoCheckmarkCircleOutline className="pulse-icon" />
                </div>
                <h3 className="modal-name" style={{ fontSize: '1.4rem', marginBottom: '8px' }}>
                  Message Ready!
                </h3>
                <p className="contact-value" style={{ maxWidth: '340px', margin: '0 auto 24px auto', lineHeight: '1.6' }}>
                  Your email client has been opened with your message. Please hit send in your email application to deliver it.
                </p>
                <button onClick={handleReset} className="btn-secondary" style={{ padding: '8px 20px' }}>
                  Send Another Message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </ScrollReveal>
    </motion.article>
  )
}
