import { StoryCard } from "@/components/ui/story-card";
import { stories } from "@/data/stories";

export default function StoriesPage() {
  return (
    <main className="flex-grow w-full px-6 flex flex-col pb-24 pt-12 sm:pt-20">
      <div className="w-full max-w-6xl mx-auto">
        <h1 className="text-5xl sm:text-7xl font-black tracking-tighter mb-6 text-black">
          Stories.
        </h1>
        <p className="font-mono text-sm text-gray-600 mb-16 max-w-2xl">
          My thoughts, explorations, and tutorials on software engineering,
          cloud architecture, and building products.
        </p>

        <div className="flex flex-col gap-6 w-full">
          {stories.map((story) => (
            <StoryCard key={story.title} story={story} />
          ))}
        </div>
      </div>
    </main>
  );
}
