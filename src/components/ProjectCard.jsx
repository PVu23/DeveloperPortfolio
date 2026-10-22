import { Link } from 'react-router-dom'

function ProjectCard({
  title,
  description,
  technologies,
  slug,
  number,
}) {
  return (
    <article className="group border-b border-black/20 py-10 md:py-14">

      <Link
        to={`/projects/${slug}`}
        className="grid md:grid-cols-12 gap-6 md:gap-8"
      >

        {/* Project Number */}
        <div className="md:col-span-1">
          <span className="text-xs tracking-[0.15em] text-black/40">
            {String(number).padStart(2, '0')}
          </span>
        </div>


        {/* Project Title */}
        <div className="md:col-span-4">
          <h2 className="
            text-3xl
            md:text-4xl
            font-medium
            tracking-[-0.035em]
            transition-transform
            duration-300
            group-hover:translate-x-2
          ">
            {title}
          </h2>
        </div>


        {/* Description + Technologies */}
        <div className="md:col-span-5">

          <p className="text-black/60 leading-relaxed max-w-lg">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="
                  px-3
                  py-1.5
                  border
                  border-black/20
                  text-xs
                  font-medium
                  rounded-sm
                "
              >
                {technology}
              </span>
            ))}
          </div>

        </div>


        {/* Arrow */}
        <div className="md:col-span-2 flex md:justify-end md:items-start">

          <span className="
            text-3xl
            transition-transform
            duration-300
            group-hover:translate-x-2
            group-hover:-translate-y-2
          ">
            ↗
          </span>

        </div>

      </Link>

    </article>
  )
}

export default ProjectCard