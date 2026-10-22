import { Link, useParams } from 'react-router-dom'
import projects from '../data/projects.js'

function ProjectDetail() {
  const { slug } = useParams()

  const project = projects.find((project) => project.slug === slug)

  if (!project) {
    return (
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">

        <p className="text-xs uppercase tracking-[0.2em] text-black/50 mb-6">
          404 / Project
        </p>

        <h1 className="text-5xl md:text-7xl font-medium tracking-[-0.05em]">
          Project not found.
        </h1>

        <Link
          to="/projects"
          className="group inline-flex items-center gap-3 mt-10 text-sm font-semibold uppercase tracking-[0.12em]"
        >
          <span className="transition-transform group-hover:-translate-x-1">
            ←
          </span>
          Back to Projects
        </Link>

      </main>
    )
  }

  return (
    <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

      {/* Back Navigation */}
      <div className="pt-10 md:pt-14">
        <Link
          to="/projects"
          className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em]"
        >
          <span className="transition-transform group-hover:-translate-x-1">
            ←
          </span>

          Back to Projects
        </Link>
      </div>


      {/* Project Hero */}
      <header className="pt-16 md:pt-24 pb-20 md:pb-28">

        <div className="flex items-center gap-4 mb-10 md:mb-14">

          <span className="text-xs font-semibold uppercase tracking-[0.2em]">
            Project
          </span>

          <div className="h-px flex-1 bg-black/20"></div>

          <span className="hidden sm:block text-xs uppercase tracking-[0.2em] text-black/50">
            Case Study
          </span>

        </div>


        <div className="grid md:grid-cols-12 gap-10">

          {/* Project Title */}
          <div className="md:col-span-8">
            <h1 className="text-[clamp(3.5rem,7vw,7rem)] font-medium leading-[0.92] tracking-[-0.055em]">
              {project.title}
            </h1>
          </div>


          {/* Description */}
          <div className="md:col-span-4 md:flex md:items-end">
            <p className="text-lg leading-relaxed text-black/60">
              {project.description}
            </p>
          </div>

        </div>


        {/* Technologies */}
        <div className="grid md:grid-cols-12 gap-8 mt-16">

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-black/50">
              Technologies
            </p>
          </div>

          <div className="md:col-span-9 flex flex-wrap gap-2">

            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="
                  px-3
                  py-1.5
                  border
                  border-black/25
                  text-xs
                  font-medium
                  tracking-wide
                  rounded-sm
                "
              >
                {technology}
              </span>
            ))}

          </div>

        </div>

      </header>


      {/* Project Overview */}
      <section className="border-t border-black/20 py-20 md:py-28">

        <div className="grid md:grid-cols-12 gap-8">

          {/* Section Number */}
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-black/50">
              01 / Overview
            </p>
          </div>


          {/* Overview Content */}
          <div className="md:col-span-9">

            {/* Problem */}
            <div className="grid sm:grid-cols-12 gap-6 pb-12 border-b border-black/20">

              <div className="sm:col-span-4">
                <h2 className="text-2xl md:text-3xl font-medium">
                  The Problem
                </h2>
              </div>

              <div className="sm:col-span-8">
                <p className="text-lg text-black/60 leading-relaxed">
                  {project.problem}
                </p>
              </div>

            </div>


            {/* Goal */}
            <div className="grid sm:grid-cols-12 gap-6 py-12 border-b border-black/20">

              <div className="sm:col-span-4">
                <h2 className="text-2xl md:text-3xl font-medium">
                  Goal
                </h2>
              </div>

              <div className="sm:col-span-8">
                <p className="text-lg text-black/60 leading-relaxed">
                  {project.goal}
                </p>
              </div>

            </div>


            {/* Role */}
            <div className="grid sm:grid-cols-12 gap-6 pt-12">

              <div className="sm:col-span-4">
                <h2 className="text-2xl md:text-3xl font-medium">
                  My Role
                </h2>
              </div>

              <div className="sm:col-span-8">
                <p className="text-lg text-black/60 leading-relaxed">
                  {project.role}
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Features */}
      <section className="border-t border-black/20 py-20 md:py-28">

        <div className="grid md:grid-cols-12 gap-8">

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-black/50">
              02 / Features
            </p>
          </div>


          <div className="md:col-span-9">

            <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.04em] mb-12">
              What I built.
            </h2>


            <div className="border-t border-black/20">

              {project.features.map((feature, index) => (
                <div
                  key={feature}
                  className="grid grid-cols-12 gap-4 py-6 border-b border-black/20"
                >

                  <div className="col-span-2 sm:col-span-1">
                    <span className="text-xs tracking-[0.15em] text-black/40">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="col-span-10 sm:col-span-11">
                    <p className="text-lg md:text-xl leading-relaxed">
                      {feature}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* Reflection */}
      <section className="border-t border-black/20 py-20 md:py-28">

        <div className="grid md:grid-cols-12 gap-8">

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-black/50">
              03 / Reflection
            </p>
          </div>


          <div className="md:col-span-9">

            <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.04em] mb-14">
              What I learned.
            </h2>


            {/* Challenges */}
            <div className="grid sm:grid-cols-12 gap-6 pb-12 border-b border-black/20">

              <div className="sm:col-span-4">
                <h3 className="text-2xl font-medium">
                  Challenges
                </h3>
              </div>

              <div className="sm:col-span-8">
                <p className="text-lg text-black/60 leading-relaxed">
                  {project.challenges}
                </p>
              </div>

            </div>


            {/* Lessons */}
            <div className="grid sm:grid-cols-12 gap-6 py-12 border-b border-black/20">

              <div className="sm:col-span-4">
                <h3 className="text-2xl font-medium">
                  Lessons Learned
                </h3>
              </div>

              <div className="sm:col-span-8">
                <p className="text-lg text-black/60 leading-relaxed">
                  {project.lessons}
                </p>
              </div>

            </div>


            {/* Future Improvements */}
            <div className="grid sm:grid-cols-12 gap-6 pt-12">

              <div className="sm:col-span-4">
                <h3 className="text-2xl font-medium">
                  Future Improvements
                </h3>
              </div>

              <div className="sm:col-span-8">
                <p className="text-lg text-black/60 leading-relaxed">
                  {project.futureImprovements}
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Bottom Navigation */}
      <section className="border-t border-black/20 py-16 md:py-20">

        <Link
          to="/projects"
          className="group flex items-center justify-between"
        >

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-black/50 mb-3">
              Explore
            </p>

            <p className="text-3xl md:text-5xl font-medium tracking-[-0.04em]">
              Back to all projects
            </p>
          </div>

          <span className="
            text-4xl
            md:text-5xl
            transition-transform
            duration-300
            group-hover:-translate-x-2
          ">
            ←
          </span>

        </Link>

      </section>

    </main>
  )
}

export default ProjectDetail