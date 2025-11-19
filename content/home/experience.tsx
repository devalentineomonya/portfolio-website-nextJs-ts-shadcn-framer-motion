"use client";
import { ExperienceCard } from "./experience-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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

const slideInVariants = {
  hidden: {
    opacity: 0,
    x: -50,
    scale: 0.95
  },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: i * 0.15,
      duration: 0.6
    }
  }),
  exit: {
    opacity: 0,
    x: -30,
    transition: {
      duration: 0.3
    }
  }
};

export const ExperienceSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentExperience = experiences.find((exp) => exp.isCurrent);
  const pastExperiences = experiences.filter((exp) => !exp.isCurrent);

  return (
    <section id="experience" className="mt-6">
      <h2 className="text-xs mb-3 font-normal uppercase tracking-wider text-black-400 dark:text-black-400">
        {currentExperience ? "CURRENTLY" : "EXPERIENCE"}
      </h2>

      {/* Current Experience */}
      {currentExperience && (
        <ExperienceCard
          isCurrent={true}
          period={currentExperience.period}
          title={currentExperience.title}
          company={currentExperience.company}
          location={currentExperience.location}
          description={currentExperience.description}
          stack={currentExperience.stack}
        />
      )}

      {/* Past Experiences */}
      {pastExperiences.length > 0 && (
        <Accordion
          type="single"
          collapsible
          onValueChange={(value) => setIsOpen(value === "previous-roles")}
          className="mt-6"
        >
          <AccordionItem value="previous-roles">
            <AccordionTrigger className="justify-start gap-2 [&[data-state=open]>svg]:rotate-90 text-md py-0 pb-3 text-black-400 dark:text-black-400">
              Previous roles
            </AccordionTrigger>

            <AccordionContent className="pl-6">
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="space-y-4"
                  >
                    {pastExperiences.map((experience, index) => (
                      <motion.div
                        key={experience.id}
                        custom={index}
                        variants={slideInVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        layout
                      >
                        <ExperienceCard
                          isCurrent={false}
                          period={experience.period}
                          title={experience.title}
                          company={experience.company}
                          location={experience.location}
                          description={experience.description}
                          stack={experience.stack}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </section>
  );
};
