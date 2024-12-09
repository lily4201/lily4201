import Image from 'next/image'
import Link from 'next/link'
import styles from './FooterSection.module.css'

export default function FooterSection() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>WEBSITE</h3>
          <ul className={styles.list}>
            <li><Link href="/" className={styles.link}>Home</Link></li>
            <li><Link href="/projects" className={styles.link}>Projects</Link></li>
            <li><Link href="/about" className={styles.link}>About</Link></li>
          </ul>
        </div>
      
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>CONTACT</h3>
          <ul className={styles.list}>
            <li><a href="mailto:lilyaoyama01@gmail.com" className={styles.link}>lilyaoyama01@gmail.com</a></li>
            <li><a href="tel:+85298442019" className={styles.link}>+852 9844 2019</a></li>
            <li className={styles.location}>📍 Hong Kong</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>SOCIAL</h3>
          <div className={styles.socialLinks}>
            <a href="https://github.com/lily4201" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <Image src="/github-icon.svg" alt="GitHub" width={24} height={24} />
            </a>
            <a href="https://www.linkedin.com/in/ririi-aoyama/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <Image src="/linkedin-icon.svg" alt="LinkedIn" width={24} height={24} />
            </a>
          </div>
        </div>

        <div className={styles.section}>
          <p className={styles.copyright}>&copy; 2023 Lily Aoyama. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

