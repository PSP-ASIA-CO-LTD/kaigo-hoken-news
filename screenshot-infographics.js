const puppeteer = require('puppeteer');
const fs = require('fs');

const BASE_URL = 'http://localhost:1313/kaigo-hoken-news';
const OUTPUT_DIR = '/opt/cursor/artifacts/screenshots';

const pages = [
  { name: 'infographics-index', path: '/infographics/' },
  { name: 'infographic-system', path: '/infographics/01-how-the-system-works/' },
  { name: 'infographic-claims', path: '/infographics/02-claims-flow/' },
  { name: 'infographic-competitors', path: '/infographics/03-competitor-map/' },
  { name: 'infographic-calculator', path: '/infographics/04-worked-example/' },
];

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function screenshot(page, name, viewport) {
  const suffix = viewport.width === 390 ? 'mobile' : 'desktop';
  await page.setViewport(viewport);
  await delay(500);
  await page.screenshot({
    path: `${OUTPUT_DIR}/${name}-${suffix}.png`,
    fullPage: true,
  });
  console.log(`  ✓ ${name}-${suffix}.png (${viewport.width}x${viewport.height})`);
}

async function checkLinks(page) {
  const links = await page.$$eval('a[href^="/kaigo-hoken-news/"]', els => els.map(a => a.href));
  const uniqueLinks = [...new Set(links)];
  const results = [];
  for (const link of uniqueLinks.slice(0, 10)) {
    try {
      const response = await page.goto(link, { waitUntil: 'domcontentloaded', timeout: 5000 });
      results.push({ url: link, status: response.status() });
    } catch (e) {
      results.push({ url: link, status: 'error', message: e.message });
    }
  }
  return results;
}

async function checkHorizontalScroll(page, width) {
  const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  return scrollWidth <= width;
}

async function run() {
  console.log('Starting Puppeteer...\n');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  for (const p of pages) {
    console.log(`\nProcessing: ${p.name}`);
    try {
      await page.goto(`${BASE_URL}${p.path}`, { waitUntil: 'networkidle0', timeout: 30000 });
      
      // Desktop screenshot (1440px)
      await screenshot(page, p.name, { width: 1440, height: 900 });
      
      // Mobile screenshot (390px)
      await screenshot(page, p.name, { width: 390, height: 844 });
      
      // Check horizontal scroll at 390px
      await page.setViewport({ width: 390, height: 844 });
      const noHScroll = await checkHorizontalScroll(page, 390);
      console.log(`  Horizontal scroll check (390px): ${noHScroll ? '✓ PASS' : '✗ FAIL'}`);

      // Check for raw SVG code (should NOT be present)
      const hasSvgCode = await page.evaluate(() => {
        const body = document.body.innerText;
        return body.includes('<svg') || body.includes('&lt;svg');
      });
      console.log(`  SVG renders correctly: ${hasSvgCode ? '✗ FAIL (raw code visible)' : '✓ PASS'}`);

      // Take interaction screenshot for specific pages
      if (p.name === 'infographic-system') {
        await page.setViewport({ width: 1440, height: 900 });
        await delay(500);
        const node = await page.$('.diagram-node[data-panel="municipality"]');
        if (node) {
          await node.click();
          await delay(500);
          await page.screenshot({ path: `${OUTPUT_DIR}/${p.name}-interaction.png` });
          console.log(`  ✓ ${p.name}-interaction.png (panel open)`);
        }
      }

      if (p.name === 'infographic-claims') {
        await page.setViewport({ width: 1440, height: 900 });
        await delay(500);
        // Click Next a few times
        for (let i = 0; i < 3; i++) {
          const nextBtn = await page.$('#step-next:not([disabled])');
          if (nextBtn) await nextBtn.click();
          await delay(300);
        }
        await page.screenshot({ path: `${OUTPUT_DIR}/${p.name}-interaction.png` });
        console.log(`  ✓ ${p.name}-interaction.png (step 4)`);
      }

      if (p.name === 'infographic-competitors') {
        await page.setViewport({ width: 1440, height: 900 });
        await delay(500);
        // Click a filter
        const filterBtn = await page.$('.filter-btn[data-filter="facility"]');
        if (filterBtn) {
          await filterBtn.click();
          await delay(500);
        }
        await page.screenshot({ path: `${OUTPUT_DIR}/${p.name}-interaction.png` });
        console.log(`  ✓ ${p.name}-interaction.png (facility filter)`);
      }

      if (p.name === 'infographic-calculator') {
        await page.setViewport({ width: 1440, height: 900 });
        await delay(500);
        // Change care level
        const select = await page.$('#care-level');
        if (select) {
          await select.select('5');
          await delay(500);
        }
        await page.screenshot({ path: `${OUTPUT_DIR}/${p.name}-interaction.png` });
        console.log(`  ✓ ${p.name}-interaction.png (care level 5)`);
      }

    } catch (err) {
      console.error(`  Error: ${err.message}`);
    }
  }

  // Quick link check on one page
  console.log('\n\nChecking internal links on system page...');
  await page.goto(`${BASE_URL}/infographics/01-how-the-system-works/`, { waitUntil: 'networkidle0' });
  const linkResults = await checkLinks(page);
  for (const r of linkResults) {
    console.log(`  ${r.status === 200 ? '✓' : '✗'} ${r.status} ${r.url.replace(BASE_URL, '')}`);
  }

  await browser.close();
  console.log('\n\nDone! Screenshots saved to', OUTPUT_DIR);
}

run().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
