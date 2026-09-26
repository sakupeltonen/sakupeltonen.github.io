# sakupeltonen.github.io

Personal research website for Saku Peltonen, built with [Astro](https://astro.build/) and deployed as a static site with GitHub Pages.

## Local development

```sh
pnpm install
pnpm dev
```

Create a production build with `pnpm build`. The generated site is written to `dist/`.

## Updating the site

- Homepage: `src/pages/index.astro`
- Publication metadata, summaries, and links: `src/data/publications.ts`
- CV: `src/pages/cv.astro`
- Site-wide styles: `src/styles/global.css`
- Shared website colors: `palette.json`
- Generated web images: `public/images/`

The selected-publication cards are generated from entries marked `selected: true` in `src/data/publications.ts`. Add `selectedOrder` to control their order.

After changing `palette.json`, run `pnpm palette` to refresh the generated CSS
and favicon. The images committed under `public/images/` are generated assets;
their editable sources may be maintained in a separate private companion
repository. That repository can also receive LaTeX color definitions by setting
`ILLUSTRATION_PALETTE_OUTPUT` to its desired output file before running
`pnpm palette`.

## Deployment

The workflow in `.github/workflows/deploy.yml` builds and publishes every push to `main`. For the user site to appear at `https://sakupeltonen.github.io`, the public GitHub repository must be named exactly `sakupeltonen.github.io`, and GitHub Pages must use **GitHub Actions** as its source.

When a custom domain is added later, set the domain in both GitHub Pages settings and `astro.config.mjs`.
