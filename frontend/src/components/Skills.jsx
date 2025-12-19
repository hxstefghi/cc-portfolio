import { certificatesData } from '../data/certificatesData'

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wider uppercase">Credentials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">Certifications</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Professional certifications and verified achievements
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certificatesData.map((cert) => (
            <div key={cert.id} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all overflow-hidden group flex flex-col">
              {/* Certificate Image */}
              <div className="aspect-video bg-gray-100 dark:bg-gray-900 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {cert.name}
                </h3>
                
                <div className="flex items-center justify-between mb-3 text-sm">
                  <span className="text-gray-600 dark:text-gray-400">{cert.issuer}</span>
                  <span className="text-gray-500 dark:text-gray-500 text-xs">{cert.date}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} className="text-xs px-2.5 py-1 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-700">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a 
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors group/link"
                  >
                    <span>View Certificate</span>
                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
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
