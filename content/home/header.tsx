import Link from "next/link";
import { MainSection } from "@/components/common/sections/main-section";

export const HomeHeader = () => {
  return (
    <MainSection>
      <div className="w-full flex items-center justify-between mb-4">
        <div>
          <h1 className="text-xl text-foreground font-semibold">
            Valentine Omonya
          </h1>
          <h2 className="text-muted-foreground">Software Engineer</h2>
        </div>
        <Link href="v1.valentinee.dev/resume.pdf"></Link>
      </div>
    </MainSection>
  );
};
