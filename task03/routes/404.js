const express = require('express')

const router = express.Router()

router.use((req, res, next) => {
  console.log('middleware /404')
  res.status(404).send('<h1>Page not found</h1>')
})

module.exports = router