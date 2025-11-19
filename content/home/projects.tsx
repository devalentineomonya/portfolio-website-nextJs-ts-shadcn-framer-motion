"use client";
import { useState, useMemo } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProjectCard } from "./project-card";
import { ProjectFilter } from "./project-filters";

// Mock projects data - replace with your actual data
const mockProjects = [
  {
    id: "1",
    title: "E-commerce Platform",
    year: 2024,
    techStack: ["React", "Next.js", "TypeScript", "Tailwind"],
    description: "A modern e-commerce platform with real-time inventory",
    image: "/images/project1.jpg",
    demoUrl: "https://demo1.com",
    codeUrl: "https://github.com/user/project1",
  },
  {
    id: "2",
    title: "Portfolio Website",
    year: 2023,
    techStack: ["React", "CSS", "JavaScript"],
    description: "Personal portfolio website with dark mode",
    image: "/images/project2.jpg",
    demoUrl: "https://demo2.com",
    codeUrl: "https://github.com/user/project2",
  },
  {
    id: "3",
    title: "Task Management App",
    year: 2024,
    techStack: ["React", "TypeScript", "Node.js", "MongoDB"],
    description: "Collaborative task management application",
    image: "/images/project3.jpg",
    demoUrl: "https://demo3.com",
    codeUrl: "https://github.com/user/project3",
  },
  {
    id: "4",
    title: "Weather Dashboard",
    year: 2023,
    techStack: ["JavaScript", "API", "CSS"],
    description: "Real-time weather forecasting dashboard",
    image: "/images/project4.jpg",
    demoUrl: "https://demo4.com",
    codeUrl: "https://github.com/user/project4",
  },
  {
    id: "5",
    title: "Social Media App",
    year: 2024,
    techStack: ["React", "Firebase", "Tailwind", "Next.js"],
    description: "Social media platform with real-time messaging",
    image: "/images/project5.jpg",
    demoUrl: "https://demo5.com",
    codeUrl: "https://github.com/user/project5",
  },
];

interface Project {
  id: string;
  title: string;
  year: number;
  techStack: string[];
  description: string;
  image: string;
  demoUrl: string;
  codeUrl: string;
}

export const ProjectsSection = () => {
  const [filters, setFilters] = useState({
    search: "",
    years: [] as number[],
    techStacks: [] as string[],
  });

  // Filter projects based on current filters
  const filteredProjects = useMemo(() => {
    return mockProjects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        project.description
          .toLowerCase()
          .includes(filters.search.toLowerCase());

      const matchesYear =
        filters.years.length === 0 || filters.years.includes(project.year);

      const matchesTech =
        filters.techStacks.length === 0 ||
        filters.techStacks.some((tech) => project.techStack.includes(tech));

      return matchesSearch && matchesYear && matchesTech;
    });
  }, [filters]);

  const handleFiltersChange = (newFilters: {
    search: string;
    years: number[];
    techStacks: string[];
  }) => {
    setFilters(newFilters);
  };

  return (
    <section className="mt-6" id="projects">
      <h2 className="text-xs mb-3 font-normal uppercase tracking-wider text-black-400 dark:text-black-400">
        RECENT PROJECTS
      </h2>

      <ProjectFilter
        projects={mockProjects}
        onFiltersChange={handleFiltersChange}
      />

      {filteredProjects.length === 0 ? (
        <div className="text-center py-8 text-zinc-500 dark:text-zinc-400">
          No projects found matching your filters.
        </div>
      ) : (
        <Carousel
          opts={{
            align: "center",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-1 py-4">
            {filteredProjects.map((project) => (
              <CarouselItem
                key={project.id}
                className="min-w-0 shrink-0 grow-0 pl-1 basis-11/12 md:basis-1/3"
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  year={project.year}
                  techStack={project.techStack}
                  image={project.image}
                  demoUrl={project.demoUrl}
                  codeUrl={project.codeUrl}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
    </section>
  );
};
