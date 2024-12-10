"use client"

import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/app/data/projects'
import styles from './ProjectsSection.module.css'

const TagIcon: { [key: string]: string } = {
  'PYTHON': '/Python_logo.svg',
  'SWIFT': '/swift_logo.svg',
  'REACT': '/react_logo.svg',
  'NEXTJS': '/nextjs_logo.svg',
  'FLUTTER': '/flutter_logo.svg',
  'CAD DESIGN': '/CAD_design_logo.svg',
  'SUPABASE': '/supabase_logo.svg',
}

export default function ProjectsSection() {
  return (
    <section className={styles.projectsSection}>
      <h2>My Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.slice(0, 6).map((project, index) => (
          <Link 
            href={`/projects/${encodeURIComponent(project.title)}`}
            key={index}
            className={styles.projectCard}
          >
            <div className={styles.projectContent}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={styles.projectImage}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className={styles.projectOverlay}>
                <h3>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <div className={styles.tagContainer}>
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={styles.tag}>
                      {TagIcon[tag] && (
                        <Image 
                          src={TagIcon[tag]}
                          alt={tag}
                          width={16}
                          height={16}
                          className={styles.tagIcon}
                        />
                      )}
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link href="/projects" className={styles.viewAll}>
        View All Projects
      </Link>
    </section>
  )
}

