'use strict'

// Express
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const Twitter = require('twitter');

//db
// const knex = require('./db/knex');
const environment = process.env.NODE_ENV || 'development';
const config = require('./knexfile.js')[environment];
const knex = require('knex')(config);
require('dotenv').config();

// Middlewares
const bodyParser = require('body-parser');

// Routes
const users = require('./routes/users.route')
const genres = require('./routes/genres.route')

// Use Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Use Routes

app.use('/api/users', users);
app.use('/api/genres', genres);

var client = new Twitter({
  consumer_key: process.env.TWITTER_KEY,
  consumer_secret: process.env.TWITTER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_SECRET
})

var params = {screen_name: 'PowerRankingApp'}

app.get('/twitter', (req, res, next)=>{
  client.get('statuses/mentions_timeline', params, (err, tweets, response)=>{
    if(!err){
      res.json(tweets)
    }
    res.json(err)
  })
})

app.listen(port, function () {
  console.log('hello from', port);
});

module.exports = app;
