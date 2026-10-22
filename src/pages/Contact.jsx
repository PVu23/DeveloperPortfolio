function Contact() {
  const contactLinks = [
    {
      id: 1,
      label: 'Email',
      value: 'phillipvu3635@gmail.com',
      href: 'mailto:phillipvu3635@gmail.com',
    },
    {
      id: 2,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/phillip-vu-48520b352/',
    },
    {
      id: 3,
      label: 'GitHub',
      value: '@PVu23',
      href: 'https://github.com/PVu23',
    },
  ]

  return (
    <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

      {/* Page Header */}
      <section className="pt-16 md:pt-24 pb-24 md:pb-32">

        <div className="flex items-center gap-4 mb-10 md:mb-14">

          <span className="text-xs font-semibold uppercase tracking-[0.2em]">
            Contact
          </span>

          <div className="h-px flex-1 bg-black/20"></div>

          <span className="hidden sm:block text-xs uppercase tracking-[0.2em] text-black/50">
            Let's Connect
          </span>

        </div>


        <div className="grid md:grid-cols-12 gap-10">

          <div className="md:col-span-9">

            <h1 className="text-[clamp(3.5rem,8vw,7.5rem)] font-medium leading-[0.92] tracking-[-0.055em]">
              Let's build
              <br />
              something together.
            </h1>

          </div>


          <div className="md:col-span-3 md:flex md:items-end">

            <p className="text-base md:text-lg leading-relaxed text-black/60">
              I'm always interested in opportunities to build, test, and
              improve software while continuing to grow as a developer.
            </p>

          </div>

        </div>

      </section>


      {/* Contact Links */}
      <section className="border-t border-black/20">

        {contactLinks.map((contact, index) => (

          <a
            key={contact.id}
            href={contact.href}
            target={contact.label === 'Email' ? undefined : '_blank'}
            rel={contact.label === 'Email' ? undefined : 'noreferrer'}
            className="
              group
              grid
              md:grid-cols-12
              gap-4
              md:gap-8
              items-center
              py-8
              md:py-10
              border-b
              border-black/20
            "
          >

            {/* Number */}
            <div className="md:col-span-1">

              <span className="text-xs tracking-[0.15em] text-black/40">
                {String(index + 1).padStart(2, '0')}
              </span>

            </div>


            {/* Contact Type */}
            <div className="md:col-span-3">

              <p className="text-xs uppercase tracking-[0.2em] text-black/50">
                {contact.label}
              </p>

            </div>


            {/* Contact Value */}
            <div className="md:col-span-6">

              <p className="
                text-xl
                sm:text-2xl
                md:text-3xl
                font-medium
                tracking-[-0.025em]
                break-words
                transition-transform
                duration-300
                group-hover:translate-x-2
              ">
                {contact.value}
              </p>

            </div>


            {/* Arrow */}
            <div className="md:col-span-2 md:text-right">

              <span className="
                inline-block
                text-3xl
                transition-transform
                duration-300
                group-hover:translate-x-2
                group-hover:-translate-y-2
              ">
                ↗
              </span>

            </div>

          </a>

        ))}

      </section>


      {/* Closing Message */}
      <section className="py-24 md:py-32">

        <div className="grid md:grid-cols-12 gap-8">

          <div className="md:col-start-4 md:col-span-9">

            <p className="text-xs uppercase tracking-[0.2em] text-black/50 mb-6">
              Thanks for stopping by
            </p>

            <p className="text-3xl md:text-5xl font-medium tracking-[-0.04em] leading-tight max-w-4xl">
              Have an opportunity, project, or just want to connect?
              I'd be happy to hear from you.
            </p>

          </div>

        </div>

      </section>

    </main>
  )
}

export default Contact