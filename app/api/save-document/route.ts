// app/api/save-document/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('Incoming save payload:', body); // Check your terminal for this

    const { doc_number, doc_type, client_name, grand_total, currency, issue_date, status } = body;

    const query = `
      INSERT INTO public.documents (doc_number, doc_type, client_name, grand_total, currency, issue_date, status)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      ON CONFLICT (doc_number) 
      DO UPDATE SET 
        grand_total = EXCLUDED.grand_total,
        client_name = EXCLUDED.client_name,
        issue_date = EXCLUDED.issue_date
      RETURNING *;
    `;

    const values = [
      doc_number,
      doc_type,
      client_name,
      grand_total,
      currency || 'KES',
      issue_date || new Date().toISOString().split('T')[0],
      status || 'ISSUED',
    ];

    const result = await pool.query(query, values);
    console.log('Successfully saved to Supabase:', result.rows[0]);

    return NextResponse.json({ success: true, document: result.rows[0] });
  } catch (err: any) {
    // THIS WILL PRINT THE EXACT DATABASE ERROR IN YOUR TERMINAL
    console.error('DETAILED DATABASE SAVE ERROR:', err.message, err.stack);
    
    return NextResponse.json(
      { success: false, error: err.message || 'Database save failed' },
      { status: 500 }
    );
  }
}