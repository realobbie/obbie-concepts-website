// lib/db.ts
import { Pool } from 'pg';

// Global variable to prevent multiple connections in Next.js hot-reloading
declare global {
  var pgPool: Pool | undefined;
}

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is not defined.');
}

export const pool =
  globalThis.pgPool ||
  new Pool({
    connectionString,
    // Enable SSL when connecting to production databases that require it
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  });

if (process.env.NODE_ENV !== 'production') {
  globalThis.pgPool = pool;
}