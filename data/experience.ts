export interface Role {
  title: string;
  type: string;
  dateRange: string;
  isCurrent?: boolean;
  description: string;
  technologies?: string[];
}

export interface Experience {
  company: string;
  location: string;
  roles: Role[];
}

export const experiences: Experience[] = [
  {
    company: "Transcom Media",
    location: "Nairobi, Kenya",
    roles: [
      {
        title: "Software Engineering Attaché",
        type: "Attachment",
        dateRange: "May 2026 - Present",
        isCurrent: true,
        description:
          "Building robust, tailored business solutions and enterprise applications using CodeIgniter, PHP, and WordPress to meet client requirements and streamline digital workflows.",
        technologies: [
          "php",
          "codeigniter",
          "wordpress",
          "mysql",
          "javascript",
        ],
      },
    ],
  },
  {
    company: "Computer Society of Kirinyaga",
    location: "Kutus, Kirinyaga, Kenya",
    roles: [
      {
        title: "Vice Chairperson",
        type: "Leadership",
        dateRange: "May 2026 - Present",
        isCurrent: true,
        description:
          "Serving as the Assistant Vice Chairperson to oversee community operations, organize technical workshops, and lead strategic initiatives to foster a thriving ecosystem of student developers.",
        technologies: ["leadership", "teamwork", "community", "mentorship"],
      },
      {
        title: "Development Lead",
        type: "Core",
        dateRange: "Sep 2025 - Present",
        description:
          "Led both the frontend and backend engineering teams while personally building the core frontend architecture. Delivered a full-stack community platform integrating OpenAI APIs and M-Pesa payments, achieving 40% growth in active users.",
        technologies: ["nestjs", "docker", "openai", "stripe", "rabbitmq"],
      },
    ],
  },
  {
    company: "Teach2Give",
    location: "On-Site Attachment",
    roles: [
      {
        title: "Software Engineering Attaché",
        type: "Attachment",
        dateRange: "May 2025 - Jul 2025",
        description:
          "Worked on full-stack projects using React and NestJS, managing code with Git and GitHub. Gained experience with Docker containers and Azure DevOps for CI/CD. Developed strong abilities in leadership, team collaboration, and technical writing.",
        technologies: [
          "react",
          "nestjs",
          "docker",
          "typescript",
          "git",
          "github",
        ],
      },
    ],
  },
  {
    company: "Godan Info",
    location: "Remote Internship",
    roles: [
      {
        title: "Frontend Web Developer",
        type: "Internship",
        dateRange: "Jan 2025 - Apr 2025",
        description:
          "Contributed to frontend web development using React.js and Ant Design for the Smip Users Dashboard. Collaborated with the engineering team to build responsive, role-based user interfaces, helping streamline client workflows and improve overall UI/UX.",
        technologies: ["react", "antdesign", "javascript", "ui/ux", "frontend"],
      },
    ],
  },
];
