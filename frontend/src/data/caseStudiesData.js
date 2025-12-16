export const caseStudiesData = [
  {
    id: 1,
    title: "E-Commerce Platform Redesign",
    overview: "Complete redesign and optimization of a high-traffic e-commerce platform serving 100k+ monthly users. Focus on performance, scalability, and user experience.",
    problem: "The existing platform was experiencing slow load times (5+ seconds), frequent crashes during peak traffic, and a cart abandonment rate of 68%. The codebase was monolithic and difficult to maintain.",
    solution: "Implemented microservices architecture, optimized database queries with indexing and caching (Redis), integrated CDN for static assets, and redesigned the checkout flow based on user research. Migrated to React for better performance and Next.js for SSR.",
    challenges: "Managing the migration from monolith to microservices without downtime required careful planning. Implemented blue-green deployment strategy and comprehensive monitoring. Handled data consistency across services using eventual consistency patterns.",
    techStack: ["React", "Next.js", "Node.js", "MongoDB", "Redis", "Docker", "AWS", "Stripe"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop",
    architecture: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    results: [
      "Reduced page load time from 5.2s to 0.8s (85% improvement)",
      "Decreased cart abandonment rate from 68% to 32%",
      "Increased conversion rate by 45%",
      "Achieved 99.9% uptime during Black Friday sales",
      "Reduced infrastructure costs by 30% through optimization"
    ],
    liveDemo: "https://demo.example.com",
    github: "https://github.com/yourusername/ecommerce"
  },
  {
    id: 2,
    title: "AI-Powered Task Management System",
    overview: "Built an intelligent task management platform that uses machine learning to predict task priorities, estimate completion times, and suggest optimal scheduling.",
    problem: "Teams were struggling with task prioritization and realistic time estimation. Manual prioritization was time-consuming and often inaccurate, leading to missed deadlines and team burnout.",
    solution: "Developed an AI system using natural language processing to analyze task descriptions and historical data. Implemented a machine learning model trained on 10,000+ completed tasks to predict priority levels and time estimates. Created an intuitive interface with real-time collaboration features.",
    challenges: "Training the ML model required careful feature engineering and handling imbalanced datasets. Implemented SMOTE for data augmentation and used cross-validation to prevent overfitting. API rate limiting with OpenAI required implementing smart caching and request batching.",
    techStack: ["React", "TypeScript", "Python", "FastAPI", "TensorFlow", "OpenAI", "PostgreSQL", "Docker"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=800&fit=crop",
    architecture: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    results: [
      "Improved task estimation accuracy by 73%",
      "Reduced project planning time by 60%",
      "Achieved 89% user satisfaction rating",
      "Processed 50k+ tasks with 92% prediction accuracy",
      "Reduced API costs by 65% through strategic caching"
    ],
    liveDemo: "https://tasks.example.com",
    github: "https://github.com/yourusername/ai-tasks"
  },
  {
    id: 3,
    title: "Real-Time Collaboration Platform",
    overview: "Created a comprehensive collaboration platform supporting video chat, whiteboarding, document sharing, and real-time code editing for distributed teams.",
    problem: "Remote teams needed a unified platform for collaboration. Existing solutions were fragmented across multiple apps, causing context switching and reduced productivity. Video quality degraded with more than 4 participants.",
    solution: "Built a WebRTC-based video platform with SFU architecture for scalability. Implemented operational transformation (OT) for conflict-free collaborative editing. Used Canvas API for whiteboarding with optimistic updates and reconciliation. Integrated WebSocket for real-time synchronization.",
    challenges: "Handling state synchronization across 50+ concurrent users required implementing CRDT (Conflict-free Replicated Data Types) and careful conflict resolution. Optimized video streaming using simulcast and adaptive bitrate. Managed WebSocket connection stability with automatic reconnection and state recovery.",
    techStack: ["React", "WebRTC", "Socket.io", "Node.js", "Canvas API", "Redis", "PostgreSQL", "Mediasoup"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop",
    architecture: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    results: [
      "Supported 50+ concurrent users with <100ms latency",
      "Achieved 95% uptime over 6 months",
      "Processed 1M+ collaborative edits without conflicts",
      "Reduced team communication overhead by 40%",
      "Used by 5,000+ active users across 30 companies"
    ],
    liveDemo: "https://collab.example.com",
    github: "https://github.com/yourusername/collab-tool"
  }
]
