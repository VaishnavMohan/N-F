const { createCanvas } = require('@napi-rs/canvas');
const fs = require('fs');
const path = require('path');

// 1. Generate 1200x630 OG Large Landscape Image
function generateLandscape() {
  const width = 1200;
  const height = 630;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Background radial gradient
  const bgGrad = ctx.createRadialGradient(width * 0.5, height * 0.45, 50, width * 0.5, height * 0.5, 650);
  bgGrad.addColorStop(0, '#152C1F');
  bgGrad.addColorStop(0.55, '#0C1A12');
  bgGrad.addColorStop(1, '#050B08');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // Outer border
  ctx.strokeStyle = '#2B523B';
  ctx.lineWidth = 4;
  ctx.strokeRect(20, 20, width - 40, height - 40);

  // Inner gold border
  ctx.strokeStyle = 'rgba(229, 197, 120, 0.45)';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(32, 32, width - 64, height - 64);

  // Corner Florets
  ctx.fillStyle = '#D4AF37';
  ctx.font = '20px serif';
  ctx.textAlign = 'center';
  ctx.fillText('❦', 48, 52);
  ctx.fillText('❦', width - 48, 52);
  ctx.fillText('❦', 48, height - 44);
  ctx.fillText('❦', width - 48, height - 44);

  // Bismillah
  ctx.fillStyle = '#E5C578';
  ctx.font = 'bold 22px serif';
  ctx.textAlign = 'center';
  ctx.fillText('بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', width / 2, 85);

  // Monogram Badge
  ctx.strokeStyle = '#D4AF37';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(width / 2, 145, 36, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = '#FAF7F2';
  ctx.font = 'bold 28px serif';
  ctx.fillText('N/R', width / 2, 155);

  // Together With Their Families
  ctx.fillStyle = '#A8C2B3';
  ctx.font = '600 14px sans-serif';
  ctx.letterSpacing = '4px';
  ctx.fillText('TOGETHER WITH THEIR FAMILIES', width / 2, 218);

  // Groom Name
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 44px serif';
  ctx.fillText('MOHAMMED NADEER', width / 2, 276);

  // "and"
  ctx.fillStyle = '#E5C578';
  ctx.font = 'italic 34px serif';
  ctx.fillText('and', width / 2, 322);

  // Bride Name
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 44px serif';
  ctx.fillText('FATHIMA RINSI', width / 2, 376);

  // Date line with pill
  ctx.fillStyle = 'rgba(229, 197, 120, 0.15)';
  ctx.strokeStyle = 'rgba(229, 197, 120, 0.4)';
  ctx.lineWidth = 1.2;
  const pillW = 380;
  const pillH = 38;
  const pillX = (width - pillW) / 2;
  const pillY = 415;
  ctx.beginPath();
  ctx.roundRect(pillX, pillY, pillW, pillH, 19);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#FFF0C2';
  ctx.font = 'bold 15px sans-serif';
  ctx.fillText('SATURDAY, 31 OCTOBER 2026', width / 2, 440);

  // Hijri Date
  ctx.fillStyle = '#C5A059';
  ctx.font = '600 13px sans-serif';
  ctx.fillText('{ 20 JUMADA AL-AWWAL 1448 AH }', width / 2, 480);

  // Venue & Time
  ctx.fillStyle = '#FAF7F2';
  ctx.font = 'bold 24px serif';
  ctx.fillText('CN AUDITORIUM KUMBIDI', width / 2, 530);

  ctx.fillStyle = '#E5C578';
  ctx.font = '600 16px sans-serif';
  ctx.fillText('4:00 PM TO 8:30 PM • KUMBIDI, KERALA', width / 2, 565);

  return canvas.toBuffer('image/jpeg');
}

// 2. Generate 600x600 OG Square Thumbnail
function generateSquare() {
  const size = 600;
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Background radial gradient
  const bgGrad = ctx.createRadialGradient(size * 0.5, size * 0.4, 40, size * 0.5, size * 0.5, 340);
  bgGrad.addColorStop(0, '#173322');
  bgGrad.addColorStop(0.65, '#0E1D14');
  bgGrad.addColorStop(1, '#050B08');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, size, size);

  // Outer border
  ctx.strokeStyle = '#2B523B';
  ctx.lineWidth = 3;
  ctx.strokeRect(16, 16, size - 32, size - 32);

  // Inner gold border
  ctx.strokeStyle = 'rgba(229, 197, 120, 0.4)';
  ctx.lineWidth = 1.2;
  ctx.strokeRect(24, 24, size - 48, size - 48);

  // Corner Florets
  ctx.fillStyle = '#D4AF37';
  ctx.font = '16px serif';
  ctx.textAlign = 'center';
  ctx.fillText('❦', 38, 42);
  ctx.fillText('❦', size - 38, 42);
  ctx.fillText('❦', 38, size - 34);
  ctx.fillText('❦', size - 38, size - 34);

  // Monogram circle
  ctx.fillStyle = 'rgba(229, 197, 120, 0.12)';
  ctx.strokeStyle = '#E5C578';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(size / 2, 105, 42, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 36px serif';
  ctx.fillText('N/R', size / 2, 117);

  // Bismillah
  ctx.fillStyle = '#E5C578';
  ctx.font = 'bold 15px serif';
  ctx.fillText('بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', size / 2, 175);

  // Wedding Invitation
  ctx.fillStyle = '#A8C2B3';
  ctx.font = '600 11px sans-serif';
  ctx.fillText('WEDDING INVITATION', size / 2, 202);

  // Groom
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 28px serif';
  ctx.fillText('MOHAMMED NADEER', size / 2, 246);

  // and
  ctx.fillStyle = '#E5C578';
  ctx.font = 'italic 25px serif';
  ctx.fillText('and', size / 2, 282);

  // Bride
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 28px serif';
  ctx.fillText('FATHIMA RINSI', size / 2, 324);

  // Date pill
  ctx.fillStyle = 'rgba(229, 197, 120, 0.14)';
  ctx.strokeStyle = 'rgba(229, 197, 120, 0.4)';
  ctx.lineWidth = 1;
  const pillW = 280;
  const pillH = 32;
  const pillX = (size - pillW) / 2;
  const pillY = 360;
  ctx.beginPath();
  ctx.roundRect(pillX, pillY, pillW, pillH, 16);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#FFF0C2';
  ctx.font = 'bold 12px sans-serif';
  ctx.fillText('SATURDAY, 31 OCTOBER 2026', size / 2, 381);

  // Hijri Date
  ctx.fillStyle = '#C5A059';
  ctx.font = '600 10.5px sans-serif';
  ctx.fillText('{ 20 JUMADA AL-AWWAL 1448 AH }', size / 2, 415);

  // Venue
  ctx.fillStyle = '#FAF7F2';
  ctx.font = 'bold 20px serif';
  ctx.fillText('CN AUDITORIUM KUMBIDI', size / 2, 465);

  // Timing
  ctx.fillStyle = '#E5C578';
  ctx.font = '600 13px sans-serif';
  ctx.fillText('4:00 PM TO 8:30 PM', size / 2, 500);

  return canvas.toBuffer('image/jpeg');
}

const landscapeBuf = generateLandscape();
const squareBuf = generateSquare();

// Save landscape files
fs.writeFileSync('og-image.jpg', landscapeBuf);
fs.writeFileSync('preview.jpg', landscapeBuf);
fs.writeFileSync('assets/images/og_preview_ashin_vrinda.jpg', landscapeBuf);
fs.writeFileSync('assets/images/og_preview.jpg', landscapeBuf);
fs.writeFileSync('assets/images/whatsapp_thumbnail.jpg', landscapeBuf);

// Save square files
fs.writeFileSync('whatsapp-preview.jpg', squareBuf);
fs.writeFileSync('thumb.jpg', squareBuf);
fs.writeFileSync('assets/images/og_thumb_square.jpg', squareBuf);
fs.writeFileSync('assets/images/og_preview_square.jpg', squareBuf);

console.log('All OG and WhatsApp preview images generated successfully with Mohammed Nadeer & Fathima Rinsi details!');
