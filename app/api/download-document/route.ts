// app/api/download-document/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const docNumber = searchParams.get('no');
    const docType = searchParams.get('type');

    if (!docNumber) {
      return NextResponse.json({ error: "Document number is required" }, { status: 400 });
    }

    let docFolder = "invoices";
    const typeLower = (docType || "").toLowerCase();
    if (typeLower === "receipt") docFolder = "receipts";
    if (typeLower === "quotation") docFolder = "quotations";

    const filename = `${docNumber}_Obbie_Concepts.pdf`;
    const storagePath = `${docFolder}/${filename}`;

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ error: "Supabase configuration missing" }, { status: 500 });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data, error } = await supabase.storage
      .from("ocw-bucket")
      .download(storagePath);

    if (error || !data) {
      return NextResponse.json({ error: "Document file not found in storage" }, { status: 404 });
    }

    const arrayBuffer = await data.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    });
  } catch (error: any) {
    console.error("Download Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}