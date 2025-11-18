import { BlogCard } from "./blog-card";

export const BlogsSection = () => {
  return (
    <section id="blogs" className="mt-10">
      <h2 className="mb-4 text-sm font-normal uppercase tracking-wider text-black-400 dark:text-black-400">
        LATEST BLOGS
      </h2>
<div className="space-y-4">

      <BlogCard />
      <BlogCard />
      <BlogCard />
</div>
    </section>
  );
};
