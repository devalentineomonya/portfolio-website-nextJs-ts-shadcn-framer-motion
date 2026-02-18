import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Archive | Valentine Omonya",
  description: "Archived projects and previous portfolio versions.",
};

const archivedProjects = [
  {
    name: "Portfolio v1",
    href: "https://v1.valentinee.dev",
    description: "First portfolio website",
    lastUpdated: "2023",
  },
  {
    name: "Portfolio v2",
    href: "https://v2.valentinee.dev",
    description: "Second portfolio iteration",
    lastUpdated: "2023",
  },
  {
    name: "Portfolio v3",
    href: "https://v3.valentinee.dev",
    description: "Third portfolio redesign",
    lastUpdated: "2024",
  },
  {
    name: "Web Development Hackathon",
    href: "https://github.com/devalentineomonya/web-development-hackathon",
    description: "Hackathon project repository",
    lastUpdated: "2024",
  },
  {
    name: "Simba Motors — Class Project",
    href: "https://github.com/devalentineomonya/simba-motors-class-projects-php-mariadb-mysql",
    description: "PHP & MariaDB/MySQL class project",
    lastUpdated: "2023",
  },
];

export default function ArchievePage() {
  return (
    <div className="grow flex flex-col items-start justify-start w-full mt-20">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-linear-to-br from-black from-30% to-black/60 dark:from-white dark:from-30% dark:to-white/60 bg-clip-text text-transparent mb-2">
          Archive
        </h1>
        <p className="text-muted-foreground">
          Previous portfolio versions and older projects.
        </p>
      </div>

      <div className="w-full">
        <div className="">
          {archivedProjects.map((project) => (
            <Link
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-4 transition-colors hover:bg-zinc-50/50 dark:hover:bg-zinc-900/50 -mx-3 px-3  border-b border-zinc-200 dark:border-zinc-800"
            >
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium text-foreground group-hover:underline underline-offset-4 flex items-center gap-1.5">
                  {project.name}
                  <ArrowUpRight className="size-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
                <span className="text-xs text-muted-foreground">
                  {project.description}
                </span>
              </div>
              <span className="text-xs text-muted-foreground shrink-0 tabular-nums">
                {project.lastUpdated}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
