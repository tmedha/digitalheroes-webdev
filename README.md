# InfoSof

Marketing site for **InfoSof**, a fictional B2B observability platform (logs,
metrics, and traces). Built with [Astro](https://astro.build/) as a static site,
no page builders.

**Live URL:** [TBA]

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

