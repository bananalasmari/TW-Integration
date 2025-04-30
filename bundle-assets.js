const fs = require('fs-extra');
const path = require('path');

// Define paths
const distDir = path.resolve(__dirname, 'dist');
const assetsDir = path.join(distDir, 'assets');
const mediaDir = path.join(distDir, 'media');

// Organize files into the media directory
async function organizeAssets() {
  console.log('Organizing assets into the media folder...');

  // Ensure the media directory exists
  await fs.ensureDir(mediaDir);

  // Move image files
  const imagesDir = path.join(assetsDir, 'images');
  if (fs.existsSync(imagesDir)) {
    await fs.move(imagesDir, path.join(mediaDir, 'images'), { overwrite: true });
  }

  // Move JS files
  const jsDir = path.join(assetsDir, 'js');
  if (fs.existsSync(jsDir)) {
    await fs.move(jsDir, path.join(mediaDir, 'js'), { overwrite: true });
  }

  // Move fonts
  const fontsDir = path.join(assetsDir, 'fonts');
  if (fs.existsSync(fontsDir)) {
    await fs.move(fontsDir, path.join(mediaDir, 'fonts'), { overwrite: true });
  }

  // Move SCSS files
  const scssDir = path.join(assetsDir, 'scss');
  if (fs.existsSync(scssDir)) {
    await fs.move(scssDir, path.join(mediaDir, 'scss'), { overwrite: true });
  }

  console.log('Assets successfully organized into the media folder.');
}

// Run the script
organizeAssets().catch((error) => {
  console.error('Error organizing assets:', error);
  process.exit(1);
});