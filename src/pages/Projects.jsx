import ProjectCard from '../components/ProjectCard.jsx'
import projects from '../data/projects.js'
import { useState } from 'react'

function Projects() {
  const [searchTerm, setSearchTerm] = useState("")
  const filteredProjects = projects.filter((project) => project.title.toLowerCase().includes(searchTerm.toLowerCase()))
  
  return (
    <main className="max-w-6xl mx-auto px-8 py-16">
      <section className="mb-12">
        <p className="text-blue-600 font-medium mb-2">
          My Work
        </p>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Projects
        </h1>

        <p className="mt-4 text-gray-600 max-w-2xl">
          A collection of projects I've worked on.
        </p>

      </section>

        <div className="mb-10">
          <input
            onChange={(event) => setSearchTerm(event.target.value) }
            value={searchTerm}
            type="text"
            placeholder="Search projects..."
            className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      

      <section className="grid md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            slug={project.slug}
          />
        ))}
      </section>
    </main>
  )
}

export default Projects