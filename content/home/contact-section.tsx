import { FadeUp } from "@/components/ui/fade-up";
import { Button } from "@/components/ui/button";
import { SectionLayout } from "@/components/layout/section-layout";
import { SocialLinks } from "@/components/ui/social-links";

export const ContactSection = () => (
  <SectionLayout id="contact">
    <FadeUp>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 border border-black p-8 sm:p-12 bg-gray-50">
        <div className="w-full max-w-xl">
          <h2 className="text-5xl sm:text-7xl font-black tracking-tighter mb-6 text-black">
            Hit me up.
          </h2>
          <p className="font-mono text-sm leading-7 text-gray-800 mb-10">
            Let's build something great together. My inbox is always open for
            opportunities, exciting new projects, or just to say hello.
          </p>
          <Button
            href="mailto:contact@valentinee.dev"
            variant="black"
            className="w-full lg:w-auto mt-2"
          >
            SAY HELLO
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full lg:w-auto min-w-[280px] mt-4 lg:mt-0">
          <SocialLinks />
        </div>
      </div>
    </FadeUp>
  </SectionLayout>
);
