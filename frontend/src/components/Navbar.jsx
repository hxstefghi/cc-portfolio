import { useState } from 'react'
import { useDarkMode } from '../context/DarkModeContext'
import { Sun, Moon, Menu, X } from 'lucide-react'

const Navbar = ({ scrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isDark, toggleDarkMode } = useDarkMode()

  const handleNavClick = (section) => {
    scrollToSection(section)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm z-50 border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="text-base font-medium tracking-tight text-gray-900 dark:text-white">
              CC
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('about')}
                className="cursor-pointer text-[15px] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="cursor-pointer text-[15px] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="cursor-pointer text-[15px] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                Certificates
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="cursor-pointer text-[15px] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              >
                Contact
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="cursor-pointer p-1.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-600 dark:text-gray-400"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-200 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-16 left-0 right-0 mx-6 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg transform transition-all duration-200 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Menu Items */}
          <div className="py-4 px-3 space-y-1">
            <button
              onClick={() => handleNavClick('about')}
              className="block w-full text-left py-2 px-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('projects')}
              className="block w-full text-left py-2 px-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md transition-colors duration-200"
            >
              Projects
            </button>
            <button
              onClick={() => handleNavClick('skills')}
              className="block w-full text-left py-2 px-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md transition-colors duration-200"
            >
              Skills
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="block w-full text-left py-2 px-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md transition-colors duration-200"
            >
              Contact
            </button>

            <div className="pt-3 mt-3 border-t border-gray-200 dark:border-gray-800">
              <button
                onClick={toggleDarkMode}
                className="flex items-center justify-between w-full py-2 px-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md transition-colors duration-200"
              >
                <span>Theme</span>
                <span className="text-xs">{isDark ? <Sun size={16} /> : <Moon size={16} />}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
