// app/api/generate-pdf/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { html, filename, documentType } = body;

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

    await page.setContent(html || "<h1>Document</h1>", { waitUntil: "load" });
    await new Promise((r) => setTimeout(r, 1000));

    const pdfUint8Array = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();

    const pdfBuffer = Buffer.from(pdfUint8Array);
    const safeFilename = filename || "Document_Obbie_Concepts";
    
    // Dynamic folder mapping based on document type
    let docFolder = "invoices";
    const typeLower = (documentType || "").toLowerCase();
    if (typeLower === "receipt") {
      docFolder = "receipts";
    } else if (typeLower === "quotation") {
      docFolder = "quotations";
    }

    const storagePath = `${docFolder}/${safeFilename}.pdf`;

    // 1. Save / Upload PDF copy to Supabase Storage Bucket
    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

      if (supabaseUrl && supabaseKey) {
        const supabase = createClient(supabaseUrl, supabaseKey);
        
        await supabase.storage.from("ocw-bucket").upload(storagePath, pdfBuffer, {
          contentType: "application/pdf",
          upsert: true,
        });
      }
    } catch (storageErr) {
      console.error("Supabase Storage Upload Warning:", storageErr);
      // Non-blocking: allows download to proceed even if cloud backup fails
    }

    // 2. Return PDF stream to client for immediate download
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