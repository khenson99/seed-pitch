const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1920,1080'],
    defaultViewport: { width: 1920, height: 1080 }
  });
  
  const page = await browser.newPage();
  
  // Navigate to the local dev server
  console.log('Navigating to app...');
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });

  // Get total slides count if possible, or just hardcode based on App.tsx
  // In App.tsx: 11 slides (Cover, Market, ... Tam) - actually 11 based on array length
  const totalSlides = 11; 
  
  // Verify we are on the page
  await page.waitForSelector('body');

  // PDF configuration
  const pdfPath = path.resolve(__dirname, 'Arda_Pitch_Deck.pdf');

  const screenshots = [];
  
  for (let i = 0; i < totalSlides; i++) {
    console.log(`Capturing slide ${i + 1}/${totalSlides}...`);
    
    // Wait for animations to settle
    await new Promise(r => setTimeout(r, 2000));
    
    // Capture screenshot
    const screenshot = await page.screenshot({ encoding: 'base64', fullPage: true });
    screenshots.push(screenshot);
    
    // Navigate to next slide
    if (i < totalSlides - 1) {
      await page.keyboard.press('ArrowRight');
    }
  }

  console.log('Generating PDF...');
  
  // Create a temporary HTML content to print
  // Use CSS @page to ensure correct size and margins
  const htmlContent = `
    <html>
      <head>
        <style>
          @page { size: 1920px 1080px; margin: 0; }
          body { margin: 0; padding: 0; }
          img { width: 1920px; height: 1080px; display: block; }
        </style>
      </head>
      <body>
        ${screenshots.map(img => `<img src="data:image/png;base64,${img}" />`).join('')}
      </body>
    </html>
  `;
  
  await page.setContent(htmlContent);
  
  await page.pdf({
    path: pdfPath,
    printBackground: true,
    width: 1920,
    height: 1080,
  });

  await browser.close();
  console.log(`PDF generated successfully at: ${pdfPath}`);
})();
