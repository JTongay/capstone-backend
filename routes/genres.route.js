'use strict'

const express = require('express');
const router = express.Router({
  mergeParams: true
});
const knex = require('../db/knex');
// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Twitter = require('twitter');


router.get('/', (req, res, next)=>{

  knex('genres').then((genre)=>{
    res.json(genre);
  })
})

router.post('/new', (req, res, next)=>{

  let userId = req.params.user_id;

  knex('genres').insert({
    name: req.body.name,
    user_id: userId
  }).returning('*').then((genre)=>{
    res.json(genre)
  })

})

router.patch('/:id', (req, res, next)=>{

  let genreId = req.params.id;

  knex('genres').where('id', genreId).first().update({
    name: req.body.name,
  }).returning('*').then((genre)=>{
    res.json(genre)
  })

})

router.delete('/:id', (req, res, next)=>{

  let genreId = req.params.id;

  knex('genres').where('id', genreId).first().del().then((genre)=>{
    res.json(genre);
  })

})

var client = new Twitter({
  consumer_key: process.env.TWITTER_KEY,
  consumer_secret: process.env.TWITTER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_SECRET
})

var params = {screen_name: 'PowerRankingApp'}

function getTwitter(req, res, next) {
  client.get('statuses/mentions_timeline', params, (err, tweets, response)=>{
    if(!err){
      res.json(tweets)
    }
  })
}

router.get('/twitter', getTwitter,(req, res, next)=>{
  console.log("booyah");
  next()
})

router.get('/:id', (req, res, next)=>{

  const genreId = req.params.id;

  knex('genres').where('id', genreId).first().then((genre)=>{
    res.json(genre)
  })

})



module.exports = router;
