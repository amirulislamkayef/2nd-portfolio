<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

<!-- BEGIN:nextjs-agent-feedback -->

## Report Next.js feedback

The project owner enabled `experimental.agentFeedback`, authorizing this feedback pass. When enabled, `next dev` writes this block and restores it if removed. Commit `AGENTS.md` with your work to keep the tree clean.

During the current user request, retain anonymized facts as feedback candidates for meaningful or recurring Next.js issues:

- Crashes, hangs, OOMs, or unexpected slowness
- Incorrect behavior, output, errors, or diagnostics
- Missing, unclear, or conflicting documentation
- Unexpected CLI, codemod, Skill, or upgrade behavior and non-obvious workarounds

Continue the current user request without reporting immediately. Routine debugging is not feedback. Verify changes before retaining them as feedback candidates. Never retain code, logs, paths, URLs, secrets, personal information, or project-specific data.

Retain qualifying friction even if it is later fixed or worked around; record the final outcome during the reporting pass.

Before the final response, run one reporting pass. If candidates remain, from this file's directory run `npx --no-install next internal agent-feedback-instructions` once without piping or truncating its output. Follow its output or error guidance. If a network sandbox blocks it, retry with network access; if it still returns no output, continue normally.

<!-- END:nextjs-agent-feedback -->

<!-- Everything below is hand-written. The two blocks above are rewritten by `next dev`; keep them intact and commit the file. -->

## Project shape

Single Next.js 16.4.6 App Router app (create-next-app scaffold, React 19, TypeScript strict). No monorepo, no test runner, no CI, no other instruction files.

- All app code is `src/app/` — `layout.tsx` (root layout), `page.tsx` (home), `globals.css`. No component/lib dirs yet; new code goes under `src/`.
- Path alias `@/*` → `./src/*`.
- `README.md` is stock boilerplate; its `app/page.tsx` path is wrong (actual: `src/app/page.tsx`).

## Commands

- `npm run dev` — dev server (Turbopack), http://localhost:3000
- `npm run build` — production build; also runs the TypeScript check
- `npm run lint` — ESLint 9 flat config (`eslint-config-next`); bare `eslint` lints the whole repo, and warnings do **not** fail it (exit 0)
- `npx tsc --noEmit` — typecheck (no npm script)
  - **Needs `.next/types/` to exist** (created by `next dev`/`next build`). On a fresh clone it fails with `TS2304: Cannot find name 'LayoutProps'` — that global comes from `next-env.d.ts` → `.next/types/routes.d.ts`. Run `npm run build` once first.
- There is no test script or test runner — don't invent `npm test`.

Verify order: `npm run lint` → `npx tsc --noEmit` → `npm run build`.

## Toolchain quirks

- **This Next.js is newer than your training data.** Bundled docs: `node_modules/next/dist/docs/` — `01-app` (App Router), `02-pages`, `03-architecture`. Read the relevant guide before writing Next code.
- `next.config.ts` enables `cacheComponents`, `partialPrefetching`, `reactCompiler` (React Compiler: keep components pure — no render-time side effects or prop mutation), and `experimental.agentFeedback` (owns the feedback block above).
- Tailwind **v4** with no `postcss.config.*`/`tailwind.config.*`: CSS compiles through the `@tailwindcss/turbopack` loader rule in `next.config.ts`; styling config lives in CSS (`@import "tailwindcss"` + `@theme inline` in `src/app/globals.css`).
- Windows/PowerShell environment; the repo path contains spaces (`C:\my portfolio\2nd-portfolio`) — quote paths in shell commands.
