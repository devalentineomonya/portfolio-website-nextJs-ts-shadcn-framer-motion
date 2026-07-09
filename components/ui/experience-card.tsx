import { CornerDots } from "@/components/ui/corner-dots";
import { Experience } from "@/data/experience";

export const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <div className="border border-black p-6 sm:p-8 bg-white relative hover:bg-gray-50 transition-colors duration-300 ease-in-out group">
      <CornerDots />
      <div className="flex flex-col sm:flex-row justify-between items-start mb-8 border-b border-black group-hover:border-black pb-6 transition-colors duration-300">
        <div>
          <h3 className="text-3xl font-black tracking-tight">
            {experience.company}
          </h3>
          <p className="font-mono text-sm mt-2 text-gray-600 transition-colors duration-300">
            {experience.location}
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        {experience.roles.map((role, idx) => (
          <div
            key={idx}
            className={`mb-2 ${idx > 0 ? "pt-8 border-t border-gray-200 group-hover:border-black transition-colors duration-300" : "mb-10"}`}
          >
            <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-4">
              <div className="flex items-center gap-3">
                <h4 className="text-xl font-bold">{role.title}</h4>
                <span className="font-mono text-[10px] border border-black group-hover:border-black px-2 py-0.5 uppercase tracking-widest transition-colors duration-300">
                  {role.type}
                </span>
              </div>
              <div
                className={`font-mono text-xs border border-black group-hover:border-black px-3 py-1 transition-colors duration-300 ${
                  role.isCurrent
                    ? "bg-black text-white group-hover:bg-black"
                    : ""
                }`}
              >
                {role.dateRange}
              </div>
            </div>
            <p className="font-mono text-sm leading-7 text-gray-800 group-hover:text-gray-900 mb-6 max-w-3xl transition-colors duration-300">
              {role.description}
            </p>
            {role.technologies && role.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {role.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="border border-black group-hover:border-black px-2 py-1 text-[10px] font-bold uppercase tracking-widest transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
