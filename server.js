'use strict'

// Express
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//db
// const knex = require('./db/knex');
const environment = process.env.NODE_ENV || 'development';
const config = require('./knexfile.js')[environment];
const knex = require('knex')(config);

// Middlewares
const bodyParser = require('body-parser');

// Routes

// Use Middlewares
// app.set('view engine', 'ejs');
// app.use(express.static('public'));
// app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use Routes

app.listen(port, function () {
  console.log('hello from', port);
});

module.exports = app;
