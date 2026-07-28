import { DeveloperProfile, Skill, Service, Project, Experience, Testimonial } from './types';

export const developerProfile: DeveloperProfile = {
  name: "Mohammad Abdullah",
  title: "AI-Driven Full-Stack Engineer",
  tagline: "Architecting high-performance web applications and seamlessly integrating cutting-edge AI technologies.",
  bio: "I am a passionate Full-Stack Developer and AI Integration Specialist with over 3 years of professional experience crafting visually stunning user interfaces and robust architectures. By combining AI-driven capabilities with modular clean code, I build digital experiences that are blazing fast, intelligent, and highly optimized.",
  journey: "My journey is defined by a commitment to modern full-stack engineering and deep AI integration. I specialize in leveraging advanced tools like Gemini, ChatGPT, Google AI Studio, and Lavable AI to implement automation, interactive intelligence, and production-ready applications that solve real-world problems.",
  yearsOfExperience: 3,
  projectsCompleted: 52,
  happyClients: 24,
  technologiesCount: 23,
  resumeUrl: "#", // User can link their actual CV
  email: "islamul.net@gmail.com",
  phone: "01640128028",
  location: "Dhaka, Bangladesh (Available for Remote Work)",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com"
  }
};

export const skillsData: Skill[] = [
  // AI Tools
  { name: "Gemini API", category: "ai", icon: "Sparkles", proficiency: 96 },
  { name: "ChatGPT", category: "ai", icon: "Bot", proficiency: 95 },
  { name: "Google AI Studio", category: "ai", icon: "Wand2", proficiency: 94 },
  { name: "Lavable AI", category: "ai", icon: "Cpu", proficiency: 88 },
  { name: "Claude AI", category: "ai", icon: "Brain", proficiency: 90 },

  // Frontend
  { name: "React.js", category: "frontend", icon: "Atom", proficiency: 94 },
  { name: "Next.js", category: "frontend", icon: "Layers", proficiency: 90 },
  { name: "TypeScript", category: "frontend", icon: "Code2", proficiency: 88 },
  { name: "JavaScript", category: "frontend", icon: "Braces", proficiency: 92 },
  { name: "Tailwind CSS", category: "frontend", icon: "Palette", proficiency: 95 },
  { name: "HTML5 & CSS3", category: "frontend", icon: "FileCode", proficiency: 96 },
  { name: "Bootstrap", category: "frontend", icon: "LayoutTemplate", proficiency: 85 },
  
  // Backend
  { name: "PHP", category: "backend", icon: "Server", proficiency: 90 },
  { name: "Laravel", category: "backend", icon: "Cpu", proficiency: 92 },
  { name: "CodeIgniter", category: "backend", icon: "Combine", proficiency: 80 },
  { name: "Node.js", category: "backend", icon: "Terminal", proficiency: 86 },
  { name: "REST API", category: "backend", icon: "Webhook", proficiency: 94 },

  // Database
  { name: "MySQL", category: "database", icon: "Database", proficiency: 88 },
  { name: "Firebase", category: "database", icon: "Flame", proficiency: 85 },

  // Tools
  { name: "Git", category: "tools", icon: "GitBranch", proficiency: 92 },
  { name: "GitHub", category: "tools", icon: "Github", proficiency: 95 },
  { name: "Vite", category: "tools", icon: "Zap", proficiency: 90 },
  { name: "Postman", category: "tools", icon: "Send", proficiency: 88 }
];

