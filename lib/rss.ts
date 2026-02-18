import { getAllBlogPosts } from "@/lib/blog";
import RSS from "rss";

const SITE_URL = "https://v5.valentinee.dev";

export function generateRSSFeed(): string {
  const posts = getAllBlogPosts();

  const feed = new RSS({
    title: "Valentine Omonya's Blog",
    description:
      "Articles about software engineering, web development, and technology.",
    site_url: SITE_URL,
    feed_url: `${SITE_URL}/rss.xml`,
    language: "en",
    pubDate: new Date().toUTCString(),
    copyright: `© ${new Date().getFullYear()} Valentine Omonya`,
  });

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blogs/${post.slug}`,
      date: new Date(post.date),
      categories: post.tags,
      author: post.author,
    });
  });

  return feed.xml({ indent: true });
}
