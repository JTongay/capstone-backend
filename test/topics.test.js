'use strict'

const expect = require( 'chai' ).expect;
const app = require( '../server' );
const supertest = require( 'supertest' );
const request = supertest.agent( app )
const knex = require( '../db/knex' );

describe('TOPICS test', function () {

  describe('Initial Test', function () {
   it('should pass the test', function (done) {
     expect(true).to.equal(true);
     done()
   })
  })

  describe('GET routes', function () {
   it('Should show all of the topics for a specific genre', function (done) {
     request.get('/api/users/1/genres/1/topics')
            .end((err, res)=>{
              if(err){
                return done(err)
              }
              expect(res.body).to.exist;
              res.body.forEach((topic)=>{
                expect(topic).to.have.property('title')
              })
              return done();
            })
   })
  })





})
