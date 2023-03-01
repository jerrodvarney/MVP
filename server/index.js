require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const router = require('./routes');
const path = require('path');
const db = require('../db/config.js');

const { PORT } = process.env;
const app = express();

// MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json());

// HTTP ROUTER
app.use('', router)

// SERVE HOME PAGE
app.use(express.static(path.join(__dirname, '../client/dist')));

// STARTS SERVER
app.listen(PORT, function(err) {
  if (err) console.error('error starting server: ', err);
  else console.log(`server listening at http://localhost:${PORT}`);
});
