import { Mail, Github, Linkedin, Twitter, MapPin } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'christiancatuday13@gmail.com',
      href: 'mailto:christiancatuday13@gmail.com',
      display: 'christiancatuday13@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Philippines',
      display: 'Philippines'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/hxstefghi',
      username: '@hxstefghi'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/christian-catuday-627991318',
      username: 'Christian Catuday'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/hxste_w3',
      username: '@hxste_w3'
    }
  ]

  return (
    <section id="contact" className="py-32 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-3 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 font-light">
            Open to new opportunities and collaborations
          </p>
        </div>

        <div className="space-y-12">
          {/* Contact Information */}
          <div className="space-y-4">
            {contactInfo.map((info) => {
              const Icon = info.icon
              const content = (
                <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-200">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                    <Icon size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-500 dark:text-gray-500 font-light mb-0.5">
                      {info.label}
                    </p>
                    <p className="text-base text-gray-900 dark:text-white font-light truncate">
                      {info.display}
                    </p>
                  </div>
                </div>
              )

              if (info.href) {
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="block group"
                  >
                    {content}
                  </a>
                )
              }

              return <div key={info.label}>{content}</div>
            })}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 dark:border-gray-800"></div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 tracking-tight">
              Connect
            </h3>
            <div className="grid gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 group-hover:bg-gray-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-gray-900 transition-all duration-200">
                      <Icon size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-base text-gray-900 dark:text-white font-light">
                        {social.label}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500 font-light truncate">
                        {social.username}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
