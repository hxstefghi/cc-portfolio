import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { projectsData } from '../data/projectsData'

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-3 tracking-tight">Projects</h2>
          <p className="text-base text-gray-600 dark:text-gray-400 font-light">
            A collection of projects demonstrating modern development practices
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-12">
          {projectsData.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="group block"
            >
              <div className="grid md:grid-cols-5 gap-6 items-start">
                {/* Project Image */}
                <div className="md:col-span-2">
                  <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Project Info */}
                <div className="md:col-span-3 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      size={20}
                      className="text-gray-400 dark:text-gray-600 group-hover:text-gray-900 dark:group-hover:text-white transition-colors shrink-0"
                    />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                    {project.short_description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.techStack.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="text-xs text-gray-500 dark:text-gray-500 font-light">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-xs text-gray-400 dark:text-gray-600 font-light">+{project.techStack.length - 4}</span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
