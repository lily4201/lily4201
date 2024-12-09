"use client"

import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { projects } from "@/app/data/projects"

const techColors: { [key: string]: string } = {
  'SWIFT': '#3E88FB',
  'CAD DESIGN': '#FF5770',
  'PYTHON': '#F9A661',
  'REACT': '#F4C7FA',
  'NEXTJS': '#F8D14B',
  'SUPABASE': '#B8D22F',
  'FLUTTER': '#8CDDFF',
}

export default function ProjectPage() {
  const params = useParams()
  const projectTitle = decodeURIComponent(params.title as string)
  const project = projects.find(p => p.title === projectTitle)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/projects" className="text-blue-400 hover:underline mb-8 inline-block">&larr; Back to Projects</Link>
        <h1 className="text-5xl font-light mb-6 font-inconsolata">{project.title}</h1>
        <div className="mb-8">
          <Image src={project.image} alt={project.title} width={800} height={400} className="rounded-lg" />
        </div>
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div>
            <h2 className="text-xl font-semibold mb-2">Year</h2>
            <p>{project.year}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{ backgroundColor: techColors[tag] }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Link</h2>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              View Project
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <p className="text-lg leading-relaxed">{project.description}</p>
        </div>
      </div>
    </div>
  )
}

