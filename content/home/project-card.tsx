import { TiltEffect } from "@/components/ui/tilt-effect";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  year: number;
  techStack: string[];
  image: string;
  demoUrl?: string;
  codeUrl?: string;
}

export const ProjectCard = ({
  title,
  description,
  year,
  techStack,
  image,
  demoUrl,
  codeUrl,
}: ProjectCardProps) => {
  const projectLink = demoUrl || codeUrl;

  const CardContent = (
    <Card className="overflow-hidden p-0 gap-0 border-zinc-200 rounded-md bg-zinc-100/30 transition-colors backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/30 group hover:shadow-md">
      <div className="relative aspect-video rounded-t-md overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          unoptimized
        />
      </div>
      <div className="p-3 flex items-start relative">
        <div className="flex-1 min-w-0">
          <h3 className="text-md font-semibold text-black dark:text-white line-clamp-1">
            {title}
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2">
            {description}
          </p>
          <div className="flex flex-wrap gap-1 mt-2">
            {techStack.slice(0, 2).map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-[10px] px-1.5 py-0 rounded-sm font-normal"
              >
                {tech}
              </Badge>
            ))}
            {techStack.length > 2 && (
              <Badge
                variant="outline"
                className="text-[10px] px-1.5 py-0 rounded-sm font-normal"
              >
                +{techStack.length - 2}
              </Badge>
            )}
            <Badge
              variant="outline"
              className="text-[10px] px-1.5 py-0 rounded-sm font-normal"
            >
              {year}
            </Badge>
          </div>
        </div>
        {projectLink && (
          <div className="absolute top-3 right-3">
            <div className="bg-white/80 dark:bg-black/80 rounded-full p-1.5 shadow-sm group-hover:scale-110 transition-transform">
              <ArrowUpRight className="size-3 text-black dark:text-white" />
            </div>
          </div>
        )}
      </div>
    </Card>
  );

  if (projectLink) {
    return (
      <TiltEffect>
        <Link
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {CardContent}
        </Link>
      </TiltEffect>
    );
  }

  return <TiltEffect>{CardContent}</TiltEffect>;
};
