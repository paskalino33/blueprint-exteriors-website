# Blueprint Exteriors LLC - Next.js Website

This is a Vercel-ready Next.js website for Blueprint Exteriors LLC.

## How to upload to GitHub
1. Download and unzip this folder.
2. In GitHub, upload the unzipped contents to your repository.
3. Vercel should redeploy automatically.

## How to edit phone/email/business info
Open:

`lib/site.ts`

Change the phone, email, service areas, services, or project list there.

## How to update pictures
1. Add your image files to:

`public/projects/`

2. Open:

`lib/site.ts`

3. Change the image paths in the `projects` list.

Example:

`image: '/projects/my-roof-job.jpg'`

## How to connect the quote form
This site is prepared for Formspree.

1. Go to https://formspree.io
2. Create a new form.
3. Copy your form endpoint ID.
4. Open `lib/site.ts`.
5. Replace `https://formspree.io/f/YOUR_FORM_ID` with your real Formspree endpoint.

## Commands

Install dependencies:

`npm install`

Run locally:

`npm run dev`

Build:

`npm run build`
