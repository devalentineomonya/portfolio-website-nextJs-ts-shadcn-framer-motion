import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { TiltEffect } from "@/components/ui/tilt-effect";
import { urlFor } from "@/sanity/lib/image";
import { ProjectTypes } from "@/types/project";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const ProjectCard = ({
  name,
  description,
  year,
  techStack,
  image,
  link,
}: ProjectTypes) => {
  const CardContent = (
    <Card className="overflow-hidden p-0 gap-0 border-zinc-200 rounded-xl bg-zinc-100/30 transition-colors backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/30 group hover:shadow-lg h-full flex flex-col">
      <div className="relative aspect-video rounded-t-xl overflow-hidden min-h-[180px]">
        <Image
          src={urlFor(image).url()}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          unoptimized
        />
      </div>
      <div className="p-5 flex items-start relative flex-1">
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-black dark:text-white line-clamp-1 mb-1">
            {name}
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {techStack?.slice(0, 3).map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs px-2 py-0.5 rounded-md font-normal"
              >
                {tech}
              </Badge>
            ))}
            {techStack?.length > 3 && (
              <Badge
                variant="outline"
                className="text-xs px-2 py-0.5 rounded-md font-normal"
              >
                +{techStack.length - 3}
              </Badge>
            )}
            <Badge
              variant="outline"
              className="text-xs px-2 py-0.5 rounded-md font-normal"
            >
              {year}
            </Badge>
          </div>
        </div>
        {link && (
          <div className="absolute top-4 right-4">
            <div className="bg-white/80 dark:bg-black/80 rounded-full p-2 shadow-sm group-hover:scale-110 transition-transform">
              <ArrowUpRight className="size-4 text-black dark:text-white" />
            </div>
          </div>
        )}
      </div>
    </Card>
  );

  if (link) {
    return (
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block size-full"
      >
        <TiltEffect>{CardContent}</TiltEffect>
      </Link>
    );
  }

  return <TiltEffect>{CardContent}</TiltEffect>;
};
