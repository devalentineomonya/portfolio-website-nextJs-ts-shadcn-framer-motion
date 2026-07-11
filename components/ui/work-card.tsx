import { CornerDots } from "@/components/ui/corner-dots";
import { WorkProject } from "@/data/work";
import Image from "next/image";

export const WorkCard = ({ project }: { project: WorkProject }) => {
  if (project.archived) {
    return (
      <a
        href={project.url}
        target="_blank"
        className="group hover:bg-gray-50 transition-colors duration-300 ease-in-out relative flex flex-col sm:flex-row sm:items-center justify-between border border-black p-4"
      >
        <CornerDots />
        <div className="flex items-center gap-4 mb-2 sm:mb-0">
          <h3 className="text-lg font-bold tracking-tight">{project.title}</h3>
          <span className="font-mono text-[9px] uppercase font-bold tracking-widest border border-black bg-gray-100 px-2 py-0.5">
            Archived
          </span>
        </div>
        <p className="font-mono text-sm text-gray-700 max-w-xl sm:text-right">
          {project.description}
        </p>
      </a>
    );
  }

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case "Personal":
        return "bg-black text-white";
      case "Brand":
        return "bg-black text-white";
      case "Volunteer":
        return "bg-gray-200";
      case "Client":
        return "bg-gray-50";
      default:
        return "";
    }
  };

  return (
    <a
      href={project.url}
      target="_blank"
      className="group hover:bg-gray-50 transition-colors duration-300 ease-in-out relative border border-black p-4 sm:p-6 flex flex-col h-full"
    >
      <CornerDots />
      {project.image && (
        <div className="w-full aspect-video border border-black bg-gray-100 mb-6 overflow-hidden relative">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover grayscale contrast-[1.1] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
          />
        </div>
      )}
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
        <span
          className={`font-mono text-[9px] uppercase font-bold tracking-widest border border-black group-hover:border-black px-2 py-1 transition-colors duration-300 ${getCategoryBadgeClass(project.category)}`}
        >
          {project.category}
        </span>
      </div>
      <p className="font-mono text-sm leading-7 mb-8 flex-grow text-gray-800 group-hover:text-black transition-colors duration-300">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-black group-hover:border-black transition-colors duration-300">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-[10px] uppercase font-bold tracking-widest border border-black group-hover:border-black px-2 py-1 transition-colors duration-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </a>
  );
};
