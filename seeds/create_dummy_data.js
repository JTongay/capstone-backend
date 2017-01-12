'use strict'

const dummy_data = require('../db/dummy.data');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert(dummy_data.users)
      ]);
    })
    .then(function (){
      return knex('genres').del()
        .then(function () {
          return Promise.all([
            // Inserts seed entries
            knex('genres').insert(dummy_data.genres)
          ]);
        })
    })
    .then(function (){
      return knex('topics').del()
        .then(function () {
          return Promise.all([
            // Inserts seed entries
            knex('topics').insert(dummy_data.topics)
          ]);
        })
    })
};
