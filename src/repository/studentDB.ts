// ici se trouve notre recuperation de donnees dans notre base de donnees

import { Pool } from 'pg';

export const pool = new Pool({
  user: process.env.DB_USER || 'hei',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'react',
  password: process.env.DB_PASSWORD || 'Animal',
  port: Number(process.env.DB_PORT) || 5432,
});