// app/api/verify-document/route.ts
import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const docNo = searchParams.get('no');

  if (!docNo) {
    return NextResponse.json({ error: 'Document number required' }, { status: 400 });
  }

  try {
    const query = `
      SELECT doc_number, doc_type, client_name, grand_total, currency, issue_date, status
      FROM documents
      WHERE doc_number = $1
      LIMIT 1;
    `;
    const result = await pool.query(query, [docNo]);

    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'Document not found' }, { status: 404 });
    }

    return NextResponse.json(result.rows[0]);
  } catch (err) {
    console.error('Database query error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}