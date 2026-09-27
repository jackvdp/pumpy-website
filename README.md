This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Jev computer use (`/jev`)

`/jev` is a small computer-use agent: describe a task and [Jev](https://typesafe.ai), TypeSafe's decision model, drives a headless browser to do it. It's a web port of [third-hand](https://github.com/shhivv/third-hand)'s loop, using the Vercel AI SDK's `experimental_evaluate` with the `@ai-sdk/typesafe-ai` provider.

Each step:

1. **Observe** – Puppeteer lists the page's visible controls (links, buttons, fields) with their labels and values (`src/lib/jev/browser.ts`).
2. **Decide** – one Jev request asks typed questions against that state: which operation (click, type, open URL, scroll, press Return, back, done…), which element, and is the task done (`src/lib/jev/decide.ts`).
3. **Act** – the choice is carried out, and a screenshot and step log stream to the page as NDJSON (`src/app/api/jev/route.ts`).

Jev picks from options rather than writing text, so anything it types comes from your request. Quote exact search terms, e.g. `Search for "Alan Turing" on wikipedia.org`.

### Environment variables

| Variable | Purpose |
| --- | --- |
| `TYPESAFE_AI_API_KEY` | Required. TypeSafe API key. |
| `JEV_ACCESS_KEY` | Recommended in production. Requests must send it (the page has a field for it). |
| `BROWSER_WS_ENDPOINT` | Remote Chrome WebSocket endpoint (e.g. Browserless). Needed on Vercel, which has no Chromium. |
| `CHROMIUM_PATH` | Optional local Chromium binary. |
| `JEV_MODEL` | Optional; defaults to `jev-latest`. |
