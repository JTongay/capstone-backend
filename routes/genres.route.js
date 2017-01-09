'use strict'

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get('/', (req, res, next)=>{
  knex('genres').then((genre)=>{
    res.json(genre);
  })
})

// router.post('/new', (req, res, next)=>{
//
//   console.log(req.body);
//   // knex('genres').insert()
// })

router.get('/:id', (req, res, next)=>{

  const genreId = req.params.id;

  knex('genres').where('id', genreId).first().then((genre)=>{
    res.json(genre)
  })

})



module.exports = router;
