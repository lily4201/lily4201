import Image from 'next/image'
import styles from './SkillsSection.module.css'

const skills = [
  { icon: '/swift_logo.svg', title: 'Swift' },
  { icon: '/CAD_design_logo.svg', title: 'CAD Design' },
  { icon: '/Python_logo.svg', title: 'Python' },
  { icon: '/react_logo.svg', title: 'React' },
  { icon: '/nextjs_logo.svg', title: 'NextJS' },
  { icon: '/supabase_logo.svg', title: 'Supabase' },
  { icon: '/flutter_logo.svg', title: 'Flutter' },
]

export default function SkillsSection() {
  return (
    <section className={`${styles.skillsSection} section-with-lines`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftSide}>
            <h2>My Skills</h2>
            <p className="paragraph-large">
              Neque porro quisquam est, qui dolorem ipsum quia dolor
              sit amet, consectetur, adipisci velit, sed quia non numquam
              eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
          </div>
          <div className={styles.rightSide}>
            {skills.map((skill, index) => (
              <div key={index} className={styles.skillItem}>
                <Image 
                  src={skill.icon} 
                  alt={skill.title} 
                  width={40} 
                  height={40} 
                />
                <span>{skill.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}