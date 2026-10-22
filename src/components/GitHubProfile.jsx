import { useEffect, useState } from 'react'
import getGitHubProfile from '../services/github.js'

function GitHubProfile() {
  const [profile, setProfile] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadProfile() {
      try {
        const data = await getGitHubProfile()
        setProfile(data)
      } catch (error) {
        setError(error.message)
      }
    }

    loadProfile()
  }, [])

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 md:py-32">

      <div className="grid md:grid-cols-12 gap-8">

        {/* Section Label */}
        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-[0.2em] text-black/50">
            02 / GitHub
          </p>
        </div>


        {/* GitHub Content */}
        <div className="md:col-span-9">

          {/* Heading */}
          <div className="max-w-4xl">

            <h2 className="text-4xl md:text-6xl font-medium tracking-[-0.04em]">
              Follow my work.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-black/60 max-w-2xl">
              Explore my repositories, projects, experiments, and the code
              behind some of the work featured throughout this portfolio.
            </p>

          </div>


          {/* GitHub Profile */}
          <div className="mt-16 border-t border-black/20">

            {error && (
              <div className="py-10">
                <p className="text-black/50">
                  Unable to load GitHub profile.
                </p>
              </div>
            )}

            {!profile && !error && (
              <div className="py-10">
                <p className="text-black/50">
                  Loading GitHub profile...
                </p>
              </div>
            )}

            {profile && (
              <div className="grid lg:grid-cols-12 gap-10 py-10 border-b border-black/20">

                {/* GitHub Profile */}
                <div className="lg:col-span-7">

                  <div className="flex items-center gap-5">

                    <img
                      src={profile.avatar_url}
                      alt={`${profile.login} GitHub profile`}
                      className="w-16 h-16 rounded-full"
                    />

                    <div>
                      <p className="text-2xl md:text-3xl font-medium tracking-[-0.025em]">
                        {profile.name || 'Phillip Vu'}
                      </p>

                      <p className="mt-1 text-sm text-black/50">
                        @{profile.login}
                      </p>
                    </div>

                  </div>

                  {profile.bio && (
                    <p className="mt-8 text-black/60 leading-relaxed max-w-xl">
                      {profile.bio}
                    </p>
                  )}

                </div>


                {/* Stats */}
                <div className="lg:col-span-5">

                  <div className="grid grid-cols-2 gap-8">

                    <div>
                      <p className="text-4xl md:text-5xl font-medium tracking-[-0.04em]">
                        {profile.public_repos}
                      </p>

                      <p className="mt-2 text-xs uppercase tracking-[0.15em] text-black/50">
                        Public Repositories
                      </p>
                    </div>

                    <div>
                      <p className="text-4xl md:text-5xl font-medium tracking-[-0.04em]">
                        {profile.followers}
                      </p>

                      <p className="mt-2 text-xs uppercase tracking-[0.15em] text-black/50">
                        Followers
                      </p>
                    </div>

                  </div>

                </div>

              </div>
            )}

          </div>


          {/* GitHub Link */}
          <div className="mt-8">

            <a
              href="https://github.com/PVu23"
              target="_blank"
              rel="noreferrer"
              className="
                group
                inline-flex
                items-center
                gap-3
                text-sm
                font-semibold
                uppercase
                tracking-[0.12em]
              "
            >
              View my GitHub

              <span className="
                text-lg
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              ">
                ↗
              </span>
            </a>

          </div>

        </div>

      </div>

    </section>
  )
}

export default GitHubProfile