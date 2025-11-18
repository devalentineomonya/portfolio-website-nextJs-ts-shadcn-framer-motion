import { TechnologyCard } from "./technology-card";

const technologies = [
  { key: "nextdotjs", name: "Next.js" },
  { key: "go", name: "Go" },
  { key: "typescript", name: "TypeScript" },
  { key: "react", name: "React" },
  { key: "postgresql", name: "PostgreSQL" },
  { key: "linux", name: "Linux" },
  { key: "docker", name: "Docker" },
];

export const TechnologySection = () => {
  return (
    <section id="technologies" className="mt-8">
      <h2 className="mb-3 text-sm font-normal uppercase tracking-wider text-black-400 dark:text-black-400">
        TECHNOLOGIES
      </h2>

      <div className="grid grid-cols-4 gap-1 sm:grid-cols-6 md:grid-cols-7">
        {technologies.map((tech) => (
          <TechnologyCard
            key={tech.key}
            icon={`https://cdn.simpleicons.org/${tech.key}`}
            name={tech.name}
          />
        ))}
      </div>
    </section>
  );
};
