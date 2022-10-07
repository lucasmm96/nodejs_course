const path = require('path')

const express = require('express')

const router = express.Router()

router.use('/users', (req, res, next) => {
  console.log('route /users')
  res.sendFile(path.join(__dirname, '..', 'views', 'users.html'))
})

module.exports = router