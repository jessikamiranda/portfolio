import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://portfolio-jessikamiranda.vercel.app",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://portfolio-jessikamiranda.vercel.app/projects/flowy",
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
