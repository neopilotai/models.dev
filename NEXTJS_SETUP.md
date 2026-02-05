# Next.js Implementation for Models.dev

This document outlines the Next.js setup and recommended migration path.

## Architecture Overview

### Current Setup (Maintained)
- **packages/web**: Hono-based API server and static rendering
- **packages/core**: Data schemas, validation, and generation scripts
- **packages/function**: Cloudflare Worker function

### New Setup (Next.js Frontend)
- **packages/nextjs**: Modern Next.js 16 frontend with Tailwind CSS
  - Server-side rendering (SSR)
  - Client-side data fetching
  - v0.dev compatible for visual development
  - TypeScript support

## Why This Hybrid Approach?

✅ **Minimal Disruption**: Hono API continues to serve data  
✅ **Modern DX**: Next.js provides superior developer experience  
✅ **Easy Migration**: Gradually move features from Hono to Next.js  
✅ **v0.dev Support**: Visual design mode available in Next.js  
✅ **Performance**: Leverage Next.js 16 performance optimizations  

## Getting Started

### Installation

From the monorepo root:

```bash
# Install dependencies for the Next.js package
bun install

# Navigate to Next.js app
cd packages/nextjs
```

### Development

```bash
# Start Next.js dev server (watches for changes)
bun run dev
```

Open http://localhost:3000 to see the application.

### Building

```bash
bun run build
bun run start
```

## Project Structure

```
packages/nextjs/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── models/
│   │   └── page.tsx        # Models directory
│   └── api/
│       └── page.tsx        # API documentation
├── components/
│   └── header.tsx          # Reusable components
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── v0.config.json          # v0.dev configuration
└── README.md
```

## v0.dev Integration

The Next.js package is configured for v0.dev visual development:

1. **Configuration**: `v0.config.json` enables design mode
2. **Framework**: Next.js 16 with App Router
3. **Styling**: Tailwind CSS for rapid UI development
4. **Components**: Reusable components in `components/` directory

### Using v0.dev

1. Open the project in v0.dev
2. Use Design Mode to modify styles visually
3. Changes sync back to your codebase
4. Components can be created and edited in the visual editor

## Connecting to Existing API

Currently, the Models page fetches from the live API:

```typescript
const response = await fetch('https://models.dev/api.json')
```

For local development, update to point to your Hono server:

```typescript
const response = await fetch('http://localhost:5000/api.json')
```

## Migration Path

### Phase 1: Frontend (✅ Complete)
- [x] Set up Next.js 16 with Tailwind CSS
- [x] Create homepage and basic pages
- [x] Integrate with existing API
- [x] Set up v0.dev support

### Phase 2: Features (Next)
- [ ] Add shadcn/ui components for better UX
- [ ] Create advanced filters and search
- [ ] Add model comparison feature
- [ ] Implement dark/light mode toggle
- [ ] Add provider pages

### Phase 3: Backend Integration (Optional)
- [ ] Move Hono routes to Next.js API routes
- [ ] Create database layer if needed
- [ ] Implement authentication for admin features
- [ ] Add contribution workflow

### Phase 4: Deployment
- [ ] Configure deployment to Vercel
- [ ] Set up CI/CD pipeline
- [ ] Monitor performance with Web Vitals

## Environment Variables

Create `.env.local`:

```bash
# API endpoints
NEXT_PUBLIC_API_URL=https://models.dev
```

## Deployment

### Vercel (Recommended)

```bash
vercel deploy
```

### Self-Hosted

```bash
npm run build
npm run start
```

## Using the Models SDK

To interact with the core package:

```typescript
import { getModels } from 'models.dev'

const models = await getModels()
```

## Scripts

Available scripts in `package.json`:

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run lint` - Run ESLint

## Troubleshooting

### Port 3000 Already in Use

```bash
# Kill the process using port 3000 (macOS/Linux)
lsof -ti:3000 | xargs kill -9

# Or specify a different port
bun run dev -- -p 3001
```

### Dependencies Not Found

```bash
# Reinstall dependencies
bun install
```

### TypeScript Errors

```bash
# Ensure tsconfig is correct and rebuild
bun run build
```

## Next Steps

1. **Explore the app**: http://localhost:3000
2. **Try v0.dev**: Upload/sync this project to v0.dev
3. **Customize**: Update pages and components for your needs
4. **Deploy**: Push to Vercel for production deployment

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [v0.dev](https://v0.dev)
- [Models.dev Repository](https://github.com/neopilotai/models.dev)
