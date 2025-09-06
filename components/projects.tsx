"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import ProjectCard from "./project-card";
import Link from "next/link";
import { motion } from "framer-motion";
import { Projects } from "@/sanity/sanity.types";
import { cn, useReusableInView } from "@/lib/utils";

interface ProjectsSectionProps {
  projects: Projects[];
  className?: string;
}
const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  className,
}) => {
  const { ref: projectsRef, inView: projectsInView } = useReusableInView();
  return (
    <motion.section
      ref={projectsRef}
      className={cn(
        "dark:bg-[#2c2c2c] bg-zinc-100  rounded-xl px-3 py-6 mb-6",
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: projectsInView ? 1 : 0.5,
        y: projectsInView ? 0 : 30,
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <span className="h-2 w-2 bg-zinc-500 rounded-full mr-2"></span>
          <span className="text-zinc-600 dark:text-zinc-400">Projects</span>
        </div>
        <Link
          href="/projects"
          className="text-sm text-zinc-600 dark:bg-[#373737] border dark:border-[#424242]
           border-[#f0f0f0] dark:text-zinc-400 flex items-center hover:text-zinc-900
            dark:hover:text-white transition-colors bg-background shadow p-2 rounded-md"
        >
          View All
          <ChevronRight size={16} />
        </Link>
      </div>

      <div className="space-y-3 mt-6">
        {projects?.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            inView={projectsInView}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
