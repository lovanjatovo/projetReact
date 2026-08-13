// ici se trouve notre recuperation de donnees dans notre base de donnees

const { Pool } = require('pg');
const pool = new Pool({
  user: 'hei',
  host: 'localhost',
  database: 'personne',
  password: 'Animal',
  port: 5432,
});

module.exports = pool;
