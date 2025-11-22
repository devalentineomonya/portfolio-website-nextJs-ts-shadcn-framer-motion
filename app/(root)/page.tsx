import { BlogsSection } from "@/content/home/blogs";
import { ExperienceSection } from "@/content/home/experience";
import { HomeHero } from "@/content/home/hero";
import { ProjectsSection } from "@/content/home/projects";
import SocialLinks from "@/content/home/social-links";
import { TechnologySection } from "@/content/home/technology";
import { client } from "@/sanity/lib/client";
import { ProjectTypes } from "@/types/project";

const PROJECTS_QUERY = `*[
  _type == "project"
]{
  _id,
  name,
  link,
  description,
  year,
  image
}`;



  export default async function HomePage() {
  const projects = await client.fetch<ProjectTypes[]>(PROJECTS_QUERY);
  return (
    <>
      <HomeHero />
      <ExperienceSection />
      <ProjectsSection projects={projects}/>
      <TechnologySection />
      <BlogsSection />
      <SocialLinks />
    </>
  );
}
