# Models.dev - Next.js Frontend

Modern Next.js 16 frontend for the Models.dev AI model database.

## Features

- ✅ Server-side rendering with Next.js 16
- ✅ Tailwind CSS for styling
- ✅ TypeScript support
- ✅ Responsive design
- ✅ v0.dev compatible for visual development

## Getting Started

### Prerequisites

- Bun (or npm/pnpm)
- Node.js 18+

### Development

From the monorepo root:

```bash
cd packages/nextjs
bun run dev
```

The app will be available at `http://localhost:3000`

### Building

```bash
bun run build
bun run start
```

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable React components
- `public/` - Static assets
- `app/globals.css` - Global styles

## Environment Variables

Create a `.env.local` file if needed for API endpoints and configuration.

## Deployment

Deploy to Vercel with:

```bash
vercel deploy
```

Or build and run:

```bash
npm run build
npm run start
```

## Related

- [Models.dev API](../web/)
- [Core Schemas](../core/)
