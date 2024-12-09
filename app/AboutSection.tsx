import styles from './AboutSection.module.css'

export default function AboutSection() {
  return (
    <section className={`${styles.aboutSection} section-with-lines`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.titleSide}>
            <h2>About me</h2>
          </div>
          <div className={styles.textSide}>
            <p className="paragraph-large">
              Lily is a motivated student with a passion for computer science and engineering 
              who believes that technology is critical to making the world a better place. 
              As a member of the robotics team, Lily contributes to designing and building robots. 
              Outside of the robotics team, Lily channels her passion for computer science into 
              developing her own apps in Swift.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}