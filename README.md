# saeedk.dev

Saeed Karimi’s personal website. Built with Next.js App Router, TypeScript, and CSS.

## Development

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

## Verification

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

The site has no automated test suite. Check the production pages at desktop and mobile widths, including navigation, in-page anchors, and keyboard focus.

## Content

- `/` — current work, writing, and public profiles.
- `/projects` — current public work at DMG/Numis and earlier professional work. The original URL is retained; the retired project showcase was removed at the owner’s request.
- `/about` — background and employment history moved from the original homepage.
- `/writing` — selected published articles, linking to the full Medium archive.

Employment details are based on the original public site. Current DMG/Numis context is limited to public information and the owner’s supplied description. Article titles, dates, and links were verified on [Saeed’s Medium profile](https://medium.com/@sk.dev). Shared article and experience data lives in `lib/content.ts`.

Newsreader is self-hosted in `app/fonts` under its included SIL Open Font License. Body text uses the visitor’s system font. Existing public assets remain in the repository, but retired projects are no longer displayed or linked.

## Hosting

The repository uses the standard `next build` / `next start` workflow. No hosting configuration or deployment workflow is checked in. Pushes may be handled by the existing hosting integration; this redesign does not change that integration or require environment variables.
