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

module.exports = router;
