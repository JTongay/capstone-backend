'use strict'

const expect = require( 'chai' ).expect;
const app = require( '../server' );
const request = require( 'supertest' )( app );
const knex = require('../db/knex');

describe('The Test', function () {
 it('should pass the damn test', function () {

   expect(true).to.equal(true);

 })
})

describe('Users', function () {
 it('should show all of the users', function (done) {
   request.get("/api/users")
          .expect(200)
          .expect('Content-Type', /json/)
          .end((err,res)=>{
            if(err){
              done(err)
            }
            res.body.forEach((result)=>{
              expect(result).to.have.property('username');
              expect(result).to.have.property('email');
            })
            expect(res.body).to.exist;
            done();
          })
 })
 it('should show all of the users', function (done) {
   request.get("/api/users/1")
          .expect(200)
          .expect('Content-Type', /json/)
          .end((err,res)=>{
            if(err){
              done(err)
            }
            expect(res.body).to.exist;
            expect(res.body.username).to.equal('user1')
            expect(res.body.email).to.equal('user1@gmail.com')
            done();
          })
 })
})
