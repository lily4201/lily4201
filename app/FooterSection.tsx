"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import styles from './FooterSection.module.css'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

export default function FooterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <motion.footer 
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={styles.footer}
    >
      <div className={styles.container}>
        <motion.div className={styles.section} variants={itemVariants}>
          <h3 className={styles.sectionTitle}>WEBSITE</h3>
          <ul className={styles.list}>
            <li><Link href="/" className={styles.link}>Home</Link></li>
            <li><Link href="/projects" className={styles.link}>Projects</Link></li>
            <li><Link href="/about" className={styles.link}>About</Link></li>
          </ul>
        </motion.div>
      
        <motion.div className={styles.section} variants={itemVariants}>
          <h3 className={styles.sectionTitle}>CONTACT</h3>
          <ul className={styles.list}>
            <li><a href="mailto:lilyaoyama01@gmail.com" className={styles.link}>lilyaoyama01@gmail.com</a></li>
            <li><a href="tel:+85298442019" className={styles.link}>+852 9844 2019</a></li>
            <li className={styles.location}>📍 Hong Kong</li>
          </ul>
        </motion.div>

        <motion.div className={styles.section} variants={itemVariants}>
          <h3 className={styles.sectionTitle}>SOCIAL</h3>
          <div className={styles.socialLinks}>
            <motion.a 
              href="https://github.com/lily4201" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialLink}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image src="/github-icon.svg" alt="GitHub" width={24} height={24} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/ririi-aoyama/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialLink}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image src="/linkedin-icon.svg" alt="LinkedIn" width={24} height={24} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div className={styles.section} variants={itemVariants}>
          <p className={styles.copyright}>&copy; 2023 Lily Aoyama. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

