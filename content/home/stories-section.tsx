import { FadeUp } from "@/components/ui/fade-up";
import { Button } from "@/components/ui/button";
import { SectionLayout } from "@/components/layout/section-layout";
import { StoryCard } from "@/components/ui/story-card";
import { stories } from "@/data/stories";
import { ArrowRightIcon } from "@/components/ui/icons";

export const StoriesSection = () => (
  <SectionLayout id="stories" title="Stories.">
    <div className="flex flex-col gap-6 w-full">
      {stories.slice(0, 2).map((story, idx) => (
        <FadeUp key={story.title} delay={0.1 * (idx + 1)}>
          <StoryCard story={story} />
        </FadeUp>
      ))}
    </div>

    <FadeUp delay={0.3}>
      <div className="mt-8 flex justify-end">
        <Button href="/stories" variant="white">
          VIEW ALL STORIES
          <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </FadeUp>
  </SectionLayout>
);
