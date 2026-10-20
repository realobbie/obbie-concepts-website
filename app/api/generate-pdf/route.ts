import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    let browser;

    if (process.env.NODE_ENV === "production") {
      // Production: @sparticuz/chromium + puppeteer-core for Vercel
      const chromium = await import("@sparticuz/chromium").then((m) => m.default);
      const puppeteer = await import("puppeteer-core").then((m) => m.default);

      browser = await puppeteer.launch({
        args: chromium.args,
        executablePath: await chromium.executablePath(),
        headless: true,
      });
    } else {
      // Local Development: Fall back to local Chrome or Edge executable
      const puppeteer = await import("puppeteer-core").then((m) => m.default);

      browser = await puppeteer.launch({
        headless: true,
        executablePath:
          process.platform === "win32"
            ? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
            : "/usr/bin/google-chrome",
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      });
    }

    const page = await browser.newPage();

    // Insert your document HTML / page rendering logic here
    await page.setContent("<h1>Obbie Concepts Invoice</h1>");

    const pdfUint8Array = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();

    // Convert Uint8Array to Node Buffer so NextResponse accepts it
    const pdfBuffer = Buffer.from(pdfUint8Array);

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="document.pdf"',
      },
    });
  } catch (error: any) {
    console.error("PDF Generation Error:", error);
    return NextResponse.json(
      { error: "Failed to generate PDF", details: error.message },
      { status: 500 }
    );
  }
}

export const maxDuration = 60;