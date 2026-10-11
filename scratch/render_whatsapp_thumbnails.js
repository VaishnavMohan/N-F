const sharp = require('sharp');
const fs = require('fs');

// 1. Generate 600x600 Square WhatsApp Thumbnail
function getSquareSVG() {
  return `
<svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Paper gradient -->
    <radialGradient id="paperGrad" cx="50%" cy="40%" r="65%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="60%" stop-color="#FBF9F5" />
      <stop offset="100%" stop-color="#F3ECE2" />
    </radialGradient>

    <!-- Gold gradients -->
    <linearGradient id="goldOuter" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C5A059" />
      <stop offset="30%" stop-color="#E5C578" />
      <stop offset="70%" stop-color="#A58339" />
      <stop offset="100%" stop-color="#8F6E28" />
    </linearGradient>

    <linearGradient id="goldInner" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E5C578" />
      <stop offset="50%" stop-color="#C5A059" />
      <stop offset="100%" stop-color="#A58339" />
    </linearGradient>

    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#000000" flood-opacity="0.08" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="600" height="600" fill="#F0EBE1" />

  <!-- Card Surface with shadow -->
  <rect x="20" y="20" width="560" height="560" rx="4" fill="url(#paperGrad)" filter="url(#shadow)" />

  <!-- Outer Gold Border -->
  <rect x="28" y="28" width="544" height="544" rx="2" fill="none" stroke="url(#goldOuter)" stroke-width="2.5" />

  <!-- Inner Gold Border -->
  <rect x="38" y="38" width="524" height="524" rx="1" fill="none" stroke="url(#goldInner)" stroke-width="1.2" />

  <!-- Top Monogram -->
  <text x="300" y="88" font-family="Didot, 'Times New Roman', serif" font-size="42" font-weight="bold" letter-spacing="5" text-anchor="middle" fill="#111111">N/R</text>

  <!-- Together with their families -->
  <text x="300" y="118" font-family="Didot, 'Times New Roman', serif" font-size="11" font-weight="600" letter-spacing="3" text-anchor="middle" fill="#222222">TOGETHER</text>
  <text x="300" y="133" font-family="Didot, 'Times New Roman', serif" font-size="11" font-weight="600" letter-spacing="3" text-anchor="middle" fill="#222222">WITH THEIR FAMILIES</text>

  <!-- Groom Name -->
  <text x="300" y="174" font-family="Didot, 'Times New Roman', serif" font-size="26" font-weight="bold" letter-spacing="2.5" text-anchor="middle" fill="#111111">MOHAMMED NADEER</text>

  <!-- Groom Family -->
  <text x="300" y="196" font-family="Didot, 'Times New Roman', serif" font-size="9.5" font-weight="500" letter-spacing="1" text-anchor="middle" fill="#333333">S/O MR. MOHAMMED BASHEER &amp; MRS. SHAHANAZ</text>
  <text x="300" y="210" font-family="Didot, 'Times New Roman', serif" font-size="9" font-weight="500" letter-spacing="0.8" text-anchor="middle" fill="#444444">GRAND S/O LATE HAMZA HAJI &amp; LATE ABDUL KADER</text>
  <text x="300" y="224" font-family="Didot, 'Times New Roman', serif" font-size="8.5" font-weight="500" letter-spacing="0.8" text-anchor="middle" fill="#555555">PULAPARAMBIL (H), CHEKANOOR, MALAPPURAM</text>

  <!-- Connecting 'and' -->
  <text x="300" y="262" font-family="'Snell Roundhand', 'Brush Script MT', cursive" font-size="36" font-style="italic" text-anchor="middle" fill="#111111">and</text>

  <!-- Bride Name -->
  <text x="300" y="302" font-family="Didot, 'Times New Roman', serif" font-size="26" font-weight="bold" letter-spacing="2.5" text-anchor="middle" fill="#111111">FATHIMA RINSI</text>

  <!-- Bride Family -->
  <text x="300" y="324" font-family="Didot, 'Times New Roman', serif" font-size="9.5" font-weight="500" letter-spacing="1" text-anchor="middle" fill="#333333">D/O MR. SUBAIR &amp; MRS. SOUBANATH SUBAIR</text>
  <text x="300" y="338" font-family="Didot, 'Times New Roman', serif" font-size="8.5" font-weight="500" letter-spacing="0.8" text-anchor="middle" fill="#555555">CHANDAPARAMBIL (H), EDAPPAL</text>

  <!-- In sha allah on -->
  <text x="300" y="374" font-family="'Snell Roundhand', 'Brush Script MT', cursive" font-size="28" font-style="italic" text-anchor="middle" fill="#111111">In sha allah on</text>

  <!-- Date Grid -->
  <!-- Left Day Name -->
  <text x="180" y="420" font-family="Didot, 'Times New Roman', serif" font-size="14" font-weight="bold" letter-spacing="2" text-anchor="middle" fill="#111111">SATURDAY</text>

  <!-- Left Divider -->
  <line x1="240" y1="395" x2="240" y2="445" stroke="#111111" stroke-width="1.2" opacity="0.35" />

  <!-- Center Day Number & Year -->
  <text x="300" y="426" font-family="Didot, 'Times New Roman', serif" font-size="36" font-weight="bold" text-anchor="middle" fill="#111111">31</text>
  <text x="300" y="446" font-family="Didot, 'Times New Roman', serif" font-size="13" font-weight="bold" letter-spacing="2" text-anchor="middle" fill="#111111">2026</text>

  <!-- Right Divider -->
  <line x1="360" y1="395" x2="360" y2="445" stroke="#111111" stroke-width="1.2" opacity="0.35" />

  <!-- Right Month Name -->
  <text x="420" y="420" font-family="Didot, 'Times New Roman', serif" font-size="14" font-weight="bold" letter-spacing="2" text-anchor="middle" fill="#111111">OCTOBER</text>

  <!-- Hijri Date -->
  <text x="300" y="478" font-family="Didot, 'Times New Roman', serif" font-size="10.5" font-weight="600" letter-spacing="1.2" text-anchor="middle" fill="#333333">{ 20 JUMADA AL-AWWAL (JUMADA I) 1448 AH }</text>

  <!-- Location Pin Icon -->
  <g transform="translate(195, 503) scale(0.7)">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" fill="#111111" />
    <ellipse cx="12" cy="24.5" rx="4.5" ry="1.2" fill="none" stroke="#111111" stroke-width="1.2"/>
  </g>

  <!-- Venue Name -->
  <text x="312" y="516" font-family="Didot, 'Times New Roman', serif" font-size="15" font-weight="bold" letter-spacing="1.8" text-anchor="middle" fill="#111111">CN AUDITORIUM KUMBIDI</text>

  <!-- Timing -->
  <text x="300" y="538" font-family="Didot, 'Times New Roman', serif" font-size="13.5" font-weight="bold" letter-spacing="2" text-anchor="middle" fill="#111111">4:00PM TO 8:30PM</text>
</svg>
`;
}

