'use strict'

const express = require('express');
const router = express.Router({
  mergeParams: true
});
const knex = require('../db/knex');
// const bcrypt = require('bcrypt');

router.get('/', (req, res, next)=>{

  let genreId = req.params.genre_id;

  knex('topics').where('genre_id', genreId).then((topics)=>{
    res.json(topics)
  })

})

router.get('/:id', (req, res, next)=>{

  let topicId = req.params.id;

  knex('topics').where('id', topicId).first().then((topic)=>{
    res.json(topic)
  })

})

router.post('/new', (req, res, next)=>{

  let genreId = req.params.genre_id;

  knex('topics').insert({
    title: req.body.title.toUpperCase(),
    genre_id: genreId
  }).then((topic)=>{
    res.json(topic)
  })



})

module.exports = router;
