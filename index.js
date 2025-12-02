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

//const client = new Client({ user: 'che_db1_user', host: 'dpg-d4irugkhg0os73a5pr40-a.frankfurt-postgres.render.com', database: 'che_db1', password: 'GRjQXHma6GSH6ctJjXQOWGZGxRP6eWJb', port: '5432'});

client
  .connect()
  .then(() => {
    console.log('Connected to PostgreSQL database!');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });
