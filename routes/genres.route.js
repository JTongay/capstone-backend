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


router.get('/:id', (req, res, next)=>{

  const genreId = req.params.id;

  knex('genres').where('id', genreId).first().then((genre)=>{
    res.json(genre)
  })

})



module.exports = router;
