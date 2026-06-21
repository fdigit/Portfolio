const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.join(__dirname, '../public/images');
const mdxDir = path.join(__dirname, '../content/projects');
const blurDataMap = {};

async function processImages() {
  const files = fs.readdirSync(imagesDir).filter(f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg'));
  
  for (const file of files) {
    const inputPath = path.join(imagesDir, file);
    const newFileName = file.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    const outputPath = path.join(imagesDir, newFileName);
    
    // Convert to webp
    await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);
    console.log(`Converted ${file} to ${newFileName}`);
    
    // Generate blur data URL
    const buffer = await sharp(inputPath).resize(20).webp({ quality: 20 }).toBuffer();
    const base64 = buffer.toString('base64');
    const dataUrl = `data:image/webp;base64,${base64}`;
    
    const imageKey = `/images/${newFileName}`;
    blurDataMap[imageKey] = dataUrl;
    
    // Optional: remove old image
    fs.unlinkSync(inputPath);
  }
  
  // Write blur data map
  const libDir = path.join(__dirname, '../src/lib');
  if (!fs.existsSync(libDir)) {
      fs.mkdirSync(libDir, { recursive: true });
  }
  fs.writeFileSync(path.join(libDir, 'blurData.json'), JSON.stringify(blurDataMap, null, 2));
  console.log('Generated blur data map');
  
  // Update MDX files
  const mdxFiles = fs.readdirSync(mdxDir).filter(f => f.endsWith('.mdx'));
  for (const mdx of mdxFiles) {
    const mdxPath = path.join(mdxDir, mdx);
    let content = fs.readFileSync(mdxPath, 'utf8');
    content = content.replace(/\.(png|jpg|jpeg)/g, '.webp');
    fs.writeFileSync(mdxPath, content);
  }
  console.log('Updated MDX files');
}

processImages().catch(console.error);
