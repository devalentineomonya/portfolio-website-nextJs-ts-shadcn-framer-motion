import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";

interface BlogHeaderProps {
  title: string;
  date: string;
  author: string;
  readingTime: string;
  tags: string[];
}

export function BlogHeader({
  title,
  date,
  author,
  readingTime,
  tags,
}: BlogHeaderProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="mb-8 space-y-4">
      <Link
        href="/blogs"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="size-4" />
        Back to all posts
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold bg-linear-to-br from-black from-30% to-black/60 dark:from-white dark:from-30% dark:to-white/60 bg-clip-text text-transparent leading-tight">
        {title}
      </h1>

      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <Calendar className="size-4" />
          <time dateTime={date}>{formattedDate}</time>
        </div>
        <div className="flex items-center gap-1.5">
          <User className="size-4" />
          {author}
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="size-4" />
          {readingTime}
        </div>
      </div>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <hr className="border-zinc-200 dark:border-zinc-800" />
    </header>
  );
}
