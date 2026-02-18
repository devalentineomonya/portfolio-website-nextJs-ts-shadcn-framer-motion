import { BlogHeader, TableOfContents } from "@/components/blog";
import { getAllSlugs, getBlogBySlug } from "@/lib/blog";
import { MDXRenderer } from "@/lib/mdx-renderer";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = getBlogBySlug(slug);
    return {
      title: `${post.frontmatter.title} | Valentine Omonya`,
      description: post.frontmatter.description,
      keywords: post.frontmatter.tags,
      openGraph: {
        title: post.frontmatter.title,
        description: post.frontmatter.description,
        type: "article",
        publishedTime: post.frontmatter.date,
        authors: [post.frontmatter.author],
        tags: post.frontmatter.tags,
        ...(post.frontmatter.coverImage && {
          images: [{ url: post.frontmatter.coverImage }],
        }),
      },
      twitter: {
        card: "summary_large_image",
        title: post.frontmatter.title,
        description: post.frontmatter.description,
      },
    };
  } catch {
    return { title: "Post Not Found" };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  let post;
  try {
    post = getBlogBySlug(slug);
  } catch {
    notFound();
  }

  if (!post.frontmatter.published) {
    notFound();
  }

  return (
    <div className="grow w-full">
      <BlogHeader
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        author={post.frontmatter.author}
        readingTime={post.readingTime}
        tags={post.frontmatter.tags}
      />

      <TableOfContents />

      <article className="w-full max-w-none">
        <MDXRenderer source={post.content} />
      </article>
    </div>
  );
}
