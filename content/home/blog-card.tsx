"use client";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface BlogCardProps {
  title?: string;
  description?: string;
  href?: string;
  date?: string;
  readTime?: string;
  tags?: string[];
  className?: string;
  variant?: "default" | "featured";
}

export const BlogCard = ({
  title = "Blog Title",
  description = "A short description of the article.",
  href = "#",
  date = "May 15, 2024",
  readTime = "5 min read",
  tags = [],
  className = "",
  variant = "default"
}: BlogCardProps) => {
  const cardContent = (
    <motion.div
      className={`
        border text-card-foreground shadow border-zinc-200 rounded-md
        bg-zinc-100/30 flex backdrop-blur-sm px-6 py-4
        dark:border-zinc-800 dark:bg-zinc-900/30
        hover:shadow-md transition-all duration-300
        group cursor-pointer
        ${variant === "featured" ? "border-l-4 border-l-blue-500" : ""}
        ${className}
      `}
      whileHover={{
        y: -4,
        scale: 1.02
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <div className="flex flex-col gap-2 flex-1">

        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-1">
          <span>{date}</span>
          <span>•</span>
          <span>{readTime}</span>
        </div>


        <h3 className="text-md md:text-2xl font-bold bg-linear-to-br from-black from-30% to-black/50 dark:from-white dark:from-30% dark:to-white/50 bg-clip-text text-transparent mb-2"
        >
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>


        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-zinc-200/50 dark:bg-zinc-700/50 rounded text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="px-2 py-1 bg-zinc-200/50 dark:bg-zinc-700/50 rounded text-xs text-muted-foreground">
                +{tags.length - 3}
              </span>
            )}
          </div>
        )}
      </div>


      <motion.div
        className="flex items-start"
        whileHover={{
          rotate: 45,
          color: "rgb(37, 99, 235)"
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <ArrowUpRight className="size-5 opacity-60 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-500 ease-in-out" />
      </motion.div>
    </motion.div>
  );


  if (href && href !== "#") {
    return (
      <Link href={href} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};
