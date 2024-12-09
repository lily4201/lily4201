import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import AboutSection from './AboutSection'
import SkillsSection from './SkillsSection'
import TalkSection from './FooterSection'
import ProjectsSection from './components/ProjectsSection'
import FooterSection from './FooterSection'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={`${styles.heroSection} section-with-lines`}>
        <div className={styles.logoContainer}>
          <Image style={{"--index": 0} as any} src="/flutter_logo.svg" alt="Flutter" width={40} height={40} />
          <Image style={{"--index": 1} as any} src="/supabase_logo.svg" alt="Supabase" width={40} height={40} />
          <Image style={{"--index": 2} as any} src="/nextjs_logo.svg" alt="Next.js" width={40} height={40} />
          <Image style={{"--index": 3} as any} src="/react_logo.svg" alt="React" width={40} height={40} />
          <Image style={{"--index": 4} as any} src="/Python_logo.svg" alt="Python" width={40} height={40} />
          <Image style={{"--index": 5} as any} src="/CAD_design_logo.svg" alt="CAD Design" width={40} height={40} />
          <Image style={{"--index": 6} as any} src="/swift_logo.svg" alt="Swift" width={40} height={40} />
        </div>

        <div className={styles.titleSection}>
          <h1>Lily Aoyama</h1>
          <p className={styles.subtitle}>I'M A HIGH SCHOOL STUDENT IN HONG KONG</p>
        </div>

        <div className={styles.socialLinks}>
          <Link href="https://github.com/lily4201" target="_blank" rel="noopener noreferrer">
            <Image src="/github-icon.svg" alt="GitHub" width={24} height={24} />
          </Link>
          <Link href="https://www.linkedin.com/in/ririi-aoyama/" target="_blank" rel="noopener noreferrer">
            <Image src="/linkedin-icon.svg" alt="LinkedIn" width={24} height={24} />
          </Link>
        </div>
      </div>

      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <FooterSection />
    </main>
  )
}