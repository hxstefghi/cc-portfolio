import { useState } from 'react'
import { Link } from 'react-router-dom'

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
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden group flex flex-col h-full cursor-pointer"
    >
      {/* Image Carousel */}
      <div className="relative h-64 bg-gray-100 dark:bg-gray-700 overflow-hidden">
        <img 
          src={project.images[currentImage]} 
          alt={`${project.title} screenshot ${currentImage + 1}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {project.images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            {/* Image indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {project.images.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={(e) => handleIndicatorClick(e, idx)}
                  className={`w-2 h-2 rounded-full transition-all ${idx === currentImage ? 'bg-white w-6' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.short_description}</p>
        </div>
        
        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, idx) => (
            <span 
              key={idx} 
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* View Details Hint */}
        <div className="flex items-center justify-center gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
          <span className="text-sm text-gray-500 dark:text-gray-400">Click to view details</span>
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard
