import ProjectCard from './ProjectCard'
import { projectsData } from '../data/projectsData'

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wider uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Projects I’ve built to practice my skills, solve problems, and create modern applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
