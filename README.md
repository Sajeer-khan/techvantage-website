# TechVantage Enterprise website

## Cloudflare Workers deployment (current live hosting setup)

This GitHub repository is connected to the existing Cloudflare Worker named `techvantage-website`. It includes a **prebuilt static export** in `dist/client/` and a `wrangler.jsonc` that points to that directory. The original Work design is preserved.

Use these settings in **Cloudflare Dashboard → Workers & Pages → techvantage-website → Settings → Builds**:

- Connected GitHub repository: `Sajeer-khan/techvantage-website`
- Production branch: `main`
- Root directory: `/`
- **Build command: leave empty** (the prebuilt `dist/client/` is already committed)
- **Deploy command: `npx wrangler deploy`**

A push to `main` triggers an automated deployment **only while Cloudflare's Git integration is enabled**. After the build succeeds, open the Worker's **Domains** tab and test its `workers.dev` URL. Configure the custom domain there without replacing email DNS records.

The alternative **Cloudflare Pages** instructions below are retained for reference; you do **not** need to create a separate Pages project for the existing Worker.

---


This is the complete source for the TechVantage Enterprise website, configured to export static files for Cloudflare Pages. The prebuilt export is also included in `dist/client/` for previewing or direct upload.

## Publish from GitHub to Cloudflare Pages

1. Create a new repository on GitHub and extract this ZIP on your computer.
2. From the extracted project folder, push the files to your repository:

   ```sh
   git init
   git add .
   git commit -m "Add TechVantage Enterprise website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
   git push -u origin main
   ```

3. In Cloudflare, create a **Pages** project and connect the GitHub repository.
4. Use these build settings:

   | Setting | Value |
   | --- | --- |
   | Framework preset | None |
   | Production branch | `main` |
   | Root directory | `/` |
   | Build command | `pnpm run build` |
   | Build output directory | `dist/client` |

5. Optional: set the build environment variable `NEXT_PUBLIC_SITE_URL` to your final site origin, such as `https://www.example.com`. It supplies the canonical URL and sitemap address. Leave it unset until your Pages domain is chosen; the site will still build and work.
6. Save and deploy. Later pushes to the production branch trigger new deployments.

Cloudflare Pages Git integration deploys static output from the configured build directory. The site uses Vinext's static export, which writes the ready-to-serve files to `dist/client/`.

## Preview or deploy the included static files

The prebuilt export is in `dist/client/`. Open `dist/client/index.html` to inspect it locally, or use Cloudflare Pages Direct Upload and select that directory. For GitHub-connected automatic deployments, Pages rebuilds the source and creates `dist/client/` on each deployment.

## Local development

Requires Node.js 22.13 or newer and pnpm 11.25.

```sh
pnpm install
pnpm dev
```

To make a production static export locally:

```sh
pnpm run build
```

The site is a static marketing website. Contact actions open phone, email, and WhatsApp links; they do not require a backend service.

<!-- Cloudflare Git reconnection deployment trigger: 2026-10-10 -->
