import { CornerDots } from "@/components/ui/corner-dots";
import { Story } from "@/data/stories";

export const StoryCard = ({ story }: { story: Story }) => (
  <a
    href={story.url}
    target={story.url.startsWith("http") ? "_blank" : undefined}
    className="border border-black p-6 sm:p-8 block relative hover:bg-gray-50 transition-colors duration-300 ease-in-out group w-full"
  >
    <CornerDots />
    <div className="flex items-center gap-4 mb-6 font-mono text-xs text-gray-600 transition-colors duration-300">
      <span className="font-bold border border-black px-2 py-0.5 text-[9px] uppercase tracking-widest text-black">
        {story.category}
      </span>
      <span>•</span>
      <span>{story.date}</span>
      <span>•</span>
      <span>{story.readTime}</span>
    </div>
    <h3 className="text-2xl font-bold mb-4 tracking-tight">{story.title}</h3>
    <p className="font-mono text-sm leading-7 text-gray-800 group-hover:text-gray-900 mb-8 max-w-3xl transition-colors duration-300">
      {story.description}
    </p>
    <div className="flex flex-wrap gap-2 pt-5 border-t border-black group-hover:border-black transition-colors duration-300">
      {story.tags.map((tag) => (
        <span
          key={tag}
          className="border border-black group-hover:border-black px-2 py-1 text-[10px] font-bold uppercase tracking-widest transition-colors duration-300"
        >
          {tag}
        </span>
      ))}
    </div>
  </a>
);
