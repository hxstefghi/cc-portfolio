const About = () => {
  const skills = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  ]

  const education = [
    {
      level: 'College',
      degree: 'Bachelor of Science in Computer Science',
      school: 'Our Lady of Fatima University',
      year: '2022 - 2026',
      status: 'Graduating'
    },
    {
      level: 'Senior High School',
      degree: 'STEM (Science, Technology, Engineering, and Mathematics)',
      school: 'Our Lady of Fatima University',
      year: '2016 - 2018',
      status: 'Graduated'
    },
    {
      level: 'Junior High School',
      degree: 'Secondary Education',
      school: 'Sauyo High School',
      year: '2012 - 2016',
      status: 'Graduated'
    },
    {
      level: 'Elementary',
      degree: 'Primary Education',
      school: 'Sauyo Elementary School',
      year: '2006 - 2012',
      status: 'Graduated'
    }
  ]

  return (
    <section id="about" className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wider uppercase">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">Who I Am</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A passionate full-stack developer who loves solving complex problems and building products that make a difference
          </p>
        </div>

        {/* Main Content - Education & Personal Info */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left Side - Education Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700 last:pb-0"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-gray-900 dark:bg-white rounded-full border-4 border-gray-50 dark:border-gray-900"></div>
                  
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">{edu.level}</h4>
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{edu.degree}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{edu.school}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">{edu.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Personal Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">About Me</h3>
            <div className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a software engineer with <strong>3+ years of experience</strong> specializing in full-stack web development. 
                My passion lies in creating elegant, performant applications that solve real-world problems.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I believe in writing clean, maintainable code and staying up-to-date with the latest technologies. 
                My approach combines technical expertise with a deep understanding of user experience.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me contributing to open-source projects, writing technical articles, 
                or mentoring aspiring developers in the community.
              </p>
            </div>
          </div>
        </div>

        {/* Skills with Logos */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Technical Skills</h3>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-16 w-16 mx-auto mb-3 group-hover:scale-110 transition-transform flex items-center justify-center">
                  <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white text-center text-sm">{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}

export default About
