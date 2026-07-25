# InfoSof

Marketing site for **InfoSof**, a fictional B2B observability platform (logs,
metrics, and traces). Built with [Astro](https://astro.build/) as a static site,
no page builders.

**Live URL:** [Infosof for Digital Heroes Assessment](infosof.vercel.app)

## Highlights

- **7 pages** from one shared layout: home, product, pricing, contact, FAQ,
  about, and a blog (index + posts).
- **Semantic and accessible.** One `<h1>` per page, correct heading order,
  landmark regions, a skip link, visible focus styles, a keyboard-operable mobile
  nav, and an accessible, validated contact form.
- **SEO built in.** A shared `SEO.astro` component adds title, description,
  canonical, Open Graph, and Twitter tags to every page. Structured data
  (Organization, SoftwareApplication/Product, FAQPage, BlogPosting) is emitted as
  JSON-LD. `sitemap.xml`, `robots.txt`, and an RSS feed are generated at build.
- **Fast by default.** Static HTML, near-zero JavaScript, self-hosted fonts, and
  no external requests. Home page Lighthouse (mobile): Performance 99,
  Accessibility 100, Best Practices 100, SEO 100.


To hit Core Web Vitals in the green on mobile, the biggest decision was choosing Astro with static output, so every page ships as prerendered HTML with no server work and no client-side framework hydration on load. From there I kept JavaScript near zero: 
the only scripts are a tiny mobile-nav toggle and the contact-form validation, so there is almost nothing to block the main thread. 
I self-hosted the fonts instead of pulling from Google Fonts, which removes a render-blocking third-party request and helps LCP. 
I deliberately avoided layout shift (CLS) by building the hero as CSS, SVG, and text rather than a large raster image, using inline SVG icons, and only referencing the Open Graph image in meta tags rather than rendering it on the page. Critical CSS is inlined automatically by Astro, the stylesheet itself is small hand-written CSS driven by design tokens rather than a heavy utility framework, and there are no external runtime requests at all, so the page paints fast and stays visually stable.

