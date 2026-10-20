import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // 1. Receive the HTML and filename sent from your frontend handleDownloadPdf
    const body = await req.json();
    const { html, filename } = body;

    let browser;

    if (process.env.NODE_ENV === "production") {
      const chromium = await import("@sparticuz/chromium").then((m) => m.default);
      const puppeteer = await import("puppeteer-core").then((m) => m.default);

      if (typeof (chromium as any).setGraphicsMode === "function") {
        (chromium as any).setGraphicsMode(false);
      }

      const executablePath = await chromium.executablePath(
        "https://github.com/Sparticuz/chromium/releases/download/v131.0.1/chromium-v131.0.1-pack.tar"
      );

      browser = await puppeteer.launch({
        args: chromium.args,
        executablePath,
        headless: true,
      });
    } else {
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

    // 2. Set the exact HTML received from your frontend component
    // We use waitUntil: "load" and add a short network idle timeout so Tailwind CDN finishes loading styles
    await page.setContent(html || "<h1>Invoice</h1>", { waitUntil: "load" });
    
    // Give Tailwind CDN a brief moment to evaluate classes if needed
    await new Promise((r) => setTimeout(r, 1000));

    const pdfUint8Array = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();

    const pdfBuffer = Buffer.from(pdfUint8Array);
    const safeFilename = filename || "Document_Obbie_Concepts";

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${safeFilename}.pdf"`,
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