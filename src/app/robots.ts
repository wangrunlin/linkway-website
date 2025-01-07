import type { MetadataRoute } from "next";
import { baseURL } from "@/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/about", "/api/og", "/sitemap.xml"],
      disallow: ["/private/"],
    },
    sitemap: `${baseURL}/sitemap.xml`,
  };
}
