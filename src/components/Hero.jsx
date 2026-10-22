import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 md:pt-24 pb-24 md:pb-32">

      {/* Small introduction label */}
      <div className="flex items-center gap-4 mb-10 md:mb-14">
        <span className="text-xs font-semibold uppercase tracking-[0.2em]">
          Software Developer
        </span>

        <div className="h-px flex-1 bg-black/20"></div>

        <span className="hidden sm:block text-xs uppercase tracking-[0.2em] text-black/50">
          Atlanta, GA
        </span>
      </div>

      {/* Main statement */}
      <div className="max-w-5xl">
        <h1 className="text-[clamp(3.2rem,8vw,7.5rem)] font-medium leading-[0.92] tracking-[-0.055em]">
          I build, test,
          <br />
          and improve software
          <br />
          that solves real problems.
        </h1>
      </div>

      {/* Lower hero */}
      <div className="grid md:grid-cols-12 gap-10 md:gap-8 mt-16 md:mt-24">

        {/* Identity / description */}
        <div className="md:col-span-5 md:col-start-1">
          <p className="text-xs uppercase tracking-[0.2em] text-black/50 mb-4">
            Phillip Vu
          </p>

          <p className="text-lg md:text-xl leading-relaxed max-w-md">
            Information Technology graduate focused on software development,
            testing, and building thoughtful digital experiences.
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-4 mt-8">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em]"
            >
              View my work
              <span className="transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </Link>

            <a
              href="#resume"
              className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em]"
            >
              Resume
              <span className="transition-transform group-hover:translate-y-1">
                ↓
              </span>
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="md:col-span-5 md:col-start-8">
          <div className="aspect-[4/5] bg-[#dedbd2] overflow-hidden">
            <img
              src="/phillip-vu.jpeg"
              alt="Phillip Vu"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex justify-between mt-3 text-[11px] uppercase tracking-[0.15em] text-black/50">
            <span>Phillip Vu</span>
            <span>Software Developer</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero