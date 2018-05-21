const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Service = db.model('service')

describe('Service routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/services', () => {
      const xtype = 'mowing';
      const xdate = '2018-04-23T12:45:09.506Z';
      const xlocation = '123 fake st'
      beforeEach(() => {
        return Service.create({
          type: xtype,
          date: xdate,
          location: xlocation
        })
      })

      it('GET /api/services', () => {
        return request(app)
          .get('/api/services')
          .expect(200)
          .then(res => {
            expect(res.body).to.be.an('array')
            expect(res.body[0].type).to.be.equal(xtype)
            expect(res.body[0].date).to.be.equal(xdate)
            expect(res.body[0].location).to.be.equal(xlocation)
          })
      })

      it('POST /api/services', () => {
        return request(app)
          .post('/api/services')
          .send({
            type: xtype,
            startTime: xstartTime,
            endTime: xendTime,
            location: xlocation
          })
          .then(res => {
            expect(res.body.type).to.be.equal(xtype)
            expect(res.body.date).to.be.equal(xdate)
            expect(res.body.location).to.be.equal(xlocation)
          })
      })
  })
})
