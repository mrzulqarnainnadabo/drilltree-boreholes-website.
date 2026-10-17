# Drilltree Boreholes Limited website

A static Astro website for a professional, mobile-first borehole-drilling enquiry journey. It does not store form submissions or make backend/email claims. Visitors can prepare a WhatsApp draft, review it and choose whether to send it.

## Run and build

Use Node.js 22 and pnpm 11.25.0.

```sh
pnpm install
pnpm dev
pnpm check
pnpm build
```

The development server listens on port 3000. The build writes a static site to `dist/`.

## Before a permanent public launch

Confirm business identity, phone, address and opening hours with the owner. The project is available as a **Preview** until the owner confirms details and the final domain.

## Updating the site

- **Phone and WhatsApp:** edit `src/data/site.ts`.
- **Address and map:** edit `business.address` and `business.mapsHref` in `src/data/site.ts`.
- **Services / FAQs / About copy:** edit the corresponding data or page files.
- **Project cases:** add verified objects to `src/data/projects.ts` only with owner permission and real photos.
- **Brand mark:** keep the supplied logo; update paths if replacing with owner-approved artwork.
- **SEO domain:** set `PUBLIC_SITE_URL` in `.env` before production build.
