export const site = {
  name: 'InfoSof',
  legalName: 'InfoSof, Inc.',
  tagline: 'Observability that engineers actually enjoy.',
  description:
    'InfoSof unifies logs, metrics, and traces in one fast platform so engineering teams can find and fix production issues in minutes, not hours.',
  url: 'https://infosof.vercel.app',
  locale: 'en_US',
  foundingYear: 2021,
  email: 'hello@infosof.example',
  supportEmail: 'support@infosof.example',
  phone: '+1-415-555-0142',
  address: {
    street: '548 Market St, Suite 22000',
    city: 'San Francisco',
    region: 'CA',
    postalCode: '94104',
    country: 'US',
  },
  social: {
    twitter: 'https://twitter.com/infosof',
    github: 'https://github.com/infosof',
    linkedin: 'https://www.linkedin.com/company/infosof',
  },
  twitterHandle: '@infosof',
} as const;

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: 'Product', href: '/product/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'FAQ', href: '/faq/' },
  { label: 'About', href: '/about/' },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: 'Product',
    items: [
      { label: 'Overview', href: '/product/' },
      { label: 'Pricing', href: '/pricing/' },
      { label: 'FAQ', href: '/faq/' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About', href: '/about/' },
      { label: 'Blog', href: '/blog/' },
      { label: 'Contact', href: '/contact/' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Documentation', href: '/product/#docs' },
      { label: 'Status', href: '/product/#reliability' },
      { label: 'Changelog', href: '/blog/' },
    ],
  },
];
