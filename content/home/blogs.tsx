import { getRecentPosts } from "@/lib/blog";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { BlogCard } from "./blog-card";

export const BlogsSection = () => {
  const recentPosts = getRecentPosts(3);

  return (
    <section id="blogs" className="mt-10">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-normal uppercase tracking-wider text-black-400 dark:text-black-400">
          LATEST BLOGS
        </h2>
        <Link
          href="/blogs"
          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          View all
          <ArrowRight className="size-3.5" />
        </Link>
      </div>
      <div className="space-y-4">
        {recentPosts.length > 0 ? (
          recentPosts.map((post) => (
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
          ))
        ) : (
          <>
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </>
        )}
      </div>
    </section>
  );
};
