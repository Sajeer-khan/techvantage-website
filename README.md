# TechVantage Enterprise

Responsive static website for TechVantage Enterprise, Karachi.

## Hosting: Cloudflare Workers Static Assets

This repository is connected to a Cloudflare **Worker**, not Pages. `wrangler.jsonc` configures `techvantage-website` with `assets.directory = "./public"`, and the Cloudflare build command is `npx wrangler deploy`.

- Website files are in `public/`; root-level copies are retained for reference.
- Cloudflare production branch: `main`.
- Build command: none.
- Deploy command: `npx wrangler deploy`.
- On successful deployment, test the URL under the Worker's **Domains** tab before connecting `techvantageenterprise.com`.

The site is a reconstruction of the earlier published ChatGPT site, **not an exact original-source export**. Review content, contact details, and illustrative SVG graphics before going live.

Read [CLOUDFLARE_SETUP.md](CLOUDFLARE_SETUP.md) for steps to configure the custom domain. Do not overwrite business email-related DNS records.
