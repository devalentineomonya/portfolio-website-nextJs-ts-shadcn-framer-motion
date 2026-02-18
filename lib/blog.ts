import type { BlogFrontmatter, BlogPost, BlogPostMeta } from "@/types/blog";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function ensureBlogDir() {
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true });
  }
}

export function getAllSlugs(): string[] {
  ensureBlogDir();
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getBlogBySlug(slug: string): BlogPost {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContents);
  const frontmatter = data as BlogFrontmatter;
  const stats = readingTime(content);

  return {
    slug,
    frontmatter,
    content,
    readingTime: stats.text,
  };
}

export function getAllBlogPosts(): BlogPostMeta[] {
  const slugs = getAllSlugs();

  const posts = slugs
    .map((slug) => {
      const post = getBlogBySlug(slug);
      return {
        slug: post.slug,
        title: post.frontmatter.title,
        description: post.frontmatter.description,
        date: post.frontmatter.date,
        author: post.frontmatter.author,
        tags: post.frontmatter.tags,
        coverImage: post.frontmatter.coverImage,
        readingTime: post.readingTime,
      };
    })
    .filter((post) => {
      const fullPost = getBlogBySlug(post.slug);
      return fullPost.frontmatter.published !== false;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getAllTags(): string[] {
  const posts = getAllBlogPosts();
  const tagSet = new Set<string>();
  posts.forEach((post) => {
    post.tags.forEach((tag) => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}

export function getPostsByTag(tag: string): BlogPostMeta[] {
  return getAllBlogPosts().filter((post) =>
    post.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase()),
  );
}

export function getRecentPosts(count: number = 3): BlogPostMeta[] {
  return getAllBlogPosts().slice(0, count);
}
