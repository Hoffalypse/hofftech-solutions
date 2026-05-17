# HoffTech Solutions

Marketing site for **HoffTech Solutions LLC** — a Colorado-based small business that builds custom software, workflow automation, and AI-powered tools for government agencies.

**Live site:** [hofftechsolutions.com](https://hofftechsolutions.com)

## Stack

- **Vite + React 18** (single-page app, client-side routing via React Router)
- **Tailwind CSS** for styling
- **EmailJS** for the contact form (no backend)
- **Vercel** for hosting + auto-deploy on push to `main`
- **Cloudflare** for DNS (registrar)
- Domain SSL provisioned automatically by Vercel

## Local development

```bash
npm install
npm run dev      # http://localhost:5174
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
├── pages/
│   ├── Home.jsx         # Single-page scrolling layout
│   └── Contact.jsx      # Contact form (EmailJS)
├── components/
│   ├── Navbar.jsx       # Top nav
│   ├── Hero.jsx         # "Modern Software For Public Service" + robot image
│   ├── Stats.jsx        # Credibility signals row (Projects / NAICS / Coverage)
│   ├── Business.jsx     # "Services Built for Public Sector Needs" — 4 cards
│   ├── Billing.jsx      # "Problems We Solve Every Day" + cards SVG
│   ├── CardDeal.jsx     # "Based in Colorado, Working Nationally"
│   ├── Testimonials.jsx # Experience section (PickNik, Crux, stack)
│   └── Footer.jsx       # Contact info + capability statement link + LinkedIn
├── constants/index.js   # Source-of-truth for nav links, services, credibility
│                        # signals, footer links — edit copy here
├── assets/              # PNGs, SVGs, logos
├── style.js             # Tailwind composition helpers
└── index.css            # Global styles + custom gradients
public/
├── capability-statement.html  # Source for the capability statement
└── capability-statement.pdf   # Rendered PDF (linked from footer)
```

## Editing content

Most copy lives in [src/constants/index.js](src/constants/index.js):

- `navLinks` — top navigation items
- `features` — three services on the homepage
- `credibilitySignals` — the row above the services section
- `footerLinks` — footer link columns
- `socialMedia` — footer social icons

Section headings, body copy, and hero text live in the individual components under `src/components/`.

## Capability statement PDF

The capability statement is generated from [public/capability-statement.html](public/capability-statement.html) and rendered to PDF using Chrome headless.

To regenerate after editing the HTML:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf=public/capability-statement.pdf \
  "file://$(pwd)/public/capability-statement.html"
```

Commit both files together. The footer link points at `/capability-statement.pdf` directly.

## Contact form

Powered by [EmailJS](https://www.emailjs.com/). Configuration lives in [src/pages/Contact.jsx](src/pages/Contact.jsx):

- Service ID, template ID, and public key are embedded in the client bundle (this is expected — they're not secret)
- Form submissions email **bryanwienhoff@gmail.com**
- Free tier limit: 200 emails/month

If the form breaks, check the EmailJS dashboard first — most failures are quota or template-config issues.

## Deployment

Vercel auto-deploys every push to `main`:

1. Push to `main`
2. Vercel runs `npm run build`
3. New deployment goes live at `hofftechsolutions.com` (with cached SSL)

There's nothing else to do — no env vars, no secrets, no manual steps.

### Domain + DNS

- Registrar: **Cloudflare** (`hofftechsolutions.com`)
- DNS records: two CNAMEs pointing at Vercel (both set to "DNS only" / grey-cloud — Vercel handles SSL)
  - `@` → `0fa79805537f76dc.vercel-dns-017.com`
  - `www` → `0fa79805537f76dc.vercel-dns-017.com`

## SPA routing

[vercel.json](vercel.json) rewrites all requests to `/index.html` so React Router handles routes (deep links like `/contact` work without 404'ing).

## License

Private. Not for redistribution.
