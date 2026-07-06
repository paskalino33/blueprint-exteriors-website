# Blueprint Exteriors Next.js Website

## Upload instructions
Upload the CONTENTS of this folder to the root of your GitHub repository.

Your GitHub root should show:
- app/
- components/
- lib/
- public/
- package.json
- next.config.js
- tsconfig.json
- .npmrc

Do not upload the ZIP itself.

## Vercel settings
- Framework Preset: Next.js
- Build Command: npm run build
- Install Command: npm install
- Root Directory: leave blank if these files are at the repo root

This package intentionally does not include package-lock.json because the previous lockfile caused npm install errors on Vercel.
