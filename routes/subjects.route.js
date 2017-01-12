'use strict'

const express = require('express');
const router = express.Router({
  mergeParams: true
});
const knex = require('../db/knex');
// const bcrypt = require('bcrypt');

router.get('/', (req, res, next)=>{

  let topicId = req.params.topic_id

  knex('subjects').where('topic_id', topicId).then((subject)=>{
    res.json(subject)
  })
  
})

router.get('/top', (req, res, next)=>{

  let topicId = req.params.topic_id;

  knex('subjects').where('topic_id', topicId).orderBy('score', 'desc').limit(3).then((subject)=>{
    res.json(subject)
  })

})

router.get('/worst', (req, res, next)=>{

  let topicId = req.params.topic_id;

  knex('subjects').where('topic_id', topicId).orderBy('score', 'asc').limit(1).then((subject)=>{
    res.json(subject[0])
  })

})

router.post('/new', (req, res, next)=>{

  let topicId = req.params.topic_id;
  let userId = req.params.user_id;

  knex('subjects').insert({
    name: req.body.name,
    topic_id: topicId,
    user_id: userId
  }).returning('*').then((subject)=>{
    res.json(subject)
  })

})

module.exports = router;
