"use client";

import { Highlighter } from "@/components/ui/highlighter";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";

interface ExperienceCardProps {
  period: string;
  title: string;
  company: string;
  location: string;
  description: string;
  stack: string[];
  isCurrent?: boolean;
}

export const ExperienceCard = ({
  period,
  title,
  company,
  location,
  description,
  stack,
  isCurrent = false,
}: ExperienceCardProps) => {
  const { theme } = useTheme();

  // Function to parse and highlight specific indices (1,  5)
  const renderDescription = (desc: string) => {
    const parts = desc.split("+");

    return parts.map((part, index) => {
      // Skip empty parts
      if (!part.trim()) return null;

      // Apply underline highlights to indices 1,  5
      if (index === 1 || index === 5) {
        return (
          <Highlighter
            key={index}
            action="underline"
            color={index === 1 ? "#702AD9" : "#66BB6A"}
          >
            <span className="font-medium">{part}</span>
          </Highlighter>
        );
      }

      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="mb-8" style={{ opacity: 1, transform: "none" }}>
      <div className="mb-4">
        <div className="flex justify-between items-start mb-1">
          <div className="mb-2">
            <h3
              className={cn(
                "text-lg font-bold bg-linear-to-br from-black from-30% to-black/50 dark:from-white dark:from-30% dark:to-white/50 bg-clip-text text-transparent",
                isCurrent && "md:text-2xl ",
              )}
            >
              {title}
            </h3>
            <p className="text-xs font-normal uppercase tracking-wider text-black-400 dark:text-black-400">
              {period}
            </p>
          </div>

          <div className="text-right">
            <div className="flex items-center gap-2">
              <span className="text-sm font-normal text-black-400 dark:text-black-400">
                {company}
              </span>
            </div>
            <p className="text-sm text-black-400 dark:text-black-400">
              {location}
            </p>
          </div>
        </div>

        <p className="text-xs font-normal mb-2 text-black-400 dark:text-black-400 leading-loose relative">
          {renderDescription(description)}
        </p>

        <div className="flex gap-2">
          {stack.map((iconName) => (
            <button key={iconName} data-state="closed">
              <Image
                unoptimized
                alt={iconName}
                width={16}
                height={16}
                src={`https://cdn.simpleicons.org/${iconName}/${
                  theme === "dark" ? "ffffff" : "000000"
                }`}
                className="size-4 text-black-400 dark:text-black-400"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