// 2. Generate 1200x630 Landscape OpenGraph Card
function getLandscapeSVG() {
  return `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradient -->
    <radialGradient id="bgCanvas" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#142C1E" />
      <stop offset="60%" stop-color="#0A1810" />
      <stop offset="100%" stop-color="#050B07" />
    </radialGradient>

    <!-- Card paper -->
    <radialGradient id="cardPaper" cx="50%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="65%" stop-color="#FBF9F5" />
      <stop offset="100%" stop-color="#F2EBE0" />
    </radialGradient>

    <!-- Gold Gradients -->
    <linearGradient id="goldFoil" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E5C578" />
      <stop offset="35%" stop-color="#FFF3B0" />
      <stop offset="70%" stop-color="#C5A059" />
      <stop offset="100%" stop-color="#8F6E28" />
    </linearGradient>

    <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="12" stdDeviation="24" flood-color="#000000" flood-opacity="0.65" />
    </filter>
  </defs>

  <!-- Canvas Background -->
  <rect width="1200" height="630" fill="url(#bgCanvas)" />

  <!-- Outer Canvas Border -->
  <rect x="16" y="16" width="1168" height="598" rx="16" fill="none" stroke="#254633" stroke-width="2" />
  <rect x="24" y="24" width="1152" height="582" rx="12" fill="none" stroke="url(#goldFoil)" stroke-width="1" opacity="0.35" />

  <!-- Centered Wedding Card with Drop Shadow -->
  <!-- Card bounds: X: 350, Y: 25, W: 500, H: 580 -->
  <g transform="translate(350, 25)" filter="url(#cardShadow)">
    <rect width="500" height="580" rx="4" fill="url(#cardPaper)" />

    <!-- Outer Gold Border -->
    <rect x="10" y="10" width="480" height="560" rx="2" fill="none" stroke="url(#goldFoil)" stroke-width="2.2" />

    <!-- Inner Gold Border -->
    <rect x="18" y="18" width="464" height="544" rx="1" fill="none" stroke="#A58339" stroke-width="1.2" opacity="0.8" />

    <!-- Monogram -->
    <text x="250" y="68" font-family="Didot, 'Times New Roman', serif" font-size="38" font-weight="bold" letter-spacing="5" text-anchor="middle" fill="#111111">N/R</text>

    <!-- Together with their families -->
    <text x="250" y="96" font-family="Didot, 'Times New Roman', serif" font-size="10.5" font-weight="600" letter-spacing="2.8" text-anchor="middle" fill="#222222">TOGETHER</text>
    <text x="250" y="111" font-family="Didot, 'Times New Roman', serif" font-size="10.5" font-weight="600" letter-spacing="2.8" text-anchor="middle" fill="#222222">WITH THEIR FAMILIES</text>

    <!-- Groom -->
    <text x="250" y="152" font-family="Didot, 'Times New Roman', serif" font-size="24" font-weight="bold" letter-spacing="2.5" text-anchor="middle" fill="#111111">MOHAMMED NADEER</text>
    <text x="250" y="172" font-family="Didot, 'Times New Roman', serif" font-size="9" font-weight="500" letter-spacing="1" text-anchor="middle" fill="#333333">S/O MR. MOHAMMED BASHEER &amp; MRS. SHAHANAZ</text>
    <text x="250" y="186" font-family="Didot, 'Times New Roman', serif" font-size="8.5" font-weight="500" letter-spacing="0.8" text-anchor="middle" fill="#444444">GRAND S/O LATE HAMZA HAJI &amp; LATE ABDUL KADER</text>
    <text x="250" y="200" font-family="Didot, 'Times New Roman', serif" font-size="8" font-weight="500" letter-spacing="0.8" text-anchor="middle" fill="#555555">PULAPARAMBIL (H), CHEKANOOR, MALAPPURAM</text>

    <!-- and -->
    <text x="250" y="238" font-family="'Snell Roundhand', 'Brush Script MT', cursive" font-size="34" font-style="italic" text-anchor="middle" fill="#111111">and</text>

    <!-- Bride -->
    <text x="250" y="278" font-family="Didot, 'Times New Roman', serif" font-size="24" font-weight="bold" letter-spacing="2.5" text-anchor="middle" fill="#111111">FATHIMA RINSI</text>
    <text x="250" y="298" font-family="Didot, 'Times New Roman', serif" font-size="9" font-weight="500" letter-spacing="1" text-anchor="middle" fill="#333333">D/O MR. SUBAIR &amp; MRS. SOUBANATH SUBAIR</text>
    <text x="250" y="312" font-family="Didot, 'Times New Roman', serif" font-size="8" font-weight="500" letter-spacing="0.8" text-anchor="middle" fill="#555555">CHANDAPARAMBIL (H), EDAPPAL</text>

    <!-- In sha allah on -->
    <text x="250" y="350" font-family="'Snell Roundhand', 'Brush Script MT', cursive" font-size="26" font-style="italic" text-anchor="middle" fill="#111111">In sha allah on</text>

    <!-- Date Grid -->
    <text x="140" y="396" font-family="Didot, 'Times New Roman', serif" font-size="13" font-weight="bold" letter-spacing="2" text-anchor="middle" fill="#111111">SATURDAY</text>
    <line x1="200" y1="372" x2="200" y2="422" stroke="#111111" stroke-width="1.2" opacity="0.35" />
    <text x="250" y="402" font-family="Didot, 'Times New Roman', serif" font-size="34" font-weight="bold" text-anchor="middle" fill="#111111">31</text>
    <text x="250" y="420" font-family="Didot, 'Times New Roman', serif" font-size="12" font-weight="bold" letter-spacing="2" text-anchor="middle" fill="#111111">2026</text>
    <line x1="300" y1="372" x2="300" y2="422" stroke="#111111" stroke-width="1.2" opacity="0.35" />
    <text x="360" y="396" font-family="Didot, 'Times New Roman', serif" font-size="13" font-weight="bold" letter-spacing="2" text-anchor="middle" fill="#111111">OCTOBER</text>

    <!-- Hijri -->
    <text x="250" y="455" font-family="Didot, 'Times New Roman', serif" font-size="9.5" font-weight="600" letter-spacing="1.2" text-anchor="middle" fill="#333333">{ 20 JUMADA AL-AWWAL (JUMADA I) 1448 AH }</text>

    <!-- Venue & Time -->
    <g transform="translate(145, 480) scale(0.68)">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" fill="#111111" />
      <ellipse cx="12" cy="24.5" rx="4.5" ry="1.2" fill="none" stroke="#111111" stroke-width="1.2"/>
    </g>
    <text x="260" y="493" font-family="Didot, 'Times New Roman', serif" font-size="14.5" font-weight="bold" letter-spacing="1.8" text-anchor="middle" fill="#111111">CN AUDITORIUM KUMBIDI</text>
    <text x="250" y="515" font-family="Didot, 'Times New Roman', serif" font-size="13" font-weight="bold" letter-spacing="2" text-anchor="middle" fill="#111111">4:00PM TO 8:30PM</text>
  </g>

  <!-- Left Accent Banner (Dark velvet side) -->
  <g transform="translate(60, 240)">
    <text x="110" y="0" font-family="Didot, 'Times New Roman', serif" font-size="12" font-weight="bold" letter-spacing="4" text-anchor="middle" fill="#A8C2B3">WEDDING</text>
    <text x="110" y="24" font-family="Didot, 'Times New Roman', serif" font-size="12" font-weight="bold" letter-spacing="4" text-anchor="middle" fill="#A8C2B3">INVITATION</text>
    <line x1="60" y1="42" x2="160" y2="42" stroke="url(#goldFoil)" stroke-width="1.5" />
    <text x="110" y="70" font-family="Didot, 'Times New Roman', serif" font-size="28" font-weight="bold" letter-spacing="4" text-anchor="middle" fill="#FFF2D1">N &amp; R</text>
    <text x="110" y="100" font-family="'Snell Roundhand', cursive" font-size="22" font-style="italic" text-anchor="middle" fill="#E5C578">Together in Joy</text>
  </g>

  <!-- Right Accent Banner -->
  <g transform="translate(920, 240)">
    <text x="110" y="0" font-family="Didot, 'Times New Roman', serif" font-size="11.5" font-weight="bold" letter-spacing="3" text-anchor="middle" fill="#A8C2B3">OCTOBER 31</text>
    <text x="110" y="24" font-family="Didot, 'Times New Roman', serif" font-size="12" font-weight="bold" letter-spacing="3" text-anchor="middle" fill="#E5C578">2026</text>
    <line x1="60" y1="42" x2="160" y2="42" stroke="url(#goldFoil)" stroke-width="1.5" />
    <text x="110" y="68" font-family="Didot, 'Times New Roman', serif" font-size="13" font-weight="bold" letter-spacing="2" text-anchor="middle" fill="#FFF2D1">KUMBIDI</text>
    <text x="110" y="90" font-family="Didot, 'Times New Roman', serif" font-size="11" letter-spacing="1.5" text-anchor="middle" fill="#A8C2B3">KERALA</text>
  </g>
</svg>
`;
}

