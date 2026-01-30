import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ArrowLeft, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { projectsData } from '../data/projectsData'

const ProjectDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projectsData.find(p => p.id === parseInt(id))
  const [currentImage, setCurrentImage] = useState(0)

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">Project Not Found</h2>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
          >
            <ArrowLeft size={16} />
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 mb-8"
          >
            <ArrowLeft size={16} />
            Back
          </button>

          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white mb-4 tracking-tight">
            {project.title}
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400 font-light mb-6">
            {project.short_description}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs text-gray-600 dark:text-gray-400 font-light"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Button */}
          {project.liveDemo && (
            <div className="mt-6">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200"
              >
                View Project
                <ExternalLink size={16} />
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Image Carousel */}
        <div className="mb-16">
          <div className="relative aspect-video bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
            <img
              src={project.images[currentImage]}
              alt={`${project.title} screenshot ${currentImage + 1}`}
              className="w-full h-full object-cover"
            />

            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-900/90 hover:bg-white dark:hover:bg-gray-900 p-1.5 rounded-md transition-all"
                >
                  <ChevronLeft size={20} className="text-gray-700 dark:text-gray-300" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-900/90 hover:bg-white dark:hover:bg-gray-900 p-1.5 rounded-md transition-all"
                >
                  <ChevronRight size={20} className="text-gray-700 dark:text-gray-300" />
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {project.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImage(idx)}
                      className={`h-1 rounded-full transition-all ${idx === currentImage
                          ? 'bg-white w-6'
                          : 'bg-white/50 w-1'
                        }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Description */}
        <div>
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4 tracking-tight">About this project</h2>
          <div className="text-base text-gray-700 dark:text-gray-300 leading-relaxed font-light space-y-4">
            {project.full_description.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
