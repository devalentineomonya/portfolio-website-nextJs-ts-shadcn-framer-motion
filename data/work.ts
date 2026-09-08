export interface WorkProject {
  title: string;
  category: string;
  description: string;
  image?: string;
  url: string;
  technologies: string[];
  archived?: boolean;
}

export const workProjects: WorkProject[] = [
  {
    title: "Nine Hertz",
    category: "Personal",
    description:
      "An AI powered health care system with features like appointment scheduling, patient record management, reminders, medical insights.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    url: "https://medic.devalentine.com",
    technologies: ["react", "nestjs", "docker"],
  },
  {
    title: "Studio",
    category: "Brand",
    description:
      "A dedicated brand website meticulously crafted to showcase my premium client work, technical case studies, and professional services.",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop",
    url: "https://studio.devalentine.com",
    technologies: ["next.js", "react"],
  },
  {
    title: "lazyDLP",
    category: "Personal",
    description:
      "A powerful, interactive command-line wrapper for yt-dlp, making it incredibly easy to download media without memorizing complex flags.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    url: "https://github.com/devalentineomonya/lazydlp",
    technologies: ["react", "ink tui"],
  },
  {
    title: "Journaling",
    category: "Personal",
    description:
      "A privacy-first personal finance app that parses M-Pesa SMS messages natively to log transactions, track budgets, and provide AI spending insights.",
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800&auto=format&fit=crop",
    url: "https://journauling.devalentine.com/",
    technologies: ["react native", "expo", "ai"],
  },
  {
    title: "University Computer Society",
    category: "Volunteer",
    description:
      "The official web platform for a university computer society, serving as a central hub for members, events, and tech community resources.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
    url: "https://computersocietyofkirinyaga.org",
    technologies: ["next.js", "tailwind"],
  },
  {
    title: "Tekobliss",
    category: "Client",
    description:
      "A sleek, highly performant corporate website for Tekobliss, designed with a focus on modern branding and driving client conversions.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    url: "https://tekobliss.com/",
    technologies: ["react", "branding"],
  },
  {
    title: "PBQ Simulator",
    category: "Client",
    description:
      "An interactive Performance-Based Questions (PBQ) Simulator engineered to help students prepare for complex, hands-on IT certification exams.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    url: "https://pbqsimulator.com/",
    technologies: ["react", "nestjs"],
  },
  {
    title: "Arorwet Secondary",
    category: "Client",
    description:
      "A modern, accessible digital presence and school management portal for Arorwet Secondary School, streamlining information access.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
    url: "https://www.arorwetsecondary.sc.ke/",
    technologies: ["next.js", "cms"],
  },
  {
    title: "Shopping Cart",
    category: "Archived",
    description: "A frontend e-commerce shopping cart implementation.",
    url: "https://shoppingcart.devalentine.com/",
    technologies: [],
    archived: true,
  },
  {
    title: "DevalExpenses",
    category: "Archived",
    description: "A legacy financial tracking and budgeting web application.",
    url: "https://expenses.devalentine.com",
    technologies: [],
    archived: true,
  },
  {
    title: "PHP Job Portal",
    category: "Archived",
    description:
      "A university class project for managing job applications, built with PHP.",
    url: "https://php-job-management-portal.onrender.com/",
    technologies: [],
    archived: true,
  },
  {
    title: "DevalRide",
    category: "Archived",
    description: "A legacy ride-hailing platform prototype interface.",
    url: "https://ride.devalentine.com",
    technologies: [],
    archived: true,
  },
];