export const servicesData: Service[] = [
  {
    id: "frontend-dev",
    title: "Frontend Development",
    description: "Crafting beautiful, accessible, and pixel-perfect responsive user interfaces with modern React and Tailwind CSS. Optimized for core web vitals.",
    icon: "Monitor",
    features: ["Component-Driven Architecture", "Tailwind CSS Precision", "Accessible HTML/ARIA", "Interactive animations"]
  },
  {
    id: "fullstack-dev",
    title: "Full-Stack Web Development",
    description: "End-to-end web applications connecting slick frontend layers to powerful databases and servers. Fully integrated, secure, and production-ready.",
    icon: "Globe",
    features: ["SPA / SSR rendering", "Relational & Real-time Databases", "Secure Sessions & Auth", "Full deployment setup"]
  },
  {
    id: "react-next-dev",
    title: "React & Next.js Development",
    description: "Developing modern Next.js SaaS platforms utilizing Server Components, progressive hydration, and optimized routing for premium performance.",
    icon: "Atom",
    features: ["Server-Side Rendering (SSR)", "Incremental Static Regeneration", "Dynamic Route Systems", "SEO optimized layout"]
  },
  {
    id: "laravel-backend",
    title: "Laravel Backend Development",
    description: "Architecting powerful secure server environments with Laravel. Expert custom business logic, secure database schemas, and background job queues.",
    icon: "Cpu",
    features: ["MVC Architecture", "Artisan Ecosystem", "ORM (Eloquent) database design", "Middleware & security guards"]
  },
  {
    id: "rest-api-design",
    title: "REST API Development",
    description: "Building fast, well-documented, and secure RESTful endpoints for web applications, mobile sync, or third-party service connections.",
    icon: "Webhook",
    features: ["Standardized JSON responses", "JWT/Sanctum Token Auth", "Rate Limiting & Throttle", "Comprehensive documentation"]
  },
  {
    id: "responsive-web",
    title: "Responsive Web Design",
    description: "Ensuring your website looks incredible and adapts organically across every device layout: ultra-wide monitors, tablets, and mobile devices.",
    icon: "Smartphone",
    features: ["Mobile-first layouts", "Fluid grids & viewport styling", "Adaptive image assets", "Touch-gesture optimizations"]
  },
  {
    id: "admin-dashboards",
    title: "Admin Dashboard Development",
    description: "Feature-rich admin panels with complex data charts, CSV exports, content management (CMS), user controls, and metrics monitoring.",
    icon: "LayoutDashboard",
    features: ["Interactive D3/Recharts visualizers", "User Role Permissions", "Content Management Systems", "Data filtering & batch processing"]
  },
  {
    id: "ecommerce-solutions",
    title: "E-commerce Development",
    description: "Scalable online stores featuring robust catalogs, filterable searches, shopping carts, checkout checkout pipelines, and payment gateways.",
    icon: "ShoppingBag",
    features: ["Stripe / PayPal Gateway integration", "Order management engines", "Inventory tracking hooks", "Automated email receipts"]
  }
];

export const projectsData: Project[] = [
  {
    id: "nexas-saas",
    title: "Nexas AI SaaS Platform",
    description: "A comprehensive generative AI workspace. Includes real-time AI image generation, automated document analysis, and text synthesis powered by the Gemini API. Features multi-user workspaces and subscription Billing pipelines.",
    category: "fullstack",
    tags: ["React.js", "Next.js", "TypeScript", "Node.js", "Firebase", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com",
    image: "https://picsum.photos/seed/nexas/800/600",
    featured: true
  },
  {
    id: "laracart-ecommerce",
    title: "LaraCart E-Commerce Engine",
    description: "A high-performance online retail engine built with Laravel. Features advanced product filtering, dynamic cart systems with Redis, complete checkout processes with Stripe, and an extensive admin analytics control panel.",
    category: "laravel",
    tags: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "Bootstrap", "REST API"],
    liveUrl: "#",
    githubUrl: "https://github.com",
    image: "https://picsum.photos/seed/laracart/800/600",
    featured: true
  },
  {
    id: "crypto-bento",
    title: "Cryptocurrency Bento Dashboard",
    description: "An elegant crypto tracker designed with a Bento-grid layout. Displays live-updating tickers, historical price charts using Recharts, asset search, portfolio transaction loggers, and customizable price-drop alert notifications.",
    category: "react",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "Recharts", "Vite", "Git"],
    liveUrl: "#",
    githubUrl: "https://github.com",
    image: "https://picsum.photos/seed/cryptobento/800/600",
    featured: true
  },
  {
    id: "apex-kanban",
    title: "Apex Collaborative Kanban Board",
    description: "A real-time workspace for task management. Features smooth drag-and-drop lists, task checklists, member assignments, live chats on tasks, and robust activity logs. Works fully offline with local-first syncing.",
    category: "frontend",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "motion", "Vite", "REST API"],
    liveUrl: "#",
    githubUrl: "https://github.com",
    image: "https://picsum.photos/seed/kanban/800/600",
    featured: false
  },
  {
    id: "rest-booking-api",
    title: "Resto Table Booking System & API",
    description: "A headless booking engine for restaurants. Provides clean developer APIs for scheduling tables, staff check-ins, automated reservation notifications via SMS/Email, and interactive seating chart designers.",
    category: "backend",
    tags: ["Node.js", "CodeIgniter", "MySQL", "REST API", "Postman", "Git"],
    liveUrl: "#",
    githubUrl: "https://github.com",
    image: "https://picsum.photos/seed/restoapi/800/600",
    featured: false
  },
  {
    id: "vibe-music-spa",
    title: "Vibe Music Streaming Interface",
    description: "A client-side single page app featuring music search, visual equalizers, custom playlist management, seamless transitions, and offline audio caching utilizing HTML5 service workers.",
    category: "frontend",
    tags: ["JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Vite", "GitHub"],
    liveUrl: "#",
    githubUrl: "https://github.com",
    image: "https://picsum.photos/seed/vibemusic/800/600",
    featured: false
  }
];

