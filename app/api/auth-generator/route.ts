// app/api/auth-generator/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const { password } = await req.json();
    const correctPassword = process.env.GENERATOR_PASSWORD || "Akira1001#Ke."; // Fallback safeguard

    if (password === correctPassword) {
      // Await cookies() in newer Next.js versions and set the cookie correctly
      const cookieStore = await cookies();
      cookieStore.set("oc_generator_auth", "authenticated", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: "/",
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
  } catch (error) {
    console.error("Auth error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}