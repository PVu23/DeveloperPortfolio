const skills = [
  'Java',
  'JavaScript',
  'React',
  'SQL',
  'PHP',
  'Laravel',
  'Git',
  'GitHub',
  'HTML',
  'CSS',
]

const experiences = [
  {
    id: 1,
    title: 'Software Developer / IT',
    company: 'Purejoin',
    date: '2026',
    description: 'Worked on software development, testing, debugging, and technical support.',
  },
  {
    id: 2,
    title: 'Software Developer',
    company: 'Next Generation Focus',
    date: '2025',
    description: 'Worked with a development team on a React-based staff dashboard.',
  },
]

function Experience() {

  return (
    <main className="max-w-6xl mx-auto px-8 py-16">

      {/* Page Header */}
      <section className="mb-16">
        <p className="text-blue-600 font-medium mb-2">
          My Background
        </p>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Skills & Experience
        </h1>

        <p className="mt-4 text-gray-600 max-w-2xl leading-relaxed">
          A look at the technologies I've worked with and the experience
          I've gained through projects, work, and education.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-6">
          Skills
        </h2>

        <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
            <span
                key={skill}
                className="px-4 py-2 bg-gray-100 rounded-lg"
            >
                {skill}
            </span>
            ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-6">
          Experience
        </h2>

        <div className="space-y-6">
        {experiences.map((experience) => (
            <div
            key={experience.id}
            className="border border-gray-200 rounded-xl p-6 hover:shadow-sm transition-shadow"
            >
            <h3 className="text-xl font-semibold">
                {experience.title}
            </h3>

            <p className="text-blue-600 mt-1">
                {experience.company} • {experience.date}
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed">
                {experience.description}
            </p>
            </div>
        ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-2xl font-bold mb-6">
          Education
        </h2>

        <div className="border border-gray-200 rounded-xl p-6">
          <h3 className="text-xl font-semibold">
            Georgia Gwinnett College
          </h3>

          <p className="text-gray-600 mt-2">
            Information Technology — Software Development
          </p>
        </div>
      </section>

    </main>
  )
}

export default Experience