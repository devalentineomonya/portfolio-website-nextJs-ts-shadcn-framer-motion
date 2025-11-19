import { BlogsSection } from "@/content/home/blogs";
import { ExperienceSection } from "@/content/home/experience";
import { HomeHero } from "@/content/home/hero";
import { ProjectsSection } from "@/content/home/projects";
import SocialLinks from "@/content/home/social-links";
import { TechnologySection } from "@/content/home/technology";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ExperienceSection />
      <ProjectsSection />
      <TechnologySection />
      <BlogsSection />
      <SocialLinks/>
    </>
  );
}
