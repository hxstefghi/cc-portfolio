import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { projectsData } from '../data/projectsData'

const ProjectDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projectsData.find(p => p.id === parseInt(id))
  const [currentImage, setCurrentImage] = useState(0)

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h2>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
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
      {/* Header with Back Button */}
      <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </button>
        </div>
      </div>

      {/* Project Detail Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {project.title}
          </h1>
        </div>

        {/* Image Carousel */}
        <div className="mb-12">
          <div className="relative aspect-video bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
            <img
              src={project.images[currentImage]}
              alt={`${project.title} screenshot ${currentImage + 1}`}
              className="w-full h-full object-cover"
            />
            
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-gray-900 transition-all shadow-lg"
                >
                  <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-gray-900 transition-all shadow-lg"
                >
                  <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {project.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImage(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentImage
                          ? 'bg-white dark:bg-gray-900 w-8'
                          : 'bg-white/50 dark:bg-gray-900/50'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Tech Stack */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Description */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Description</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.full_description.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} style={{ marginBottom: '1em' }}>
                    {paragraph}
                  </p>
                ))}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Action Buttons */}
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl space-y-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Project Link</h3>
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-center font-medium"
                >
                  Visit Site
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
