import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";
import path from "path";
import fs from "fs/promises";

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");
  const delayParam = request.nextUrl.searchParams.get("delay");
  const delayDuration = Number(delayParam ?? 0);

  if (!url) {
    return NextResponse.json(
      { error: "URL parameter is required" },
      { status: 400 }
    );
  }

  const filename = `${Buffer.from(url).toString("base64url")}.png`;
  const dir = path.join(process.cwd(), "public", "screenshots");
  const filepath = path.join(dir, filename);
  await fs.mkdir(dir, { recursive: true });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1200 });
  await page.goto(url, { waitUntil: "networkidle0" });

  // optional settle time for entrance animations
  await new Promise((resolve) => setTimeout(resolve, delayDuration));

  await page.screenshot({ path: filepath as `${string}.png` });
  await browser.close();

  const fileBuffer = await fs.readFile(filepath);
  return new NextResponse(new Uint8Array(fileBuffer), {
    headers: { "Content-Type": "image/png" },
  });
}
