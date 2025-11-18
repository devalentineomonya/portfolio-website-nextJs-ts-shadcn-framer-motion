import Link from "next/link";
import { MainSection } from "@/components/common/sections/main-section";

export const HomeDescription = () => {
  return (
    <MainSection>
      <h1 className="text-xl font-semibold tracking-tight mb-2 mt-3">Today</h1>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Hi, I&apos;m{" "}
        <span className="font-semibold text-foreground">Valentine Omonya</span>,
        a passionate <span className="font-semibold">Software Engineer</span>{" "}
        based in Nairobi, Kenya. I’m currently pursuing my degree at Kirinyaga
        University. I’ve built and contributed to
        <Link href="/projects" className="text-primary hover:underline mx-1">
          various projects
        </Link>
        focusing on modern web technologies, system architecture, and
        open-source innovation. I enjoy solving complex engineering challenges
        and crafting clean, scalable digital solutions that make an impact.
      </p>
    </MainSection>
  );
};
