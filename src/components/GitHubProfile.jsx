import { useEffect, useState } from 'react'
import getGitHubProfile from '../services/github.js'

function GitHubProfile() {

    const [profile, setProfile] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        getGitHubProfile().then((data) => {
            setProfile(data)
        }).catch(() => {
            setError("Unable to load GitHub profile.")
        })
    }, [])
    

    if (error) {
        return (
            <p className="max-w-6xl mx-auto px-8 py-8 text-gray-600">
            {error}
            </p>
        )
    }

    if (!profile) {
        return (
            <p>Loading GitHub profile...</p>
        )
    }

    
  return (
    <section className="max-w-6xl mx-auto px-8 py-16">
        <div className="border border-gray-200 rounded-2xl p-6">
            <p className="text-blue-600 font-medium mb-2">
            GitHub
            </p>

            <h2 className="text-2xl font-bold">
            {profile.login}
            </h2>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 mt-6 text-gray-600">
            <div>
                <span className="block text-2xl font-bold text-gray-900">
                {profile.public_repos}
                </span>
                Public Repositories
            </div>

            <div>
                <span className="block text-2xl font-bold text-gray-900">
                {profile.followers}
                </span>
                Followers
            </div>

            <div>
                <span className="block text-2xl font-bold text-gray-900">
                {profile.following}
                </span>
                Following
            </div>
            </div>

            <a
            href={profile.html_url}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 text-blue-600 font-medium hover:text-blue-700"
            >
            View GitHub Profile →
            </a>
        </div>
        </section>
  )
}

export default GitHubProfile