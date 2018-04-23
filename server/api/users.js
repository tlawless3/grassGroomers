const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

// api/users
router.get('/', (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email']
  })
    .then(users => res.json(users))
    .catch(next)
})

// api/users
router.post('/', (req, res, next) => {
  User.create(req.body)
    .then(user => res.status(201).json(
      {
        userId: user.id,
        email: user.email,
        name: user.fullName
      }
    ))
    .catch(next)
})
