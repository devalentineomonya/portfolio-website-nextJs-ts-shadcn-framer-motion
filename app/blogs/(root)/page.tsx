import { BlogCard } from "@/content/home/blog-card";
import { getAllBlogPosts, getAllTags } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Valentine Omonya",
  description:
    "Articles about software engineering, web development, and technology.",
};

export default function BlogsPage() {
  const posts = getAllBlogPosts();
  const tags = getAllTags();

  return (
    <div className="grow flex flex-col items-start justify-start w-full">
      <div className="mb-8 w-full">
        <h1 className="text-3xl font-bold bg-linear-to-br from-black from-30% to-black/60 dark:from-white dark:from-30% dark:to-white/60 bg-clip-text text-transparent mb-2">
          Blog
        </h1>
        <p className="text-muted-foreground">
          Thoughts on software engineering, web development, and technology.
        </p>
      </div>

      {tags.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-2 w-full">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {posts.length === 0 ? (
        <p className="text-muted-foreground">No blog posts yet. Stay tuned!</p>
      ) : (
        <div className="space-y-4 w-full">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              description={post.description}
              href={`/blogs/${post.slug}`}
              date={new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
              readTime={post.readingTime}
              tags={post.tags}
            />
          ))}
        </div>
      )}
    </div>
  );
}
