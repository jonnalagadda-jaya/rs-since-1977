const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const brainDir = 'C:\\Users\\PC\\.gemini\\antigravity-ide\\brain\\3bec61e5-f52e-4def-b8bb-7676aa11b3ab';

// Source images
const srcWool = path.join(brainDir, 'suiting_wool_swatch_1791447653755.jpg');
const srcCotton = path.join(brainDir, 'giza_cotton_swatch_1791447620070.jpg');
const srcLinen = path.join(brainDir, 'pure_linen_swatch_1791447683366.jpg');
const srcHeroFabrics = path.join(publicDir, 'hero_fabrics.jpg');

async function processFabricImages() {
  console.log('Generating 8 distinct fabric images...');

  const woolMeta = await sharp(srcWool).metadata();
  const cottonMeta = await sharp(srcCotton).metadata();
  const linenMeta = await sharp(srcLinen).metadata();

  console.log('Source dimensions:', {
    wool: `${woolMeta.width}x${woolMeta.height}`,
    cotton: `${cottonMeta.width}x${cottonMeta.height}`,
    linen: `${linenMeta.width}x${linenMeta.height}`
  });

  // 1. POLY VISCOSE SUITING (Navy Blue Twill)
  await sharp(srcWool)
    .resize(1024, 1024, { fit: 'cover', position: 'top' })
    .tint('#1b365d') // Navy Blue
    .modulate({ brightness: 0.9, saturation: 1.3 })
    .jpeg({ quality: 90 })
    .toFile(path.join(publicDir, 'fabric_poly_viscose.jpg'));
  console.log('Created fabric_poly_viscose.jpg');

  // 2. POLY WOOL SUITING (Executive Charcoal Gabardine)
  await sharp(srcWool)
    .resize(1024, 1024, { fit: 'cover', position: 'center' })
    .tint('#2b2e34') // Charcoal Grey
    .modulate({ brightness: 0.85, saturation: 0.8 })
    .jpeg({ quality: 90 })
    .toFile(path.join(publicDir, 'fabric_poly_wool.jpg'));
  console.log('Created fabric_poly_wool.jpg');

  // 3. MERINO WOOL SUITING (Superfine Jet Black Australian Merino)
  await sharp(srcWool)
    .resize(1024, 1024, { fit: 'cover', position: 'bottom' })
    .tint('#111317') // Jet Black / Dark Charcoal
    .modulate({ brightness: 0.75, saturation: 1.1 })
    .jpeg({ quality: 90 })
    .toFile(path.join(publicDir, 'fabric_merino_wool.jpg'));
  console.log('Created fabric_merino_wool.jpg');

  // 4. TERRY RAYON SUITING (Slate & Mocha Luster)
  await sharp(srcHeroFabrics)
    .resize(1024, 1024, { fit: 'cover', position: 'center' })
    .tint('#3d3c4a') // Slate Rayon Luster
    .modulate({ brightness: 0.9, saturation: 1.1 })
    .jpeg({ quality: 90 })
    .toFile(path.join(publicDir, 'fabric_terry_rayon.jpg'));
  console.log('Created fabric_terry_rayon.jpg');

  // 5. POLY COTTON SHIRTINGS (Sky Blue Poplin)
  await sharp(srcCotton)
    .resize(1024, 1024, { fit: 'cover', position: 'top' })
    .tint('#b3d4fc') // Light Sky Blue Tint
    .modulate({ brightness: 1.05, saturation: 1.2 })
    .jpeg({ quality: 90 })
    .toFile(path.join(publicDir, 'fabric_poly_cotton.jpg'));
  console.log('Created fabric_poly_cotton.jpg');

  // 6. GIZA COTTON (Crisp Optical White Fine Weave)
  await sharp(srcCotton)
    .resize(1024, 1024, { fit: 'cover', position: 'center' })
    .modulate({ brightness: 1.08, saturation: 0.8 })
    .jpeg({ quality: 90 })
    .toFile(path.join(publicDir, 'fabric_giza_cotton.jpg'));
  console.log('Created fabric_giza_cotton.jpg');

  // 7. PREMIUM GIZA COTTON (Royal Ivory Satin Stripe)
  await sharp(srcCotton)
    .resize(1024, 1024, { fit: 'cover', position: 'bottom' })
    .tint('#f5edd8') // Warm Royal Ivory Satin Tone
    .modulate({ brightness: 1.02, saturation: 1.05 })
    .jpeg({ quality: 90 })
    .toFile(path.join(publicDir, 'fabric_premium_giza.jpg'));
  console.log('Created fabric_premium_giza.jpg');

  // 8. PURE LINENS (Natural Sand European Flax)
  await sharp(srcLinen)
    .resize(1024, 1024, { fit: 'cover', position: 'center' })
    .tint('#d6c7b2') // Natural Sand Flax Linen Tone
    .modulate({ brightness: 1.0, saturation: 1.1 })
    .jpeg({ quality: 90 })
    .toFile(path.join(publicDir, 'fabric_pure_linen.jpg'));
  console.log('Created fabric_pure_linen.jpg');

  console.log('SUCCESS: All 8 fabric images created successfully!');
}

processFabricImages().catch(err => {
  console.error('Error generating fabric images:', err);
  process.exit(1);
});
