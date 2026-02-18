"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { TechnologyCard } from "./technology-card";
import { useEffect, useState } from "react";

const technologies = [
  { key: "typescript", name: "TypeScript" },
  { key: "react", name: "React" },
  { key: "nextdotjs", name: "Next.js" },
  { key: "go", name: "Go" },
  { key: "postgresql", name: "PostgreSQL" },
  { key: "linux", name: "Linux" },
  { key: "docker", name: "Docker" },
];

export const TechnologySection = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState<string>();
  useEffect(() => {
    setColor(() => (theme === "dark" ? "ffffff" : "000000"));
  }, [theme]);
  return (
    <section id="technologies" className="mt-8">
      <h2 className="mb-3 text-sm font-normal uppercase tracking-wider text-black-400 dark:text-black-400">
        TECHNOLOGIES
      </h2>

      <div className="grid grid-cols-4 gap-1 sm:grid-cols-6 md:grid-cols-7">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.05,
              y: -8,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 25,
              },
            }}
          >
            <TechnologyCard
              icon={`https://cdn.simpleicons.org/${tech.key}/${color}`}
              name={tech.name}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
