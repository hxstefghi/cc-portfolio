import { Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-gray-600 dark:text-gray-400 font-light">
            © {currentYear} Christian Catuday
          </div>
          
          {/* Social Links */}
          <div className="flex gap-6">
            <a 
              href="https://github.com/hxstefghi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-gray-600 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/christian-catuday-627991318" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-gray-600 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://twitter.com/hxste_w3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-gray-600 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
