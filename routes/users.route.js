'use strict'

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const bcrypt = require('bcrypt');


router.get('/', (req, res, next)=>{
  knex('users').then((user)=>{
    res.json(user);
  })
})

router.get('/:id', (req, res, next)=>{
  let userId = req.params.id;
  knex('users').where('id', userId).first().then((user)=>{
    res.json(user);
  })
})


module.exports = router;
