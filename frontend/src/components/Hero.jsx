import { ArrowRight, Github, Linkedin, Twitter, Download } from 'lucide-react'

const Hero = ({ scrollToSection }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-24 md:py-32 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeIn text-center md:text-left">

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 dark:text-white tracking-tight leading-[1.1]">
                Christian Catuday
              </h1>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed font-light mx-auto md:mx-0">
              I build clean and functional web apps using modern tools. I care about making things simple, fast, and easy to use.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="group cursor-pointer inline-flex items-center gap-2 px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200"
              >
                View Work
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
              {/* <a
                href="/CC_Resume.pdf"
                download="Christian_Catuday_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-2.5 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-200"
              >
                <Download size={16} />
                Resume
              </a> */}
            </div>

            {/* Social Links */}
            <div className="flex gap-5 pt-4 justify-center md:justify-start">
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

          {/* Right Content - Profile Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
                <img
                  src="/images/me_2.jpg"
                  alt="Christian Catuday"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
