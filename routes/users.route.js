'use strict'

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const bcrypt = require('bcrypt');


router.get('/users', (req, res, next)=>{
  res.json({
    name: 'sup',
    booyah: 'booyah'
  })
})


module.exports = router;
