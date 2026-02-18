import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {};

// This is required by Next.js for .mdx page files (not used for content/blog rendering)
export function useMDXComponents(): MDXComponents {
  return components;
}
