import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/ui/fade-up";
import { heroContent } from "@/data/hero";
import Image from "next/image";

export const ProfileCard = () => (
  <aside className="border border-black bg-white w-full">
    <FadeUp delay={0.4}>
      <div className="flex items-center justify-between border-b border-black px-4 py-3 font-mono text-xs font-medium">
        <span>profile.tsx</span>
        <span>open-to-work</span>
      </div>
      <div className="p-4 sm:p-5">
        <div className="border border-black">
          <div className="aspect-[4/5] sm:aspect-square border-b border-black bg-gray-100 relative group overflow-hidden">
            <Image
              src={heroContent.profile.image}
              alt={heroContent.profile.name}
              fill
              className="object-cover object-center grayscale contrast-[1.1] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
            />
          </div>
          <div className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold tracking-[-0.01em]">
                  {heroContent.profile.name}
                </h2>
                <p className="mt-1 font-mono text-sm text-gray-600">
                  {heroContent.profile.location}
                </p>
              </div>
              <div className="h-2 w-2 bg-black mt-1.5 shrink-0"></div>
            </div>
            <p className="mt-5 font-mono text-[11px] font-bold leading-6">
              {heroContent.profile.roles}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 border-t border-gray-200 pt-5">
              <Button href={heroContent.links.email} variant="white">
                EMAIL
              </Button>
              <Button
                href={heroContent.links.resume}
                target="_blank"
                variant="black"
              >
                VIEW CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </FadeUp>
  </aside>
);
