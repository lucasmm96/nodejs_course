const express = require('express')

const router = express.Router()

router.use('/', (req, res, next) => {
  console.log('middleware /');
  res.send('<h1>this is home</h1>')
})

module.exports = router