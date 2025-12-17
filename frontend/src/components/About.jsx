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
      degree: 'Bachelor of Science in Information Technology',
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
                I am a BSIT student at Our Lady of Fatima University with a strong interest in web development. I enjoy building projects that allow me to test my skills, improve my logical thinking, and apply what I learn in real situations. Creating systems from scratch helps me grow as a developer and gain confidence in my work.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I also take commissions from fellow students, where I help create web development projects and assist with assignments. This experience allows me to practice working with different requirements while improving my problem-solving skills and understanding of real client needs.
              </p>
            </div>
          </div>
        </div>

        {/* Skills with Logos */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 ">Technologies I Work With</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
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
