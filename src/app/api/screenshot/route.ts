// app/api/screenshot/route.ts
import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs/promises';

export async function GET(request: NextRequest) {
    const url = request.nextUrl.searchParams.get('url');
    const delayParam = request.nextUrl.searchParams.get('delay')
    const delayDuration = Number(delayParam ? delayParam : 0)

    if (!url) {
        return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 });
    }

    const filename = `${Buffer.from(url).toString('base64')}.png`;
    const filepath = path.join(process.cwd(), 'public', 'screenshots', filename);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1200 });
    await page.goto(url, { waitUntil: 'networkidle0' });
    
    // Add a delay before taking the screenshot - defaults to 0
    await delay(delayDuration)

    await page.screenshot({ path: filepath });
    await browser.close();

    const fileBuffer = await fs.readFile(filepath);
    return new NextResponse(fileBuffer, {
        headers: { 'Content-Type': 'image/png' },
    });
}

function delay(time: number) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }