const puppeteer = require("puppeteer");

async function getPic() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://google.com");
  await page.setViewport({ width: 1800, height: 900 });
  await page.locator("textarea").fill("qa engineering");
  await page.click("input[value='Поиск в Google']");
  await page.waitForNavigation();
  await page.screenshot({ path: "google.png" });

  await browser.close();
}

getPic();
