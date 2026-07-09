"use client";
import { FadeUp } from "@/components/ui/fade-up";
import { ExperienceCard } from "@/components/ui/experience-card";
import { experiences } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <main className="flex-grow w-full px-6 flex flex-col pb-24 pt-12 sm:pt-20">
      <div className="w-full max-w-6xl mx-auto">
        <h1 className="text-5xl sm:text-7xl font-black tracking-tighter mb-6 text-black">
          Experience.
        </h1>
        <p className="font-mono text-sm text-gray-600 mb-16 max-w-2xl">
          My professional journey across software engineering roles, leadership,
          and technical attachments.
        </p>

        <div className="flex flex-col gap-8">
          {experiences.map((experience, idx) => (
            <FadeUp key={experience.company} delay={0.1 * (idx + 1)}>
              <ExperienceCard experience={experience} />
            </FadeUp>
          ))}
        </div>
      </div>
    </main>
  );
}
