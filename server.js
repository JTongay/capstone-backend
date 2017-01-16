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
const Twitter = require('twitter');
const sentiment = require('sentiment');
require('dotenv').config();

// Middlewares
const bodyParser = require('body-parser');

// Routes
const users = require('./routes/users.route')
const genres = require('./routes/genres.route')
const topics = require('./routes/topics.route')
const subjects = require('./routes/subjects.route')

// Use Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// app.use(getTwitter)

var client = new Twitter({
  consumer_key: process.env.TWITTER_KEY,
  consumer_secret: process.env.TWITTER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_SECRET
})


function testStream(){

  var stream = client.stream('statuses/filter', {track: 'PowerRankingApp'});

  stream.on('data', function(tweets){
    var tweetId = tweets.id
    var newTweetText = tweets.text;
    var newTweetTopic = tweets.entities.hashtags[0].text
    var newTweetSubject = tweets.entities.hashtags[1].text
    var newTweetTopicFormat = newTweetTopic.split('_').join(' ').toUpperCase()
    var newTweetSubjectFormat = newTweetSubject.split('_').join(' ').toUpperCase()
    var analysisScore = sentiment(newTweetText)

    knex('subjects').where('name', newTweetSubjectFormat).first().then((result)=>{

      if(result){
        knex('subjects').where('name', newTweetSubjectFormat).increment('score', analysisScore.score).then((score)=>{
            console.log(score)
            // next()
        })
      }
    })
  })

  stream.on('error', function(error){
    console.log(error);
  })

}

testStream()

// Use Routes

app.use('/api/users', users);
app.use('/api/users/:user_id/genres', genres);
app.use('/api/users/:user_id/genres/:genre_id/topics', topics);
app.use('/api/users/:user_id/genres/:genre_id/topics/:topic_id/subjects', subjects);

app.listen(port, function () {
  console.log('hello from', port);
});

module.exports = app;
