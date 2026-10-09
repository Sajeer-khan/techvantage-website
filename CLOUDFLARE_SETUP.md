# Cloudflare setup for TechVantage Enterprise

## Status
- GitHub repository: https://github.com/Sajeer-khan/techvantage-website
- Branch: `main`
- Website files: committed and ready for static hosting
- Cloudflare Pages project: **not yet created or verified** by this assistant
- Cloudflare MCP OAuth authorization: **not yet completed**

## Publish site with Cloudflare Pages (no terminal required)
1. Sign in to https://dash.cloudflare.com/ and select **Workers & Pages**.
2. Select **Create application** → **Pages** → **Connect to Git / Import an existing Git repository**.
3. Authorize Cloudflare to access the GitHub repository `Sajeer-khan/techvantage-website` if prompted.
4. Set project name to `techvantage-website` if available, branch `main`, framework **None**, build command blank (use `exit 0` only when required), and output directory `.`.
5. Select **Save and Deploy**. Wait for the deployment to show **Success**.
6. Verify the Cloudflare-assigned `*.pages.dev` URL before adding your custom domain in the project settings.
7. Confirm the original website content, graphics and contact details before redirecting your real business domain. This is a reconstruction, not an exact original source export.

After you connect the Git integration, pushes to `main` cause Cloudflare Pages automatic deployments.

## Connect an AI coding agent to Cloudflare (optional)
Cloudflare's source: https://developers.cloudflare.com/agent-setup/prompt.md

This repo includes a portable `.mcp.json` containing Cloudflare API, documentation, bindings, builds and observability servers. Open this repo in a compatible MCP-aware agent (for example GitHub Copilot CLI, recent VS Code Agent Host, or other client supporting portable `.mcp.json`), review and trust the server list, and sign in through Cloudflare OAuth on first use.

If you use **Codex CLI**, the official agent setup provides these commands to run on your own computer:

```bash
npx -y skills add cloudflare/skills --skill '*' --yes --global
codex mcp add cloudflare --url https://mcp.cloudflare.com/mcp
codex mcp add cloudflare-docs --url https://docs.mcp.cloudflare.com/mcp
codex mcp add cloudflare-bindings --url https://bindings.mcp.cloudflare.com/mcp
codex mcp add cloudflare-builds --url https://builds.mcp.cloudflare.com/mcp
codex mcp add cloudflare-observability --url https://observability.mcp.cloudflare.com/mcp
codex mcp login cloudflare
```

Restart the agent to load new MCP servers. Installation and OAuth must happen in your coding agent / local environment; a ChatGPT web conversation cannot apply global agent configuration to your device.

Never commit API tokens or OAuth secrets to GitHub.
