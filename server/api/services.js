const router = require('express').Router()
const {Service} = require('../db/models')
module.exports = router

// /api/services
router.get('/', (req, res, next) => {
  Service.findAll()
    .then(services => res.json(services))
    .catch(next)
})

// /api/services
router.post('/', (req, res, next) =>{
  Service.create(req.body)
    .then(service => res.status(201).json(service))
    .catch(next)
})

// /api/services/:userId
router.get('/:userId', (req, res, next) => {
  Service.findAll({
    where: {
      userId: req.params.userId
    }
  })
    .then(services => res.json(services))
    .catch(next)
})
