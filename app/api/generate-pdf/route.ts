import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    let browser;

    if (process.env.NODE_ENV === "production") {
      // Production on Vercel: load @sparticuz/chromium tarpack release
      const chromium = await import("@sparticuz/chromium").then((m) => m.default);
      const puppeteer = await import("puppeteer-core").then((m) => m.default);

      // Disable graphics mode safely without TypeScript errors
      if (typeof (chromium as any).setGraphicsMode === "function") {
        (chromium as any).setGraphicsMode(false);
      }

      // Download/extract Chromium binary from official release tarpack
      const executablePath = await chromium.executablePath(
        "https://github.com/Sparticuz/chromium/releases/download/v131.0.1/chromium-v131.0.1-pack.tar"
      );

      browser = await puppeteer.launch({
        args: chromium.args,
        executablePath,
        headless: true,
      });
    } else {
      // Local development fallback
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

    // Set your HTML or navigation
    await page.setContent("<h1>Obbie Concepts Invoice</h1>");

    const pdfUint8Array = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();

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
      { error: "Failed to generate PDF", details: error?.message || String(error) },
      { status: 500 }
    );
  }
}

export const maxDuration = 60;