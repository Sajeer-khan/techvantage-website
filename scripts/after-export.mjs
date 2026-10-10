import { mkdir, rm, writeFile } from "node:fs/promises";

const outputDirectory = "dist/client";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

await mkdir(outputDirectory, { recursive: true });

const robotsLines = ["User-agent: *", "Allow: /"];
if (siteUrl) robotsLines.push("", `Sitemap: ${siteUrl}/sitemap.xml`);
await writeFile(`${outputDirectory}/robots.txt`, `${robotsLines.join("\n")}\n`);

if (siteUrl) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    `  <url><loc>${siteUrl}/</loc><changefreq>monthly</changefreq><priority>1</priority></url>\n` +
    `</urlset>\n`;
  await writeFile(`${outputDirectory}/sitemap.xml`, sitemap);
} else {
  await rm(`${outputDirectory}/sitemap.xml`, { force: true });
}
