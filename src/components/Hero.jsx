import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="items-center gap-12 max-w-6xl mx-auto px-8 py-20 flex flex-col md:flex-row">
        <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Phillip
            </h1>
            <h2 className="mt-3 text-xl md:text-2xl font-semibold text-blue-600">
                Software Developer
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-xl">
                Software developer interested in building a website portfolio and creating things with my mind
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link to="/projects" className="text-center px-5 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">View Projects</Link>
                <a href="#" className="text-center px-5 py-3 rounded-lg bg-gray-100 text-gray-900 font-medium hover:bg-gray-200 transition-colors">Resume</a>
            </div>
        </div>
        <div className='flex-1 flex justify-center'>
            <div className="w-72 h-80 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-500">
                Photo
            </div>
        </div>
    </section>
  )
}

export default Hero