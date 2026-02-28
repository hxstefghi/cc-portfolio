const About = () => {
  const skills = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  ]

  return (
    <section id="about" className="py-32 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-3 tracking-tight">About Me</h2>
        </div>

        <div className="space-y-12">
          {/* Bio */}
          <div className="space-y-4">
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed font-light">
              I'm a web developer who likes turning ideas into real, working applications. I enjoy the whole process of building something from scratch and making sure it feels good to use. I keep my code clean, my designs simple, and my focus on what actually matters to the user.
            </p>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-6 tracking-tight">Tech Stack I Used</h3>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-full h-full object-contain transition-all duration-200"
                    />
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-400 font-light text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4 tracking-tight">Education</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-base font-medium text-gray-900 dark:text-white">Bachelor of Science in Information Technology</h4>
                  <span className="text-sm text-gray-500 dark:text-gray-500 font-light">2022 - 2026</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-light">Our Lady of Fatima University</p>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-base font-medium text-gray-900 dark:text-white">STEM</h4>
                  <span className="text-sm text-gray-500 dark:text-gray-500 font-light">2020 - 2022</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-light">Our Lady of Fatima University</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
