// app/api/db-check/route.ts
import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';

export async function GET() {
  try {
    // Check connection & active database name
    const dbInfo = await pool.query('SELECT current_database(), current_user, version();');
    
    // Check table count
    const tableCheck = await pool.query(`
      SELECT count(*) FROM information_schema.tables 
      WHERE table_schema = 'public' AND table_name = 'documents';
    `);

    const tableExists = parseInt(tableCheck.rows[0].count, 10) > 0;

    let docCount = 0;
    let sampleDocs = [];

    if (tableExists) {
      const docsResult = await pool.query('SELECT * FROM documents LIMIT 5;');
      docCount = docsResult.rowCount || 0;
      sampleDocs = docsResult.rows;
    }

    return NextResponse.json({
      status: 'Connected successfully!',
      database: dbInfo.rows[0].current_database,
      user: dbInfo.rows[0].current_user,
      documentsTableExists: tableExists,
      totalDocuments: docCount,
      sampleRecords: sampleDocs,
    });
  } catch (error: any) {
    return NextResponse.json(
      { 
        status: 'Database Connection Failed', 
        error: error.message || error 
      }, 
      { status: 500 }
    );
  }
}