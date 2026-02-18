"use client";
import { Card } from "@/components/ui/card";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

interface TechnologyCardProps {
  icon: string;
  name: string;
}

export const TechnologyCard = ({ icon, name }: TechnologyCardProps) => {
  const cardVariants: Variants = {
    initial: { scale: 1, y: 0 },
    hover: {
      transition: { type: "spring", stiffness: 500, damping: 25 },
    },
    tap: { scale: 0.95 },
  };

  const contentVariants: Variants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  };

  const textVariants: Variants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
    >
      <Card className="overflow-hidden border-zinc-200 bg-zinc-100/30 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/30 cursor-pointer p-0">
        <div className="flex aspect-square select-none flex-col items-center justify-center p-4 gap-3">
          <motion.div variants={contentVariants}>
            <Image
              unoptimized
              src={icon}
              alt={name}
              width={40}
              height={40}
              className="size-10"
            />
          </motion.div>
          <motion.span
            className="text-xs text-muted-foreground font-medium text-center"
            variants={textVariants}
          >
            {name}
          </motion.span>
        </div>
      </Card>
    </motion.div>
  );
};
