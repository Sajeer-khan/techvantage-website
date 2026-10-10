# Deploy the original TechVantage Work site through GitHub and Cloudflare Workers

This is the **authentic exported project**, not the earlier ChatGPT reconstruction.
The source remains in `app/`, and the complete prebuilt static export is in `dist/client/`.

## Existing setup
- GitHub: https://github.com/Sajeer-khan/techvantage-website
- Cloudflare Worker name: `techvantage-website`
- Production branch: `main`
- Wrangler configuration: `wrangler.jsonc`, serving `dist/client/`
- Build command: **leave empty** (the prebuilt export is included in Git)
- Deploy command: `npx wrangler deploy`

## Safest GitHub upload (Linux/macOS)
1. Extract the ZIP archive and open a terminal in its `TechVantage-Enterprise-Website` folder.
2. Make sure Git is installed and authenticate to GitHub on your device (for example with GitHub CLI: `gh auth login`). Never send anyone your token.
3. Run: `bash upload-to-github.sh`
4. The script clones the existing repo, creates a remote backup branch, replaces reconstructed files with the authentic Work export, commits and pushes `main`.
5. Visit Cloudflare → Workers & Pages → `techvantage-website` → Deployments, and verify that the latest deployment succeeded.
6. Open the Worker preview URL. Only after it matches the original design should you connect `techvantageenterprise.com` in the Worker Domains tab.

## If the script cannot authenticate
No overwrite has occurred on GitHub unless a successful push is reported. Configure GitHub authentication locally; do not share credentials in this chat. You can also upload the extracted files using GitHub's website, keeping their folders and `wrangler.jsonc` in the repository root. Make sure the **`dist/client/`** directory is included.

## Future source edits
The included prebuilt `dist/client/` is what Cloudflare serves. After editing React files in `app/`, rebuild locally (Node 22.13+, pnpm 11.25):

```
corepack enable
corepack pnpm install --frozen-lockfile
corepack pnpm run build
```

Commit the updated `dist/client/` alongside source changes. Later, you can set an automated Cloudflare build command to rebuild for each commit if you prefer.

## Domain and email protection
If the domain still shows a GoDaddy parked page, ensure your Worker preview works first, then attach `techvantageenterprise.com` as a **Custom Domain** under the Worker's Domains settings. Replace only conflicting website A/CNAME parking entries. Leave email MX, SPF, DKIM, and DMARC records intact.

### Notes
- The GitHub authentication available to ChatGPT does not automatically authenticate Git on your personal computer.
- This ZIP includes both original source and original image files as supplied in the Work export. No graphics were modified.
- The custom domain and actual production status still need confirmation in Cloudflare after push.
