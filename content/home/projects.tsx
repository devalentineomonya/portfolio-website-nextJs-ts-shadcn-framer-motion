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
import { ProjectTypes } from "@/types/project";



interface ProjectSectionProps {
  projects:ProjectTypes[]
}

export const ProjectsSection = ({projects}:ProjectSectionProps) => {
  const [filters, setFilters] = useState({
    search: "",
    years: [] as number[],
    techStacks: [] as string[],
  });

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        project.description
          .toLowerCase()
          .includes(filters.search.toLowerCase());

      const matchesYear =
        filters.years.length === 0 || filters.years.includes(Number(project.year));

      const matchesTech =
        filters.techStacks.length === 0 ||
        filters.techStacks.some((tech) => project.techStack.includes(tech));

      return matchesSearch && matchesYear && matchesTech;
    });
  }, [filters, projects]);

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
        projects={projects}
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
                key={project._id}
                className="min-w-0 shrink-0 grow-0 pl-1 basis-11/12 md:basis-1/3"
              >
                <ProjectCard
                _id={project._id}
                  name={project.name}
                  description={project.description}
                  year={project.year}
                  techStack={project.techStack}
                  image={project.image}
         link={project.link}
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
