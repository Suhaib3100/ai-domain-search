import axios from "axios";
import { pages } from "../../staticPages";
import path from "path";
import fs from "fs";
const filePath = path.join(process.cwd(), "db.json");
const data = fs.readFileSync(filePath, "utf-8");
const database = JSON.parse(data);
const siteName = database?.siteUrl;
const fetchBlogPosts = async () => {
  // Replace this URL with your actual endpoint to fetch blog posts
  const posts = await axios
    .get(`${siteName}/api/blog/add-new-post`)
    .then((res) => res.data);
  return posts.map((post) => ({
    loc: `/blog/${post?.permalink}`,
    lastmod: post?.date,
    changefreq: "weekly",
    priority: 0.7,
  }));
};

export default async function handler(req, res) {
  const staticPages = pages?.map((x) => ({
    loc: `/${x}`,
    lastmod: new Date().toISOString(),
    changefreq: "daily",
    priority: 1.0,
  }));

  const blogPosts = await fetchBlogPosts();

  const allPages = [...staticPages, ...blogPosts];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPages
        .map(
          (page) => `
        <url>
          <loc>${siteName}${page.loc}</loc>
          <lastmod>${page.lastmod}</lastmod>
          <changefreq>${page.changefreq}</changefreq>
          <priority>${page.priority}</priority>
        </url>`
        )
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "application/xml");
  res.status(200).end(sitemap);
}
