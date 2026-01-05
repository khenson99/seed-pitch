const path = require('path');

const SLIDE_COUNT = 10;
const VIEWPORT = { width: 1920, height: 1080 };
const URL = 'http://localhost:5173/';

async function exportDeck() {
  console.log('Starting export process...');
  
  // Dynamic import for Puppeteer (sometimes packaged as ESM)
  const puppeteer = (await import('puppeteer')).default;
  // Require PptxGenJS directly to avoid ESM issues
  const pptxgen = require('pptxgenjs');

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.setViewport(VIEWPORT);
  console.log(`Navigating to ${URL}...`);
  await page.goto(URL, { waitUntil: 'networkidle0' });

  // Init PPTX
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';

  for (let i = 0; i < SLIDE_COUNT; i++) {
    console.log(`Capturing slide ${i + 1}/${SLIDE_COUNT}...`);
    
    // Wait for animations to settle
    await new Promise(r => setTimeout(r, 2000));

    // Capture screenshot
    const screenshotBuffer = await page.screenshot({ encoding: 'base64' });
    const image = `data:image/png;base64,${screenshotBuffer}`;

    // Add to PPTX
    const slide = pptx.addSlide();
    slide.addImage({ 
      data: image, 
      x: 0, 
      y: 0, 
      w: '100%', 
      h: '100%' 
    });

    // Advance slide
    await page.keyboard.press('ArrowRight');
  }

  await browser.close();

  const fileName = 'Arda_Pitch_Deck.pptx';
  const filePath = path.resolve(fileName);
  
  await pptx.writeFile({ fileName });
  console.log(`Export complete! Saved to ${filePath}`);
}

exportDeck().catch(console.error);
