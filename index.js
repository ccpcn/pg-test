import pg from 'pg';

var client = new pg.Client({
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  port: process.env.port,
  host: process.env.host,
  ssl: true,
});

//const { Client } = require('pg');

client
  .connect()
  .then(() => {
    console.log('Connected to PostgreSQL database!');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });
