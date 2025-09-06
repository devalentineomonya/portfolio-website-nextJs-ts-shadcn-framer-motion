"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Projects } from "@/sanity/sanity.types";

interface ProjectCardProps {
  project: Projects;
  index: number;
  inView: boolean;
}

export default function ProjectCard({
  project,
  index,
  inView,
}: ProjectCardProps) {
  return (
    <motion.div
      className="bg-white dark:bg-[#373737] border dark:border-[#424242]
      shadow-[rgba(10,_10,_10,_0.06)_0px_1.2px_1.2px_0px,_rgba(10,_10,_10,_0.04)_0px_5px_10px_0px]
      border-[#f0f0f0] rounded-xl p-5 cursor-pointer overflow-hidden
      "
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 20,
      }}
      transition={{
        duration: 0.5,
        delay: 0.1 + index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{ scale: 0.98 }}
      layout
    >
      <Link href={`/projects/${project.id}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <motion.div
              className="h-12 w-12 rounded-lg flex items-center justify-center text-white font-medium text-lg "
              style={{ backgroundColor: project.iconBg }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {project.icon}
            </motion.div>

            <div>
              <h3 className="font-medium">{project.name}</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 truncate max-w-96 mr-4">
                {project.description}
              </p>
            </div>
          </div>
          <motion.div
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <ChevronRight
              size={18}
              className="text-zinc-500 dark:text-zinc-400"
            />
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}
