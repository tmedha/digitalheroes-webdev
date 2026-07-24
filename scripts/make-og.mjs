import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset="1" stop-color="#eef1fe"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <path d="M80 470 L1120 470" stroke="#e6e8f0" stroke-width="1"/>
  <g transform="translate(80,86)">
    <rect x="0" y="0" width="52" height="52" rx="14" fill="#4f46e5"/>
    <path d="M12 36 L22 36 L28 18 L36 48 L42 30 L48 30" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="72" y="38" font-family="Inter, sans-serif" font-size="34" font-weight="700" fill="#101828">InfoSof</text>
  </g>
  <text x="80" y="290" font-family="Inter, sans-serif" font-size="70" font-weight="700" fill="#101828" letter-spacing="-2">Find and fix production</text>
  <text x="80" y="374" font-family="Inter, sans-serif" font-size="70" font-weight="700" fill="#101828" letter-spacing="-2">issues in <tspan fill="#4f46e5">minutes.</tspan></text>
  <text x="80" y="540" font-family="Inter, sans-serif" font-size="30" fill="#4b5563">One platform for logs, metrics, and traces.</text>
</svg>`;

await mkdir('public/og', { recursive: true });
await sharp(Buffer.from(svg)).png().toFile('public/og/default.png');
console.log('Wrote public/og/default.png');
