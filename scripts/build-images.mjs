import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

// Generate WebP portraits from pic.png
for (const w of [1100, 720, 420]) {
  await sharp('pic.png')
    .resize({ width: w })
    .webp({ quality: 90 })
    .toFile(`${OUT}/portrait-${w}.webp`);
}

// Social share image (1200x630) on a dark backdrop
const portrait = await sharp('pic.png').resize({ height: 580 }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#07070a' } })
  .composite([
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs><radialGradient id="g" cx="78%" cy="45%" r="45%"><stop offset="0" stop-color="#e5132b" stop-opacity="0.45"/><stop offset="1" stop-color="#e5132b" stop-opacity="0"/></radialGradient></defs>
        <rect width="1200" height="630" fill="url(#g)"/>
      </svg>`),
    },
    { input: portrait, gravity: 'southeast' },
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <text x="72" y="270" font-family="Impact, 'Arial Narrow', sans-serif" font-size="110" fill="#f4f1ec" letter-spacing="4">NISHANTH G A</text>
        <text x="78" y="330" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="24" fill="#ff3d5a" letter-spacing="12">PORTFOLIO SERIES</text>
        <text x="78" y="395" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="18" fill="#a7a6ad" letter-spacing="4">SOFTWARE DEVELOPER • FULL STACK DEVELOPER</text>
      </svg>`),
    },
  ])
  .jpeg({ quality: 85 })
  .toFile(`${OUT}/og-image.jpg`);

console.log('images built successfully for Nishanth G A');
