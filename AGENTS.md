# TechVantage — coding agent instructions

This is a static site deployed on **Cloudflare Workers Static Assets** from GitHub repository `Sajeer-khan/techvantage-website`.

## Deployment
- Production branch: `main`
- Worker: `techvantage-website`
- `wrangler.jsonc` configures `assets.directory = "./public"`
- Build command: none; deploy command: `npx wrangler deploy`
- Update the files under `public/` to change the production website. The root-level copies are archival.
- Do not claim that deployment occurred just because a GitHub commit succeeded; check the latest deployment in the Cloudflare dashboard.
- Do not commit Cloudflare secrets, API tokens, or OAuth credentials.
- For custom domains, use the Cloudflare dashboard after validating the `workers.dev` URL. Preserve MX/SPF/DKIM/DMARC DNS for email.

## Cloudflare agent integrations
See https://developers.cloudflare.com/agent-setup/prompt.md and `.mcp.json`. A compatible agent must explicitly authorize Cloudflare OAuth; repository configuration alone does not connect a Cloudflare account.

## Project
The site is reconstructed from a previously published ChatGPT Site. It is not a source-identical export. Client descriptions and illustrative graphics must not imply unauthorised endorsements.
