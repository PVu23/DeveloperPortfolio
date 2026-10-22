import Hero from '../components/Hero.jsx'
import GitHubProfile from '../components/GitHubProfile.jsx'
import Resume from '../components/Resume.jsx'

function Home() {
  return (
    <main>
      <Hero />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="h-px bg-black/20"></div>
      </div>

      <Resume />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="h-px bg-black/20"></div>
      </div>

      <GitHubProfile />
    </main>
  )
}

export default Home