import { ArrowUpRight } from "lucide-react";

export const BlogCard = ({
  title = "Blog Title",
  description = "A short description of the article.",
}) => {
  return (
    <div className="border text-card-foreground shadow border-zinc-200 rounded-md bg-zinc-100/30 flex backdrop-blur-sm px-6 py-4 dark:border-zinc-800 dark:bg-zinc-900/30">
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <ArrowUpRight className="size-5 opacity-60" />
    </div>
  );
};
