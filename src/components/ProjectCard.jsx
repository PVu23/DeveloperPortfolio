import { Link } from 'react-router-dom'

function ProjectCard({ title, description, technologies, slug }) {
  return (
    <article className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold">
        {title}
      </h2>

      <p className="mt-3 text-gray-600 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-lg"
          >
            {technology}
          </span>
        ))}
      </div>

      <Link
        to={`/projects/${slug}`}
        className="inline-block mt-6 text-blue-600 font-medium hover:text-blue-700"
      >
        View Project →
      </Link>
    </article>
  )
}

export default ProjectCard