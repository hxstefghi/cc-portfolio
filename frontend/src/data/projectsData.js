export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    short_description: "A full-stack e-commerce application with product browsing, cart, and secure checkout. Users can apply discount coupons at checkout and track their orders through a detailed order history.",
    full_description: "A full-stack e-commerce web application designed to deliver a smooth and user-friendly online shopping experience. The platform allows users to browse products, manage their cart, and complete a secure checkout process. During checkout, users can apply discount coupons to reduce the total price, providing flexible promotional support. Each user has access to an order history page where they can track past purchases and monitor the status of their orders. The system ensures proper data handling and user flow from product selection to order completion, making it a practical and scalable solution for modern online stores.",
    category: "Full-Stack",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind", "Rechart"],
    liveDemo: "https://shoply-ecommerce-rose.vercel.app/",
    github: "https://github.com/yourusername/ecommerce",
    images: [
      "/images/ecommerce-1.png",
      "/images/ecommerce-2.png",
      "/images/ecommerce-3.png"
    ],
    learned: "Implemented secure payment processing and learned advanced state management with Redux. Overcame challenges with real-time inventory sync across multiple users.",
    challenges: "Handling concurrent transactions and preventing overselling required implementing distributed locks and optimistic concurrency control."
  },
  {
    id: 2,
    title: "IoT Hydrofarm Monitoring System",
    short_description: "Smart hydroponic monitoring system that tracks temperature, humidity, and pH levels using a trained model to detect unhealthy conditions and send real-time email alerts.",
    full_description: "A smart hydroponic monitoring system that tracks temperature, humidity, and pH levels in real time. It uses a trained predictive model to learn healthy threshold values and automatically detects unsafe conditions. When sensor readings go above or below optimal levels, the system instantly sends email alerts to ensure timely action and healthy plant growth.",
    category: "Web App",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind", "Rechart", "Nodemailer"],
    liveDemo: "https://hydrofarm-app.vercel.app/",
    github: "https://github.com/yourusername/ai-tasks",
    images: [
      "/images/hydrofarm-1.png",
      "/images/hydrofarm-2.png",
      "/images/hydrofarm-3.png",
    ],
    learned: "Integrated OpenAI API for intelligent task parsing and learned TypeScript for better code quality. Solved challenges with API rate limiting and response caching.",
    challenges: "Optimizing AI response times and managing API costs through strategic caching and batching requests."
  },
  {
    id: 3,
    title: "SnapStrip",
    short_description: "An online photostrip app that captures 4 photos, applies filters, customizes frames and text, and lets users download their personalized photostrip instantly.",
    full_description: "An online photostrip application that lets users capture 4 consecutive shots, apply photo filters, customize the frame color, and add personalized text. After editing, users can easily download their photostrip, recreating a fun and modern photobooth experience directly from the browser.",
    category: "Web App",
    techStack: ["React", "Tailwind"],
    liveDemo: "https://snapstrip-photobooth.vercel.app/",
    github: "https://github.com/yourusername/collab-tool",
    images: [
      "/images/snapstrip-1.png",
      "/images/snapstrip-2.png",
      "/images/snapstrip-3.png",
    ],
    learned: "Mastered WebRTC for peer-to-peer communication and Socket.io for real-time updates. Overcame challenges with state synchronization across multiple clients.",
    challenges: "Ensuring smooth performance with 50+ concurrent users required implementing efficient data structures and conflict resolution strategies."
  },
]
