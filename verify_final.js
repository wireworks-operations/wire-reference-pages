const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 1600 });

  await page.goto('file://' + process.cwd() + '/index.html');
  await page.screenshot({ path: 'final_hub.png' });

  await page.goto('file://' + process.cwd() + '/src/pages/Tape-Measure-Fractional-Refrence.html');
  await page.screenshot({ path: 'final_tape.png' });

  await browser.close();
})();
