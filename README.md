<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/56a4a098-6693-4aba-8983-8d17f3abadb7

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Google Analytics

This site uses Google Analytics 4 through the `VITE_GA_MEASUREMENT_ID` environment variable.

1. Go to [Google Analytics](https://analytics.google.com/) and create or select a GA4 property.
2. In **Admin > Data streams**, create a **Web** stream for your deployed website.
3. Copy the stream's Measurement ID. It starts with `G-`.
4. Add it to the environment variables used by your deployment:

   ```text
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

5. Redeploy the site. The first visits should appear in **Reports > Realtime**.

The Measurement ID is intentionally a public frontend value; do not put a service-account key or other secret in `VITE_GA_MEASUREMENT_ID`. If you deploy through a platform such as Vercel, Netlify, or Cloudflare Pages, add the variable in that platform's project settings rather than committing a `.env` file.
