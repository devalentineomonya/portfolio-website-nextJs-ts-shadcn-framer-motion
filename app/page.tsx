import { BlogsSection } from "@/content/home/blogs";
import { ExperienceSection } from "@/content/home/experienece";
import { HomeHero } from "@/content/home/hero";
import { ProjectsSection } from "@/content/home/projects";
import { TechnologySection } from "@/content/home/technology";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ExperienceSection />
      <ProjectsSection />
      <TechnologySection />
      <BlogsSection />
    </>
  );
}
