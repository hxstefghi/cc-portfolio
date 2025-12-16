import { blogPostsData } from '../data/blogPostsData'

const Blog = () => {
  return (
    <section id="blog" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-gray-500 tracking-wider uppercase">Insights & Articles</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">Latest Blog Posts</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sharing knowledge about React, Node.js, performance optimization, and best practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPostsData.map((post) => (
            <article key={post.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all group">
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime} min read</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={post.link}
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
                >
                  Read Article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://yourblog.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-lg hover:bg-gray-900 hover:text-white transition-all"
          >
            View All Articles →
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blog
