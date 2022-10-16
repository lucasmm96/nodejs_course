const express = require('express')
const router = express.Router()
const home = require('./home')

router.get('/users', (req, res) => {
  res.status(200).render('users', { pageTitle: 'Users', users: home.users})
})

module.exports = router
