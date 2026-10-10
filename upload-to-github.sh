#!/usr/bin/env bash
set -euo pipefail
SOURCE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO="https://github.com/Sajeer-khan/techvantage-website.git"
[[ -f "$SOURCE_DIR/wrangler.jsonc" && -f "$SOURCE_DIR/dist/client/index.html" && -f "$SOURCE_DIR/app/page.tsx" ]] || { echo "ERROR: Run this script inside the extracted TechVantage-Enterprise-Website folder."; exit 1; }
command -v git >/dev/null || { echo "ERROR: Git is not installed."; exit 1; }
echo "Target: $REPO (branch main)"
echo "This will replace the earlier reconstruction, while keeping a remote backup branch."
read -r -p "Proceed? Type YES: " answer
[[ "$answer" == "YES" ]] || { echo "Cancelled. No changes made."; exit 0; }
[[ -n "$(git config --global user.name || git config user.name || true)" ]] || { echo "ERROR: Set git user.name, e.g. git config --global user.name 'Your Name'"; exit 1; }
[[ -n "$(git config --global user.email || git config user.email || true)" ]] || { echo "ERROR: Set git user.email to your verified GitHub email (git config --global user.email 'you@example.com')."; exit 1; }
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
printf '
Cloning current repo...
'
git clone --branch main "$REPO" "$TMP/repo"
cd "$TMP/repo"
BACKUP="backup/pre-original-import-$(date -u +%Y%m%d-%H%M%S)"
git branch "$BACKUP"
git push origin "refs/heads/$BACKUP:refs/heads/$BACKUP"
echo "Backup saved: $BACKUP"
printf '
Replacing reconstructed files with original Work source...
'
while IFS= read -r -d '' file; do git rm -f -- "$file" >/dev/null; done < <(git ls-files -z)
cp -a "$SOURCE_DIR"/. "$TMP/repo"/
git add -A
# The file must be versioned: Worker config points directly to the prebuilt static export.
git add -f dist/client
[[ -f "dist/client/index.html" && -f "dist/client/assets/hvac-hero.webp" ]] || { echo "ERROR: Original compiled website is missing."; exit 1; }
COUNT="$(git ls-files | wc -l)"
if ((COUNT < 35)); then echo "ERROR: Only $COUNT files staged; refusing to deploy incomplete original."; exit 1; fi
git commit -m "Replace reconstruction with original TechVantage Work export"
printf '
Pushing original website to GitHub...
'
git push origin main
printf '
SUCCESS. Original TechVantage source and assets pushed.
'
echo "GitHub: https://github.com/Sajeer-khan/techvantage-website"
echo "Cloudflare: check Workers & Pages > techvantage-website > Deployments"
