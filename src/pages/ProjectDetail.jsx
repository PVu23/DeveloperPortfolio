import { Link, useParams } from 'react-router-dom'
import projects from '../data/projects.js'

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((project) => project.slug === slug)

  if (!project) {
    return (
      <main className="max-w-6xl mx-auto px-8 py-16">
        <h1 className="text-3xl font-bold">
          Project not found
        </h1>

        <Link
          to="/projects"
          className="inline-block mt-6 text-blue-600 hover:text-blue-700"
        >
          ← Back to Projects
        </Link>
      </main>
    )
  }

  return (
    <main className="max-w-5xl mx-auto px-8 py-16">

      <Link
        to="/projects"
        className="text-blue-600 font-medium hover:text-blue-700"
      >
        ← Back to Projects
      </Link>

      <header className="mt-8 mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          {project.title}
        </h1>

        <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-3xl">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm"
            >
              {technology}
            </span>
          ))}
        </div>
      </header>

      <div className="space-y-14">

        <section>
          <h2 className="text-2xl font-bold mb-4">
            The Problem
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {project.problem}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            Goal
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {project.goal}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            My Role
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {project.role}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            Features
          </h2>

          <ul className="space-y-3">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex gap-3 text-gray-600"
              >
                <span className="text-blue-600">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            Challenges
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {project.challenges}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            Lessons Learned
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {project.lessons}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            Future Improvements
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {project.futureImprovements}
          </p>
        </section>

      </div>
    </main>
  )
}

export default ProjectDetail