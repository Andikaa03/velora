import type { APIRoute } from "astro";
import { blogPosts } from "../data/blogPosts";
import { priorityCities, siteUrl } from "../data/seo";

const staticPaths = [
  "/",
  "/en/",
  "/id/",
  "/about/",
  "/features/",
  "/blog/",
  "/contact/",
  "/privacy-policy/",
  "/terms/",
];

const urls = [
  ...staticPaths,
  ...blogPosts.map((post) => `/blog/${post.slug}/`),
  ...priorityCities.map((city) => `/id/${city.slug}/`),
];

export const GET: APIRoute = () =>
  new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `  <url>
    <loc>${new URL(path, siteUrl).toString()}</loc>
    <changefreq>${path === "/" || path === "/id/" ? "weekly" : "monthly"}</changefreq>
    <priority>${path === "/" || path === "/id/" ? "1.0" : "0.7"}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`,
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
    },
  );
