import { getAllBlogPosts } from "@/lib/blog";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = getAllBlogPosts();

  const searchIndex = posts.map((post) => ({
    slug: post.slug,
    title: post.title,
    description: post.description,
    tags: post.tags,
    date: post.date,
  }));

  return NextResponse.json(searchIndex, {
    headers: {
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
