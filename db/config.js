require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DB,
  password: process.env.PW,
  port: process.env.DB_PORT
});


client.connect((err) => {
  if (err) console.error(`error connecting to database '${process.env.DB}': `, err);
  else console.log(`connected to database '${process.env.DB}'`);
});

module.exports = client;
