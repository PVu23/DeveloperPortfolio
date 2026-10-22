import ProjectCard from '../components/ProjectCard.jsx'
import projects from '../data/projects.js'
import { useState } from 'react'

function Projects() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

      {/* Page Header */}
      <section className="pt-16 md:pt-24 pb-20 md:pb-28">

        <div className="flex items-center gap-4 mb-10 md:mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em]">
            My Work
          </span>

          <div className="h-px flex-1 bg-black/20"></div>

          <span className="hidden sm:block text-xs uppercase tracking-[0.2em] text-black/50">
            Selected Projects
          </span>
        </div>

        <div className="grid md:grid-cols-12 gap-8">

          <div className="md:col-span-9">
            <h1 className="text-[clamp(3.5rem,8vw,7.5rem)] font-medium leading-[0.92] tracking-[-0.055em]">
              Things I've
              <br />
              worked on.
            </h1>
          </div>

          <div className="md:col-span-3 md:flex md:items-end">
            <p className="text-base md:text-lg leading-relaxed text-black/60">
              A collection of projects I've worked on across software
              development, web development, databases, and testing.
            </p>
          </div>

        </div>

      </section>


      {/* Search */}
      <section className="border-t border-black/20 py-8">

        <div className="grid md:grid-cols-12 gap-6 md:items-center">

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-black/50">
              Search Projects
            </p>
          </div>

          <div className="md:col-span-9">
            <div className="relative">

              <input
                onChange={(event) => setSearchTerm(event.target.value)}
                value={searchTerm}
                type="text"
                placeholder="Type a project name..."
                className="
                  w-full
                  bg-transparent
                  border-0
                  border-b
                  border-black/30
                  py-4
                  pr-12
                  text-xl
                  md:text-2xl
                  placeholder:text-black/30
                  focus:outline-none
                  focus:border-black
                  transition-colors
                "
              />

              <span className="absolute right-0 top-1/2 -translate-y-1/2 text-xl">
                ↘
              </span>

            </div>
          </div>

        </div>

      </section>


      {/* Projects */}
      <section className="border-t border-black/20">

        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              slug={project.slug}
              number={index + 1}
            />
          ))
        ) : (
          <div className="grid md:grid-cols-12 py-20 border-b border-black/20">

            <div className="md:col-start-4 md:col-span-9">
              <p className="text-2xl md:text-3xl font-medium">
                No projects found.
              </p>

              <p className="mt-3 text-black/50">
                Try searching for another project.
              </p>
            </div>

          </div>
        )}

      </section>

    </main>
  )
}

export default Projects