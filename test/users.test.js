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
  afterEach((done)=>{
    knex('users').where('username', 'test1').first().del().then(()=>{
      done();
    })
  })
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
 it('should show one of the users', function (done) {
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
 it('should register a new user if that email didnt already exist', function (done) {
   request.post("/api/users/signup")
          .expect(200)
          .send({
            id: 8,
            email: 'testing1@gmail.com',
            password_digest: 'password',
            username: 'test1'
          })
          .end((err,res)=>{
            if(err){
              done(err)
            }
            expect(res.body).to.exist;
            expect(res.body.username).to.equal('test1')
            done();
          })
 })
 it('should not register a new user if that email already exists', function (done) {
   request.post("/api/users/signup")
          // .expect(200)
          .send({
            id: 809,
            email: 'user1@gmail.com',
            password_digest: 'password',
            username: 'user1'
          })
          .end((err,res)=>{
            if(err){
              done()
            }
            console.log(res.body);
            expect(res.body).to.exist;
            expect(res.body.error).to.equal('Try again')
            done();
          })
 })
 it('should send an error if one field is blank', function (done) {
   request.post("/api/users/signup")
          // .expect(200)
          .send({
            id: 9,
            email: '',
            password_digest: 'password',
            username: 'booyah'
          })
          .end((err,res)=>{
            if(err){
              done()
            }
            expect(res.body).to.exist;
            expect(res.body.errors[0]).to.equal("Email can't be blank")
            done();
          })
 })
 it('should send an error if multiple fields are blank', function (done) {
   request.post("/api/users/signup")
          // .expect(200)
          .send({
            id: 9,
            email: '',
            password_digest: 'password',
            username: ''
          })
          .end((err,res)=>{
            if(err){
              done()
            }
            expect(res.body).to.exist;
            expect(res.body.errors[0]).to.equal("Username can't be blank")
            expect(res.body.errors[1]).to.equal("Email can't be blank")
            done();
          })
 })
})
