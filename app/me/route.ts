import { getAllBlogPosts } from "@/lib/blog";
import { client } from "@/sanity/lib/client";
import { ProjectTypes } from "@/types/project";
import { NextResponse } from "next/server";

const PROJECTS_QUERY = `*[
  _type == "project"
]{
  _id,
  name,
  link,
  description,
  techStack,
  year,
  image
}`;

const experiences = [
  {
    id: "kirinyaga-university",
    isCurrent: true,
    period: "September 2024 - Present",
    title: "Development Lead",
    company: "Kirinyaga University",
    location: "Kutus, Kirinyaga, Kenya",
    description:
      "Built and deployed a community platform with NestJS, Docker, and message queues, integrating OpenAI APIs and M-Pesa payments to support collaboration and engagement features—achieving 40% growth in active users and maintaining 99% uptime.",
    stack: ["nestjs", "docker", "openai", "stripe", "rabbitmq"],
  },
  {
    id: "teach2give",
    isCurrent: false,
    period: "May 2025 - July 2025",
    title: "Software Engineering Attaché",
    company: "Teach2Give",
    location: "On-Site Attachment",
    description:
      "Worked on full-stack projects using React and NestJS, managing code with Git and GitHub. Gained experience with Docker containers and Azure DevOps for CI/CD. Developed strong abilities in leadership, team collaboration, and technical writing.",
    stack: ["react", "nestjs", "docker", "typescript", "git", "github"],
  },
  {
    id: "godan-info",
    isCurrent: false,
    period: "January 2025 - April 2025",
    title: "Frontend Web Developer",
    company: "Godan Info",
    location: "Remote Internship",
    description:
      "Worked on frontend development with React.js and Ant Design, contributing to the Smip Users Dashboard built with NestJS, Docker, Swagger, and TypeScript. Built role-based panels, streamlined workflows (–40% approval time), and boosted engagement by 25%.",
    stack: ["react", "antdesign", "nestjs", "docker", "swagger", "typescript"],
  },
];

const technologies = [
  { key: "typescript", name: "TypeScript" },
  { key: "react", name: "React" },
  { key: "nextdotjs", name: "Next.js" },
  { key: "go", name: "Go" },
  { key: "postgresql", name: "PostgreSQL" },
  { key: "linux", name: "Linux" },
  { key: "docker", name: "Docker" },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/devalentineomonya" },
  { name: "LinkedIn", href: "https://linkedin.com/in/devalentineomonya" },
  { name: "Twitter", href: "https://x.com/devalentine_" },
  {
    name: "Stack Overflow",
    href: "https://stackoverflow.com/users/22697841/valentine-omonya",
  },
  { name: "Medium", href: "https://medium.com/@devalentineomonya" },
  { name: "Leetcode", href: "https://leetcode.com/devalentineomonya" },
  { name: "Instagram", href: "https://instagram.com/devalentineomonya" },
  { name: "Youtube", href: "https://youtube.com/@devMinutes" },
  { name: "Mail", href: "mailto:valomosh254@gmail.com" },
];

const contactLinks = [
  {
    name: "Email",
    href: "mailto:contact@valentinee.dev",
    label: "contact@valentinee.dev",
  },
  {
    name: "GitHub",
    href: "https://github.com/devalentineomonya",
    label: "devalentineomonya",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/devalentineomonya",
    label: "devalentineomonya",
  },
  {
    name: "Twitter / X",
    href: "https://x.com/devalentine_",
    label: "@devalentine_",
  },
];

export async function GET() {
  const [projects, blogPosts] = await Promise.all([
    client.fetch<ProjectTypes[]>(PROJECTS_QUERY),
    Promise.resolve(getAllBlogPosts()),
  ]);

  const portfolio = {
    name: "Valentine Omonya",
    title: "Software Engineer",
    bio: "A Software Engineer with expertise in frontend, backend, and DevOps, specializing in building interactive, robust, and scalable software systems.",
    location: "Nairobi, Kenya",
    website: "https://v5.valentinee.dev",
    resume: "https://v1.valentinee.dev/resume.pdf",
    experiences,
    projects: projects.map((project) => ({
      id: project._id,
      name: project.name,
      description: project.description,
      year: project.year,
      techStack: project.techStack,
      link: project.link,
    })),
    technologies,
    blogs: blogPosts.map((post) => ({
      slug: post.slug,
      title: post.title,
      description: post.description,
      date: post.date,
      author: post.author,
      tags: post.tags,
      coverImage: post.coverImage,
      readingTime: post.readingTime,
      url: `https://v5.valentinee.dev/blogs/${post.slug}`,
    })),
    socialLinks,
    contact: contactLinks,
  };

  return NextResponse.json(portfolio, {
    headers: {
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
