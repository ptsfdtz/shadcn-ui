# Project Summary (shadcn-ui)

## What this is
- A Vite + React + TypeScript app that showcases shadcn/ui components with live previews and MDX docs.
- Uses React Router (hash-based) and Tailwind CSS v4 for styling.
- Hosts component demos under `/components/*` with a shared layout (header + sidebar).

## Tech stack
- React 19, React Router 6 (HashRouter)
- Vite 7, TypeScript 5
- Tailwind CSS v4 + tw-animate-css
- Radix UI + base-ui + shadcn/ui component patterns
- MDX (via @mdx-js/rollup + @mdx-js/react)
- Shiki for code highlighting

## Key entry points
- `src/main.tsx`: React bootstrap
- `src/App.tsx`: Router + route table for all component previews
- `src/routes/+layout.tsx`: Global layout + theme toggle + sidebar filtering
- `src/index.css`: Tailwind v4 setup + design tokens

## Routing & layout
- Uses `HashRouter` to support static hosting.
- `Layout` wraps all routes and renders:
  - `Header` (`src/components/header.tsx`)
  - `SiderBar` (`src/components/siderBar.tsx`)
  - `<Outlet />` for component pages
- Component routes are mapped explicitly in `src/App.tsx`.

## Components & docs
- UI primitives live under `src/components/ui/*`.
- Component demo pages live under `src/routes/components/*`.
- MDX docs live under `src/docs/components/*` and are rendered by:
  - `src/components/docs/component-page.tsx`
  - `src/components/docs/mdx-components.tsx`
  - `src/components/docs/code-block.tsx`
- Component list/metadata lives in `src/lib/registry.ts`.

## Styling
- Tailwind v4 with tokens in `src/index.css`.
- Theme toggle writes `dark` class on `document.documentElement` and persists in `localStorage`.

## Scripts
- `pnpm dev` / `pnpm build` / `pnpm preview` / `pnpm lint`

## When adding a new component
- Add UI implementation in `src/components/ui/<name>.tsx`.
- Add demo page in `src/routes/components/<name>.tsx`.
- Add MDX docs in `src/docs/components/<name>.mdx` (optional).
- Register in `src/lib/registry.ts`.
- Add route export in `src/routes/components/index.ts`.
- Add route in `src/App.tsx`.
