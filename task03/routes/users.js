const express = require('express')

const router = express.Router()

router.use('/users', (req, res, next) => {
  console.log('middleware /users')
  res.send('<h1>this is users</h1>')
})

module.exports = router