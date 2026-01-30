import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'

const ProjectCard = ({ project, index }) => {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImage((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  const handleIndicatorClick = (e, idx) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImage(idx)
  }

  return (
    <Link
      to={`/project/${project.id}`}
      className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-200 overflow-hidden group flex flex-col h-full cursor-pointer"
    >
      {/* Image Carousel */}
      <div className="relative h-56 bg-gray-100 dark:bg-gray-900 overflow-hidden">
        <img
          src={project.images[currentImage]}
          alt={`${project.title} screenshot ${currentImage + 1}`}
          className="w-full h-full object-cover transition-transform duration-300"
        />
        {project.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-900/90 hover:bg-white dark:hover:bg-gray-900 p-1.5 rounded-md transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={18} className="text-gray-700 dark:text-gray-300" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-900/90 hover:bg-white dark:hover:bg-gray-900 p-1.5 rounded-md transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={18} className="text-gray-700 dark:text-gray-300" />
            </button>
            {/* Image indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {project.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => handleIndicatorClick(e, idx)}
                  className={`h-1 rounded-full transition-all ${idx === currentImage ? 'bg-white w-6' : 'bg-white/50 w-1'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-5 flex flex-col grow">
        <div className="mb-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">{project.title}</h3>
            <ArrowUpRight size={18} className="text-gray-400 dark:text-gray-600 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200 shrink-0 ml-2" />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-light">{project.short_description}</p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.techStack.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="text-xs text-gray-500 dark:text-gray-500 font-light"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-xs text-gray-400 dark:text-gray-600 font-light">+{project.techStack.length - 4}</span>
          )}
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
