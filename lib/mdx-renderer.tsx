import {
  Callout,
  CodeBlock,
  CodeTabs,
  EmbeddedVideo,
  InfoBox,
  TableOfContents,
  WarningBox,
} from "@/components/blog";
import type { MDXComponents } from "mdx/types";
import { compileMDX } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const mdxComponents: MDXComponents = {
  // Custom blog components
  Callout,
  InfoBox,
  WarningBox,
  CodeTabs,
  EmbeddedVideo,
  TableOfContents,

  // Override HTML elements with styled versions
  h1: ({
    children,
    id,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      id={id}
      className="mt-10 mb-4 scroll-mt-20 text-3xl font-bold tracking-tight text-foreground"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({
    children,
    id,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      id={id}
      className="mt-8 mb-3 scroll-mt-20 text-2xl font-semibold tracking-tight text-foreground border-b border-zinc-200 pb-2 dark:border-zinc-800"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({
    children,
    id,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      id={id}
      className="mt-6 mb-2 scroll-mt-20 text-xl font-semibold tracking-tight text-foreground"
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className="mt-4 mb-2 scroll-mt-20 text-lg font-semibold tracking-tight text-foreground"
      {...props}
    >
      {children}
    </h4>
  ),
  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-4 leading-7 text-foreground/90" {...props}>
      {children}
    </p>
  ),
  a: ({
    href,
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal = href?.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-blue-600 underline decoration-blue-600/30 underline-offset-2 hover:decoration-blue-600 transition-colors dark:text-blue-400 dark:decoration-blue-400/30 dark:hover:decoration-blue-400"
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href ?? "#"}
        className="font-medium text-blue-600 underline decoration-blue-600/30 underline-offset-2 hover:decoration-blue-600 transition-colors dark:text-blue-400 dark:decoration-blue-400/30 dark:hover:decoration-blue-400"
        {...props}
      >
        {children}
      </Link>
    );
  },
  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="mb-4 ml-6 list-disc space-y-2 text-foreground/90 marker:text-muted-foreground"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="mb-4 ml-6 list-decimal space-y-2 text-foreground/90"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className="leading-7" {...props}>
      {children}
    </li>
  ),
  blockquote: ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="my-6 border-l-4 border-zinc-300 pl-4 italic text-muted-foreground dark:border-zinc-700"
      {...props}
    >
      {children}
    </blockquote>
  ),
  code: ({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLElement>) => {
    // Inline code (not inside <pre>)
    if (!className) {
      return (
        <code
          className="relative rounded border border-zinc-200 bg-zinc-100 px-[0.3rem] py-[0.2rem] font-mono text-sm dark:border-zinc-800 dark:bg-zinc-800"
          {...props}
        >
          {children}
        </code>
      );
    }
    // Code inside <pre> — pass through (handled by pre override)
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
    // Extract the language, raw code, and meta from the child <code> element
    const codeElement = children as React.ReactElement<{
      className?: string;
      children?: string;
      meta?: string;
    }>;
    const className = codeElement?.props?.className ?? "";
    const language = className.replace(/language-/, "") || "text";
    const meta = codeElement?.props?.meta;
    const code =
      typeof codeElement?.props?.children === "string"
        ? codeElement.props.children
        : "";

    if (code) {
      return <CodeBlock code={code} language={language} meta={meta} />;
    }

    // Fallback for non-standard pre blocks
    return (
      <pre
        className="mb-4 mt-6 overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950 p-4 text-sm"
        {...props}
      >
        {children}
      </pre>
    );
  },
  table: ({ children, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-800">
      <table className="w-full text-sm" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="bg-zinc-50 dark:bg-zinc-900" {...props}>
      {children}
    </thead>
  ),
  th: ({ children, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="border-b border-zinc-200 px-4 py-2 text-left font-semibold text-foreground dark:border-zinc-800"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className="border-b border-zinc-200 px-4 py-2 text-foreground/90 dark:border-zinc-800"
      {...props}
    >
      {children}
    </td>
  ),
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-8 border-zinc-200 dark:border-zinc-800" {...props} />
  ),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <Image
      src={props.src ?? ""}
      alt={props.alt ?? ""}
      width={720}
      height={400}
      className="my-6 rounded-lg border border-zinc-200 dark:border-zinc-800"
    />
  ),
  input: (props: React.InputHTMLAttributes<HTMLInputElement>) => {
    // Task list checkboxes from GFM
    if (props.type === "checkbox") {
      return (
        <input
          {...props}
          disabled
          className="mr-2 rounded border-zinc-300 text-blue-600 dark:border-zinc-700"
        />
      );
    }
    return <input {...props} />;
  },
  strong: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-foreground" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <em className="italic" {...props}>
      {children}
    </em>
  ),
};

interface MDXRendererProps {
  source: string;
}

export async function MDXRenderer({ source }: MDXRendererProps) {
  const { content } = await compileMDX<Record<string, unknown>>({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "wrap",
              properties: {
                className: ["anchor-link"],
              },
            },
          ],
        ],
      },
    },
  });

  return <>{content}</>;
}
