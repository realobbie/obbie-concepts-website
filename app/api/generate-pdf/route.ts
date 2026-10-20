// app/api/generate-pdf/route.ts
import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';

export async function POST(req: NextRequest) {
  try {
    const { html, filename } = await req.json();

    const isLocal = process.env.NODE_ENV === 'development';
    
    const browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: isLocal
        ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe' // Local Windows Chrome path
        : await chromium.executablePath(),
      headless: true,
    });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'load' });

    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '10mm', right: '10mm', bottom: '10mm', left: '10mm' }
    });

    await browser.close();

    return new NextResponse(pdfBuffer as any, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${filename}.pdf"`,
      },
    });
  } catch (error: any) {
    console.error('Puppeteer PDF Generation Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to generate PDF' }, { status: 500 });
  }
}