export const experienceData: Experience[] = [
  {
    id: "exp-1",
    role: "Senior Full-Stack Developer",
    company: "DevCraft Solutions",
    duration: "2024 - Present",
    description: [
      "Led a development team of 4 to architect and ship a Laravel/React SaaS dashboard, reducing page load latency by 35%.",
      "Pioneered TypeScript integration across all legacy codebases, resulting in a 40% reduction in production crash logs.",
      "Engineered automated REST APIs serving over 1M+ requests daily with JWT authentication and strict security headers."
    ],
    type: "experience",
    tags: ["React.js", "Laravel", "TypeScript", "MySQL", "REST API"]
  },
  {
    id: "exp-2",
    role: "Full-Stack Developer (Freelance / Contract)",
    company: "Thorne Digital Labs",
    duration: "2022 - 2024",
    description: [
      "Shipped 25+ pixel-perfect client websites and web applications across real estate, fintech, and e-commerce spaces.",
      "Built custom WooCommerce/Shopify connections and unique, lightweight themes utilizing Tailwind CSS and Bootstrap.",
      "Designed and deployed responsive server setups on AWS and Firebase, maintaining 99.9% uptime statistics."
    ],
    type: "experience",
    tags: ["Next.js", "PHP", "Firebase", "Tailwind CSS", "Git"]
  },
  {
    id: "edu-1",
    role: "B.S. in Computer Science & Engineering",
    company: "State University",
    duration: "2018 - 2022",
    description: [
      "Specialized in Software Engineering, Web Systems, and Database Architectures.",
      "Acquired core skills in Data Structures, Algorithms, Object-Oriented Programming, and Relational Database Systems."
    ],
    type: "education",
    tags: ["Computer Science", "Algorithms", "Databases", "Networks"]
  },
  {
    id: "cert-1",
    role: "Advanced Full-Stack Engineering Certification",
    company: "Tech Academy Global",
    duration: "2023",
    description: [
      "Professional intensive focus on Node.js microservices, complex state design patterns in React, and backend security optimizations."
    ],
    type: "education",
    tags: ["Node.js", "System Architecture", "Security", "Microservices"]
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    name: "Sarah Jenkins",
    role: "Product Director",
    company: "Vortex Technologies",
    content: "Alex is an absolute gem of a developer. He took our complex, fragmented wireframes and turned them into a visually stunning, responsive, and insanely fast SaaS dashboard in Next.js. His eye for micro-interactions is matched only by his strong backend engineering skills.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    id: "test-2",
    name: "Marcus Sterling",
    role: "Founder & CEO",
    company: "Aero Logistics",
    content: "Collaborating with Alex on our automated inventory dashboard with Laravel was a seamless experience. He didn't just write clean code; he actively suggested architectural improvements that saved us thousands in monthly cloud costs. Highly recommended!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
  },
  {
    id: "test-3",
    name: "Elena Rostova",
    role: "Lead Creative",
    company: "Hologram Agency",
    content: "Alex bridged the gap between code and design flawlessly. He implemented motion transitions that were incredibly smooth and performant, maintaining our high design fidelity. He responds quickly, works efficiently, and delivers top-tier work.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
  }
];
