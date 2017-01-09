'use strict'

const expect = require( 'chai' ).expect;
const app = require( '../server' );
const supertest = require( 'supertest' );
const request = supertest.agent( app )
const knex = require( '../db/knex' );
const session = require( 'supertest-session' );

// describe('Genres Tests', function () {
//  it('should pass the test', function () {
//    expect(true).to.equal(true);
//  })
// })

describe.only( 'Genres Tests', function () {
    describe( 'GET routes', function () {

        it( 'should get all of the genres', function ( done ) {
            request.get( '/api/genres/' )
                .end( ( err, res ) => {
                    if ( err ) {
                        done( err )
                    }
                    expect( res.body ).to.exist;
                    res.body.forEach( ( genre ) => {
                        expect( genre ).to.have.property( 'name' )
                        expect( genre ).to.have.property( 'user_id' )
                    } )
                    done()
                } )
        } )
        it( 'should get one of the genres', function ( done ) {
            request.get( '/api/genres/1' )
                .end( ( err, res ) => {
                    if ( err ) {
                        done( err )
                    }
                    expect( res.body ).to.exist;
                    expect( res.body.name ).to.equal( 'Movies' )
                    done()
                } )
        } )
    } )
    describe('POST routes', function () {
      afterEach((done)=>{
        knex('genres').where('name', 'booyah').first().del().then(()=>{
          return done();
        })
      })
     it('should create a new Genre', function (done) {
       request.post('/api/genres/new')
              .send({
                name: 'booyah',
                user_id: 6
              })
              .end((err, res)=>{
                if(err){
                  return done(err);
                }
                console.log(res.body);
                expect(res.body).to.exist;
                expect(res.body.name).to.equal('booyah')
                return done();
              })
     })
    })

} )
