"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
interface TechnologyCardProps {
  icon: string;
  name: string;
}

export const TechnologyCard = ({ icon, name }: TechnologyCardProps) => {
  const { theme } = useTheme();
  return (
    <div className="border text-card-foreground shadow overflow-hidden rounded-md border-zinc-200 bg-zinc-100/30 transition-colors backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/30">
      <div className="group flex aspect-square select-none flex-col items-center justify-center p-2">
        <Image
          src={`https://cdn.simpleicons.org/${icon}/${theme === "dark" ? "ffffff" : "000000"}`}
          alt={name}
          width={32}
          height={32}
          className="group-hover:-translate-y-1 size-8 transition-all duration-300"
        />
        <div className="mt-3 text-xs text-muted-foreground">{name}</div>
      </div>
    </div>
  );
};
