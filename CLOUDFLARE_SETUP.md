# TechVantage Cloudflare Workers deployment

## Confirmed from the Cloudflare dashboard screenshot
- Project: `techvantage-website`
- Project type: **Worker** (not Pages)
- GitHub: `Sajeer-khan/techvantage-website`, branch `main`
- Deploy command: `npx wrangler deploy`
- An earlier Worker build completed successfully; a new deployment must be checked after the Wrangler configuration commit.

## Repository configuration
- `wrangler.jsonc`: Worker `techvantage-website`; `assets.directory = "./public"`; custom 404 handling.
- `public/index.html`, `public/css/styles.css`, `public/js/script.js`, `public/assets/`: public static website.
- No Worker `main` entry point or JavaScript server is required.

## Final steps in Cloudflare
1. Open **Workers & Pages** and choose the existing Worker `techvantage-website`.
2. Open **Deployments** and confirm the latest build uses the GitHub commit containing `wrangler.jsonc`. If it hasn't started, use **Retry build** or the dashboard's deploy control.
3. Open **Domains** and find the actual `*.workers.dev` URL. Open it and verify TechVantage loads, including CSS, images, and navigation.
4. After the preview works, open **Domains** → **Add** → **Custom Domain**, and enter `techvantageenterprise.com`. The zone is already in Cloudflare; follow any prompts for old GoDaddy parking A/CNAME records. Do **not** modify MX, SPF, DKIM, DMARC or other email records.
5. Optionally add `www.techvantageenterprise.com` as a second custom domain or set a redirect to the root domain. Verify HTTPS and contact links.

If Cloudflare reports a conflicting DNS A or CNAME record for the website hostname, inspect that particular record (likely GoDaddy parking). Remove or replace only the confirmed conflicting **web** record as instructed by Cloudflare. Do not change nameservers: the zone is already protected by Cloudflare.

Cloudflare references:
- https://developers.cloudflare.com/workers/static-assets/
- https://developers.cloudflare.com/workers/configuration/routing/custom-domains/

## Optional AI agent integration
Source: https://developers.cloudflare.com/agent-setup/prompt.md

The repository contains `.mcp.json` with official Cloudflare MCP endpoints for a compatible coding agent. Connecting its Cloudflare OAuth in your local agent environment is a separate optional step. No tokens should be stored in GitHub.

This website is a reconstruction of a previous published ChatGPT site, not an exact source export.
