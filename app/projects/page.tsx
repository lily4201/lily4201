"use client"

import { useState } from "react"
import Link from "next/link"
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

export default function Projects() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-[120px] font-light mb-6 font-inconsolata">My Projects</h1>
        <p className="text-2xl mb-16 max-w-3xl tracking-wide font-open-sans">
          I'VE WORKED ON A VARIETY OF DIFFERENT TYPES OF PROJECTS
        </p>

        {/* Technology Tags */}
        <div className="flex gap-4 flex-wrap mb-16">
          {Object.entries(techColors).map(([tech, color]) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
              className="px-8 py-3 rounded-full flex items-center text-black font-medium transition-all duration-200 ease-in-out"
              style={{
                backgroundColor: color,
                opacity: selectedTech && selectedTech !== tech ? 0.5 : 1,
              }}
            >
              <img
                src={`/black-${tech.toLowerCase().replace(' ', '')}-logo.svg`}
                alt={`${tech} logo`}
                className="w-5 h-5 mr-3"
              />
              {tech}
            </button>
          ))}
        </div>

        {/* Projects Table */}
        <table className="w-full border-t border-white/20">
          <thead>
            <tr className="text-left">
              <th className="py-4 font-normal text-white/60 font-open-sans">NO.</th>
              <th className="py-4 font-normal text-white/60 font-open-sans">PROJECT</th>
              <th className="py-4 font-normal text-white/60 font-open-sans">SERVICES</th>
              <th className="py-4 font-normal text-white/60 font-open-sans">YEAR</th>
            </tr>
          </thead>
          <tbody>
            {projects
              .filter(project => !selectedTech || project.tags.includes(selectedTech))
              .map((project, index) => (
                <tr key={project.title} className="border-t border-white/20 hover:bg-white/5 transition-colors duration-200">
                  <td className="py-8 font-inconsolata text-2xl">{String(index + 1).padStart(2, '0')}</td>
                  <td className="py-8 font-inconsolata text-2xl">
                    <Link href={`/projects/${encodeURIComponent(project.title)}`} className="hover:text-blue-400 transition-colors duration-200">
                      {project.title}
                    </Link>
                  </td>
                  <td className="py-8">
                    <div className="flex gap-2">
                      {project.tags.map((tag) => (
                        <div
                          key={tag}
                          className="w-8 h-8 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: techColors[tag] }}
                        >
                          <img
                            src={`/black-${tag.toLowerCase().replace(' ', '')}-logo.svg`}
                            alt={tag}
                            className="w-4 h-4"
                          />
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="py-8 font-inconsolata text-2xl">{project.year}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

