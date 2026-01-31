import { useState, useEffect } from 'react'
import { Star, GitFork, ExternalLink, Github } from 'lucide-react'

const GitHub = () => {
  const [repos, setRepos] = useState([])
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const username = 'hxstefghi'

  useEffect(() => {
    fetchGitHubData()
  }, [])

  const fetchGitHubData = async () => {
    try {
      // Fetch repositories
      const reposResponse = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
      )

      // Fetch user stats
      const userResponse = await fetch(
        `https://api.github.com/users/${username}`
      )

      if (!reposResponse.ok || !userResponse.ok) {
        throw new Error('Failed to fetch GitHub data')
      }

      const reposData = await reposResponse.json()
      const userData = await userResponse.json()

      // Filter out forks and sort by stars
      const filteredRepos = reposData
        .filter(repo => !repo.fork)
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 6)

      // Calculate language stats
      const languages = {}
      reposData.forEach(repo => {
        if (repo.language && !repo.fork) {
          languages[repo.language] = (languages[repo.language] || 0) + 1
        }
      })

      const sortedLanguages = Object.entries(languages)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)

      setRepos(filteredRepos)
      setStats({
        totalRepos: reposData.filter(r => !r.fork).length,
        totalStars: reposData.reduce((sum, repo) => sum + repo.stargazers_count, 0),
        followers: userData.followers,
        languages: sortedLanguages
      })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="github" className="py-32 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-3 tracking-tight">
            GitHub Activity
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 font-light">
            Recent projects and contributions
          </p>
        </div>

        {/* Contribution Graph - GitHub Style Tiles */}
        <div className="mb-12 bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800 overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Contributions
            </h3>
            <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-gray-200 dark:bg-gray-800 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-200 dark:bg-green-900 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-400 dark:bg-green-700 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-600 dark:bg-green-500 rounded-sm"></div>
                <div className="w-3 h-3 bg-green-800 dark:bg-green-300 rounded-sm"></div>
              </div>
              <span>More</span>
            </div>
          </div>
          <div className="overflow-x-auto pb-4">
            <img
              src={`https://ghchart.rshah.org/${username}`}
              alt="GitHub Contribution Chart"
              className="w-full min-w-[700px]"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </div>
        </div>

        {/* Repository List */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Recent Repositories
            </h3>
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Github size={16} />
              View all on GitHub
              <ExternalLink size={14} />
            </a>
          </div>

          {loading && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white mx-auto"></div>
            </div>
          )}

          {error && (
            <div className="text-center py-12 text-gray-600 dark:text-gray-400">
              <p>Unable to load repositories. Please visit my GitHub directly.</p>
            </div>
          )}

          {!loading && !error && (
            <div className="grid md:grid-cols-2 gap-6">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-base font-medium text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                      {repo.name}
                    </h4>
                    <ExternalLink
                      size={16}
                      className="text-gray-400 dark:text-gray-600 group-hover:text-gray-900 dark:group-hover:text-white transition-colors shrink-0"
                    />
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {repo.description || 'No description available'}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-500">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star size={12} />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={12} />
                      {repo.forks_count}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* GitHub Profile Link */}
        <div className="mt-12 text-center">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium"
          >
            <Github size={20} />
            Visit My GitHub Profile
          </a>
        </div>
      </div>
    </section>
  )
}

export default GitHub
