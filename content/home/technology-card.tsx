"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion, Variants } from "framer-motion";

interface TechnologyCardProps {
  icon: string;
  name: string;
}

export const TechnologyCard = ({ icon, name }: TechnologyCardProps) => {
  const { theme } = useTheme();

  const cardVariants: Variants = {
    initial: {
      scale: 1,
      y: 0,
    },
    hover: {
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 25,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const contentVariants: Variants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const textVariants: Variants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
    },
  };

  return (
    <motion.div
      className="border text-card-foreground shadow overflow-hidden rounded-md border-zinc-200 bg-zinc-100/30 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/30 cursor-pointer"
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
    >
      <div className="flex aspect-square select-none flex-col items-center justify-center p-2">
        <motion.div variants={contentVariants}>
          <Image
            unoptimized
            src={icon}
            alt={name}
            width={32}
            height={32}
            className="size-8"
          />
        </motion.div>
        <motion.span
          className="mt-3 text-xs text-muted-foreground"
          variants={textVariants}
        >
          {name}
        </motion.span>
      </div>
    </motion.div>
  );
};
