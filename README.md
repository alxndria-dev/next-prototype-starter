# Prototype starter

A small Next.js repo for high-fidelity product prototypes and usability tests. Copy it, build the flow you need to learn from, then discard the trial.

## Run

Requires Node.js 20.9 or newer and pnpm.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
pnpm lint
pnpm build
```

## Scope

Use this for rapid, realistic prototype testing: one flow, local state, and believable content. The home page is a blank foundation. Replace it with the flow under test.

- Prototype UI lives in `src/components/prototype`.
- shadcn components live in `src/components/ui`.
- Typed mock content lives in `src/data`.
- Helpers, including localStorage, live in `src/lib`.

Keep state in the component or in localStorage. Do not add a backend for a test.

## Defaults

- pnpm
- Next.js 16 with the App Router, TypeScript, and the `src/` directory
- Turbopack for `pnpm dev` and `pnpm build`
- Tailwind CSS v4
- ESLint
- Import alias `@/*` → `src/*`
- shadcn/ui on Radix, Nova style, neutral tokens, CSS variables
- `cn()` from the `cn` package, re-exported in `src/lib/utils.ts`
- Geist Sans and Geist Mono via `next/font`
- lucide-react icons

## Left out on purpose

Storybook, a database, authentication, test frameworks, deployment configuration, analytics, and a sample dashboard. Add one of those only for the test in front of you.

## Add a shadcn component

```bash
pnpm dlx shadcn@latest add card
```

The component is written to `src/components/ui`. Check [ui.shadcn.com](https://ui.shadcn.com) for the component name. This repo is configured with `--base radix`, so new components use Radix primitives.
