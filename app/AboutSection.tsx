"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './AboutSection.module.css'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.section 
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={`${styles.aboutSection} section-with-lines`}
    >
      <div className={styles.container}>
        <motion.div className={styles.content} variants={containerVariants}>
          <motion.div className={styles.titleSide} variants={itemVariants}>
            <h2>About me</h2>
          </motion.div>
          <motion.div className={styles.textSide} variants={itemVariants}>
            <p className="paragraph-large">
              Lily is a motivated student with a passion for computer science and engineering 
              who believes that technology is critical to making the world a better place. 
              As a member of the robotics team, Lily contributes to designing and building robots. 
              Outside of the robotics team, Lily channels her passion for computer science into 
              developing her own apps in Swift.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

