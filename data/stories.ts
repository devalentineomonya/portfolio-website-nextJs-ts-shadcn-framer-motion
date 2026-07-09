export interface Story {
  title: string;
  category: string;
  date: string;
  readTime: string;
  description: string;
  url: string;
  tags: string[];
}

export const stories: Story[] = [
  {
    title: "Building a Modern Blog with Next.js and MDX",
    category: "Tech",
    date: "Feb 15, 2026",
    readTime: "3 min read",
    description:
      "A comprehensive guide to setting up a performant, developer-friendly blogging system using Next.js, MDX, and Shiki for syntax highlighting.",
    url: "https://v5.valentinee.dev/blogs/building-a-modern-blog-with-nextjs",
    tags: ["Next.js", "MDX"],
  },
  {
    title: "TypeScript Best Practices for 2026",
    category: "Career",
    date: "Feb 10, 2026",
    readTime: "2 min read",
    description:
      "Essential TypeScript patterns and practices every developer should know to write cleaner, safer, and more maintainable code.",
    url: "https://v5.valentinee.dev/blogs/typescript-best-practices",
    tags: ["TypeScript", "Best Practices"],
  },
  {
    title: "Understanding React Server Components",
    category: "Personal",
    date: "Jan 28, 2026",
    readTime: "5 min read",
    description:
      "A deep dive into how React Server Components (RSC) fundamentally change the way we build web applications, reducing bundle sizes and improving performance.",
    url: "#",
    tags: ["React", "Architecture"],
  },
];
