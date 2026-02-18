"use client";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { ProjectTypes } from "@/types/project";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useMemo, useState } from "react";
import { ProjectCard } from "./project-card";
import { ProjectFilter } from "./project-filters";

interface ProjectSectionProps {
  projects: ProjectTypes[];
}

export const ProjectsSection = ({ projects }: ProjectSectionProps) => {
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
        filters.years.length === 0 ||
        filters.years.includes(Number(project.year));

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

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
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
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center py-8 text-zinc-500 dark:text-zinc-400"
        >
          No projects found matching your filters.
        </motion.div>
      ) : (
        <Carousel
          opts={{
            align: "center",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 py-5">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <CarouselItem
                  key={project._id}
                  className="min-w-0 shrink-0 grow-0 pl-2 basis-11/12 md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    layout
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={itemVariants}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      layout: {
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        duration: 0.6,
                      },
                    }}
                    whileHover={{
                      y: -4,
                      transition: { duration: 0.2 },
                    }}
                    className="h-full"
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
                  </motion.div>
                </CarouselItem>
              ))}
            </AnimatePresence>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
    </section>
  );
};
