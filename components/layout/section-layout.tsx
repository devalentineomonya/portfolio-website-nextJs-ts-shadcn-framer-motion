import { FadeUp } from "@/components/ui/fade-up";

interface SectionLayoutProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const SectionLayout = ({
  id,
  title,
  children,
  className = "mt-32",
}: SectionLayoutProps) => {
  return (
    <section
      id={id}
      className={`w-full max-w-6xl mx-auto border-t border-black pt-16 scroll-mt-24 ${className}`}
    >
      {title && (
        <FadeUp>
          <h2 className="text-4xl sm:text-5xl font-black tracking-[-0.02em] mb-12">
            {title}
          </h2>
        </FadeUp>
      )}
      {children}
    </section>
  );
};
