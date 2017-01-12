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

router.post('/vote', (req, res, next)=>{

  let topicId = req.params.topic_id;
  let userId = req.params.user_id;
  let reqFirst = req.body.first;
  let reqSecond = req.body.second;
  let reqThird = req.body.third;
  let reqGarbage = req.body.garbage;


  knex('user_voted').insert({
    user_id: userId,
    topic_id: topicId,
    first_subject_id: reqFirst,
    second_subject_id: reqSecond,
    third_subject_id: reqThird,
    garbage_subject_id: reqGarbage
  }).then((vote)=>[
    knex('subjects').where('id', reqFirst).first().increment('score', 3).then((first)=>{
      knex('subjects').where('id', reqSecond).first().increment('score', 2).then((second)=>{
        knex('subjects').where('id', reqThird).first().increment('score', 1).then((third)=>{
          knex('subjects').where('id', reqGarbage).first().decrement('score', 3).then((garbage)=>{
            res.json({
              status: 'holy shit'
            })
          })
        })
      })
    })
  ])

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
