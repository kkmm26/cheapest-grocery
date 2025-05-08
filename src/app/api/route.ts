import chromium from "@sparticuz/chromium-min";
import puppeteer from "puppeteer-core";

export async function GET(request: Request) {
  const isLocal = !!process.env.CHROME_EXECUTABLE_PATH;

  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath:
      process.env.CHROME_EXECUTABLE_PATH || (await chromium.executablePath("s3://cheapest-grocery-chromium/chromium-v133.0.0-pack.tar")),
    headless: chromium.headless,
  });

  const page = await browser.newPage();
  await page.goto("https://example.com");
  const pageTitle = await page.title();
  await browser.close();
  return Response.json({ pageTitle });
}
