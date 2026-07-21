import React from 'react'
import { motion } from 'framer-motion'
import { blogPosts } from '../../data/portfolio'
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal'
import TiltCard from '../../components/TiltCard/TiltCard'
import ProgressiveImage from '../../components/ProgressiveImage/ProgressiveImage'

const pageAnim = {
  initial:  { opacity: 0, y: 22 },
  animate:  { opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.4, 0, 0.2, 1] } },
  exit:     { opacity: 0, y: -14, transition: { duration: 0.24 } },
}

export default function Blog() {
  return (
    <motion.article className="page" {...pageAnim}>
      <h2 className="page-title">Blog</h2>

      <ScrollReveal>
        <div className="blog-grid">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.36 } }}
            >
              <TiltCard
                className="blog-card"
                onClick={() => { if (post.link && post.link !== '#') window.open(post.link, '_blank') }}
              >
                <div className="blog-img-wrap">
                  <ProgressiveImage src={post.image} alt={post.title} />
                </div>
                <div className="blog-body">
                  <div className="blog-meta">
                    <span className="blog-cat">{post.category}</span>
                    <span className="blog-dot" />
                    <time className="blog-date">{post.date}</time>
                  </div>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </ScrollReveal>
    </motion.article>
  )
}
