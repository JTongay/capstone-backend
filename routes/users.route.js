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

router.post('/signup', (req, res, next)=>{

  let emailReq = req.body.email;
  let usernameReq = req.body.username;

  knex('users').where('email', emailReq).first().then((user)=>{
    if(!user){
      let hashed = bcrypt.hashSync(req.body.password_digest, 12);
      knex('users').insert({
        username: usernameReq,
        password_digest: hashed,
        email: emailReq
      }).then(()=>{
        res.json({
          status: 'You Did It!'
        })
      })

    } else {
      res.json({
        status: 'Email Taken'
      })
    }

  })


})


module.exports = router;
