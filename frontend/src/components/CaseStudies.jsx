import { caseStudiesData } from '../data/caseStudiesData'

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-gray-500 tracking-wider uppercase">In-Depth Analysis</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">Featured Case Studies</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Deep dives into my most impactful projects with detailed problem-solving approaches
          </p>
        </div>

        <div className="space-y-20">
          {caseStudiesData.map((study, index) => (
            <div key={study.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className={`relative h-96 bg-gray-100 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{study.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{study.overview}</p>

                  {/* Problem → Solution → Challenges */}
                  <div className="space-y-6 mb-8">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="text-red-500">●</span> Problem
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{study.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="text-green-500">●</span> Solution
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="text-blue-500">●</span> Challenges
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{study.challenges}</p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.techStack.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Architecture Diagram */}
                  {study.architecture && (
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Architecture</h4>
                      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                        <img 
                          src={study.architecture} 
                          alt={`${study.title} architecture`}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  )}

                  {/* Results/Impact */}
                  {study.results && (
                    <div className="mb-8 bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Results & Impact</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-green-500 mt-1">✓</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a 
                      href={study.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-all"
                    >
                      View Live Demo
                    </a>
                    <a 
                      href={study.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border-2 border-gray-900 text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-900 hover:text-white transition-all"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
