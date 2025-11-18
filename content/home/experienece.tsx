import { ExperienceCard } from "./experience-card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="mt-6">
      <h2 className="text-xs mb-3 font-normal uppercase tracking-wider text-black-400 dark:text-black-400">
        CURRENTLY
      </h2>

      <ExperienceCard
        isCurrent
        period="2024 - Present"
        title="Frontend Developer"
        company="Govone"
        location="Remote"
        description="React and Next.js application development for the public sector, focused on accessibility, security, and digital innovation.React and Next.js application development for the public sector, focused on accessibility, security, and digital innovation.React and Next.js application development for the public sector, focused on accessibility, security, and digital innovation.React and Next.js application development for the public sector, focused on accessibility, security, and digital innovation. z"
        stack={["react", "nextdotjs", "typescript", "tailwindcss"]}
      />

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="justify-start gap-2 [&[data-state=open]>svg]:rotate-90 text-md py-0 pb-3">
            Is it accessible?
          </AccordionTrigger>
          <AccordionContent className="pl-5">
            <ExperienceCard
              period="2024 - Present"
              title="Frontend Developer"
              company="Govone"
              location="Remote"
              description="React and Next.js application development for the public sector, focused on accessibility, security, and digital innovation.React and Next.js application development for the public sector, focused on accessibility, security, and digital innovation.React and Next.js application development for the public sector, focused on accessibility, security, and digital innovation.React and Next.js application development for the public sector, focused on accessibility, security, and digital innovation. z"
              stack={["react", "nextdotjs", "typescript", "tailwindcss"]}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};
