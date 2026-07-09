import { Hero } from "@/content/home/hero";
import { About } from "@/content/home/about";
import { ExperienceSection } from "@/content/home/experience-section";
import { WorkSection } from "@/content/home/work-section";
import { StoriesSection } from "@/content/home/stories-section";
import { ContactSection } from "@/content/home/contact-section";

export default function Home() {
  return (
    <main className="flex-grow w-full px-6 flex flex-col pb-24">
      <Hero />
      <About />
      <ExperienceSection />
      <WorkSection />
      <StoriesSection />
      <ContactSection />
    </main>
  );
}
