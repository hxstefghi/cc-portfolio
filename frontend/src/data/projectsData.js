export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    short_description:
      "A full-stack e-commerce application with product browsing, cart, and secure checkout. Users can apply discount coupons at checkout and track their orders through a detailed order history.",
    full_description:
      "A full-stack e-commerce web application designed to deliver a smooth and user-friendly online shopping experience. The platform allows users to browse products, manage their cart, and complete a secure checkout process. During checkout, users can apply discount coupons to reduce the total price, providing flexible promotional support. Each user has access to an order history page where they can track past purchases and monitor the status of their orders. The system ensures proper data handling and user flow from product selection to order completion, making it a practical and scalable solution for modern online stores.",
    category: "Full-Stack",
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Tailwind",
      "Rechart",
    ],
    liveDemo: "https://shoply-ecommerce-rose.vercel.app/",
    github: "https://github.com/yourusername/ecommerce",
    images: [
      "/images/ecommerce-1.png",
      "/images/ecommerce-2.png",
      "/images/ecommerce-3.png",
    ],
    learned:
      "Implemented secure payment processing and learned advanced state management with Redux. Overcame challenges with real-time inventory sync across multiple users.",
    challenges:
      "Handling concurrent transactions and preventing overselling required implementing distributed locks and optimistic concurrency control.",
  },
  {
    id: 2,
    title: "IoT Hydrofarm Monitoring System",
    short_description:
      "Smart hydroponic monitoring system that tracks temperature, humidity, and pH levels using a trained model to detect unhealthy conditions and send real-time email alerts.",
    full_description:
      "A smart hydroponic monitoring system that tracks temperature, humidity, and pH levels in real time. It uses a trained predictive model to learn healthy threshold values and automatically detects unsafe conditions. When sensor readings go above or below optimal levels, the system instantly sends email alerts to ensure timely action and healthy plant growth.",
    category: "Web App",
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Tailwind",
      "Rechart",
      "Nodemailer",
    ],
    liveDemo: "https://hydrofarm-app.vercel.app/",
    github: "https://github.com/yourusername/ai-tasks",
    images: [
      "/images/hydrofarm-1.png",
      "/images/hydrofarm-2.png",
      "/images/hydrofarm-3.png",
    ],
    learned:
      "Integrated OpenAI API for intelligent task parsing and learned TypeScript for better code quality. Solved challenges with API rate limiting and response caching.",
    challenges:
      "Optimizing AI response times and managing API costs through strategic caching and batching requests.",
  },
  {
    id: 3,
    title: "SnapStrip",
    short_description:
      "An online photostrip app that captures 4 photos, applies filters, customizes frames and text, and lets users download their personalized photostrip instantly.",
    full_description:
      "An online photostrip application that lets users capture 4 consecutive shots, apply photo filters, customize the frame color, and add personalized text. After editing, users can easily download their photostrip, recreating a fun and modern photobooth experience directly from the browser.",
    category: "Web App",
    techStack: ["React", "Tailwind"],
    liveDemo: "https://snapstrip-photobooth.vercel.app/",
    github: "https://github.com/yourusername/collab-tool",
    images: [
      "/images/snapstrip-1.png",
      "/images/snapstrip-2.png",
      "/images/snapstrip-3.png",
    ],
    learned:
      "Mastered WebRTC for peer-to-peer communication and Socket.io for real-time updates. Overcame challenges with state synchronization across multiple clients.",
    challenges:
      "Ensuring smooth performance with 50+ concurrent users required implementing efficient data structures and conflict resolution strategies.",
  },
  {
    id: 4,
    title: "EduPortal LMS",
    short_description:
      "A modern Learning Management System (LMS) and Student Information System (SIS) web application for schools, featuring curriculum management, enrollment, student/teacher portals, and admin dashboards.",
    full_description:
      "This project is a full-featured Learning Management System (LMS) combined with a Student Information System (SIS), designed to streamline academic operations for educational institutions.\n\nThe platform enables administrators to manage programs, subjects, students, instructors, and enrollments efficiently. Students can view courses, academic history, and tuition details, while instructors can manage subject materials, quizzes, and student progress. The system supports secure authentication, role-based access, and dynamic dashboards for each user type.\n\nBuilt with a modern tech stack, it offers a responsive, user-friendly interface and robust backend APIs for seamless school management.",
    category: "Web App",
    techStack: ["React", "Tailwind", "Node.js", "Express.js", "MongoDB"],
    liveDemo: "https://edu-portal-lms.vercel.app/login",
    github: "https://github.com/yourusername/collab-tool",
    images: [
      "/images/lms-13.png",
      "/images/lms-1.png",
      "/images/lms-2.png",
      "/images/lms-3.png",
      "/images/lms-4.png",
      "/images/lms-5.png",
      "/images/lms-6.png",
      "/images/lms-7.png",
      "/images/lms-8.png",
      "/images/lms-9.png",
      "/images/lms-10.png",
      "/images/lms-11.png",
      "/images/lms-12.png",
    ],
    learned:
      "Mastered WebRTC for peer-to-peer communication and Socket.io for real-time updates. Overcame challenges with state synchronization across multiple clients.",
    challenges:
      "Ensuring smooth performance with 50+ concurrent users required implementing efficient data structures and conflict resolution strategies.",
  },
  {
    id: 5,
    title: "VentHub",
    short_description:
      "Vent Hub is an anonymous post sharing web app where anyone can write and share what's on their mind without creating an account. No login, no tracking. Just a simple space to let it out.",
    full_description:
      "Vent Hub is a web app I built for people who want to share their thoughts, feelings, or random rants without worrying about who's watching. There's no sign up, no email, and no login required. You just open the app, write what's on your mind, and post it. \n\nEach post can have a display name or stay fully anonymous. It's up to the user. Posts also come with a color tag so you can give them a little personality. Other people can browse through posts and like the ones they relate to. \n\nOn the tech side, the frontend is built with React and styled using Tailwind CSS, while the backend runs on Node.js and Express with MongoDB as the database. The app also has rate limiting in place to prevent abuse, and input validation to keep things clean on the server side. \n\nThe idea behind it was simple. Sometimes people just need a place to vent without the pressure of a real social media profile attached to their name. That's what Vent Hub is for.",
    category: "Web App",
    techStack: ["React", "Tailwind", "Node.js", "Express.js", "MongoDB"],
    liveDemo: "https://vent-hub.vercel.app/",
    github: "https://github.com/yourusername/collab-tool",
    images: ["/images/vhub-1.png", "/images/vhub-2.png", "/images/vhub-3.png"],
    learned:
      "Mastered WebRTC for peer-to-peer communication and Socket.io for real-time updates. Overcame challenges with state synchronization across multiple clients.",
    challenges:
      "Ensuring smooth performance with 50+ concurrent users required implementing efficient data structures and conflict resolution strategies.",
  },
];
