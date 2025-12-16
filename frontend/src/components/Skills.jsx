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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((cert) => (
            <div key={cert.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden group flex flex-col">
              <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <div className="text-5xl mb-4">🏆</div>
                  <h3 className="text-lg font-bold">{cert.name}</h3>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">{cert.issuer}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{cert.date}</div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-4">ID: {cert.credentialId}</div>
                <a 
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-2 px-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-sm font-medium mt-auto"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
