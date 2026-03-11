import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://v4.valentinee.dev";
  const lastModified = new Date();

  const paths = [
    { path: "/", priority: 1, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/shop", priority: 0.9, changeFrequency: "weekly" as const },
    {
      path: "/contact",
      priority: 0.7,
      changeFrequency: "monthly" as const
    },
    {
      path: "/changelogs",
      priority: 0.6,
      changeFrequency: "monthly" as const
    },
    { path: "/books", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/tools", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/resume", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/cart", priority: 0.4, changeFrequency: "weekly" as const },
  ];

  return paths.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
