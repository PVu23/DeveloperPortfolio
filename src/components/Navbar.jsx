import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <nav className="bg-white text-gray-900 border-b border-gray-200">
        <div className="flex items-center justify-between  px-8 py-5">
            <Link to="/" className="font-semibold text-xl">Phillip Vu</Link>
            <div className="hidden md:flex gap-8">
                <NavLink to="/" className={({ isActive }) => 
                    `px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors ${ 
                        isActive ? 'bg-blue-100 text-blue-700' : 'bg-gray-50'
                        }`
                    }>Home</NavLink>
                <NavLink to="/experience" className={({ isActive }) => 
                    `px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors ${ 
                        isActive ? 'bg-blue-100 text-blue-700' : 'bg-gray-50'
                        }`
                    }>Experience</NavLink>
                <NavLink to="/projects" className={({ isActive }) => 
                    `px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors ${ 
                        isActive ? 'bg-blue-100 text-blue-700' : 'bg-gray-50'
                        }`
                    }>Projects</NavLink>
                <NavLink to="/contact" className={({ isActive }) => 
                    `px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors ${ 
                        isActive ? 'bg-blue-100 text-blue-700' : 'bg-gray-50'
                        }`
                    }>Contact</NavLink>
            </div>
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMenuOpen}
                className="md:hidden px-3 py-2 rounded-lg bg-gray-50 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
                {isMenuOpen ? '✕' : '☰'}
            </button>
        </div>
        {isMenuOpen && (
        <div className="flex flex-col gap-2 px-8 pb-5 md:hidden text-left">
            <NavLink to="/" className={({ isActive }) => 
                    `px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors ${ 
                        isActive ? 'bg-blue-100 text-blue-700' : 'bg-gray-50'
                        }`
                    } onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                <NavLink to="/experience" className={({ isActive }) => 
                    `px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors ${ 
                        isActive ? 'bg-blue-100 text-blue-700' : 'bg-gray-50'
                        }`
                    } onClick={() => setIsMenuOpen(false)}>Experience</NavLink>
                <NavLink to="/projects" className={({ isActive }) => 
                    `px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors ${ 
                        isActive ? 'bg-blue-100 text-blue-700' : 'bg-gray-50'
                        }`
                    } onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
                <NavLink to="/contact" className={({ isActive }) => 
                    `px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors ${ 
                        isActive ? 'bg-blue-100 text-blue-700' : 'bg-gray-50'
                        }`
                    } onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
        </div>
    )}
    </nav>
  )
}

export default Navbar