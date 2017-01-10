'use strict'

const expect = require( 'chai' ).expect;
const app = require( '../server' );
const supertest = require( 'supertest' );
const request = supertest.agent( app )
const knex = require( '../db/knex' );

describe.only('Subjects', function () {

  describe('Initial test', function () {
   it('should pass the test', function (done) {
     expect(true).to.equal(true);
     done()
   })
  })

  describe('GET routes', function () {
   it('should get the top 3 scores in subjects for a topic', function (done) {
     request.get('/api/users/1/genres/1/topics/1/subjects/top')
            .end((err, res)=>{
              if(err){
                return done(err)
              }
              expect(res.body).to.exist;
              expect(res.body).to.have.length(3)
              res.body.forEach((subject)=>{
                expect(subject).to.have.property('score')
              })
              return done();
            })
   })
   it('should get the bottom score in subjects for a topic', function (done) {
     request.get('/api/users/1/genres/1/topics/1/subjects/worst')
            .end((err, res)=>{
              if(err){
                return done(err)
              }
              expect(res.body).to.exist;
              expect(res.body.score).to.equal('-2.50')
              return done();
            })
   })
  })

  xdescribe('POST requests', function () {
   it('should post a new subject to a topic', function (done) {
     request.post('/api/users/1/genres/1/topics/1/subjects/new')
            .send({
              name: 'booyah'
            })
            .end((err, res)=>{
              if(err){
                return done(err)
              }
              console.log(res.body);
              expect(res.body).to.exist;
              return done();
            })
   })
  })





})
