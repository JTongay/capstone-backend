'use strict'

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

  var errors = [];

  if(!usernameReq || !usernameReq.trim()) errors.push("Username can't be blank");
  if(!emailReq || !emailReq.trim()) errors.push("Email can't be blank");
  if(!req.body.password_digest || !req.body.password_digest.trim()) errors.push("Password can't be blank");

  if(errors.length){
    res.status(422).json({
      errors: errors
    })
  } else {
    knex('users').where('email', emailReq).first().then((result)=>{
      console.log(result);
      if(!result){
        let hashed = bcrypt.hashSync(req.body.password_digest, 12);
        knex('users').insert({
          username: usernameReq,
          email: emailReq,
          password_digest: hashed
        })
        .returning("*")
        .then((users)=>{
          const user = users[0];
          const token = jwt.sign({id: user.id}, process.env.JWT_SECRET);
          res.json({
            id: user.id,
            username: user.username,
            token: token
          })
        })
      } else {
        res.json({
          error: "Try again"
        })
      }
    })
  }

})


module.exports = router;
