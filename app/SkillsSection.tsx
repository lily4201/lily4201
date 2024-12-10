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
              I am passionate about creating innovative solutions through technology. 
              My diverse skill set spans mobile and web development, allowing me to 
              build seamless experiences across multiple platforms.
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