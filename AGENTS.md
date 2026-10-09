# TechVantage — agent instructions

This repository contains the TechVantage Enterprise static website. It has no build step and is intended for Git-connected Cloudflare Pages hosting.

## Cloudflare
- Use official Cloudflare documentation for changing Cloudflare settings: https://developers.cloudflare.com/
- The repository includes a portable `.mcp.json` with five official Cloudflare MCP endpoints; client support and OAuth authorization are required before account operations.
- Never commit Cloudflare tokens, account secrets, or OAuth credentials. Do not claim to have deployed unless Cloudflare confirms a successful deployment.
- For Cloudflare Pages: production branch `main`, framework **None**, build command blank (or `exit 0` if required), build output directory `.`.
- Changes to `main` deploy automatically only after Cloudflare Pages Git integration is connected.
- Avoid replacing the reconstruction with claims or images that imply permission from a third-party client.

## Tooling
- Cloudflare's official agent installation source is https://developers.cloudflare.com/agent-setup/prompt.md .
- For an agent that supports installing Skills, install Cloudflare skills via its official method. The official generic command is `npx -y skills add cloudflare/skills --skill '*' --yes --global`; this must be run on the user's own supported agent environment, not in a transient assistant sandbox.
- See `CLOUDFLARE_SETUP.md` for activation and deployment instructions.

## Website
- `index.html`, `css/styles.css`, `js/script.js`, and `assets/` provide the site. Keep asset links valid.
- The site is a reconstruction of a previously published ChatGPT Site, not an exact export of the original source.
