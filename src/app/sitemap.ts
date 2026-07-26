import type { MetadataRoute } from "next";
import { routes, siteUrl } from "@/config";

/** Generated from the shared route list, so new pages are included automatically. */
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route.href === "/" ? "" : route.href}`,
    changeFrequency: "monthly",
    priority: route.href === "/" ? 1 : 0.8,
  }));
}
