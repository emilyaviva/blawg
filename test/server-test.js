const fs = require('fs')
const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect

const Entry = require('../app/models/entry-model.js')
process.env.MONGO_USER = 'test'
process.env.MONGO_PASS = 'test'
process.env.PORT = 3003

chai.use(chaiHttp)

require('../server')

describe('api routes for /entries', () => {

  it('responds to a GET request', (done) => {
    chai.request('localhost:3003')
      .get('/entries')
      .end((err, res) => {
        expect(err).to.eql(null)
        expect(typeof res.body).to.eql('object')
        done()
      })
  })

})
