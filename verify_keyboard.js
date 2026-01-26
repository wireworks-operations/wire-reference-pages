const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + process.cwd() + '/index.html');

  await page.focus('#q');
  await page.keyboard.type('ACWU');
  await page.waitForTimeout(500);

  // Press ArrowDown
  await page.keyboard.press('ArrowDown');
  await page.screenshot({ path: 'verify_search_arrow.png' });

  // Press Enter
  await page.keyboard.press('Enter');
  await page.waitForTimeout(500);
  console.log('Final URL:', page.url());

  await browser.close();
})();
