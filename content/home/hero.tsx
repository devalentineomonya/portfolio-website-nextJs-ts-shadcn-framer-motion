import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/ui/fade-up";
import { ProfileCard } from "@/content/home/profile-card";
import { heroContent } from "@/data/hero";

export const Hero = () => (
  <section id="home" className="w-full scroll-mt-32 pt-4 sm:pt-8">
    <div className="mx-auto grid w-full max-w-6xl items-center gap-12 py-12 lg:grid-cols-[1fr_420px]">
      {/* Left Text Side */}
      <section className="max-w-3xl">
        <FadeUp>
          <p className="font-mono text-sm text-gray-600">
            {heroContent.subtitle}
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h1 className="mt-6 text-[56px] font-bold leading-[0.92] tracking-[-0.04em] sm:text-[88px] lg:text-[112px] text-black">
            {heroContent.title}
          </h1>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mt-8 max-w-xl font-mono text-sm leading-7 text-gray-800 sm:text-base">
            {heroContent.description}
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={heroContent.links.work} variant="black">
              MY WORK
            </Button>
            <Button href={heroContent.links.stories} variant="white">
              IN MY MIND
            </Button>
          </div>
        </FadeUp>
      </section>

      {/* Right Profile Card */}
      <ProfileCard />
    </div>
  </section>
);
