import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    {
      number: '01',
      name: 'Home',
      path: '/',
    },
    {
      number: '02',
      name: 'Experience',
      path: '/experience',
    },
    {
      number: '03',
      name: 'Projects',
      path: '/projects',
    },
    {
      number: '04',
      name: 'Contact',
      path: '/contact',
    },
  ]

  return (
    <nav className="relative z-50">

      {/* Desktop / Main Navigation */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <div className="flex items-center justify-between min-h-20 border-b border-black/20">

          {/* Name / Logo */}
          <Link
            to="/"
            className="group flex items-center gap-3"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="font-semibold text-lg tracking-[-0.02em]">
              Phillip Vu
            </span>

            <span className="hidden sm:block w-2 h-2 rounded-full bg-black transition-transform group-hover:scale-150"></span>
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `
                    group
                    relative
                    flex
                    items-start
                    gap-2
                    py-2
                    text-sm
                    transition-opacity
                    ${
                      isActive
                        ? 'opacity-100'
                        : 'opacity-50 hover:opacity-100'
                    }
                  `
                }
              >

                <span className="text-[9px] tracking-[0.12em] mt-0.5">
                  {link.number}
                </span>

                <span className="font-medium">
                  {link.name}
                </span>

              </NavLink>
            ))}

          </div>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={
              isMenuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={isMenuOpen}
            className="
              md:hidden
              flex
              items-center
              gap-3
              text-xs
              uppercase
              tracking-[0.15em]
              font-medium
            "
          >

            <span>
              {isMenuOpen ? 'Close' : 'Menu'}
            </span>

            <span className="text-lg">
              {isMenuOpen ? '×' : '+'}
            </span>

          </button>

        </div>

      </div>


      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#f4f1e8]">

          <div className="max-w-7xl mx-auto px-6 sm:px-8">

            <div className="py-8 border-b border-black/20">

              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `
                      group
                      grid
                      grid-cols-12
                      items-center
                      py-5
                      border-b
                      border-black/15
                      ${
                        isActive
                          ? 'opacity-100'
                          : 'opacity-50'
                      }
                    `
                  }
                >

                  {/* Number */}
                  <span className="col-span-2 text-xs tracking-[0.15em]">
                    {link.number}
                  </span>


                  {/* Page Name */}
                  <span className="
                    col-span-8
                    text-3xl
                    font-medium
                    tracking-[-0.035em]
                  ">
                    {link.name}
                  </span>


                  {/* Arrow */}
                  <span className="
                    col-span-2
                    text-right
                    text-xl
                    transition-transform
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  ">
                    ↗
                  </span>

                </NavLink>
              ))}

            </div>

          </div>

        </div>
      )}

    </nav>
  )
}

export default Navbar