async function renderThumbnails() {
  const squareSvg = getSquareSVG();
  const landscapeSvg = getLandscapeSVG();

  // Render square 600x600 JPEG
  const squareBuf = await sharp(Buffer.from(squareSvg))
    .jpeg({ quality: 92 })
    .toBuffer();

  // Render landscape 1200x630 JPEG
  const landscapeBuf = await sharp(Buffer.from(landscapeSvg))
    .jpeg({ quality: 92 })
    .toBuffer();

  // Save all square files (WhatsApp mobile previews)
  fs.writeFileSync('thumb.jpg', squareBuf);
  fs.writeFileSync('whatsapp-preview.jpg', squareBuf);
  fs.writeFileSync('assets/images/og_thumb_square.jpg', squareBuf);
  fs.writeFileSync('assets/images/og_preview_square.jpg', squareBuf);

  // Save all landscape files (WhatsApp Web / OG Large image previews)
  fs.writeFileSync('og-image.jpg', landscapeBuf);
  fs.writeFileSync('preview.jpg', landscapeBuf);
  fs.writeFileSync('assets/images/og_preview.jpg', landscapeBuf);
  fs.writeFileSync('assets/images/whatsapp_thumbnail.jpg', landscapeBuf);
  fs.writeFileSync('assets/images/og_preview_ashin_vrinda.jpg', landscapeBuf);

  console.log('✅ Generated luxury WhatsApp thumbnails successfully!');
  console.log('Square size:', squareBuf.length, 'bytes');
  console.log('Landscape size:', landscapeBuf.length, 'bytes');
}

renderThumbnails().catch(err => {
  console.error('Rendering error:', err);
});
