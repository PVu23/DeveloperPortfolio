import experiences from '../data/experiences.js'
import skills from '../data/skills.js'

function Experience() {
  return (
    <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

      {/* Page Header */}
      <section className="pt-16 md:pt-24 pb-24 md:pb-32">

        <div className="flex items-center gap-4 mb-10 md:mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em]">
            My Background
          </span>

          <div className="h-px flex-1 bg-black/20"></div>

          <span className="hidden sm:block text-xs uppercase tracking-[0.2em] text-black/50">
            Experience
          </span>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-9">
            <h1 className="text-[clamp(3.5rem,8vw,7.5rem)] font-medium leading-[0.92] tracking-[-0.055em]">
              Skills &
              <br />
              Experience.
            </h1>
          </div>

          <div className="md:col-span-3 md:flex md:items-end">
            <p className="text-base md:text-lg leading-relaxed text-black/60">
              A look at the technologies I've worked with and the experience
              I've gained through projects, work, and education.
            </p>
          </div>
        </div>

      </section>


      {/* Skills */}
      <section className="border-t border-black/20 py-20 md:py-28">

        <div className="grid md:grid-cols-12 gap-8">

          {/* Section Label */}
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-black/50">
              01 / Skills
            </p>
          </div>

          {/* Skills Content */}
          <div className="md:col-span-9">

            <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.04em] mb-10">
              Technologies I work with.
            </h2>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    px-4 py-2
                    border border-black/25
                    text-sm font-medium
                    tracking-wide
                    rounded-sm
                    transition-colors
                    hover:bg-black
                    hover:text-[#f4f1e8]
                  "
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>
        </div>

      </section>


      {/* Experience */}
      <section className="border-t border-black/20 py-20 md:py-28">

        <div className="grid md:grid-cols-12 gap-8">

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-black/50">
              02 / Experience
            </p>
          </div>

          <div className="md:col-span-9">

            <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.04em] mb-12">
              Where I've worked.
            </h2>

            <div className="border-t border-black/20">

              {experiences.map((experience) => (
                <article
                  key={experience.id}
                  className="grid sm:grid-cols-12 gap-6 py-10 border-b border-black/20"
                >

                  <div className="sm:col-span-3">
                    <p className="text-xs uppercase tracking-[0.15em] text-black/50">
                      {experience.date}
                    </p>
                  </div>

                  <div className="sm:col-span-5">
                    <h3 className="text-2xl md:text-3xl font-medium tracking-[-0.025em]">
                      {experience.title}
                    </h3>

                    <p className="mt-2 text-sm uppercase tracking-[0.12em] text-black/50">
                      {experience.company}
                    </p>
                  </div>

                  <div className="sm:col-span-4">
                    <p className="text-black/60 leading-relaxed">
                      {experience.description}
                    </p>
                  </div>

                </article>
              ))}

            </div>

          </div>
        </div>

      </section>


      {/* Education */}
      <section className="border-t border-black/20 py-20 md:py-28">

        <div className="grid md:grid-cols-12 gap-8">

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-black/50">
              03 / Education
            </p>
          </div>

          <div className="md:col-span-9">

            <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.04em] mb-12">
              Education.
            </h2>

            <div className="border-t border-b border-black/20 py-10">

              <div className="grid sm:grid-cols-12 gap-6">

                <div className="sm:col-span-8">
                  <h3 className="text-2xl md:text-3xl font-medium tracking-[-0.025em]">
                    Georgia Gwinnett College
                  </h3>

                  <p className="mt-3 text-black/60">
                    Information Technology — Software Development
                  </p>
                </div>

                <div className="sm:col-span-4 sm:text-right">
                  <p className="text-xs uppercase tracking-[0.15em] text-black/50">
                    Education
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>

      </section>

    </main>
  )
}

export default Experience