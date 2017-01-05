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
