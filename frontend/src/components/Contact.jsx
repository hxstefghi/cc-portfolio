import { useState } from 'react'
import { Mail, Send, Github, Linkedin, Twitter } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await new Promise(resolve => setTimeout(resolve, 1500))

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-32 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-3 tracking-tight">Get in Touch</h2>
          <p className="text-base text-gray-600 dark:text-gray-400 font-light">
            Open to new opportunities and collaborations
          </p>
        </div>

        <div className="space-y-12">
          {/* Email and Social Links */}
          <div className="space-y-8">
            {/* Email */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4 tracking-tight">Email</h3>
              <a
                href="mailto:christiancatuday13@gmail.com"
                className="inline-flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group"
              >
                <Mail size={20} />
                <span className="text-base font-light group-hover:underline">christiancatuday13@gmail.com</span>
              </a>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4 tracking-tight">Social</h3>
              <div className="flex flex-col gap-4">
                <a
                  href="https://github.com/hxstefghi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group w-fit"
                >
                  <Github size={20} />
                  <span className="text-base font-light group-hover:underline">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/christian-catuday-627991318"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group w-fit"
                >
                  <Linkedin size={20} />
                  <span className="text-base font-light group-hover:underline">LinkedIn</span>
                </a>
                <a
                  href="https://twitter.com/hxste_w3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group w-fit"
                >
                  <Twitter size={20} />
                  <span className="text-base font-light group-hover:underline">Twitter</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-6 tracking-tight">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-1 transition-all bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 text-sm ${errors.name
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 dark:border-gray-700 focus:ring-gray-900 dark:focus:ring-white focus:border-gray-900 dark:focus:border-white'
                    }`}
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-1 transition-all bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 text-sm ${errors.email
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 dark:border-gray-700 focus:ring-gray-900 dark:focus:ring-white focus:border-gray-900 dark:focus:border-white'
                    }`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-1 transition-all resize-none bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 text-sm ${errors.message
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 dark:border-gray-700 focus:ring-gray-900 dark:focus:ring-white focus:border-gray-900 dark:focus:border-white'
                    }`}
                  placeholder="Tell me about your project..."
                ></textarea>
                {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
              </div>

              {submitStatus === 'success' && (
                <div className="text-sm text-green-600 dark:text-green-400">
                  Message sent successfully. I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-sm text-red-600 dark:text-red-400">
                  Something went wrong. Please try again or email me directly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
