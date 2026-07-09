import { FadeUp } from "@/components/ui/fade-up";
import { SectionLayout } from "@/components/layout/section-layout";

export const About = () => (
  <SectionLayout id="about" title="About." className="mt-24">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <FadeUp delay={0.1}>
        <p className="font-mono text-sm leading-8 text-gray-800">
          I have always been interested in building systems that solve user
          problems across different platforms—be it web, mobile, or systems with
          TUIs—and I focus heavily on implementing robust business solutions.
        </p>
      </FadeUp>
      <FadeUp delay={0.2}>
        <div className="font-mono text-sm flex flex-col gap-0 border border-black">
          <div className="flex justify-between border-b border-black p-4 bg-gray-50">
            <span className="font-bold uppercase tracking-widest text-xs">
              Location
            </span>
            <span>Nairobi, Kenya</span>
          </div>
          <div className="flex justify-between border-b border-black p-4">
            <span className="font-bold uppercase tracking-widest text-xs">
              Focus
            </span>
            <span>Frontend, Backend, DevOps</span>
          </div>
          <div className="flex justify-between p-4 bg-gray-50">
            <span className="font-bold uppercase tracking-widest text-xs">
              Availability
            </span>
            <span>Open for roles</span>
          </div>
        </div>
      </FadeUp>
    </div>
  </SectionLayout>
);
