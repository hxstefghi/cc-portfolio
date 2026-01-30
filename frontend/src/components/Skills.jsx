import { certificatesData } from '../data/certificatesData'
import { ExternalLink } from 'lucide-react'

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-3 tracking-tight">Certifications</h2>
          <p className="text-base text-gray-600 dark:text-gray-400 font-light">
            Professional credentials and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificatesData.map((cert) => (
            <div key={cert.id} className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-200 overflow-hidden group flex flex-col">
              {/* Certificate Image */}
              <div className="aspect-video bg-gray-100 dark:bg-gray-900 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-base font-medium text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {cert.name}
                </h3>
                
                <div className="flex items-center justify-between mb-4 text-sm">
                  <span className="text-gray-600 dark:text-gray-400 font-light">{cert.issuer}</span>
                  <span className="text-gray-500 dark:text-gray-500 text-xs font-light">{cert.date}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.slice(0, 3).map((skill, idx) => (
                    <span key={idx} className="text-xs text-gray-500 dark:text-gray-500 font-light">
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="text-xs text-gray-400 dark:text-gray-600 font-light">+{cert.skills.length - 3}</span>
                  )}
                </div>
                
                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-800">
                  <a 
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                  >
                    <span>Verify</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
