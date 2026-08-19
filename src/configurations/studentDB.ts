import { Pool } from 'pg';
import dotenv from 'dotenv';
import { log } from 'console';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on('error' , (err)=>{
  console.error('error inside the client pool ' , err);
});

export default pool;