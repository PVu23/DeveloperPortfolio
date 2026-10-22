function Resume() {
  return (
    <section
      id="resume"
      className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32"
    >

      <div className="grid md:grid-cols-12 gap-8">

        {/* Section Label */}
        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-[0.2em] text-black/50">
            01 / Resume
          </p>
        </div>


        {/* Resume Content */}
        <div className="md:col-span-9">

          {/* Heading */}
          <div className="max-w-3xl mb-14">

            <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.04em]">
              My resume.
            </h2>

            <p className="mt-6 text-black/60 leading-relaxed max-w-xl">
              A closer look at my experience, technical skills,
              education, and software development background.
            </p>

          </div>


          {/* Resume Preview */}
          <a
            href="/Phillip-Vu-Resume.pdf"
            download="Phillip-Vu-Resume.pdf"
            className="group block max-w-4xl"
            aria-label="Download Phillip Vu's resume"
          >

            <div
              className="
                relative
                aspect-[8.5/11]
                overflow-hidden
                border
                border-black/20
                bg-white
                shadow-sm
                transition-all
                duration-300
                group-hover:-translate-y-2
                group-hover:shadow-xl
              "
            >

              <iframe
                src="/Phillip-Vu-Resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
                title="Phillip Vu Resume"
                className="w-full h-full pointer-events-none"
              />


              {/* Hover Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  bg-black/0
                  group-hover:bg-black/10
                  transition-colors
                  duration-300
                "
              >

                <span
                  className="
                    opacity-0
                    group-hover:opacity-100
                    bg-[#f4f1e8]
                    px-5
                    py-3
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    transition-opacity
                  "
                >
                  Download Resume ↓
                </span>

              </div>

            </div>


            {/* Resume Caption */}
            <div className="flex items-center justify-between mt-4">

              <div>
                <span className="block text-sm font-medium">
                  Phillip Vu
                </span>

                <span className="block mt-1 text-xs uppercase tracking-[0.15em] text-black/50">
                  Resume · PDF
                </span>
              </div>

              <span
                className="
                  text-2xl
                  transition-transform
                  duration-300
                  group-hover:translate-y-1
                "
              >
                ↓
              </span>

            </div>

          </a>

        </div>

      </div>

    </section>
  )
}

export default Resume