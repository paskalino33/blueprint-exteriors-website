# Blueprint Exteriors Homepage – Stable Vercel Build

This version uses stable patched Next.js 14.2.35 with React 18.3.1 to avoid the React 19 / Next 15 dependency warnings and Vercel security warning.

## Upload to GitHub
Upload the contents of this folder to the root of your GitHub repository.

The top level should show:
- app/
- public/
- package.json
- next.config.js
- README.md

## Vercel settings
- Framework Preset: Next.js
- Install Command: npm install
- Build Command: npm run build
- Root Directory: blank

If Vercel times out while downloading packages, click Redeploy. That timeout is a Vercel/npm network issue, not a code issue.
