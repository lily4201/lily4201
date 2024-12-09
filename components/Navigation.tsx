import Link from 'next/link'
import Image from 'next/image'
import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.leftSection}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/ownlogo.svg"
            alt="Lily Aoyama Logo"
            width={40}
            height={40}
            className={styles.logo}
          />
          <div className={styles.nameText}>
            <span>Lily Aoyama</span>
          </div>
        </Link>
      </div>

      <div className={styles.rightSection}>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default Navigation