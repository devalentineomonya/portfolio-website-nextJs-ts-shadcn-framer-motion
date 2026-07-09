import { FadeUp } from "@/components/ui/fade-up";
import { Button } from "@/components/ui/button";
import { SectionLayout } from "@/components/layout/section-layout";
import { ExperienceCard } from "@/components/ui/experience-card";
import { experiences } from "@/data/experience";
import { ArrowRightIcon } from "@/components/ui/icons";

export const ExperienceSection = () => (
  <SectionLayout id="experience" title="Experience.">
    <div className="flex flex-col gap-8">
      {experiences.slice(0, 2).map((experience, idx) => (
        <FadeUp key={experience.company} delay={0.1 * (idx + 1)}>
          <ExperienceCard experience={experience} />
        </FadeUp>
      ))}

      <div className="mt-12 flex justify-end">
        <Button href="/experience" variant="white">
          VIEW FULL RESUME
          <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </div>
  </SectionLayout>
);
