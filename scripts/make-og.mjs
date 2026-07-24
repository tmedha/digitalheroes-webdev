// Rasterize the branded Open Graph card (1200x630) to public/og/default.png.
// Run once with: node scripts/make-og.mjs
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0a0c10"/>
      <stop offset="1" stop-color="#12151c"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <path d="M80 470 L1120 470" stroke="#262b36" stroke-width="1"/>
  <g transform="translate(80,90)">
    <rect x="0" y="0" width="52" height="52" rx="14" fill="none" stroke="#35d6a5" stroke-width="2" opacity="0.4"/>
    <path d="M8 34 L20 34 L26 16 L34 46 L40 28 L48 28" fill="none" stroke="#35d6a5" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="72" y="38" font-family="Inter, sans-serif" font-size="34" font-weight="700" fill="#eef1f6">InfoSof</text>
  </g>
  <text x="80" y="290" font-family="Inter, sans-serif" font-size="72" font-weight="700" fill="#eef1f6" letter-spacing="-2">Observability engineers</text>
  <text x="80" y="376" font-family="Inter, sans-serif" font-size="72" font-weight="700" fill="#35d6a5" letter-spacing="-2">actually enjoy.</text>
  <text x="80" y="540" font-family="Inter, sans-serif" font-size="30" fill="#a7b0c0">Logs, metrics, and traces in one fast platform.</text>
</svg>`;

await mkdir('public/og', { recursive: true });
await sharp(Buffer.from(svg)).png().toFile('public/og/default.png');
console.log('Wrote public/og/default.png');
